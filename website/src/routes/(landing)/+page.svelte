<script>
	import { goto } from "$app/navigation"
	import { fly, fade } from "svelte/transition"
	import Img from "@zerodevx/svelte-img"

	import { scrollInstance } from "$lib/scroll"
	import { loaderReady } from "$lib/loader"

	import logo_full from "$lib/assets/logo/full.gif?run&lqip=0"

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

<div
	class="flex flex-col h-80 items-center justify-center pb-[10%]"
>
	<div data-rahneiln3scroll data-rahneiln3scroll-speed="2" data-rahneiln3scroll-position="top">
		{#if loaded && $loaderReady}
			<div
				in:fly={{ delay: 1000, y: -450, duration: 900 }}
				out:fade={{ duration: 750 }}
				on:introstart={() => setTimeout(() => $scrollInstance.update(), 25)}
				on:introend={() => $scrollInstance.update()}
			>
				<Img src={logo_full} class="w-72 pt-[100%] pointer-events-none" alt="Creative Olympics" />
				<!--TODO Add load events -->
			</div>
		{/if}
	</div>

	<div class="flex flew-row gap-4 h-12">
		<div
			data-rahneiln3scroll
			data-rahneiln3scroll-speed="2"
			data-rahneiln3scroll-delay="0.1"
			data-rahneiln3scroll-position="top"
		>
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
		<div
			data-rahneiln3scroll
			data-rahneiln3scroll-speed="2"
			data-rahneiln3scroll-delay="0.07"
			data-rahneiln3scroll-position="top"
		>
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
