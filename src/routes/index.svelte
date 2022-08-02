<script context="module">
export const load = async ({ fetch }) => {
    return {
        props: {
            content: await (await fetch('/content.json')).json()
        }
    }
}
</script>
<svelte:head>
    <title>Jardin numérique de Stéphane Klein</title>
</svelte:head>

<script>
    export let content;
</script>

<p>Sommaire de mon jardin numérique :</p>

<ul>
    {#each content.pages as page}
        <li><a href={page.path}>{page?.metadata?.title ?? page.path}</a></li>
    {/each}
</ul>
