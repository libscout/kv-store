[@libscout/kv-store](../README.md) / [Exports](../modules.md) / PgClient

# Class: PgClient

## Implements

- [`IPgClient`](../interfaces/IPgClient.md)

## Table of contents

### Constructors

- [constructor](PgClient.md#constructor)

### Properties

- [options](PgClient.md#options)

### Methods

- [closeConnections](PgClient.md#closeconnections)
- [escape](PgClient.md#escape)
- [format](PgClient.md#format)
- [query](PgClient.md#query)
- [create](PgClient.md#create)
- [getConnection](PgClient.md#getconnection)

## Constructors

### constructor

• **new PgClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Defined in

[modules/pg/pg.client.ts:21](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.client.ts#L21)

## Properties

### options

• `Protected` `Readonly` **options**: `any`

## Methods

### closeConnections

▸ **closeConnections**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[IPgClient](../interfaces/IPgClient.md).[closeConnections](../interfaces/IPgClient.md#closeconnections)

#### Defined in

[modules/pg/pg.client.ts:23](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.client.ts#L23)

___

### escape

▸ **escape**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` \| `number` |

#### Returns

`string`

#### Defined in

[modules/pg/pg.client.ts:40](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.client.ts#L40)

___

### format

▸ **format**(...`args`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`string`

#### Implementation of

[IPgClient](../interfaces/IPgClient.md).[format](../interfaces/IPgClient.md#format)

#### Defined in

[modules/pg/pg.client.ts:44](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.client.ts#L44)

___

### query

▸ **query**(`query`, `variables?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `variables?` | `any`[] |

#### Returns

`Promise`<`any`\>

#### Implementation of

[IPgClient](../interfaces/IPgClient.md).[query](../interfaces/IPgClient.md#query)

#### Defined in

[modules/pg/pg.client.ts:28](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.client.ts#L28)

___

### create

▸ `Static` **create**(`options`): [`IPgClient`](../interfaces/IPgClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

[`IPgClient`](../interfaces/IPgClient.md)

#### Defined in

[modules/pg/pg.client.ts:15](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.client.ts#L15)

___

### getConnection

▸ `Static` **getConnection**(`url`): [`IPgClient`](../interfaces/IPgClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`IPgClient`](../interfaces/IPgClient.md)

#### Defined in

[modules/pg/pg.client.ts:10](https://github.com/libscout/kv-store/blob/6b6e50d/src/modules/pg/pg.client.ts#L10)
