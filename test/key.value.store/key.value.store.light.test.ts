require("dotenv").config()
import * as chai from "chai"
import {HashName, IKeyValueStoreLight} from "../../lib/types/i.key.value.store"
import {PgClient} from "../../lib/modules/pg.client"
import {PgKeyValueStore, PgKVTable} from "../../lib/modules/key.value.store/pg/pg.key.value.store"
import {MemoryKeyValue} from "../../lib/modules/key.value.store/memory/memory.key.value"
import {randomString} from "../test.util"

const assert = chai.assert

let store: IKeyValueStoreLight
const pgClient = PgClient.getConnection(process.env.TEST_KV_STORE_PG_URL || "")

const pgTable: PgKVTable = PgKVTable.hash
const hash1 = HashName.test
const hash2: any = HashName.test + "2"

describe("KeyValueStore", () => {
  before(async () => await pgClear())
  after(async () => await pgClient.closeConnections())
  
  testPg(pgTable)

  describe("MemoryKeyValue light", () => {
    beforeEach(() => store = new MemoryKeyValue())
    tests()
  })
})

function testPg(table: PgKVTable): void {
  describe("PgKeyValueStore light, table: " + table, function() {
    this.timeout(15000)
    beforeEach(() => store = new PgKeyValueStore(pgClient, table))
    afterEach(async () => await pgClear())
    tests()
  })
}

function tests(): void {
  it("hSet and hGet", async () => {
    const key = "key1"
    await store.hSet(hash1, key, "val1")
    await store.hSet(hash2, key, "val1223")
    const res = await store.hGet(hash1, key)
    assert.equal(res, "val1")
  })
  it("hSet and hGet object value", async () => {
    const key = "test1"
    const val = {test: randomString(12), qwe: {ert: {rty: randomString(23)}}}
    await store.hSet(hash1, key, val)
    await store.hSet(hash2, key, {...val, asd: "sdfg"})
    const res = await store.hGet(hash1, key)
    assert.deepEqual(res, val)
  })
  it("hSet and hGet undefined value", async () => {
    const key = "test1"
    const val = {test: randomString(12), qwe: {ert: {rty: randomString(23)}}}
    await store.hSet(hash1, key, undefined)
    await store.hSet(hash2, key, {...val, asd: "sdfg"})
    const res = await store.hGet(hash1, key)
    assert.isUndefined(res)
  })
  it("hSet, hGet, hDel", async () => {
    const key = "key2"
    await store.hSet(hash1, key, "val1")
    await store.hSet(hash2, key, "val1234234")
    const res1 = await store.hGet(hash1, key)
    const res2 = await store.hGet(hash2, key)

    assert.equal(res1, "val1")
    assert.equal(res2, "val1234234")

    await store.hDel(hash1, key)
    const res3 = await store.hGet(hash1, key)
    const res4 = await store.hGet(hash2, key)
    assert.isNull(res3)
    assert.equal(res4, "val1234234")

    await store.hDel(hash1, randomString(12))
  })
  it("hKeys, check limit", async () => {
    const keys1 = new Array(30).fill(0).map(() => randomString(12))
    const keys2 = new Array(30).fill(0).map(() => randomString(12))

    await Promise.all(keys1.map(key => store.hSet(hash1, key, randomString(13))))
    await Promise.all(keys2.map(key => store.hSet(hash2, key, randomString(13))))

    const res = await store.hKeys(hash1, {limit: 1000})
    compareKeys(keys1, res)

    const res22 = await store.hKeys(hash2, {limit: 1000})
    compareKeys(keys2, res22)

    const res1 = await store.hKeys(hash1, {limit: 10})
    const res2 = await store.hKeys(hash1, {limit: 10, start: 10})
    const res3 = await store.hKeys(hash1, {limit: 10, start: 20})
    const res4 = await store.hKeys(hash1, {limit: 10, start: 30})
    compareKeys(keys1, [...res1, ...res2, ...res3, ...res4])
    assert.lengthOf(res4, 0)
  })
  it("hKeys, prefix", async () => {
    const prefix1 = randomString(4)
    const prefix2 = randomString(4)

    const keys1 = new Array(23).fill(0).map(() => prefix1 + randomString(12))
    const keys2 = new Array(34).fill(0).map(() => prefix2 + randomString(12))

    await Promise.all(keys1.map(key => store.hSet(hash1, key, randomString(13))))
    await Promise.all(keys2.map(key => store.hSet(hash1, key, randomString(13))))

    const res = await store.hKeys(hash1, {limit: 1000, prefix: prefix1})
    assert.lengthOf(res, 23)
    compareKeys(keys1, res)

    const res22 = await store.hKeys(hash1, {limit: 1000, prefix: prefix2})
    assert.lengthOf(res22, 34)
    compareKeys(keys2, res22)
  })
  it("size", async () => {
    const keys1 = new Array(30).fill(0).map(() => randomString(12))
    const keys2 = new Array(66).fill(0).map(() => randomString(12))

    await Promise.all(keys1.map(key => store.hSet(hash1, key, randomString(13))))
    await Promise.all(keys2.map(key => store.hSet(hash2, key, randomString(13))))

    const res = await store.hSize(hash1)
    assert.equal(res, 30)

    const res22 = await store.hSize(hash2)
    assert.equal(res22, 66)
  })
  it("size with prefix", async () => {
    const keys1 = new Array(13).fill(0).map(() => randomString(12))
    const keys1_1 = new Array(23).fill(0).map(() => "test1" + randomString(12))
    const keys2 = new Array(33).fill(0).map(() => randomString(12))
    const keys2_2 = new Array(43).fill(0).map(() => "test2" + randomString(12))

    await Promise.all(keys1.map(key => store.hSet(hash1, key, randomString(13))))
    await Promise.all(keys1_1.map(key => store.hSet(hash1, key, randomString(13))))
    await Promise.all(keys2.map(key => store.hSet(hash2, key, randomString(13))))
    await Promise.all(keys2_2.map(key => store.hSet(hash2, key, randomString(13))))

    const res1 = await store.hSize(hash1)
    const res1_1 = await store.hSize(hash1, {prefix: "test1"})
    assert.equal(res1, 36)
    assert.equal(res1_1, 23)

    const res2 = await store.hSize(hash2)
    const res2_1 = await store.hSize(hash2, {prefix: "test2"})
    assert.equal(res2, 76)
    assert.equal(res2_1, 43)
  })
}

async function pgClear(): Promise<void> {
  await clearTable(pgTable)
}

async function clearTable(table: PgKVTable): Promise<void> {
  const query = `DELETE FROM ${table} WHERE hash_name='${hash1}' OR hash_name='${hash2}'`
  await pgClient.query(query)
}

function compareKeys(expectedKeys: string[], actualKeys: string[]): void {
  assert.deepEqual(keysToObj(actualKeys), keysToObj(expectedKeys))
}

function keysToObj(keys: string[]): any {
  const res = {}
  keys.forEach(i => res[i] = i)
  return res
}