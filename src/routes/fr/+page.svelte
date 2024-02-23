<script>
    import Layout from "./layout.svelte";
    export let data;
</script>

<svelte:head>
    <title>Jardin numérique de Stéphane Klein</title>
    <meta name="description" content="Jardin numérique de Stéphane Klein" />
    {#if (data.public_goatcounter_url) && (data.browser_user_agent != "stephane-klein")}
        <script
            data-goatcounter={`${data.public_goatcounter_url}/count`}
            data-goatcounter-settings={`{'allow_local': false}`}
        async src={`${data.public_goatcounter_url}/count.js`}></script>
    {/if}
</svelte:head>

<Layout>
    { data.browser_user_agent }
    <div>
        <p>This page in English: <a href="/en/">https://sklein.xyz/en/</a>.</p>

        <p>Bonjour 👋</p>

        <p>
            Mon nom est <a href="https://www.facebook.com/stephane.klein.moselle">Stéphane Klein</a>,
            <a href="https://fr.wikipedia.org/wiki/Metz">Messin</a>
            expatrié à Paris, <a href="https://fr.wikipedia.org/wiki/Software_craftsmanship">artisan développeur</a> et
            <a href="https://fr.wikipedia.org/wiki/Tennis_de_table">pongiste</a>.
        </p>

        <p>
            Ancien <a href="https://fr.wikipedia.org/wiki/Directeur_de_la_technologie">CTO</a> chez
            <a href="https://spacefill.fr/">SpaceFill</a> (2019-2023), j'écris du code
            <a
                href="https://web.archive.org/web/20210624114811/https://web.eecs.utk.edu/~azh/blog/makinguselessstuff.html"
                >pour le plaisir</a
            >
            (<a href="https://news.ycombinator.com/item?id=27256867">comments HN</a>) et pour gagner ma vie.
        </p>

        <p>
            Vous pouvez me retrouver sur
            <a rel="me" href="https://mamot.fr/@stephane_klein">mamot.fr/@stephane_klein</a> (mon compte Mastodon),
            <a href="https://twitter.com/klein_stephane">Twitter</a> (que je n'utilise plus trop depuis novembre 2022),
            <a href="https://www.linkedin.com/in/stephanekleinfrommetz/">LinkedIn</a>,
            <a href="https://www.reddit.com/user/sklein">Reddit</a>,
            <a href="https://stackoverflow.com/users/261061/st%c3%a9phane-klein">StackOverflow</a>
            et <a href="https://github.com/stephane-klein">GitHub</a>.
        </p>

        <p>
            J'essaie de mettre en pratique les concepts <a href="https://www.swyx.io/learn-in-public/">#LearnInPublic</a
            >
            et <code>#WorkInPublic</code>, par exemple :
            <a href="https://github.com/stephane-klein/backlog/issues"
                >mon
                <em>backlog public</em></a
            >, plusieurs
            <a href="https://github.com/stephane-klein?tab=repositories&q=playground&type=&language=&sort="
                >playgrounds</a
            >…
        </p>

        <p>
            Le <em>repository</em> GitHub <a href="https://github.com/stephane-klein/dotfiles">dotfiles</a> contient la
            configuration de mes
            <em>desktops</em> gérés par <a href="https://www.chezmoi.io/">ChezMoi</a> (<em
                >dotfile configuration manager</em
            >).
        </p>

        <p>Billets de blog :</p>

        <ul>
            {#each data.posts as post}
                <li><a href={post.instance_path}>{post.published_at} : {post.title}</a></li>
            {/each}
        </ul>

        <p>Sommaire de mon <a href="https://joelhooks.com/digital-garden">jardin numérique</a> 🌱 :</p>

        <ul>
            {#each data.pages as page}
                <li><a href={page.instance_path}>{page.title}</a></li>
            {/each}
        </ul>

        <p>Différence entre une "feuille" de mon jardin numérique et un billet de blog ?<br/>
        Le contenu des billets de blog ne sont pas modifiés (corrigés, améliorés…) après publication.<br />
        Les "feuilles" du jardin numérique sont continuellement actualisées.</p>
    </div>
    <p slot="footer"><a rel="external" href="/reports/report.html">Voir le Lighthouse score de cette page</a></p>
</Layout>
