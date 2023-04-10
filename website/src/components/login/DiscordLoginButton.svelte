<script>
	/** @type {any} */
	export let onClick;
</script>

<button
	class="btn gap-3 normal-case btn-outline bg-discord-600 text-white hover:bg-discord-700 hover:text-white"
	on:click={onClick}
>
	<img src="banner/discord_logo.svg" alt="Discord's logo" />
	Sign in with Discord
</button>
