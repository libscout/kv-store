[@libscout/kv-store](../README.md) / [Exports](../modules.md) / PgHash

# Class: PgHash<HashName, PgKVTable\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `HashName` | extends `string` |
| `PgKVTable` | extends `string` |

## Hierarchy

- `AbstractHash`

  ↳ **`PgHash`**

## Implements

- [`IHash`](../interfaces/IHash.md)<`HashName`\>

## Table of contents

### Constructors

- [constructor](PgHash.md#constructor)

### Methods

- [createKeyValuePair](PgHash.md#createkeyvaluepair)
- [hDel](PgHash.md#hdel)
- [hDelAll](PgHash.md#hdelall)
- [hGet](PgHash.md#hget)
- [hGetAll](PgHash.md#hgetall)
- [hKeys](PgHash.md#hkeys)
- [hSet](PgHash.md#hset)
- [hSetAll](PgHash.md#hsetall)
- [hSize](PgHash.md#hsize)
- [getStore](PgHash.md#getstore)

## Constructors

### constructor

• **new PgHash**<`HashName`, `PgKVTable`\>(`client`, `tableName`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HashName` | extends `string` |
| `PgKVTable` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IPgClient`](../interfaces/IPgClient.md) |
| `tableName` | `PgKVTable` |

#### Overrides

AbstractHash.constructor

#### Defined in

[modules/pg/pg.hash.ts:18](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.hash.ts#L18)

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

[modules/pg/pg.hash.ts:26](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.hash.ts#L26)

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

[modules/pg/pg.hash.ts:21](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.hash.ts#L21)

___

### hGet

▸ **hGet**(`hashName`, `key`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashName` | `HashName` |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Implementation of

[IHash](../interfaces/IHash.md).[hGet](../interfaces/IHash.md#hget)

#### Defined in

[modules/pg/pg.hash.ts:36](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.hash.ts#L36)

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

[modules/pg/pg.hash.ts:47](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.hash.ts#L47)

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

[modules/pg/pg.hash.ts:88](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.hash.ts#L88)

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

[modules/pg/pg.hash.ts:75](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.hash.ts#L75)

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

#### Implementation of

[IHash](../interfaces/IHash.md).[hSetAll](../interfaces/IHash.md#hsetall)

#### Defined in

[modules/pg/pg.hash.ts:110](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.hash.ts#L110)

___

### hSize

▸ **hSize**(`hashName`, `options`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashName` | `HashName` |
| `options` | [`ISizeOptions`](../interfaces/ISizeOptions.md) |

#### Returns

`Promise`<`number`\>

#### Implementation of

[IHash](../interfaces/IHash.md).[hSize](../interfaces/IHash.md#hsize)

#### Defined in

[modules/pg/pg.hash.ts:145](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.hash.ts#L145)

___

### getStore

▸ `Static` **getStore**<`Hash`, `PgKVTable`\>(`dbUrl`, `table`): [`IHash`](../interfaces/IHash.md)<`Hash`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Hash` | extends `string` |
| `PgKVTable` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbUrl` | `string` |
| `table` | `PgKVTable` |

#### Returns

[`IHash`](../interfaces/IHash.md)<`Hash`\>

#### Defined in

[modules/pg/pg.hash.ts:13](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.hash.ts#L13)
