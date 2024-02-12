import { globSync } from "glob";
import matter_read from "$lib/utils";
import SendNotification from "$lib/server/gotify";

export async function load() {
    const re = new RegExp(/^contents\/(?<path>.*)\.md$/);

    SendNotification(
        {
            title: "sklein.xyz english home page visited",
            message: "sklein.xyz english home page visited"
        }
    );

    return {
        posts: await Promise.all(
            Object.values(globSync("contents/en/posts/*.md")).map(async (filename) => {
                return {
                    path: `/${filename.match(re).groups.path}/`,
                    frontmatter: matter_read(filename).data,
                };
            })
        )
    };
}
