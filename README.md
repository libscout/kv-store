[//]: # (# @libscout/kv-store)

[//]: # ()
[//]: # (> @libscout/kv-store - implements a [hash-like]&#40;https://redis.io/commands/hget/&#41; interface for postgres)

[//]: # ()
[//]: # ([![npm version]&#40;https://badge.fury.io/js/@libscout%2Fkv-store.svg&#41;]&#40;https://badge.fury.io/js/@libscout%2Fkv-store&#41;)

[//]: # ()
[//]: # ()
[//]: # (## Table of Contents)

[//]: # ()
[//]: # (- [Quick start]&#40;#quick-start&#41;)

[//]: # (  - [Install]&#40;#install&#41;)

[//]: # (  - [Usage]&#40;#usage&#41;)

[//]: # ()
[//]: # (## Quick start)

[//]: # ()
[//]: # (### Install)

[//]: # ()
[//]: # (#### npm)

[//]: # ()
[//]: # (For module bundlers such as Webpack or Browserify.)

[//]: # ()
[//]: # (```shell)

[//]: # (npm types @libscout/kv-store)

[//]: # (```)

[//]: # ()
[//]: # (### Usage)

[//]: # ()
[//]: # (#### SQL)

[//]: # (First of all, you have to create a table like this:)

[//]: # ()
[//]: # (```sql)

[//]: # (CREATE TABLE IF NOT EXISTS your_table_name)

[//]: # (&#40;)

[//]: # (    hash_name character varying COLLATE pg_catalog."default" NOT NULL,)

[//]: # (    key character varying COLLATE pg_catalog."default" NOT NULL,)

[//]: # (    val jsonb NOT NULL,)

[//]: # (    CONSTRAINT hash_pkey PRIMARY KEY &#40;hash_name, key&#41;)

[//]: # (&#41;)

[//]: # (TABLESPACE pg_default;)

[//]: # (```)

[//]: # ()
[//]: # (#### ES6)

[//]: # ()
[//]: # (```ts)

[//]: # (import {IHash, PgHash} from "@libscout/kv-store")

[//]: # ()
[//]: # (enum HashName {)

[//]: # (  apples = "apples",)

[//]: # (  oranges = "oranges")

[//]: # (})

[//]: # ()
[//]: # (enum PgTable {)

[//]: # (  your_table_name = "your_table_name")

[//]: # (})

[//]: # ()
[//]: # (const pgUrl = "postgresql://postgres:1234@localhost:5432/test")

[//]: # (const store: IHash<HashName> = PgHash.getStore<HashName, PgTable>&#40;pgUrl, PgTable.your_table_name&#41;)

[//]: # ()
[//]: # (await store.hSet&#40;HashName.name, "key_name", "value"&#41;)

[//]: # (```)

[//]: # ()
[//]: # (The "value" can be of any type.)

[//]: # ()
[//]: # (If you need to test your component that use PgHash, you can use MemoryHash to replace it. )

[//]: # (The MemoryHash class implements the same IHash interface.)

[//]: # ()
[//]: # (```ts)

[//]: # (import {IHash, MemoryHash} from "@libscout/kv-store")

[//]: # ()
[//]: # (enum HashName {)

[//]: # (  apples = "apples",)

[//]: # (  oranges = "oranges")

[//]: # (})

[//]: # (const store: IHash<HashName> = new MemoryHash&#40;&#41;)

[//]: # (await store.hSet&#40;HashName.name, "key_name", "value"&#41;)

[//]: # (```)

[//]: # ()
[//]: # ([Modules]&#40;docs/modules.md&#41;)

[//]: # ()
[//]: # ()
[//]: # (&copy; Nikolay Puliak)
