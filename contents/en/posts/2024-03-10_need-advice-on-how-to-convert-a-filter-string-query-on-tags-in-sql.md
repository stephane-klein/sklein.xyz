---
title: Need advice on how to convert a filter string query on tags in SQL, for example "(tag1 and tag2) or tag3" in SQL?
published_at: 2024-03-10
french_url: /fr/posts/2024-03-10_demande-de-conseils-pour-convertir-une-query-filter-string-sur-des-tags-en-sql/
---

Blog post posted on [PostgreSQL subreddit](https://old.reddit.com/r/PostgreSQL/comments/1bb6qvj/need_advice_on_how_to_convert_a_filter_string/?):

> In a closed source project I'm currently working on, I've implemented a system that lets you associate `tags` with resources.
>
> My implementation looks like the following Proof of Concept [`postgres-tags-model-poc`](https://github.com/stephane-klein/postgres-tags-model-poc), itself inspired by the article [Tags and Postgres Arrays, a Purrrfect Combination](https://www.crunchydata.com/blog/tags-aand-postgres-arrays-a-purrfect-combination).
>
> For the moment the implementation is working pretty well, I can apply filters ([see examples in the README](https://github.com/stephane-klein/postgres-tags-model-poc/blob/552db20b867e36f7e88dfc57201e22cffa2df4d8/README.md?plain=1#L108)) on tag-based resources, examples :
>
> a.
>
> ```
>     SELECT *
>     FROM main.contacts_with_tag_names
>     WHERE (
>         tags && (
>             SELECT ARRAY_AGG(id) FROM main.contact_tags WHERE name = ANY(ARRAY['tag2'])
>         )
>     );
> ```
>
> or
>
> b.
>
> ```
> SELECT *
> FROM main.contacts_with_tag_names
> WHERE (
>   (
>     tags <@ (
>       SELECT ARRAY_AGG(id) FROM main.contact_tags WHERE name = ANY(ARRAY['tag2', 'tag3'])
>     )
>   ) OR (
>     tags && (
>       SELECT ARRAY_AGG(id) FROM main.contact_tags WHERE name = ANY(ARRAY['tag1'])
>     )
> );
> ```
>
> Now that this implementation is in place, I'd like to allow application users to enter "query filter string" to configure tag-based filters.
>
> This is how the query filter strings in examples `a.` and `b.` would look:
>
> - a. `tag2`
> - b. `(tag2 and tag3) or tag1`
>
> My next objective is to implement this "query filter string".  
> I learned from past experience that using simple regexes isn't the best idea for implementing a parser, and I've found in practice that using a [lexer](https://en.wikipedia.org/wiki/Lexical_analysis) library is much simpler and more rigorous.
>
> I started by looking for equivalents to [Flex](<https://en.wikipedia.org/wiki/Flex_(lexical_analyser_generator)>), [GNU Bison](https://en.wikipedia.org/wiki/GNU_Bison)... in Javascript:
>
> - What I found on npm: search for ["keywords:lexer"](https://www.npmjs.com/search?q=keywords%3Alexer&page=1&perPage=20)
> - I found [Jison](https://github.com/zaach/jison) on Stackoverflow: [Is there a flex - bison parser for javascript?](https://stackoverflow.com/questions/11755104/is-there-a-flex-bison-parser-for-javascript)
>
> I also spent some time researching whether there was a "standard" query filter syntax, I looked at the query search syntax of [Google](https://ahrefs.com/blog/google-advanced-search-operators/), [Duckduckgo](https://duckduckgo.com/duckduckgo-help-pages/results/syntax/), [Melisearch](https://www.meilisearch.com/docs/learn/fine_tuning_results/filtering), [Loki](https://grafana.com/docs/loki/latest/query/log_queries/#labels-format-expression), [GitHub](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects), [Jira](https://support.atlassian.com/jira-work-management/docs/use-advanced-search-with-jira-query-language-jql/) and I couldn't find anything "standard" for making searches based on tags alone.  
> The query filter syntax that comes closest to my goal is the Google one. The other syntaxes I've studied are often too powerful, handling a lot of extra functionality.
>
> ## Questions
>
> Before I start implementing this query filter system, I'd like to ask you the following questions:
>
> - a. Do you know of a standard "query filter syntax" that I could use as a reference?
> - b. Is there an Open Source library that transforms this type of query filter syntax into SQL?
> - c. Do you have a Javascript lexer library to recommend that would be suitable for this rather minimalist requirement?
> - d. Side question: would a tool like [pgvector](https://github.com/pgvector/pgvector) be useful and more suitable than the implementation described in the article [Tags and Postgres Arrays, a Purrrfect Combination](https://www.crunchydata.com/blog/tags-aand-postgres-arrays-a-purrfect-combination)?
>
> Thanks in advance for your suggestions.  
> Stéphane
