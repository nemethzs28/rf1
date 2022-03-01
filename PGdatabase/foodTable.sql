-- Table: public.food

-- DROP TABLE public.food;

CREATE TABLE IF NOT EXISTS public.food
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 27 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    allergens character varying(40)[] COLLATE pg_catalog."default",
    description character varying(400) COLLATE pg_catalog."default",
    price bigint,
    name character varying(40) COLLATE pg_catalog."default",
    category character varying(40) COLLATE pg_catalog."default",
    restaurantid bigint,
    img character varying(80) COLLATE pg_catalog."default",
    CONSTRAINT food_pkey PRIMARY KEY (id),
    CONSTRAINT "restaurantFK" FOREIGN KEY (restaurantid)
        REFERENCES public.restaurant (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE public.food
    OWNER to ridygjqylbrayl;