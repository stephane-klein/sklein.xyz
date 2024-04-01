import MarkdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItTocDoneRight from "markdown-it-toc-done-right";
import markdownItFootnote from "markdown-it-footnote";
import slug from "slug";

const markdownIt = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
})
    .use(markdownItAnchor, {
        slugify: slug,
        tabIndex: -1,
        permalink: markdownItAnchor.permalink.linkInsideHeader({
            ariaHidden: true,
            symbol: `
                    <span title="Direct link to this position in page">¶</span>
                `,
            placement: "after"
        })
    })
    .use(markdownItFootnote)
    .use(markdownItTocDoneRight, {
        listType: "ul",
        level: 2,
        slugify: slug
    });

export default markdownIt;
