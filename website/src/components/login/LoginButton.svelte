<script>
	import { createEventDispatcher } from "svelte"

	export let logo
	export let backgroundLogo
	export let text
	export let additionalClassName = ""
	export let tabIndex = 0
	export let ariaLabel

	const dispatch = createEventDispatcher()

	export let disabled = false
</script>

<button
	on:click={() => {
		dispatch("click")
	}}
	{disabled}
	class={`${additionalClassName} border border-solid h-10 focus:outline-none transition duration-150 inline-flex items-center rounded pl-0.5 pr-2 text-sm font-semibold tracking-wider`}
	{tabIndex}
	aria-label={ariaLabel}
>
	<div
		class="w-9 h-9 mr-2 flex items-center justify-center"
		style="background-color: {backgroundLogo};"
	>
		<span class="w-5 h-5 bg-no-repeat bg-center" style="background-image: {logo};" />
	</div>
	{text}
</button>
