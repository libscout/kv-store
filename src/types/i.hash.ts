export type KVPair = [string, any]

export interface IHash<HashName extends string> extends IHashLight<HashName> {
  hGetAll(hashName: HashName, options: IKeyOptions): Promise<any>
  hSetAll(hashName: HashName, keyValuePairs: KVPair[]): Promise<void>
  hDelAll(hashName: HashName, keys: string[]): Promise<void>
  createKeyValuePair(key: string, value: any): KVPair
}
export interface IHashLight<HashName extends string> {
  hKeys(hashName: HashName, options: IKeyOptions): Promise<string[]>
  hSize(hashName: HashName, options?: ISizeOptions): Promise<number>
  hGet(hashName: HashName, key: string): Promise<any | null>
  hSet(hashName: HashName, key: string, val: any): Promise<void>
  hDel(hashName: HashName, key: string): Promise<void>
}

export interface IKeyOptions {
  readonly prefix?: string
  readonly limit: number
  readonly start?: number
}

export interface ISizeOptions {
  readonly prefix: string
}