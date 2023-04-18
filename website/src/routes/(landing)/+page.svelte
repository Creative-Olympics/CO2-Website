<script>
	import Img from "@zerodevx/svelte-img"

	import { goto } from "$app/navigation"
	import { fly, fade } from "svelte/transition"

	import { scrollInstance } from "$lib/scroll"
	import { loaderReady, logoLoaded } from "$lib/loader"

	import logo_anim_lg from "$lib/assets/logo/anim_lg.gif?run&lqip=0&gif"

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
				class="-mb-6 relative w-80 h-80"
			>
				<Img
					class="absolute w-80 h-80"
					src={logo_anim_lg}
					alt="Creative Olympics logo"
					width={320}
					height={320}
					loading="eager"
					on:load={() => logoLoaded.set(true)}
				/>
				<picture>
					<source
						srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.webp"
						type="image/webp"
					/>
					<img
						class="absolute"
						src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif"
						alt="🔥"
						width="160"
						height="160"
					/>
				</picture>
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
