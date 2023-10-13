<script>
	import Img from "@zerodevx/svelte-img"
	import isIos from "is-ios"
	import { onMount } from "svelte"
	import { fade } from "svelte/transition";
	import { quintOut } from "svelte/easing"

	import { bannerLoadLevel, finishedLoading } from "$lib/loader"
	import { scrollInstance } from "$lib/scroll"

	import MediaQuery from "$cmp/MediaQuery.svelte"
	import EventDesc from "$cmp/EventDesc.svelte"
	import Footer from "$cmp/footer/Footer.svelte"
	import CountdownBanner from "$cmp/CountdownBanner.svelte";

	import background from "$lib/assets/banner/background.png?as=run"
	import background_m from "$lib/assets/banner/background_m.png?as=run"
	import foreground from "$lib/assets/banner/foreground.png?as=run&lqip=0"
	import foreground_m from "$lib/assets/banner/foreground_m.png?as=run&lqip=0"
	import bees from "$lib/assets/banner/bees.png?as=run&lqip=0"
	import bees_m from "$lib/assets/banner/bees_m.png?as=run&lqip=0"

	const DEBUG = false

	let vidEnded = false

	onMount(() => {
		$scrollInstance.update()
	})

	//bannerLoadLevel.subscribe((v) => toasts.warning(v.toString()))
	finishedLoading.subscribe((v) => {
		// @ts-ignore
		if (v) document.getElementById("RahNeil_N3:CO:hbgiapv")?.play()
	})
</script>

<svelte:head>
	<title>Creative Olympics</title>
</svelte:head>

<div class="flex flex-col" data-rahneiln3scroll-section>
	{#if DEBUG}
		<div class="relative" style="height: calc(100vh + 7rem + 7rem); background-image: linear-gradient(to top right in oklab, #fff 0%, #000 0% 20%, #fff 0% 40%, #000 0% 60%, #fff 0% 80%, #000 0% 100%);" />
	{:else}
		<div class="relative" style="height: calc(100vh + 7rem + 7rem)">
			<MediaQuery query="(max-width: 640px)" let:matches>
				<Img
					src={matches ? background_m : background}
					class="absolute h-full w-screen object-center object-cover pointer-events-none select-none"
					alt=""
					data-rahneiln3scroll
					data-rahneiln3scroll-speed="1"
					data-rahneiln3scroll-position="top"
					on:load={() => bannerLoadLevel.update((v) => v + 1)}
				/>
				<!--TODO Add load events -->
				<div class="absolute top-0 left-0 w-full h-screen">
					<slot />
				</div>
				<Img
					src={matches ? foreground_m : foreground}
					class="absolute h-full w-screen object-center object-cover pointer-events-none select-none"
					alt=""
					data-rahneiln3scroll
					data-rahneiln3scroll-speed="4"
					data-rahneiln3scroll-position="top"
					on:load={() => bannerLoadLevel.update((v) => v + 1)}
				/>
				<!--TODO Add load events -->
				<Img
					src={matches ? bees_m : bees}
					class="absolute h-full w-screen object-center object-cover pointer-events-none select-none"
					alt=""
					data-rahneiln3scroll
					data-rahneiln3scroll-speed="8"
					data-rahneiln3scroll-position="top"
					on:load={() => bannerLoadLevel.update((v) => v + 1)}
				/>
				{#if !vidEnded}
					<video
						class="absolute top-0 left-0 h-full w-screen object-center object-cover pointer-events-none select-none"
						id="RahNeil_N3:CO:hbgiapv"
						playsinline
						disableremoteplayback
						muted
						aria-hidden="true"
						src="banner/in{matches ? '_m' : ''}.mp4"
						preload="auto"
						on:error={() => {
							bannerLoadLevel.update((v) => v + 1)
							vidEnded = true
						}}
						on:canplay={() => bannerLoadLevel.update((v) => v + 1)}
						on:loadedmetadata={() => {
							if (isIos) bannerLoadLevel.update((v) => v + 1)
						}}
						on:ended={() => (vidEnded = true)}
						out:fade={{ duration: 1500, easing: quintOut }}
					/>
				{/if}
			</MediaQuery>
		</div>
	{/if}

	<div class="relative z-10" data-rahneiln3scroll-section>
		<EventDesc />
	</div>

	<CountdownBanner />

	<Footer />
</div>
