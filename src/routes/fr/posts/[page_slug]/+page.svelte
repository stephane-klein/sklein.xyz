<!-- I wish to follow as much as possible the https://brutalist-web.design/ recommandations -->
<script>
    import Layout from "../../layout.svelte";
    import ReactionInset from "../../../../lib/reaction_inset.svelte";
    export let data;
</script>

<svelte:head>
    <title>{data.frontmatter?.title ?? "No title"} - Billet de Stéphane Klein</title>
    <meta name="description" content={data.frontmatter?.title} />
</svelte:head>

<Layout>
    <h1>{data.frontmatter?.title ?? "No title"}</h1>

    <div class="article-metadata">
        Publié le&nbsp;<time datetime="">{data.frontmatter?.published_at}</time>

        {#if data.frontmatter?.github_history_url}
            &nbsp;|&nbsp;<a href={data.frontmatter.github_history_url}>Historique git de l'article</a>
        {/if}
        {#if data.frontmatter?.english_url}
            &nbsp;|&nbsp;<a href={data.frontmatter.english_url}>This post in English</a>
        {/if}
    </div>

    {@html data.body}

    <ReactionInset />
</Layout>
