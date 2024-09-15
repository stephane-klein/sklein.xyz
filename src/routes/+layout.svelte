<script>
    import "../screen.css";
    import gibbonReplayJs from 'gibbon-replay-js';
    import { setContext, onMount } from 'svelte';
    import { browser } from '$app/environment';
    export let data;
    setContext("global", data);

    onMount(async() => {
        if (browser) {
            if (data.gibbon_replay_url) {
                gibbonReplayJs.init(new URL("/record/", data.gibbon_replay_url).toString());
            }
        }
    });

</script>

<slot />
