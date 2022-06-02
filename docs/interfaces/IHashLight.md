[@libscout/kv-store](../README.md) / [Exports](../modules.md) / IHashLight

# Interface: IHashLight<HashName\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `HashName` | extends `string` |

## Hierarchy

- **`IHashLight`**

  ↳ [`IHash`](IHash.md)

## Table of contents

### Methods

- [hDel](IHashLight.md#hdel)
- [hGet](IHashLight.md#hget)
- [hKeys](IHashLight.md#hkeys)
- [hSet](IHashLight.md#hset)
- [hSize](IHashLight.md#hsize)

## Methods

### hDel

▸ **hDel**(`hashName`, `key`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashName` | `HashName` |
| `key` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[types/i.hash.ts:14](https://github.com/libscout/kv-store/blob/6b6e50d/src/types/i.hash.ts#L14)

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

#### Defined in

[types/i.hash.ts:12](https://github.com/libscout/kv-store/blob/6b6e50d/src/types/i.hash.ts#L12)

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

#### Defined in

[types/i.hash.ts:13](https://github.com/libscout/kv-store/blob/6b6e50d/src/types/i.hash.ts#L13)

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

#### Defined in

[types/i.hash.ts:11](https://github.com/libscout/kv-store/blob/6b6e50d/src/types/i.hash.ts#L11)
