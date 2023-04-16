<script>
	// @ts-nocheck
	import YouTube from 'svelte-youtube';

	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';

	import { loaderReady } from '$lib/loader';
	import { scrollInstance } from '$lib/scroll';
	import { rc_trailer_ytbID } from '$lib/firebase';
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
		{#if $loaderReady}
			<YouTube
				videoId={$rc_trailer_ytbID}
				options={{ width: '100%', height: '100%', playerVars: { autoplay: 1 } }}
				class="relative w-screen h-screen"
				on:end={() => goto('/')}
			/>
		{/if}
	</div>
</div>
