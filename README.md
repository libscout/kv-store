# @libscout/kv-store

> @libscout/kv-store - implements a [hash-like](https://redis.io/commands/hget/) interface for postgres

[![npm version](https://badge.fury.io/js/@libscout%2Fkv-store.svg)](https://badge.fury.io/js/@libscout%2Fkv-store)


## Table of Contents

- [Quick start](#quick-start)
  - [Install](#install)
  - [Usage](#usage)

## Quick start

### Install

#### npm

For module bundlers such as Webpack or Browserify.

```shell
npm i @libscout/kv-store
```

### Usage

#### SQL
First of all, you have to create a table like this:

```sql
CREATE TABLE IF NOT EXISTS your_table_name
(
    hash_name character varying COLLATE pg_catalog."default" NOT NULL,
    key character varying COLLATE pg_catalog."default" NOT NULL,
    val jsonb NOT NULL,
    CONSTRAINT hash_pkey PRIMARY KEY (hash_name, key)
)
TABLESPACE pg_default;
```

#### ES6

```ts
import {IHash, PgHash} from "@libscout/kv-store"

enum HashName {
  apples = "apples",
  oranges = "oranges"
}

enum PgTable {
  your_table_name = "your_table_name"
}

const pgUrl = "postgresql://postgres:1234@localhost:5432/test"
const store: IHash<HashName> = PgHash.getStore<HashName, PgTable>(pgUrl, PgTable.your_table_name)

await store.hSet(HashName.name, "key_name", "value")
```

The "value" can be of any type.

If you need to test your component that use PgHash, you can use MemoryHash to replace it. 
The MemoryHash class implements the same IHash interface.

```ts
import {IHash, MemoryHash} from "@libscout/kv-store"

enum HashName {
  apples = "apples",
  oranges = "oranges"
}
const store: IHash<HashName> = new MemoryHash()
await store.hSet(HashName.name, "key_name", "value")
```

[Modules](docs/modules.md)


&copy; Nikolay Puliak
