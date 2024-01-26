<!-- See https://github.com/sveltejs/kit/issues/627 to understand why +layout.svelte isn't used -->
<script>
    import "../../screen.css";
</script>

<article data-sveltekit-reload={true}>
    <header>
        <a href="/"><enhanced:img src="$lib/assets/avatar.png?w=50" alt="An alt text" /></a>
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

        <p>
            Ce(tte) œuvre est mise à disposition selon les termes de la
            <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"
                >Licence Creative Commons Attribution 4.0 International</a
            >.
        </p>
        <p>Je précise que toutes mes certitudes et pratiques sont temporaires.</p>

        <p>Analyse d'audience de ce site : <a href="https://stats.sklein.xyz">stats.sklein.xyz</a></p>
    </footer>
</article>
