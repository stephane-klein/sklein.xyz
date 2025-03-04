<!-- See https://github.com/sveltejs/kit/issues/627 to understand why +layout.svelte isn't used -->
<script>
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from "svelte/easing";
    import { Hamburger } from "svelte-hamburgers";
    import ThemeToggle from "../../lib/ThemeToggle.svelte";

    let open;
</script>
<article>
    <header class="wide-screen" role="navigation">
        <a href="/"><enhanced:img src="$lib/assets/avatar.png?w=50;25" alt="An alt text" /></a>
        <nav>
            <a href="/fr/">Accueil</a>
            <span>|</span>
            <a href="/fr/cv/">CV</a>
            <span>|</span>
            <a href="/fr/services-freelance/" title="Services que je propose en freelance">Mes services</a>
            <span>|</span>
            <a href="/fr/availability-and-pricing/" title="Mes disponibilités et mes tarifs">Mes disponibilités et tarifs</a>
            <span>|</span>
            <a href="https://notes.sklein.xyz" title="Mes connaissances personnelles en accès public">Mes notes</a>
            <span>|</span>
            <a href="/en/">English home page</a>

            <span>
                <ThemeToggle />
            </span>
        </nav>
    </header>
    <header class="narrow-screen" role="navigation">
        <div class="top">
            <div style="flex-grow: 1">
            <a href="/"><enhanced:img src="$lib/assets/avatar.png?w=50;25" alt="An alt text" /></a>
            </div>
            <ThemeToggle />
            <Hamburger bind:open --color="var(--text-color)" />
        </div>
        {#if open}
        <nav>
            <a transition:fly={{ y: -15, delay: 50 }} href="/fr/">Accueil</a>
            <a transition:fly={{ y: -15, delay: 100 }} href="/fr/cv/">CV</a>
            <a transition:fly={{ y: -15, delay: 150 }} href="/fr/services-freelance/">Services que je propose en freelance</a>
            <a transition:fly={{ y: -15, delay: 200 }} href="/fr/availability-and-pricing/">Mes disponibilités et mes tarifs</a>
            <a transition:fly={{ y: -15, delay: 250 }} href="/en/">English home page</a>
        </nav>
        <div class="bar" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
        {/if}
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
