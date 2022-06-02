[@libscout/kv-store](../README.md) / [Exports](../modules.md) / IPgClient

# Interface: IPgClient

## Implemented by

- [`PgClient`](../classes/PgClient.md)

## Table of contents

### Methods

- [closeConnections](IPgClient.md#closeconnections)
- [format](IPgClient.md#format)
- [query](IPgClient.md#query)

## Methods

### closeConnections

▸ **closeConnections**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[types/i.pg.client.ts:2](https://github.com/libscout/kv-store/blob/6b6e50d/src/types/i.pg.client.ts#L2)

___

### format

▸ **format**(...`args`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`string`

#### Defined in

[types/i.pg.client.ts:4](https://github.com/libscout/kv-store/blob/6b6e50d/src/types/i.pg.client.ts#L4)

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

#### Defined in

[types/i.pg.client.ts:3](https://github.com/libscout/kv-store/blob/6b6e50d/src/types/i.pg.client.ts#L3)
