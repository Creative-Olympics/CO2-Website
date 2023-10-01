<script>
	import { goto } from "$app/navigation"
	import { fly, fade } from "svelte/transition"
	import Img from "@zerodevx/svelte-img"

	import { scrollInstance } from "$lib/scroll"
	import { finishedLoading } from "$lib/loader"

	import logo_full from "$lib/assets/logo/full.gif?run&lqip=0"

	const DELAY_MIN = 3500

	let watchTrailer = () => {
		$scrollInstance?.scrollTo("top", {
			callback: function () {
				$scrollInstance.update()
			}
		})
		goto("trailer")
	}
</script>

<div class="flex flex-col h-full items-center justify-center pb-[10%]">
	<div data-rahneiln3scroll data-rahneiln3scroll-speed="2" data-rahneiln3scroll-position="top">
		{#if $finishedLoading}
			<div
				class="h-full"
			>
				<Img
					src={logo_full}
					class="w-60 sm:w-72 pt-[5%] sm:pt-[10%] pointer-events-none select-none"
					alt="Creative Olympics"
				/>
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
			{#if $finishedLoading}
				<a
					class="btn"
					in:fade={{ delay: DELAY_MIN }}
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
			{#if $finishedLoading}
				<button
					class="btn btn-gradient-secondary text-white"
					in:fade={{ delay: DELAY_MIN + 250 }}
					on:click={watchTrailer}
				>
					Watch Trailer
				</button>
			{/if}
		</div>
	</div>
</div>
