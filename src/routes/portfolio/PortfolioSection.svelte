<script lang="ts">
	export let sectionTitle: string | undefined;
	export let jobTitle: string | undefined;
	export let date: string | undefined;
	export let description: string[] | undefined;
</script>

<div class="portfolio-section">
	{#if sectionTitle}
		<h1>{sectionTitle}</h1>
	{/if}
	<div class="work-experience">
		<div class="work-experience-item">
			{#if jobTitle}
				<h3 class="work-experience-title">{jobTitle}</h3>
			{/if}
			{#if date}
				<h3 class="work-experience-date">{date}</h3>
			{/if}
			<ul class="work-experience-description">
				{#if description}
					{#if description.length === 1}
						{description}
					{:else}
						{#each description as description}
							<li>{description}</li>
						{/each}
					{/if}
				{/if}
			</ul>
		</div>
	</div>
	<slot />
</div>

<style>
	.portfolio-section {
		margin: 1rem 2rem 0 2rem;
		color: white;
	}

	.portfolio-section > h1 {
		text-decoration: underline;
		font-weight: 400;
	}

	.work-experience h3 {
		font-weight: 200;
	}

	.work-experience-date {
		margin: -10px 0 0 15px;
	}

	.work-experience-description > li {
		margin: 0 0 7px 0;
	}
</style>

