-- Table: public.user

-- DROP TABLE public."user";

CREATE TABLE IF NOT EXISTS public."user"
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 11 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    name character varying(60) COLLATE pg_catalog."default",
    phone bigint,
    email character varying(30) COLLATE pg_catalog."default",
    password character varying(40) COLLATE pg_catalog."default",
    city character varying(80) COLLATE pg_catalog."default",
    street_housenumber character varying(100) COLLATE pg_catalog."default",
    permission character varying(5) COLLATE pg_catalog."default",
    zipcode character varying(10) COLLATE pg_catalog."default",
    floor_doornumber character varying(10) COLLATE pg_catalog."default",
    CONSTRAINT user_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public."user"
    OWNER to ridygjqylbrayl;