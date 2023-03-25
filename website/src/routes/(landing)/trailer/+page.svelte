<script>
	// @ts-nocheck

	import { fade } from 'svelte/transition';

	import { loaderReady } from '$lib/loader';
	import YouTube from 'svelte-youtube';

	export let loaded = true;
</script>

<div
	class="absolute w-screen bg-black"
	style="height: calc(100vh + 120px); z-index: 1000"
	in:fade={{ duration: 1000, delay: 1000 }}
	out:fade={{ duration: 1000 }}
>
	<YouTube
		videoId="2g811Eo7K8U"
		options={{ width: '100%', height: '100%', playerVars: { autoplay: 1 } }}
		class="relative w-screen h-screen"
	/>
</div>
