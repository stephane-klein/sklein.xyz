#!/usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import matter_read from "./src/lib/utils";
import postgres from "postgres";
import * as cheerio from "cheerio";
import MarkdownIt from "markdown-it";

const argv = yargs(hideBin(process.argv))
    .scriptName("./load-file-to-db.js")
    .version(false)
    .usage("$0 [file.md]")
    .demandCommand(1)
    .parse();

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

const parsedFrontmatter = matter_read(argv._[0]);
const $ = cheerio.load(markdownIt.render(parsedFrontmatter?.content));

const frontmatter = parsedFrontmatter.data;
if (!frontmatter.title) {
    frontmatter.title = $("h1").text();
}
$("h1").text("");

for (let [instance_name, instance] of Object.entries(frontmatter.instances)) {
    await sql`
        INSERT INTO public.pages (
            lang,
            instance_path,
            instance_name,
            title,
            page_type,
            published_at,
            last_updated_at,
            github_history_url,
            french_url,
            english_url,
            content,
            private
        )
        VALUES (
            ${frontmatter.lang},
            ${instance.path},
            ${instance_name},
            ${frontmatter.title},
            ${frontmatter.page_type},
            ${frontmatter?.published_at || null},
            ${frontmatter?.last_updated_at || null},
            ${frontmatter?.github_history_url || null},
            ${frontmatter?.french_url || null},
            ${frontmatter?.english_url || null},
            ${parsedFrontmatter.content},
            ${frontmatter.private || true}
        )
        ON CONFLICT (instance_path) DO UPDATE
            SET
                lang=${frontmatter.lang},
                instance_name=${instance_name},
                title=${frontmatter.title},
                published_at=${frontmatter?.published_at || null},
                last_updated_at=${frontmatter?.last_updated_at || null},
                github_history_url=${frontmatter?.github_history || null},
                french_url=${frontmatter?.french_url || null},
                english_url=${frontmatter?.english_url || null},
                content=${parsedFrontmatter.content},
                private=${frontmatter.private || true}
            WHERE
                pages.instance_path=${instance.path}
    `;
}

sql.end();
