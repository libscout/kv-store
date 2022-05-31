-- Table: public.hash
CREATE TABLE IF NOT EXISTS hash
(
    hash_name character varying COLLATE pg_catalog."default" NOT NULL,
    key character varying COLLATE pg_catalog."default" NOT NULL,
    val jsonb NOT NULL,
    CONSTRAINT hash_pkey PRIMARY KEY (hash_name, key)
)

TABLESPACE pg_default;