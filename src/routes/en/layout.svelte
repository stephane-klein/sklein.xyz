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
            <span>
                <button
                    id="theme-toggle"
                    accesskey="t" title="(Alt + T)"
                    on:click={
                        () => {
                            document.body.className.includes("theme-dark") ?
                                (document.body.classList.remove("theme-dark"), localStorage.setItem("pref-theme", "theme-light")) :
                                (document.body.classList.add("theme-dark"), localStorage.setItem("pref-theme", "theme-dark"));
                        }
                    }
                >
                    <svg id="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                    </svg>
                    <svg id="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                </button>
            </span>
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
