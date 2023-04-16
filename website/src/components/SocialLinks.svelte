<script>
	import Icon from "$cmp/Icon.svelte"

	export let className = ""
	export let style = ""
	export { className as class }

	export let tooltipDirection = "up"

	export let links = [
		{ icon: "home", url: "https://test.com/", description: "Example link", tooltip: true }
	]
</script>

<div class="flex gap-3 {className}" {style}>
	{#each links as item}
		{#if item.description} <!-- To ensure a description is provided! -->
			{#if item.tooltip}
				<div
					class="tooltip {tooltipDirection != 'up' && 'tooltip-' + tooltipDirection}"
					data-tip={item.description}
				>
					<a
						class="btn btn-circle btn-sm btn-outline"
						target="_blank"
						href={item.url}
						rel="noreferrer"
						aria-label={item.description}
					>
						<Icon class="w-5 h-5">{item.icon}</Icon>
					</a>
				</div>
			{:else}
				<a
					class="btn btn-circle btn-sm btn-outline"
					target="_blank"
					href={item.url}
					rel="noreferrer"
					aria-label={item.description}
				>
					<Icon class="w-5 h-5">{item.icon}</Icon>
				</a>
			{/if}
		{/if}
	{/each}
</div>
