---
title: Liste des choix technologiques du projet Value Props
published_at: 2024-04-07
---

Je travaille depuis septembre 2023, en mode « solo dev » sur une application du type « [knowledge management](https://en.wikipedia.org/wiki/Personal_knowledge_base) » que nous avons lancée avec trois co-fondateurs.

Afin de ne pas alourdir la section « Expériences » de mon curriculum vitæ — que je suis en train de mettre à jour —, j’ai décidé de publier dans ce billet quelques sections du `README.md` du projet Value Props qui se trouve dans un dépôt Git privé.

> ## Project Design Choices
>
> Opinions:
>
> - The use of a monorepository pattern
> - [Monolithic application](https://en.wikipedia.org/wiki/Monolithic_application) pattern
> - No ORM pattern
> - The security layer, specifically permission control, is implemented using PostgreSQL [Row-Level Security](https://www.postgresql.org/docs/16/ddl-rowsecurity.html)
> - I'm trying to move towards [Radical Simplicity](https://www.radicalsimpli.city/)
> - [Don’t Build A General Purpose API To Power Your Own Front End](https://max.engineer/server-informed-ui)
> - The page rendering speed, and therefore the execution speed of SQL queries, needs special attention
>
> Components and libraries:
>
> - [SSR](https://kit.svelte.dev/docs/page-options#ssr) [SvelteKit](https://github.com/sveltejs/kit) with [Hydration](https://kit.svelte.dev/docs/glossary#hydration)
> - PostgreSQL database server
> - [Postgres.js](https://github.com/porsager/postgres) - PostgreSQL client for Node.js
> - Migration powered by [graphile-migrate](https://github.com/graphile/migrate)
> - Token generated with [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
> - PostgreSQL [Row-Level Security](https://www.postgresql.org/docs/16/ddl-rowsecurity.html)
> - [svelte-headlessui](https://github.com/rgossiaux/svelte-headlessui)
> - [sveltekit-i18n](https://github.com/sveltekit-i18n/lib)
> - [TailwindCSS](https://tailwindcss.com/)
> - [Tabler Icons](https://tabler-icons.io/)
> - [Superforms](https://superforms.rocks/)
> - [sveltekit-flash-message](https://github.com/ciscoheat/sveltekit-flash-message) + [svelte-french-toast](https://github.com/kbrgl/svelte-french-toast)
> - [markdown-it](https://github.com/markdown-it/markdown-it)
> - [Svelecte](https://github.com/mskocik/svelecte) - Flexible autocomplete/select component written in Svelte
> - [Driver.js](https://github.com/kamranahmedse/driver.js) - A light-weight, no-dependency, vanilla JavaScript engine to drive the user's focus across the page
> - [svelte-dnd-action](https://github.com/isaacHagoel/svelte-dnd-action)
> - [svelt-yjs](https://github.com/relm-us/svelt-yjs) powered on [yjs](https://github.com/yjs/yjs)
> - [date-fns](https://date-fns.org/)
> - [svelte-headless-table](https://github.com/bryanmylee/svelte-headless-table)
> - [svelte-splitpanes](https://github.com/orefalo/svelte-splitpanes)
> - [Fuse.js](https://www.fusejs.io/) - Powerful, lightweight fuzzy-search library, with zero dependencies
>
> Tooling:
>
> - [mise](https://github.com/jdx/mise)
> - [Docker](<https://en.wikipedia.org/wiki/Docker_(software)>) and [Docker Compose](https://docs.docker.com/compose/)
> - [NodeJS](https://nodejs.org/en/)
> - [pnpm](https://pnpm.io/)
> - [Jest](https://jestjs.io/) for unit testing
> - [tbls](https://github.com/k1LoW/tbls) to generate [database documentation](docs/databases/)

J'envisage peut-être d'y intégrer le moteur de base de données orienté Graph nommé [Apache Age](https://github.com/apache/age).  
Je prendrai ma décision en fonction du résultat du projet « [Publier un projet de type playground pour tester Apache Age](https://github.com/stephane-klein/backlog/issues/388) ».

En lien avec ce sujet, j'ai publié un skeleton dans [development-kit-doctor-scripts](https://github.com/stephane-klein/development-kit-doctor-scripts), qui me sert de brique de base pour construire les « Development Kit » de mes projets.
