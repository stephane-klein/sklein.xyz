<script>
    import { page } from '$app/stores';
</script>
<svelte:head>
    <title>{$page.status}</title>
</svelte:head>

<div>
    {#if $page.status === 404}
        <h1>Page not found!</h1>

        <p><a href="/">Return to home page</a></p>
    {/if}
</div>
<style>
    div {
        margin: 2rem 0;
    }
</style>
