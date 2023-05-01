<script>
	import { userTags } from "$lib/userTags"

	export let className = ""
	export let style = ""
	export { className as class }
	export let size = "md"

	/** @type {Array<string>} */
	export let tags = []
</script>

<div class="flex gap-1 {className}" {style}>
	{#each userTags as userTag}
		{#if tags.includes(userTag.id)}
			<span
				class="badge badge-{size}"
				style="background-color: {userTag.color}; border-color: {userTag.color}"
			>
				{userTag.displayName}
			</span>
		{/if}
	{/each}
</div>
