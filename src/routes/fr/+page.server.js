import { globSync } from "glob";
import matter_read from "$lib/utils";
import SendNotification from "$lib/server/gotify";

export async function load() {
    const re = new RegExp(/^contents\/(?<path>.*)\.md$/);

    await SendNotification(
        {
            title: "sklein.xyz french home page visited",
            message: "sklein.xyz french home page visited"
        }
    );

    return {
        posts: await Promise.all(
            Object.values(globSync("contents/fr/posts/*.md")).map(async (filename) => {
                return {
                    path: `/${filename.match(re).groups.path}/`,
                    frontmatter: matter_read(filename).data,
                };
            })
        ),
        pages: await Promise.all(
            Object.values(globSync("contents/fr/garden/*.md")).map(async (filename) => {
                return {
                    path: `/${filename.match(re).groups.path}/`,
                    frontmatter: matter_read(filename).data,
                };
            })
        )
    };
}
