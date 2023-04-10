<script>
	/** @type {any} */
	export let onClick;
</script>

<button
	class="btn gap-3 normal-case btn-outline bg-white text-google-600 hover:bg-gray-100 hover:text-google-700"
	on:click={onClick}
>
	<img src="banner/google_logo.svg" alt="Google's logo" />
	Sign in with Google
</button>
