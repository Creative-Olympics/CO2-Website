<script>
	/** @type {any} */
	export let onClick;
</script>

<button
	class="btn gap-3 normal-case btn-outline bg-white text-apple-600 hover:bg-gray-100 hover:text-apple-700"
	on:click={onClick}
>
	<img src="banner/apple_logo.svg" alt="Apple's logo" />
	Log in with Apple
</button>
