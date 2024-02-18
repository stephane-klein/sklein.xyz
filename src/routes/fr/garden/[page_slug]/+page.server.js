import * as cheerio from "cheerio";
import MarkdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItTocDoneRight from "markdown-it-toc-done-right";
import slug from "slug";
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

export async function load({ request, params, locals }) {
    const instance_path = `/fr/garden/${params.page_slug}/`;
    const data = (await locals.sql`
        SELECT
            title,
            TO_DATE(published_at::TEXT, 'YYYY-MM-DD')::TEXT AS published_at,
            TO_DATE(last_updated_at::TEXT, 'YYYY-MM-DD')::TEXT AS last_updated_at,
            github_history_url,
            french_url,
            english_url,
            content
        FROM
            public.pages
        WHERE
            instance_path=${instance_path}
    `)[0];

    const $ = cheerio.load(markdownIt.render(data.content));

    if (!data.title) {
        data.title = $("h1").text();
    }
    $("h1").text("");

    SendNotification(
        request,
        {
            title: `sklein.xyz french garden page visited`,
            message: `${data.title} visited by ${data.instance_name || "unknown"}`
        }
    );

    return {
        frontmatter: data,
        body: $.html()
    };
}
