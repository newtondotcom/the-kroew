<script lang="ts">
import M1 from "./M1.svelte";
let currentMission = 1;
</script>

{#if currentMission === 1}
<M1/>
{/if}