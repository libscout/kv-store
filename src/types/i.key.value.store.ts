export enum HashName {
  test = "test",
  counters = "counters",
  options = "options",
  error_link = "error_link",
  to_load_link = "to_load_link",
  to_update_book_link = "to_update_book_link",
  loaded_link = "loaded_link",
  link_pagination = "link_pagination",
  page = "page",
  archive_page = "archive_page",
  book_full = "book_full",
  book_piece = "book_piece",
  archive_book_full = "archive_book_full",
  archive_book_piece = "archive_book_piece",
  store_stat = "store_stat",
  log_error = "log_error",
  queue_img = "queue_img",
  loaded_img = "loaded_img",
  indexer_task = "indexer_task",
  is_book = "is_book",
  is_cycle = "is_cycle",
  is_author = "is_author",
  is_author_book = "is_author_book",
  is_book_cycle = "is_book_cycle",
  sis_ru_book = "sis_ru_book",
  sis_ru_cycle = "sis_ru_cycle",
  sis_ru_author = "sis_ru_author",
}
export type KVPair = [string, any]

export interface IKeyValueStore extends IKeyValueStoreLight {
  hGetAll(hashName: HashName, options: IKeyOptions): Promise<any>
  hSetAll(hashName: HashName, keyValuePairs: KVPair[]): Promise<void>
  hDelAll(hashName: HashName, keys: string[]): Promise<void>
  createKeyValuePair(key: string, value: any): KVPair
}

export interface IKeyValueStoreLight {
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