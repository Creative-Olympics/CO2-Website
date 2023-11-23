<script>
	import { userTags } from "$lib/userTags"

	export let className = ""
	export let style = ""
	export { className as class }
	export let size = "md"

	/** @type {Array<string> | undefined} */
	export let tags = undefined
</script>

<div class="flex gap-1 {className}" {style}>
	{#if tags === undefined}
		<span class="badge badge-{size} badge-loading">Loading</span>
		<span class="badge badge-{size} badge-loading">Load</span>
	{:else if tags != null && tags.length > 0}
		{#each userTags as userTag}
			{#if tags.includes(userTag.id)}
				<span
					class="badge badge-{size} text-white"
					style="background-color: {userTag.color}; border-color: {userTag.color}"
				>
					{userTag.displayName}
				</span>
			{/if}
		{/each}
	{/if}
</div>
