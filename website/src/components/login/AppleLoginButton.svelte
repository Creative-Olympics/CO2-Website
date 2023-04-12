<script>
	/** @type {any} */
	export let onClick;
</script>

<button
	class="btn gap-3 normal-case btn-outline bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-700"
	on:click={onClick}
>
	<img src="/banner/providers/apple_logo.svg" alt="Apple's logo" />
	Sign in with Apple
</button>
