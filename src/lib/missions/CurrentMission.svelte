<script lang="ts">
export let currentMission:number;

import M1 from "./M1.svelte";

</script>

{#if currentMission === 1}
<M1/>
{/if}