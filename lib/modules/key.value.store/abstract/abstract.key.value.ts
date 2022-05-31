import {KVPair} from "../../../types/i.key.value.store"

export abstract class AbstractKeyValue {
  createKeyValuePair(key: string, value: any): KVPair {
    return [key, value];
  }
}