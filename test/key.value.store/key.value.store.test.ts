import * as chai from "chai"
import {PgKeyValueStore, PgKVTable} from "../../modules/key.value.store/pg/pg.key.value.store"
import {HashName, IKeyValueStore} from "../../types/i.key.value.store"
import {PgClient} from "../../modules/pg.client"
import {MemoryKeyValue} from "../../modules/key.value.store/memory/memory.key.value"
import {randomString} from "../test.util"
import dotenv from "dotenv"
dotenv.config()

const assert = chai.assert

let store: IKeyValueStore
const dbUrl = process.env.TEST_KV_STORE_PG_URL || ""
const pgClient = PgClient.getConnection(dbUrl)

const pgTable: PgKVTable = PgKVTable.hash
const hash1 = HashName.test
const hash2: any = HashName.test + "2"

describe("i.key.value.store", () => {
  before(async () => await pgClear())
  after(async () => await pgClient.closeConnections())
  
  testPg(pgTable)

  describe("MemoryKeyValue", () => {
    beforeEach(() => store = new MemoryKeyValue())
    tests()
  })
})

function testPg(table: PgKVTable): void {
  describe("PgKeyValueStore, table: " + table, function() {
    this.timeout(15000)
    beforeEach(() => store = PgKeyValueStore.getStore(dbUrl, table))
    afterEach(async () => await pgClear())
    tests()
  })
}

function tests(): void {
  it("createKeyValuePair", async () => {
    const key = "key1"
    const value = "value1"
    assert.deepEqual(store.createKeyValuePair(key, value), [key, value])
  })
  it("hGetAll, check limit", async () => {
    const dataSet = randomDataSet()
    const keys = Object.keys(dataSet)

    await Promise.all(keys.map(key => store.hSet(hash1, key, dataSet[key])))
    await Promise.all(keys.map(key => store.hSet(hash2, key, dataSet[key])))

    const res = await store.hGetAll(hash1, {limit: 1000})
    assert.deepEqual(dataSet, res)

    const res1 = await store.hGetAll(hash1, {limit: 10})
    const res2 = await store.hGetAll(hash1, {limit: 10, start: 10})
    const res3 = await store.hGetAll(hash1, {limit: 10, start: 20})
    const res4 = await store.hGetAll(hash1, {limit: 10, start: 30})
    assert.deepEqual(dataSet, {...res1, ...res2, ...res3, ...res4})
    assert.isEmpty(res4)
  })
  it("hGetAll, prefix", async () => {
    const prefix1 = randomString(4)
    const prefix2 = randomString(4)

    const dataSet1 = randomDataSet(23, prefix1)
    const dataSet2 = randomDataSet(34, prefix2)

    const keys1 = Object.keys(dataSet1)
    const keys2 = Object.keys(dataSet2)


    await Promise.all(keys1.map(key => store.hSet(hash1, key, dataSet1[key])))
    await Promise.all(keys2.map(key => store.hSet(hash1, key, dataSet2[key])))

    const res = await store.hGetAll(hash1, {limit: 1000, prefix: prefix1})
    assert.lengthOf(Object.values(res), 23)
    assert.deepEqual(dataSet1, res)

    const res22 = await store.hGetAll(hash1, {limit: 1000, prefix: prefix2})
    assert.lengthOf(Object.values(res22), 34)
    assert.deepEqual(dataSet2, res22)
  })
  it("hDelAll", async () => {
    const dataSet = randomDataSet()
    const keys = Object.keys(dataSet)

    await Promise.all(keys.map(key => store.hSet(hash1, key, dataSet[key])))
    await Promise.all(keys.map(key => store.hSet(hash2, key, dataSet[key])))

    const res = await store.hGetAll(hash1, {limit: 1000})
    assert.deepEqual(dataSet, res)

    await store.hDelAll(hash1, Object.keys(dataSet))

    const res1 = await store.hGetAll(hash1, {limit: 1000})
    const res2 = await store.hGetAll(hash2, {limit: 1000})

    assert.isEmpty(res1)
    assert.deepEqual(dataSet, res2)

    await store.hDelAll(hash2, [...Object.keys(dataSet), randomString(12)])

    const res3 = await store.hGetAll(hash1, {limit: 1000})
    const res4 = await store.hGetAll(hash2, {limit: 1000})

    assert.isEmpty(res3)
    assert.isEmpty(res4)
  })
  it("hSetAll", async () => {
    const dataSet1 = randomDataSet()
    const keys1 = Object.keys(dataSet1)

    const dataSet2 = randomDataSet()
    const keys2 = Object.keys(dataSet2)

    const pairs1 = keys1.map(key => store.createKeyValuePair(key, dataSet1[key]))
    const pairs2 = keys2.map(key => store.createKeyValuePair(key, dataSet2[key]))

    await store.hSetAll(hash1, pairs1)
    await store.hSetAll(hash2, pairs2)

    const res1 = await store.hGetAll(hash1, {limit: 1000})
    const res2 = await store.hGetAll(hash2, {limit: 1000})

    assert.deepEqual(dataSet1, res1)
    assert.deepEqual(dataSet2, res2)
  })
  it("hSetAll objects", async () => {
    const dataSet1 = randomObjDataSet()
    const keys1 = Object.keys(dataSet1)

    const dataSet2 = randomObjDataSet()
    const keys2 = Object.keys(dataSet2)

    const pairs1 = keys1.map(key => store.createKeyValuePair(key, dataSet1[key]))
    const pairs2 = keys2.map(key => store.createKeyValuePair(key, dataSet2[key]))

    await store.hSetAll(hash1, pairs1)
    await store.hSetAll(hash2, pairs2)

    const res1 = await store.hGetAll(hash1, {limit: 1000})
    const res2 = await store.hGetAll(hash2, {limit: 1000})

    assert.deepEqual(dataSet1, res1)
    assert.deepEqual(dataSet2, res2)
  })
}

async function pgClear(): Promise<void> {
  await clearTable(pgTable)
}

async function clearTable(table: PgKVTable): Promise<void> {
  const query = `DELETE FROM ${table} WHERE hash_name='${hash1}' OR hash_name='${hash2}'`
  await pgClient.query(query)
}

function randomDataSet(quantity = 30, prefix = ""): any {
  const res = {}
  new Array(quantity).fill(0).map(() => {
    res[prefix + randomString(12)] = randomString(12)
  })
 return res
}

function randomObjDataSet(quantity = 30, prefix = ""): any {
  const res = {}
  new Array(quantity).fill(0).map(() => {
    res[prefix + randomString(12)] = {test: {wqe: randomString(12)}, sdf: {fgh: randomString(15)}}
  })
  return res
}