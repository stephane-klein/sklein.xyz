import * as path from 'path';
import * as cheerio from 'cheerio';
import MarkdownIt from 'markdown-it';
import { default as matter } from 'gray-matter';

const markdownIt = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
});

export async function load({ params }) {
    const filename = path.join(
        './contents/garden',
        path.normalize(`${params.page_slug}.md`).replace(/^[./]*/, '')
    );

    const parsedFrontmatter = matter.read(filename);
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
