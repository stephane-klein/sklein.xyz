<script>
    import { getContext } from "svelte";
    const global = getContext("global");
</script>
<svelte:head>
    {#if (global.public_goatcounter_url) && (global.browser_user_agent != "stephane-klein")}
        <script
            data-goatcounter={`${global.public_goatcounter_url}/count`}
            data-goatcounter-settings={`{"allow_local": "${global.goatcounter_allow_local || "false"}"}`}
            async src={`${global.public_goatcounter_url}/count.js`}></script>
    {/if}
    {#if (global.public_plausible_url)}
        <script defer data-domain={global.public_plausible_domain} src={global.public_plausible_url}></script>
    {/if}
</svelte:head>
