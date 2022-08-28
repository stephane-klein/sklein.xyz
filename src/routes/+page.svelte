<svelte:head>
    <title>Jardin numérique de Stéphane Klein</title>
</svelte:head>

<script>
    export let data;
</script>

<div>
    <p>Bonjour 👋</p>

    <p>Mon nom est <a href="https://www.facebook.com/stephane.klein.moselle">Stéphane Klein</a>, <a href="https://fr.wikipedia.org/wiki/Metz">Messin</a> expatrié à Paris, <a href="https://fr.wikipedia.org/wiki/Software_craftsmanship">artisan développeur</a> et <a href="https://fr.wikipedia.org/wiki/Tennis_de_table">pongiste</a>.</p>

    <p>Actuellement <a href="https://fr.wikipedia.org/wiki/Directeur_de_la_technologie">CTO</a> chez <a href="https://spacefill.fr/">SpaceFill</a>, j'écris du code <a href="https://news.ycombinator.com/item?id=27256867">pour le plaisir</a> et pour gagner ma vie.</p>

    <p>Vous pouvez me retrouver sur
        <a href="https://social.stephane-klein.info/stephane-klein">Fediverse</a>,
        <a href="https://twitter.com/klein_stephane">Twitter</a>,
        <a href="https://www.linkedin.com/in/stephanekleinfrommetz/">LinkedIn</a>,
        <a href="https://www.reddit.com/user/sklein">Reddit</a>,
        <a href="https://stackoverflow.com/users/261061/st%c3%a9phane-klein">StackOverflow</a>
        et <a href="https://github.com/stephane-klein">GitHub</a>.
    </p>


    <p>Sommaire de mon <a href="https://joelhooks.com/digital-garden">jardin numérique</a> 🌱 :</p>

    <ul>
        {#each data.pages as page}
            <li><a href={page.path}>{page?.frontmatter?.title ?? page.path}</a></li>
        {/each}
    </ul>
</div>
