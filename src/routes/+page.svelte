<script lang="ts">
    import translate from "$lib/locales/locales";

    let currentMission: number = 0;
    let playerNumber: number = 0;

    import CurrentMission from "$lib/missions/CurrentMission.svelte";
    import Tutorial from "$lib/ui/Tutorial.svelte";
</script>

<h1 class="text-indigo-300 text-4xl pl-6 pt-4">The Kroew</h1>
<CurrentMission/>
{#if currentMission == 0}
<div class="flex flex-col items-center align-middle justify-center gap-4 mt-[100px]">
    <div class="font-semibold">{translate("player_number")}</div>
    <div class="w-32">
        <label for="Quantity" class="sr-only"> Quantity </label>

        <div class="flex items-center rounded border border-gray-200">
            <button
                type="button"
                class="size-10 leading-10 text-gray-600 transition hover:opacity-75"
            >
                &minus;
            </button>

            <input
                type="number"
                id="Quantity"
                value="1"
                class="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            />

            <button
                type="button"
                class="size-10 leading-10 text-gray-600 transition hover:opacity-75"
            >
                &plus;
            </button>
        </div>
    </div>
    <button
        class=" w-[200px] group flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
    >
        <span
            class="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500"
        >
            Launch the game
        </span>

        <span
            class="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500"
        >
            <svg
                class="size-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
            </svg>
        </span>
    </button>
    <Tutorial />
</div>
{:else}
<div class="absolute top-4 right-6 rounded-full p-2 border-4 border-indigo-50">&#10005</div>
{/if}
