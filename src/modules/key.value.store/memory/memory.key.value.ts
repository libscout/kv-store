import {AbstractKeyValue} from "../abstract/abstract.key.value";
import {IKeyOptions, IKeyValueStore, ISizeOptions} from "../../../types/i.key.value.store"

export class MemoryKeyValue<HashName extends string> extends AbstractKeyValue implements IKeyValueStore<HashName> {
  private readonly store: any = {}

  async hSize(hashName: HashName, options?: ISizeOptions): Promise<number> {
    const keys = Object.keys(this.getHash(hashName))
    return MemoryKeyValue.filterKeys(keys, options?.prefix || "").length
  }

  async hDel(hashName: HashName, key: string): Promise<void> {
    delete this.getHash(hashName)[key]
  }

  async hGet(hashName: HashName, key: string): Promise<any | null> {
    return this.getValue(hashName, key)
  }

  async hGetAll(hashName: HashName, options: IKeyOptions): Promise<any> {
    const keys = await this.hKeys(hashName, options)
    const res: any = {}
    keys.forEach(key => res[key] = this.getValue(hashName, key))
    return res
  }

  async hSet(hashName: HashName, key: string, val: any): Promise<void> {
    this.getHash(hashName)[key] = JSON.stringify({data: val})
  }

  async hDelAll(hashName: HashName, keys: string[]) {
    keys.forEach(key => this.hDel(hashName, key))
  }

  async hKeys(hashName: HashName, options: IKeyOptions): Promise<string[]> {
    let keys = Object.keys(this.getHash(hashName))
    keys = MemoryKeyValue.filterKeys(keys, options.prefix || "")
    return keys.splice(options.start || 0, options.limit)
  }

  private static filterKeys(keys: string[], prefix: string): string[] {
    return prefix ? keys.filter(i => i.indexOf(prefix) === 0) : keys
  }

  async hSetAll(hashName: HashName, keyValuePairs: string[][]) {
    keyValuePairs.forEach(([key, value]) => this.hSet(hashName, key, value))
  }

  private getValue(hashName: HashName, key: string): any {
    return this.getDataVal(hashName, key)?.data
  }

  private getDataVal(hashName: HashName, key: string): any {
    const val = this.getHash(hashName)[key]
    return val ? JSON.parse(this.getHash(hashName)[key]) : {data: null}
  }

  private getHash(hashName: HashName): any {
    return this.store[hashName] = this.store[hashName] || {}
  }
}