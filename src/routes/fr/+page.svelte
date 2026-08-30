<script>
    import Layout from "./layout.svelte";
    import InitWebAnalytics from "$lib/InitWebAnalytics.svelte";
    export let data;
</script>

<svelte:head>
    <title>Jardin numérique de Stéphane Klein</title>
    <meta name="description" content="Jardin numérique de Stéphane Klein" />
</svelte:head>
<InitWebAnalytics />

<Layout>
    <div>
        <p>This page in English: <a href="/en/">https://sklein.xyz/en/</a>.</p>

        <p>Bonjour 👋</p>

        <p>
            Mon nom est <a href="https://www.facebook.com/stephane.klein.moselle">Stéphane Klein</a>,
            <a href="https://fr.wikipedia.org/wiki/Metz">Messin</a>
            arrivé à Paris en 2016, <a href="https://fr.wikipedia.org/wiki/Software_craftsmanship">artisan développeur</a> et
            <a href="https://fr.wikipedia.org/wiki/Tennis_de_table">pongiste</a>.
        </p>

        <p>
            Depuis mars 2026, je suis en année sabbatique : j'ai choisi de prendre douze mois pour
            progresser en développement assisté par IA. Je développe des projets concrets — des outils que j'utilise au
            quotidien, des prototypes, et des projets qui pourront être utiles à d'autres — je fais des
            contributions open source, et je construis des méthodes et des outils pour coder plus vite
            et mieux avec les agents IA.
        </p>

        <p>
            Vous pouvez suivre mes notes sur <a href="https://notes.sklein.xyz/">notes.sklein.xyz</a> et découvrir mes
            projets sur <a href="https://github.com/stephane-klein?tab=repositories">mon profil GitHub</a>.
        </p>

        <p>
            Vous pouvez me retrouver sur
            <a rel="me" href="https://social.coop/@stephane_klein">social.coop/@stephane_klein</a> (mon compte <a
                href="https://notes.sklein.xyz/Mastodon/">Mastodon</a>)
            ainsi que sur
            <a href="https://www.linkedin.com/in/stephanekleinfrommetz/">LinkedIn</a>,
            <a href="https://www.reddit.com/user/sklein">Reddit</a>,
            <a href="https://stackoverflow.com/users/261061/st%c3%a9phane-klein">StackOverflow</a> et
            <a href="https://github.com/stephane-klein">GitHub</a>.
        </p>

        <p>Pour me contacter (par ordre de préférence):</p>

        <ul>
            <li><a href="https://fr.wikipedia.org/wiki/Signal_(application)">Signal</a> :
                <a href="tel:+33661487604">06 61 48 76 04</a>
                ou e-mail : <a href="mailto:contact@stephane-klein.info">contact@stephane-klein.info</li>
            <li>WhatApps : <a href="tel:+33661487604">06 61 48 76 04</a></li>
            <li>Téléphone : <a href="tel:+33661487604">06 61 48 76 04</a> (il est préférable de m'envoyer un SMS avant de
                me téléphoner)</li>
        </ul>

        <p>Depuis avril 2024, je poste principalement des messages sur mon <a
            href="https://notes.sklein.xyz/Personal%20knowledge%20management/">Personal knowledge management</a> ouvert
            : <a href="https://notes.sklein.xyz/">notes.sklein.xyz</a>.

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

        <p>
            Le <em>repository</em> GitHub <a href="https://github.com/stephane-klein/dotfiles">dotfiles</a> contient la
            configuration de mes
            <em>desktops</em> gérés par <a href="https://www.chezmoi.io/">ChezMoi</a> (<em
                >dotfile configuration manager</em
            >).
        </p>
    </div>
    <p slot="footer"><a rel="external" href="/reports/report.html">Voir le Lighthouse score de cette page</a></p>
</Layout>
