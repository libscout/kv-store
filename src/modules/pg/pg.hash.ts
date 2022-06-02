import {PgClient} from "./pg.client";
import {AbstractHash} from "../abstract/abstract.hash";
import {IKeyOptions, IHash, ISizeOptions, KVPair} from "../../types/i.hash"
import {IPgClient} from "../../types/i.pg.client"


export class PgHash<
  HashName extends string,
  PgKVTable extends string
  > extends AbstractHash implements IHash<HashName> {
  private static readonly stores: any = {}
  
  static getStore<Hash extends string, PgKVTable extends  string>(dbUrl: string, table: PgKVTable): IHash<Hash> {
    const key = dbUrl + "|" + table
    return PgHash.stores[key] = PgHash.stores[key] || new PgHash(PgClient.getConnection(dbUrl), table)
  }

  constructor(private readonly client: IPgClient,
              private readonly tableName: PgKVTable) {super()}

  async hDelAll(hashName: HashName, keys: string[]) {
    const query = this.delQuery(hashName, keys)
    await this.execute(query)
  }

  async hDel(hashName: HashName, key: string): Promise<void> {
    const query = this.delQuery(hashName, [key])
    await this.execute(query)
  }

  private delQuery(hashName: HashName, keys: string[]): string {
    const query = `DELETE FROM ${this.tableName} WHERE hash_name=%L AND key IN (%L)`
    return this.client.format(query, hashName, keys)
  }

  async hGet(hashName: HashName, key: string): Promise<string | null> {
    const condition = this.getCondition(key)
    const query = this.selectQuery(hashName, condition)
    const result = await this.execute(query)
    return PgHash.formatAnswerRow(result.rows[0])
  }

  private getCondition(key: string): string {
    return this.client.format("key=%L", key)
  }

  async hGetAll(hashName: HashName, options: IKeyOptions): Promise<any> {
    if(options.limit === 0) return {}
    const query = this.assembleQueryToSelectAll(hashName, options)
    const answer = await this.execute(query)
    return PgHash.formatAnswer(answer.rows)
  }

  private assembleQueryToSelectAll(hashName: HashName, options: IKeyOptions): string {
    const condition = options?.prefix ? this.prefixCondition(options.prefix) : ""
    const query = condition ? this.selectQuery(hashName, condition) : this.selectQuery(hashName)
    return query + PgHash.limit(options)
  }

  private selectQuery(hashName: string, condition?: string): string {
    const query = this.client.format(`SELECT key, val FROM ${this.tableName} WHERE hash_name=%L`, hashName)
    return condition ? `${query} AND ${condition}` : query
  }

  private static formatAnswer(answerRows: any): any {
    const result = {}
    answerRows.forEach(i => result[i.key] = PgHash.formatAnswerRow(i))
    return result
  }

  private static formatAnswerRow(row: any): any {
    return row?.val ? row.val.d : null
  }

  async hSet(hashName: HashName, key: string, val: any): Promise<void> {
    const value = PgHash.createPair(val)
    const query = this.client.format(this.insertQuery, [[hashName, key, value]])
    await this.execute(query)
  }

  private get insertQuery(): string {
    return `insert into ${this.tableName} (hash_name, key, val) 
            values %L
            on conflict (hash_name, key) do update 
            set val=excluded.val`
  }

  async hKeys(hashName: HashName, options: IKeyOptions): Promise<string[]> {
    if(options.limit === 0) return []
    const query = this.assembleQueryToSelectKeys(hashName, options)
    const answer = await this.execute(query)
    return answer.rows.map(i => i.key)
  }

  private assembleQueryToSelectKeys(hashName: HashName, options: IKeyOptions): string {
    const condition = options?.prefix ? this.prefixCondition(options.prefix) : ""
    const query = condition ? this.keysSelectQuery(hashName, condition) : this.keysSelectQuery(hashName)
    return query + PgHash.limit(options)
  }

  private keysSelectQuery(hashName: HashName, condition?: string): string {
    const query = this.client.format(`SELECT key FROM ${this.tableName} WHERE hash_name=%L`, hashName)
    return condition ? `${query} AND ${condition}` : query
  }

  private prefixCondition(prefix: string): string {
    return this.client.format(`substring(key from '^${prefix}') IS NOT NULL`)
  }

  async hSetAll(hashName: HashName, keyValuePairs: KVPair[]): Promise<void>{
    if(!keyValuePairs.length) return;
    const values = this.formatPairs(hashName, keyValuePairs)
    const query = this.client.format(this.insertQuery, values)
    await this.execute(query)
  }

  private formatPairs(hashName: HashName, keyValuePairs: KVPair[]): [HashName, string, string][] {
    keyValuePairs = this.fetchUnique(keyValuePairs)
    keyValuePairs = keyValuePairs.map(i => PgHash.createValuePair(i))
    return keyValuePairs.map(pair => [hashName, ...pair])
  }

  private static createValuePair(pair: KVPair): [string, string] {
    return [pair[0], PgHash.createPair(pair[1])]
  }

  private static createPair(d: any): string {
    return JSON.stringify({d})
  }

  private fetchUnique(keyValuePairs: KVPair[]): KVPair[] {
    const kv = {}
    keyValuePairs.forEach(i => kv[i[0]] = i[1])
    return Object.keys(kv).map(i => this.createKeyValuePair(i, kv[i]))
  }

  private async execute(query: string): Promise<any> {
    return await this.client.query(query)
  }

  private static limit(opt: IKeyOptions): string {
    return ` LIMIT ${opt?.limit ? +opt?.limit || 0 : 0} OFFSET ${opt?.start ? +opt?.start || 0 : 0}`
  }

  async hSize(hashName: HashName, options: ISizeOptions): Promise<number> {
    const condition = options?.prefix ? this.prefixCondition(options.prefix) : ""
    const query = this.sizeSelectQuery(hashName, condition)
    const answer = await this.execute(query)
    return +answer.rows[0].size
  }

  private sizeSelectQuery(hashName: HashName, condition: string): string {
    condition = condition ? "AND " + condition : ""
    return this.client.format(`SELECT COUNT(*) as size FROM ${this.tableName} WHERE hash_name=%L ${condition}`, hashName)
  }
}