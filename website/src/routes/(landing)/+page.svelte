<script>
	import { goto } from '$app/navigation';
	import { fly, fade } from 'svelte/transition';

	import { scrollInstance } from '$lib/scroll';
	import { loaderReady } from '$lib/loader';

	export let loaded = true;

	let watchTrailer = () => {
		$scrollInstance?.scrollTo('top', {
			callback: function () {
				$scrollInstance.update();
			}
		});
		goto('trailer');
	};
</script>

<div class="flex w-full h-full flex-col items-center justify-center">
	<div data-rahneiln3scroll data-rahneiln3scroll-speed="2">
		{#if loaded && $loaderReady}
			<img
				in:fly={{ delay: 1000, y: -450, duration: 900 }}
				out:fade={{ duration: 750 }}
				on:introstart={() => setTimeout(() => $scrollInstance.update(), 25)}
				on:introend={() => $scrollInstance.update()}
				src="banner/animated_logo.gif"
				alt="CO logo"
				class="w-80 h-80 -mb-6"
			/>
		{/if}
	</div>

	<div class="flex flew-row gap-4 h-12">
		<div data-rahneiln3scroll data-rahneiln3scroll-speed="2" data-rahneiln3scroll-delay="0.1">
			{#if loaded && $loaderReady}
				<a
					class="btn"
					in:fade={{ delay: 1800 }}
					out:fade={{ duration: 1000 }}
					on:introend={() => $scrollInstance.update()}
					href="about"
				>
					Learn about us
				</a>
			{/if}
		</div>
		<div data-rahneiln3scroll data-rahneiln3scroll-speed="2" data-rahneiln3scroll-delay="0.07">
			{#if loaded && $loaderReady}
				<button
					class="btn btn-accent text-white border-transparent hover:border-transparent bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 bg-size-200 bg-pos-10 hover:bg-pos-90"
					style="transition-property: background-position; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 400ms;"
					in:fade={{ delay: 2050 }}
					out:fade={{ duration: 1000 }}
					on:click={watchTrailer}
					on:introend={() => $scrollInstance.update()}
				>
					Watch Trailer
				</button>
			{/if}
		</div>
	</div>
</div>
