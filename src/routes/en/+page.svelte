<script>
    import Layout from "./layout.svelte";
    import InitWebAnalytics from "$lib/InitWebAnalytics.svelte";
    export let data;
</script>
<svelte:head>
    <title>Stéphane Klein, Software Craftsman, Table Tennis player</title>
</svelte:head>
<InitWebAnalytics />

<Layout>
    <div>
        <p>
            I'm <a href="https://www.facebook.com/stephane.klein.moselle">Stéphane Klein</a>, I live in Paris,
            <a href="https://en.wikipedia.org/wiki/Software_craftsmanship">Software Craftsman</a> and
            <a href="https://en.wikipedia.org/wiki/Table_tennis">table tennis player</a>.
        </p>

        <p>
            Since March 2026, I am on a sabbatical year: I chose to take twelve months to get better at
            AI-assisted development. I build real projects — tools I use daily, prototypes, and things that may be
            useful to others — I do open-source contributions, and I build methods and tools to code
            faster and better with AI agents.
        </p>

        <p>
            You can follow my notes on <a href="https://notes.sklein.xyz/">notes.sklein.xyz</a> and discover my projects
            on <a href="https://github.com/stephane-klein?tab=repositories">my GitHub profile</a>.
        </p>

        <p>Since July 2024, I have been offering <a href="../fr/services-freelance/">freelance software engineering services</a> (page in french).
        <p>
            I write code
            <a href="https://web.archive.org/web/20210624114811/https://web.eecs.utk.edu/~azh/blog/makinguselessstuff.html"
                >for fun</a
            >
            (<a href="https://news.ycombinator.com/item?id=27256867">comments HN</a>) and profit.
        </p>

        <p>
            I'm on <a rel="me" href="https://mamot.fr/@stephane_klein">mamot.fr/@stephane_klein</a> (Mastodon account),
            <a href="https://www.linkedin.com/in/stephanekleinfrommetz/">LinkedIn</a>,
            <a href="https://www.reddit.com/user/sklein">Reddit</a>,
            <a href="https://github.com/stephane-klein">GitHub</a>
            and <a href="https://twitter.com/klein_stephane">Twitter</a>
            (I do not use it much since November 2022),
        </p>

        <p>My english blog posts :</p>

        <ul>
            {#each data.posts as post}
                <li><a href={post.instance_path}>{post?.published_at} : {post?.title ?? post.instance_path}</a></li>
            {/each}
        </ul>

        <p>Most of my content is written in French: <a href="/fr/">https://sklein/fr/</a>.</p>

        <p>Web analytics: <a href="https://stats.sklein.xyz">stats.sklein.xyz</a></p>
    </div>
</Layout>
