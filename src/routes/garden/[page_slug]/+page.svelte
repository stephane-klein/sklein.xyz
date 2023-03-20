<script>
    export let data;
</script>

<h1>{data.frontmatter?.title ?? "No title"}</h1>

<dl>
    <dt>Publié le :&nbsp;</dt>
    <dd>{data.frontmatter?.created_at ?? "-"}</dd>
</dl>

{@html data.body}
