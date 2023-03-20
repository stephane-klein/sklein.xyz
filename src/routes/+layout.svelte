<!-- I wish to follow as much as possible the https://brutalist-web.design/ recommandations -->
<script>
    import "../screen.css";
</script>

<article>
    <nav>
        <a href="/">Accueil</a>
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
    <main>
        <slot />
    </main>
    <footer>
        <hr />
        Ce(tte) œuvre est mise à disposition selon les termes de la
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"
            >Licence Creative Commons Attribution 4.0 International</a
        >.
    </footer>
</article>
