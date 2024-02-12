import * as path from "path";
import * as cheerio from "cheerio";
import MarkdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItTocDoneRight from "markdown-it-toc-done-right";
import slug from "slug";
import matter_read from "$lib/utils";
import SendNotification from "$lib/server/gotify";

const markdownIt = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
})
    .use(markdownItAnchor, {
        slugify: slug,
        permalink: markdownItAnchor.permalink.linkInsideHeader({
            symbol: `
                    <span aria-hidden="true">¶</span>
                `,
            placement: "after"
        })
    })
    .use(markdownItTocDoneRight, {
        listType: "ul",
        level: 2,
        slugify: slug
    });

export async function load({ params }) {
    const filename = path.join("./contents/fr/garden", path.normalize(`${params.page_slug}.md`).replace(/^[./]*/, ""));

    const parsedFrontmatter = matter_read(filename);
    const $ = cheerio.load(markdownIt.render(parsedFrontmatter?.content));

    const frontmatter = parsedFrontmatter.data;
    if (!frontmatter.title) {
        frontmatter.title = $("h1").text();
    }
    $("h1").text("");
    SendNotification(
        {
            title: `sklein.xyz french garden page visited`,
            message: `${frontmatter.title} visited`
        }
    );

    return {
        frontmatter: frontmatter,
        body: $.html()
    };
}
