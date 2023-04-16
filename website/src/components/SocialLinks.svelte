<script>
	import Icon from "./Icon.svelte"

	export let links = [{ icon: "home", url: "https://test.com/", tooltip: "Tooltip" }]
</script>

<div class="flex gap-3">
	{#each links as item}
		<a class="btn btn-circle btn-sm btn-outline" target="_blank" href={item.url} rel="noreferrer">
			<Icon class="w-5 h-5">{item.icon}</Icon>
		</a>
	{/each}
</div>
