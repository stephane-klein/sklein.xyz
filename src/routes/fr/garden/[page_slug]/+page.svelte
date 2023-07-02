<!-- I wish to follow as much as possible the https://brutalist-web.design/ recommandations -->
<script>
    import Layout from "../../layout.svelte";
    export let data;
</script>

<svelte:head>
    <title>{data.frontmatter?.title ?? "No title"} - Jardin numérique de Stéphane Klein</title>
    <meta name="description" content={data.frontmatter?.title} />
</svelte:head>

<Layout>
    <h1>{data.frontmatter?.title ?? "No title"}</h1>

    <div class="article-metadata">
        Première publication :&nbsp;<time datetime="">{data.frontmatter?.created_at}</time>

        {#if data.frontmatter?.github_history}
            &nbsp;|&nbsp;<a href={data.frontmatter.github_history}>Historique git de l'article</a>
        {/if}
    </div>

    {@html data.body}
</Layout>
