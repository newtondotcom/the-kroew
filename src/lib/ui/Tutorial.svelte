<script lang="ts">

    import translate from "$lib/locales/locales";
    import Card from "./Card.svelte";

</script>

<div class="font-bold text-indigo-400 text-6xl">
    {translate("how_to_play")}
</div>
<div class="font-semibold text-indigo-400 text-5xl">
    {translate("tutorial")}
</div>

<Card suite="hearts" value="A"/>