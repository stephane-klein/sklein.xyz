<!-- I wish to follow as much as possible the https://brutalist-web.design/ recommandations -->
<script>
    import Layout from "../../layout.svelte";
    import ReactionInset from "../../../../lib/reaction_inset.svelte";
    export let data;
</script>

<svelte:head>
    <title>{data.frontmatter?.title ?? "No title"} - Jardin numérique de Stéphane Klein</title>
    <meta name="description" content={data.frontmatter?.title} />
    {#if (data.frontmatter?.private || true) === false}
        <script
            data-goatcounter="%sveltekit.env.PUBLIC_GOATCOUNTER_URL%/count"
            data-goatcounter-settings={`{'allow_local': false}`}
            async src="%sveltekit.env.PUBLIC_GOATCOUNTER_URL%/count.js"></script>
    {/if}
</svelte:head>

<Layout>
    <h1>{data.frontmatter?.title ?? "No title"}</h1>

    <div class="article-metadata">
        Première publication :&nbsp;<time datetime="">{data.frontmatter?.published_at}</time>

        {#if data.frontmatter?.last_updated_at}
            &nbsp;|&nbsp; Dernière mise à jour :&nbsp;<time datetime="">{data.frontmatter.last_updated_at}</time>
        {/if}
        {#if data.frontmatter?.github_history_url}
            &nbsp;|&nbsp;<a href={data.frontmatter.github_history_url}>Historique git de l'article</a>
        {/if}
    </div>

    {@html data.body}

    <ReactionInset />
</Layout>
