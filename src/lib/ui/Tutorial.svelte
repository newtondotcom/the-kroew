<script lang="ts">
    import translate from "$lib/locales/locales";
    import Card from "./Card.svelte";
</script>

<div class="font-bold text-indigo-400 text-4xl">
    {translate("how_to_play")}
</div>
<div class="font-semibold text-indigo-400 text-3xl">
    {translate("tutorial")}
</div>

<div class="font-semibold text-indigo-400 text-5xl">
    {translate("regular")}
</div>
<div class="flex flex-row">
    <Card suite="hearts" value="A"/>
</div>

<div class="font-semibold text-indigo-400 text-5xl">
    {translate("trumps")}
</div>
<div class="flex flex-row">
    <Card suite="hearts" value="A"/>
</div>