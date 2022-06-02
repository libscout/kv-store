import {KVPair} from "../../types/i.hash"

export abstract class AbstractHash {
  createKeyValuePair(key: string, value: any): KVPair {
    return [key, value];
  }
}