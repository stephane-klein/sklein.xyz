<script>
    import "../screen.css";
    import { setContext } from "svelte";
    export let data;
    setContext("global", data);
</script>

<slot />
