<script>
	/** @type {any} */
	export let onClick
	export let disabled = false
</script>

<button class="btn" on:click={onClick} {disabled}>Log in with Apple</button>
