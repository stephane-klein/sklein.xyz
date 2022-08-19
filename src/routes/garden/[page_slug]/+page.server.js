import * as path from 'path';
import * as cheerio from 'cheerio';
import MarkdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import matter_read from '$lib/utils';

const markdownIt = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
})
    .use(
        markdownItAnchor,
        {
            permalink: markdownItAnchor.permalink.linkInsideHeader({
                symbol: `
                    <span aria-hidden="true">¶</span>
                `,
                placement: 'after'
            })
        }
    );

export async function load({ params }) {
    const filename = path.join(
        './contents/garden',
        path.normalize(`${params.page_slug}.md`).replace(/^[./]*/, '')
    );

    const parsedFrontmatter = matter_read(filename);
    const $ = cheerio.load(markdownIt.render(parsedFrontmatter?.content));

    const frontmatter = parsedFrontmatter.data;
    if (!frontmatter.title) {
        frontmatter.title = $('h1').text();
    }
    $('h1').text('');

    return {
        frontmatter: frontmatter,
        body: $.html()
    }
}