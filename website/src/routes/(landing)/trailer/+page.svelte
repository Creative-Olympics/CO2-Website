<script>
	// @ts-nocheck

	import { fade } from 'svelte/transition';

	import { loaderReady } from '$lib/loader';
	import YouTube from 'svelte-youtube';
	import { scrollInstance } from '$lib/scroll';
	import { goto } from '$app/navigation';

	export let loaded = true;
</script>

<div class="relative w-full h-full">
	<div
		class="absolute w-screen bg-black"
		style="height: calc(100vh + 120px); z-index: 1000"
		in:fade={{ duration: 1000, delay: 1000 }}
		out:fade={{ duration: 1000 }}
		on:introend={() => $scrollInstance.update()}
		on:outroend={() => $scrollInstance.update()}
	>
		{#if $loaderReady && loaded}
			<YouTube
				videoId="2g811Eo7K8U"
				options={{ width: '100%', height: '100%', playerVars: { autoplay: 1 } }}
				class="relative w-screen h-screen"
				on:end={() => goto('/')}
			/>
		{/if}
	</div>
</div>
