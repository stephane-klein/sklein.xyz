import SendNotification from "$lib/server/gotify";

export async function load({request, locals}) {
    SendNotification(
        request,
        {
            title: "sklein.xyz english home page visited",
            message: "sklein.xyz english home page visited"
        }
    );

    return {
        ...(await locals.sql`
            WITH _posts AS (
                SELECT
                    slug,
                    title,
                    TO_DATE(published_at::TEXT, 'YYYY-MM-DD') AS published_at
                FROM
                    public.pages
                WHERE
                    (lang='en') AND
                    (page_type='blog')
            )
            SELECT
                (
                    SELECT ARRAY_AGG(ROW_TO_JSON(_posts))
                    FROM _posts
                ) AS posts
        `)[0]
    };
}
