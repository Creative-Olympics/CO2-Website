<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import { loaderReady } from '$lib/loader';

	export let loaded = true;

	onMount(() => {
		mounted = true;
	});
</script>

	<div
		class="absolute w-full bg-black"
		style="height: calc(100vh + 120px); z-index: 1000"
		in:fade={{ duration: 1000, delay: 1000 }}
        out:fade={{ duration: 1000 }}
	/>
