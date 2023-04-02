<!-- See https://github.com/sveltejs/kit/issues/627 to understand why +layout.svelte isn't used -->
<script>
    import "../../screen.css";
    import Avatar from "$lib/assets/avatar.png?w=50&webp";
</script>

<article>
    <header>
        <a href="/"><img src={Avatar} alt="Avatar" /></a>
        <nav>
            <a href="/fr/">Accueil</a>
            <span>|</span>
            <a href="/en/">English home page</a>
            <span>|</span>
            <a href="https://github.com/stephane-klein?tab=repositories">Projets</a>
            <!-- Todo, see https://github.com/stephane-klein/sklein.xyz/issues/58
            <span>|</span>
            <a href="/">Now</a>
            -->
            <span>|</span>
            <a href="https://cv.stephane-klein.info">CV</a>
            <!-- Todo, see https://github.com/stephane-klein/sklein.xyz/issues/59
            <span>|</span>
            <a href="/">RSS</a>
            -->
        </nav>
    </header>
    <main>
        <slot />
    </main>
    <footer>
        <hr />

        <slot name="footer" />

        Ce(tte) œuvre est mise à disposition selon les termes de la
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"
            >Licence Creative Commons Attribution 4.0 International</a
        >.
    </footer>
</article>
