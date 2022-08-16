import { default as glob } from 'glob';
import { default as matter } from 'gray-matter';

export async function load() {
    const re = new RegExp(/^contents\/(?<path>.*)\.md$/);
    return {
        'posts': await Promise.all(
            Object.values(glob.sync('contents/blog/*.md')).map(async (filename) => {
                return {
                    path: `${ filename.match(re).groups.path }/`,
                    frontmatter: matter.read(filename).data
                }
            })
        ),
        'pages': await Promise.all(
            Object.values(glob.sync('contents/garden/*.md')).map(async (filename) => {
                return {
                    path: `/${ filename.match(re).groups.path }/`,
                    frontmatter: matter.read(filename).data
                }
            })
        )
    }
}
