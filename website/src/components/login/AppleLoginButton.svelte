<script>
	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()

	/** @type {any} */
	export let disabled = false
</script>

<button class="btn" on:click={() => dispatch("click")} {disabled}>Log in with Apple</button>
