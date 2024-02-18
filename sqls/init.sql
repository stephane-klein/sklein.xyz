CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create table to store schema version
CREATE TABLE IF NOT EXISTS public._schema_version (
    version INTEGER DEFAULT 0
);

-- Schema version 1

DO $$
BEGIN
    IF ((SELECT COUNT(version) FROM public._schema_version) = 0) THEN
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'lang_enum') THEN
            CREATE TYPE public.lang_enum AS ENUM (
                'fr',
                'en'
            );
        END IF;
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'page_type_enum') THEN
            CREATE TYPE public.page_type_enum AS ENUM (
                'blog',
                'garden'
            );
        END IF;

        CREATE TABLE IF NOT EXISTS public.pages (
            id                 SERIAL PRIMARY KEY,

            uuid               UUID DEFAULT uuid_generate_v4() NOT NULL,

            private_note       TEXT DEFAULT NULL, -- Used, for example, to find out who I've shared this page with

            lang               public.lang_enum NOT NULL,
            slug               VARCHAR NOT NULL,
            title              VARCHAR NOT NULL,
            page_type          public.page_type_enum NOT NULL,

            published_at       TIMESTAMP WITH TIME ZONE DEFAULT NULL,
            last_updated_at    TIMESTAMP WITH TIME ZONE DEFAULT NULL,

            github_history_url TEXT DEFAULT NULL,
            french_url         TEXT DEFAULT NULL,
            english_url        TEXT DEFAULT NULL,

            content            TEXT NOT NULL,

            UNIQUE(uuid),
            UNIQUE(slug)
        );
        CREATE INDEX IF NOT EXISTS pages_uuid_index             ON public.pages (uuid);
        CREATE INDEX IF NOT EXISTS pages_lang_index             ON public.pages (lang);
        CREATE INDEX IF NOT EXISTS pages_slug_index             ON public.pages (slug);
        CREATE INDEX IF NOT EXISTS pages_page_type_index        ON public.pages (page_type);
        CREATE INDEX IF NOT EXISTS pages_published_at_index     ON public.pages (published_at);
        CREATE INDEX IF NOT EXISTS pages_last_updated_at_index  ON public.pages (last_updated_at);

        INSERT INTO public._schema_version (version) VALUES(1);
    END IF;

-- Schema version 2

    IF ((SELECT version FROM public._schema_version) = 1) THEN
        ALTER TABLE public.pages RENAME COLUMN private_note TO instance_name;
        ALTER TABLE public.pages RENAME COLUMN uuid TO instance_slug;
        ALTER TABLE public.pages RENAME COLUMN slug TO instance_path;
        ALTER TABLE public.pages ADD COLUMN private BOOLEAN DEFAULT TRUE;
        UPDATE public.pages SET private=FALSE;

        UPDATE public._schema_version SET version=2;
    END IF;
END $$;

