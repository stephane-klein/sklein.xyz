CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DO $$
BEGIN
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
END
$$;

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

