import SendNotification from "$lib/server/gotify";

export async function load({request, locals}) {
    SendNotification(
        request,
        {
            title: "sklein.xyz french home page visited",
            message: "sklein.xyz french home page visited"
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
                    (lang='fr') AND
                    (page_type='blog')
            ),
            _pages AS (
                SELECT
                    slug,
                    title,
                    TO_DATE(published_at::TEXT, 'YYYY-MM-DD') AS published_at
                FROM
                    public.pages
                WHERE
                    (lang='fr') AND
                    (page_type='garden')
            )
            SELECT
                (
                    SELECT ARRAY_AGG(ROW_TO_JSON(_posts))
                    FROM _posts
                ) AS posts,
                (
                    SELECT ARRAY_AGG(ROW_TO_JSON(_pages))
                    FROM _pages
                ) AS pages
        `)[0]
    };
}
