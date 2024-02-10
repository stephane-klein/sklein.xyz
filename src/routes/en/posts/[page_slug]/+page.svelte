<!-- I wish to follow as much as possible the https://brutalist-web.design/ recommandations -->
<script>
    import Layout from "../../layout.svelte";
    import ReactionInset from "../../../../lib/reaction_inset.en.svelte";
    export let data;
</script>

<svelte:head>
    <title>{data.frontmatter?.title ?? "No title"} - Stéphane Klein posts</title>
    <meta name="description" content={data.frontmatter?.title} />
</svelte:head>

<Layout>
    <h1>{data.frontmatter?.title ?? "No title"}</h1>

    <div class="article-metadata">
        Published at&nbsp;<time datetime="">{data.frontmatter?.published_at}</time>

        {#if data.frontmatter?.github_history_url}
            &nbsp;|&nbsp;<a href={data.frontmatter.github_history_url}>GitHub post history</a>
        {/if}
        {#if data.frontmatter?.french_url}
            &nbsp;|&nbsp;<a href={data.frontmatter.french_url}>Cet article en Français</a>
        {/if}

    </div>

    {@html data.body}

    <ReactionInset />
</Layout>
