<script>
    export let data;
</script>


<h1>{data.frontmatter?.title ?? 'No title'}</h1>

{@html data.body}
