<script>
	import { createEventDispatcher } from "svelte"

	export let logo
	export let backgroundLogo
	export let text
	export let addClass = ""
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
	class={`${addClass} border gap-2 border-solid h-10 focus:outline-none inline-flex items-center justify-center rounded pl-0.5 pr-2 text-sm hover:bg-gray-100 hover:text-gray-800`}
	{tabIndex}
	aria-label={ariaLabel}
>
	<img src={logo} class="w-5 h-5" />
	{text}
</button>
