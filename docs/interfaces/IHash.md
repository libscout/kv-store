[@libscout/kv-store](../README.md) / [Exports](../modules.md) / IHash

# Interface: IHash<HashName\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `HashName` | extends `string` |

## Hierarchy

- [`IHashLight`](IHashLight.md)<`HashName`\>

  ↳ **`IHash`**

## Implemented by

- [`MemoryHash`](../classes/MemoryHash.md)
- [`PgHash`](../classes/PgHash.md)

## Table of contents

### Methods

- [createKeyValuePair](IHash.md#createkeyvaluepair)
- [hDel](IHash.md#hdel)
- [hDelAll](IHash.md#hdelall)
- [hGet](IHash.md#hget)
- [hGetAll](IHash.md#hgetall)
- [hKeys](IHash.md#hkeys)
- [hSet](IHash.md#hset)
- [hSetAll](IHash.md#hsetall)
- [hSize](IHash.md#hsize)

## Methods

### createKeyValuePair

▸ **createKeyValuePair**(`key`, `value`): [`KVPair`](../modules.md#kvpair)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`KVPair`](../modules.md#kvpair)

#### Defined in

[types/i.hash.ts:7](https://github.com/libscout/kv-store/blob/6b6e50d/src/types/i.hash.ts#L7)

___

### hDel

▸ **hDel**(`hashName`, `key`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashName` | `HashName` |
| `key` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[IHashLight](IHashLight.md).[hDel](IHashLight.md#hdel)

#### Defined in

[types/i.hash.ts:14](https://github.com/libscout/kv-store/blob/6b6e50d/src/types/i.hash.ts#L14)

___

### hDelAll

▸ **hDelAll**(`hashName`, `keys`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashName` | `HashName` |
| `keys` | `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[types/i.hash.ts:6](https://github.com/libscout/kv-store/blob/6b6e50d/src/types/i.hash.ts#L6)

___

### hGet

▸ **hGet**(`hashName`, `key`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashName` | `HashName` |
| `key` | `string` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[IHashLight](IHashLight.md).[hGet](IHashLight.md#hget)

#### Defined in

[types/i.hash.ts:12](https://github.com/libscout/kv-store/blob/6b6e50d/src/types/i.hash.ts#L12)

___

### hGetAll

▸ **hGetAll**(`hashName`, `options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashName` | `HashName` |
| `options` | [`IKeyOptions`](IKeyOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[types/i.hash.ts:4](https://github.com/libscout/kv-store/blob/6b6e50d/src/types/i.hash.ts#L4)

___

### hKeys

▸ **hKeys**(`hashName`, `options`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashName` | `HashName` |
| `options` | [`IKeyOptions`](IKeyOptions.md) |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

[IHashLight](IHashLight.md).[hKeys](IHashLight.md#hkeys)

#### Defined in

[types/i.hash.ts:10](https://github.com/libscout/kv-store/blob/6b6e50d/src/types/i.hash.ts#L10)

___

### hSet

▸ **hSet**(`hashName`, `key`, `val`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashName` | `HashName` |
| `key` | `string` |
| `val` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[IHashLight](IHashLight.md).[hSet](IHashLight.md#hset)

#### Defined in

[types/i.hash.ts:13](https://github.com/libscout/kv-store/blob/6b6e50d/src/types/i.hash.ts#L13)

___

### hSetAll

▸ **hSetAll**(`hashName`, `keyValuePairs`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashName` | `HashName` |
| `keyValuePairs` | [`KVPair`](../modules.md#kvpair)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[types/i.hash.ts:5](https://github.com/libscout/kv-store/blob/6b6e50d/src/types/i.hash.ts#L5)

___

### hSize

▸ **hSize**(`hashName`, `options?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashName` | `HashName` |
| `options?` | [`ISizeOptions`](ISizeOptions.md) |

#### Returns

`Promise`<`number`\>

#### Inherited from

[IHashLight](IHashLight.md).[hSize](IHashLight.md#hsize)

#### Defined in

[types/i.hash.ts:11](https://github.com/libscout/kv-store/blob/6b6e50d/src/types/i.hash.ts#L11)
