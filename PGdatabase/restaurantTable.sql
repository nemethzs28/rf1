-- Table: public.restaurant

-- DROP TABLE public.restaurant;

CREATE TABLE IF NOT EXISTS public.restaurant
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 11 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    name character varying(50) COLLATE pg_catalog."default",
    image character varying(80) COLLATE pg_catalog."default",
    pricecategory character varying(12) COLLATE pg_catalog."default",
    description character varying(500) COLLATE pg_catalog."default",
    rating character varying(10) COLLATE pg_catalog."default",
    CONSTRAINT restaurant_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.restaurant
    OWNER to ridygjqylbrayl;