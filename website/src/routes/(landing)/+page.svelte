<script>
	import { goto } from "$app/navigation"
	import { fly, fade } from "svelte/transition"

	import { scrollInstance } from "$lib/scroll"
	import { loaderReady, logoLoaded } from "$lib/loader"

	import FlameTorchTextLogo from "$cmp/logo/FlameTorchTextLogo.svelte"

	export let loaded = true

	let watchTrailer = () => {
		$scrollInstance?.scrollTo("top", {
			callback: function () {
				$scrollInstance.update()
			}
		})
		goto("trailer")
	}
</script>

<div class="flex w-full h-full flex-col items-center justify-center">
	<div data-rahneiln3scroll data-rahneiln3scroll-speed="2">
		{#if loaded && $loaderReady}
			<div
				in:fly={{ delay: 1000, y: -450, duration: 900 }}
				out:fade={{ duration: 750 }}
				on:introstart={() => setTimeout(() => $scrollInstance.update(), 25)}
				on:introend={() => $scrollInstance.update()}
			>
				<FlameTorchTextLogo on:load={() => logoLoaded.set(true)} />
			</div>
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
					class="btn btn-gradient"
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
