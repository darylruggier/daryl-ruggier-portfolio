<script lang="ts">
    export let title: string;
    export let description: string | undefined;
    export let technologiesUsed: string[] | undefined;
</script>

<div class="card flex flex-col p-4 pb-2.5">
    <h3 class="h3 font-semibold pb-4">{title}</h3>
    <p class="pb-4 text-sm md:text-base">{description}</p>
    <hr />
    <div class="pt-4">
        {#if technologiesUsed}
            {#each technologiesUsed as technology}
                <span class="badge variant-filled mr-1.5 mb-1.5">{technology}</span>
            {/each}
        {/if}
    </div>
</div>