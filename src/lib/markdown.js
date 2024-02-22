import MarkdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItTocDoneRight from "markdown-it-toc-done-right";
import slug from "slug";

const markdownIt = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
})
    .use(markdownItAnchor, {
        slugify: slug,
        permalink: markdownItAnchor.permalink.linkInsideHeader({
            symbol: `
                    <span aria-hidden="true">¶</span>
                `,
            placement: "after"
        })
    })
    .use(markdownItTocDoneRight, {
        listType: "ul",
        level: 2,
        slugify: slug
    });

export default markdownIt;
