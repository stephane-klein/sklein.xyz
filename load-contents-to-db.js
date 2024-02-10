#!/usr/bin/env bun
import { globSync } from "glob";
import { fileURLToPath } from "url";
import matter_read from "./src/lib/utils";
import path from "path";
import postgres from "postgres";
import * as cheerio from "cheerio";
import MarkdownIt from "markdown-it";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sql = postgres(
    process.env.POSTGRES_URL || "postgres://postgres:password@localhost:5432/postgres",
    {
        connection: {
            search_path: "utils"
        }
    }
);

const markdownIt = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
});

const re = new RegExp(/.*\/contents\/(?<lang>.*)\/(?<page_type>.*)\/(?<name>.*)\.md$/);

for await (const filename of globSync(path.resolve(__dirname, "contents/**/*.md"))) {
    const parsedFrontmatter = matter_read(filename);
    const $ = cheerio.load(markdownIt.render(parsedFrontmatter?.content));

    const frontmatter = parsedFrontmatter.data;
    if (!frontmatter.title) {
        frontmatter.title = $("h1").text();
    }
    $("h1").text("");

    const {lang, page_type, name} = filename.match(re).groups;

    const slug = `/${lang}/${page_type}/${name}/`;

    await sql`
        INSERT INTO public.pages (
            lang,
            slug,
            title,
            page_type,
            published_at,
            last_updated_at,
            github_history_url,
            french_url,
            english_url,
            content
        )
        VALUES (
            ${lang},
            ${slug},
            ${frontmatter.title},
            ${page_type == 'posts' ? 'blog' : 'garden'},
            ${frontmatter?.published_at || null},
            ${frontmatter?.last_updated_at || null},
            ${frontmatter?.github_history_url || null},
            ${frontmatter?.french_url || null},
            ${frontmatter?.english_url || null},
            ${parsedFrontmatter.content}
        )
        ON CONFLICT (slug) DO UPDATE
            SET
                title=${frontmatter.title},
                published_at=${frontmatter?.published_at || null},
                last_updated_at=${frontmatter?.last_updated_at || null},
                github_history_url=${frontmatter?.github_history || null},
                french_url=${frontmatter?.french_url || null},
                english_url=${frontmatter?.english_url || null},
                content=${parsedFrontmatter.content}
            WHERE
                pages.slug=${slug}
    `;
}
sql.end();
