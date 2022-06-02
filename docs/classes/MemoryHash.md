[@libscout/kv-store](../README.md) / [Exports](../modules.md) / MemoryHash

# Class: MemoryHash<HashName\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `HashName` | extends `string` |

## Hierarchy

- `AbstractHash`

  ↳ **`MemoryHash`**

## Implements

- [`IHash`](../interfaces/IHash.md)<`HashName`\>

## Table of contents

### Constructors

- [constructor](MemoryHash.md#constructor)

### Methods

- [createKeyValuePair](MemoryHash.md#createkeyvaluepair)
- [hDel](MemoryHash.md#hdel)
- [hDelAll](MemoryHash.md#hdelall)
- [hGet](MemoryHash.md#hget)
- [hGetAll](MemoryHash.md#hgetall)
- [hKeys](MemoryHash.md#hkeys)
- [hSet](MemoryHash.md#hset)
- [hSetAll](MemoryHash.md#hsetall)
- [hSize](MemoryHash.md#hsize)

## Constructors

### constructor

• **new MemoryHash**<`HashName`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HashName` | extends `string` |

#### Inherited from

AbstractHash.constructor

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

#### Implementation of

[IHash](../interfaces/IHash.md).[createKeyValuePair](../interfaces/IHash.md#createkeyvaluepair)

#### Inherited from

AbstractHash.createKeyValuePair

#### Defined in

[modules/abstract/abstract.hash.ts:4](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/abstract/abstract.hash.ts#L4)

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

#### Implementation of

[IHash](../interfaces/IHash.md).[hDel](../interfaces/IHash.md#hdel)

#### Defined in

[modules/memory/memory.hash.ts:12](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/memory/memory.hash.ts#L12)

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

#### Implementation of

[IHash](../interfaces/IHash.md).[hDelAll](../interfaces/IHash.md#hdelall)

#### Defined in

[modules/memory/memory.hash.ts:31](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/memory/memory.hash.ts#L31)

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

#### Implementation of

[IHash](../interfaces/IHash.md).[hGet](../interfaces/IHash.md#hget)

#### Defined in

[modules/memory/memory.hash.ts:16](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/memory/memory.hash.ts#L16)

___

### hGetAll

▸ **hGetAll**(`hashName`, `options`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashName` | `HashName` |
| `options` | [`IKeyOptions`](../interfaces/IKeyOptions.md) |

#### Returns

`Promise`<`any`\>

#### Implementation of

[IHash](../interfaces/IHash.md).[hGetAll](../interfaces/IHash.md#hgetall)

#### Defined in

[modules/memory/memory.hash.ts:20](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/memory/memory.hash.ts#L20)

___

### hKeys

▸ **hKeys**(`hashName`, `options`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashName` | `HashName` |
| `options` | [`IKeyOptions`](../interfaces/IKeyOptions.md) |

#### Returns

`Promise`<`string`[]\>

#### Implementation of

[IHash](../interfaces/IHash.md).[hKeys](../interfaces/IHash.md#hkeys)

#### Defined in

[modules/memory/memory.hash.ts:35](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/memory/memory.hash.ts#L35)

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

#### Implementation of

[IHash](../interfaces/IHash.md).[hSet](../interfaces/IHash.md#hset)

#### Defined in

[modules/memory/memory.hash.ts:27](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/memory/memory.hash.ts#L27)

___

### hSetAll

▸ **hSetAll**(`hashName`, `keyValuePairs`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashName` | `HashName` |
| `keyValuePairs` | `string`[][] |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IHash](../interfaces/IHash.md).[hSetAll](../interfaces/IHash.md#hsetall)

#### Defined in

[modules/memory/memory.hash.ts:45](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/memory/memory.hash.ts#L45)

___

### hSize

▸ **hSize**(`hashName`, `options?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashName` | `HashName` |
| `options?` | [`ISizeOptions`](../interfaces/ISizeOptions.md) |

#### Returns

`Promise`<`number`\>

#### Implementation of

[IHash](../interfaces/IHash.md).[hSize](../interfaces/IHash.md#hsize)

#### Defined in

[modules/memory/memory.hash.ts:7](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/memory/memory.hash.ts#L7)
