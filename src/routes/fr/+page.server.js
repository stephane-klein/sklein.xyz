import { globSync } from "glob";
import matter_read from "$lib/utils";

export async function load() {
    const re = new RegExp(/^contents\/(?<path>.*)\.md$/);
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
