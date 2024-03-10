---
title: Demande de conseils pour convertir une query filter string sur des tags en SQL, exemple "(tag1 and tag2) or tag3" en SQL
published_at: 2024-03-10
english_url: /en/posts/2024-03-10_need-advice-on-how-to-convert-a-filter-string-query-on-tags-in-sql/
---

J'ai posté ce billet [PostgreSQL subreddit](https://old.reddit.com/r/PostgreSQL/comments/1bb6qvj/need_advice_on_how_to_convert_a_filter_string/?), [Javascript subreddit](https://old.reddit.com/r/javascript/comments/1bb7952/need_advice_on_how_to_convert_a_filter_string/?) et sur [Fediverse](https://mamot.fr/@stephane_klein/112070931357296387) :

> Dans un projet closed source sur lequel je travaille actuellement, j'ai implémenté un système qui permet d'associer des `tags` sur des ressources.
>
> Mon implémentation ressemble au Proof of Concept suivant [`postgres-tags-model-poc`](https://github.com/stephane-klein/postgres-tags-model-poc) lui-même inspiré de l'article [Tags and Postgres Arrays, a Purrrfect Combination](https://www.crunchydata.com/blog/tags-aand-postgres-arrays-a-purrfect-combination).
>
> Pour le moment l'implémentaiton fonctionne plutôt bien, je peux appliquer des filtres ([voir les exemples dans le README](https://github.com/stephane-klein/postgres-tags-model-poc/blob/552db20b867e36f7e88dfc57201e22cffa2df4d8/README.md?plain=1#L108)) sur les ressources basées sur les `tags`, exemples :
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
> ou
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
> Maintenant que cette implémentation est en place, je souhaite permettre aux utilisateurs de l'application de saisir des "query filter string" pour configurer des filtres basés sur des tags.
>
> Voici à quoi ressemblerait les "query filter" string des exemples `a.` et `b.` :
>
> - a. `tag2`
> - b. `(tag2 and tag3) or tag1`
>
> Mon prochain objectif est l'implémentation de ce "query filter string".  
> Une expérience passée m'a enseigné qu'utiliser de simples regex n'est pas la meilleure des idées pour implémenter un parser, j'ai constaté par la pratique que l'utilisation d'une librairie de [lexer](https://en.wikipedia.org/wiki/Lexical_analysis) était bien plus simple et rigoureux.
>
> J'ai commencé par chercher des équivalents à [Flex](<https://en.wikipedia.org/wiki/Flex_(lexical_analyser_generator)>), [GNU Bison](https://en.wikipedia.org/wiki/GNU_Bison)… en Javascript
>
> - Ce que j'ai trouvé sur npm : recherche ["keywords:lexer"](https://www.npmjs.com/search?q=keywords%3Alexer&page=1&perPage=20)
> - J'ai trouvé [Jison](https://github.com/zaach/jison) sur Stackoverflow : [Is there a flex - bison parser for javascript?](https://stackoverflow.com/questions/11755104/is-there-a-flex-bison-parser-for-javascript)
>
> J'ai aussi passé un peu de temps à rechercher s'il existait une syntax "standard" de "query filter", j'ai regardé les query search syntax de [Google](https://ahrefs.com/blog/google-advanced-search-operators/), [Duckduckgo](https://duckduckgo.com/duckduckgo-help-pages/results/syntax/), [Melisearch](https://www.meilisearch.com/docs/learn/fine_tuning_results/filtering), [Loki](https://grafana.com/docs/loki/latest/query/log_queries/#labels-format-expression), [GitHub](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects), [Jira](https://support.atlassian.com/jira-work-management/docs/use-advanced-search-with-jira-query-language-jql/) et je n'ai rien trouvé de "standard" pour faire de la recherche uniquement basé sur des tags.  
> La syntax de "query filter" qui se rapproche le plus de mon objectif est celle de Google. Les autres syntaxes que j'ai étudiées sont souvent trop puissantes, elles gèrent beaucoup de fonctionnalités supplémentaires.
>
> ## Questions
>
> Avant de me lancer dans l'implémentation de ce système de "query filter", je vous adresse les questions suivantes :
>
> - a. Connaissez-vous un "query filter syntax" standard, sur lequel je pourrais me baser ?
> - b. Existe-t-il une librairie Open Source qui transforme ce type de query filter syntax en SQL ?
> - c. Avez-vous une librairie de lexer Javascript à me conseiller qui serait adapté à ce besoin assez minimaliste ?
> - d. Question accessoire : est-ce qu'un outil comme [pgvector](https://github.com/pgvector/pgvector) pourrait être pratique et mieux adapté que l'implémentation exposée dans l'article [Tags and Postgres Arrays, a Purrrfect Combination](https://www.crunchydata.com/blog/tags-aand-postgres-arrays-a-purrfect-combination) ?
>
> Merci d'avance pour vos suggestions.  
> Stéphane
