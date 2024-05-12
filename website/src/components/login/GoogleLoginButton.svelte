<script>
	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()

	/** @type {any} */
	export let disabled = false
</script>

<button
	class="btn gap-3 normal-case btn-outline bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-800"
	on:click={() => {
		dispatch("click")
	}}
	{disabled}
>
	<img src="banner/google_logo.svg" alt="Google's logo" />
	Sign in with Google
</button>
