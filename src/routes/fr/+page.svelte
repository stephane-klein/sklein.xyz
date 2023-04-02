<script>
    import Layout from "./layout.svelte";
    export let data;
</script>

<svelte:head>
    <title>Jardin numérique de Stéphane Klein</title>
    <meta name="description" content="Jardin numérique de Stéphane Klein" />
</svelte:head>

<Layout>
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
            Actuellement <a href="https://fr.wikipedia.org/wiki/Directeur_de_la_technologie">CTO</a> chez
            <a href="https://spacefill.fr/">SpaceFill</a>, j'écris du code
            <a href="https://news.ycombinator.com/item?id=27256867">pour le plaisir</a> et pour gagner ma vie.
        </p>

        <p>
            Vous pouvez me retrouver sur
            <a href="https://social.stephane-klein.info/stephane-klein">Fediverse (mon compte Mastodon)</a>,
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

        <p>Sommaire de mon <a href="https://joelhooks.com/digital-garden">jardin numérique</a> 🌱 :</p>

        <ul>
            {#each data.pages as page}
                <li><a href={page.path}>{page?.frontmatter?.title ?? page.path}</a></li>
            {/each}
        </ul>
    </div>
    <p slot="footer"><a href="https://sklein.xyz/reports/report.html">Voir le Lighthouse score de cette page</a></p>
</Layout>
