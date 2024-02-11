<!-- See https://github.com/sveltejs/kit/issues/627 to understand why +layout.svelte isn't used -->
<script>
    import "../../screen.css";
</script>

<article data-sveltekit-reload={true}>
    <header>
        <a href="/"><enhanced:img src="$lib/assets/avatar.png?w=50;25" alt="An alt text" /></a>
        <nav>
            <a href="/en/">Home</a>
            <span>|</span>
            <a href="/fr/">French home page (most of my content is written in French)</a>
            <span>|</span>
            <a href="https://github.com/stephane-klein?tab=repositories">Projects</a>
        </nav>
    </header>
    <main>
        <slot />
    </main>
    <footer>
        <hr />

        <slot name="footer" />

        <p>
            This (these) work(s) is (are) made available under the terms of the
            <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"
                >Licence Creative Commons Attribution 4.0 International</a
            >.
        </p>
        <p>All my certainties and practices are temporary.</p>

        <p>Website audience analysis: <a href="https://stats.sklein.xyz">stats.sklein.xyz</a></p>
    </footer>
</article>
