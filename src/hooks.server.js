import sql from "$lib/server/db.js";

export async function handle({ event, resolve }) {
    // await sql.reserve() have a bug, it didn't execute auto fetching of array types
    // then, I call this query to force auto fetching of array types loading
    await sql`SELECT 1`;

    // See https://github.com/porsager/postgres/pull/667/files
    event.locals.sql = await sql.reserve();

    const response = await resolve(event);

    event.locals.sql.release();
    return response;
}
