<!-- See https://github.com/sveltejs/kit/issues/627 to understand why +layout.svelte isn't used -->
<script>
    import ThemeToggle from "../../lib/ThemeToggle.svelte";
</script>
<article data-sveltekit-reload={true}>
    <header role="navigation">
        <a href="/"><enhanced:img src="$lib/assets/avatar.png?w=50;25" alt="An alt text" /></a>
        <nav>
            <a href="/fr/">Accueil</a>
            <!-- Todo, see https://github.com/stephane-klein/sklein.xyz/issues/58
            <span>|</span>
            <a href="/">Now</a>
            -->
            <span>|</span>
            <a href="/fr/cv/">CV</a>
            <span>|</span>
            <a href="/fr/services-freelance/" title="Service que je propose en freelance">Mes services</a>
            <span>|</span>
            <a href="/fr/availability-and-pricing/" title="Mes disponibilités et mes tarifs">Mes disponibilités et tarifs</a>
            <span>|</span>
            <a href="/en/">English_home_page</a>

            <!-- Todo, see https://github.com/stephane-klein/sklein.xyz/issues/59
            <span>|</span>
            <a href="/">RSS</a>
            -->
            <span>
                <ThemeToggle />
            </span>
        </nav>
    </header>
    <main role="main">
        <slot />
    </main>
    <footer role="contentinfo">
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
