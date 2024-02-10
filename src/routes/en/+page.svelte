<script>
    import Layout from "./layout.svelte";
    export let data;
</script>
<svelte:head>
    <title>Stéphane Klein, Software Craftsman, Table Tennis player</title>
</svelte:head>

<Layout>
    <div>
        <p>
            I'm <a href="https://www.facebook.com/stephane.klein.moselle">Stéphane Klein</a>, I live in Paris,
            <a href="https://en.wikipedia.org/wiki/Software_craftsmanship">Software Craftsman</a> and
            <a href="https://en.wikipedia.org/wiki/Table_tennis">table tennis player</a>.
        </p>

        <p>
            Former <a href="https://fr.wikipedia.org/wiki/Directeur_de_la_technologie">CTO</a> at
            <a href="https://spacefill.fr/">SpaceFill</a> (2019-2023) and I write code
            <a href="https://web.archive.org/web/20210624114811/https://web.eecs.utk.edu/~azh/blog/makinguselessstuff.html"
                >for fun</a
            >
            (<a href="https://news.ycombinator.com/item?id=27256867">comments HN</a>) and profit.
        </p>

        <p>
            I'm on <a rel="me" href="https://mamot.fr/@stephane_klein">mamot.fr/@stephane_klein</a> (Mastodon account),
            <a href="https://twitter.com/klein_stephane">Twitter</a>
            (I do not use it much since November 2022),
            <a href="https://www.linkedin.com/in/stephanekleinfrommetz/">LinkedIn</a>,
            <a href="https://www.reddit.com/user/sklein">Reddit</a>
            and <a href="https://github.com/stephane-klein">GitHub</a>.
        </p>

        <p>
            I try to practice the <a href="https://www.swyx.io/learn-in-public/">#LearnInPublic</a> and
            <code>#WorkInPublic</code>, examples:
            <a href="https://github.com/stephane-klein/backlog/issues">my public backlog</a>
            (french),
            <a href="https://github.com/stephane-klein?tab=repositories&q=playground&type=&language=&sort="
                >many playgrounds</a
            >...
        </p>

        <p>
            <a href="https://github.com/stephane-klein/dotfiles">Here is</a> my work in progress <em>dotfiles</em> managed
            by <a href="https://www.chezmoi.io/">ChezMoi</a>.
        </p>

        <p>My english blog posts :</p>

        <ul>
            {#each data.posts as post}
                <li><a href={post.slug}>{post?.published_at} : {post?.title ?? post.slug}</a></li>
            {/each}
        </ul>

        <p>Most of my content is written in French: <a href="/fr/">https://sklein/fr/</a>.</p>

        <p>Web analytics: <a href="https://stats.sklein.xyz">stats.sklein.xyz</a></p>
    </div>
</Layout>
