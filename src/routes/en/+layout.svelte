<!-- I wish to follow as much as possible the https://brutalist-web.design/ recommandations -->
<script>
    import "../../screen.css";
</script>

<article data-sveltekit-reload={true}>
    <nav>
        <a href="/en/">Home</a>
        <span>|</span>
        <a href="/fr/">French home page (all my content is here)</a>
        <span>|</span>
        <a href="https://github.com/stephane-klein?tab=repositories">Projects</a>
    </nav>
    <main>
        <slot />
    </main>
</article>
