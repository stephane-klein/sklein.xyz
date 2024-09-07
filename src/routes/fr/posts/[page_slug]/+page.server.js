import * as cheerio from "cheerio";
import markdownIt from "$lib/markdown";
import SendNotification from "$lib/server/gotify";

export async function load({ request, params, locals }) {
    const instance_path = `/fr/posts/${params.page_slug}/`;
    const data = (await locals.sql`
        SELECT
            title,
            TO_DATE(published_at::TEXT, 'YYYY-MM-DD')::TEXT AS published_at,
            TO_DATE(last_updated_at::TEXT, 'YYYY-MM-DD')::TEXT AS last_updated_at,
            github_history_url,
            french_url,
            english_url,
            content,
            instance_name,
            private
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
            title: `sklein.xyz french blog post visited`,
            message: `${data.title} visited by ${data.instance_name || "unknown"}`
        }
    );

    return {
        frontmatter: data,
        body: $.html()
    };
}
