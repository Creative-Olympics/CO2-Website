<script>
	import Img from "@zerodevx/svelte-img"

	import MediaQuery from "$cmp/MediaQuery.svelte"

	import background from "$lib/assets/banner/background.png?run"
	import background_m from "$lib/assets/banner/background_m.png?run"
	import foreground from "$lib/assets/banner/foreground.png?run&lqip=0"
	import foreground_m from "$lib/assets/banner/foreground_m.png?run&lqip=0"
	import bees from "$lib/assets/banner/bees.png?run&lqip=0"
	import bees_m from "$lib/assets/banner/bees_m.png?run&lqip=0"
	import EventDesc from "$cmp/EventDesc.svelte"
</script>

<svelte:head>
	<title>Creative Olympics</title>
</svelte:head>

<div data-rahneiln3scroll-section>
	<div class="relative" style="height: calc(100vh + 7rem + 7rem)">
		<MediaQuery query="(max-width: 640px)" let:matches>
			<Img
				src={matches ? background_m : background}
				class="absolute h-full w-screen object-center object-cover pointer-events-none"
				alt=""
				data-rahneiln3scroll
				data-rahneiln3scroll-speed="1"
				data-rahneiln3scroll-position="top"
			/>
			<!--TODO Add load events -->
			<div class="absolute top-0 left-0 w-full h-screen">
				<slot />
			</div>
			<Img
				src={matches ? foreground_m : foreground}
				class="absolute h-full w-screen object-center object-cover pointer-events-none"
				alt=""
				data-rahneiln3scroll
				data-rahneiln3scroll-speed="4"
				data-rahneiln3scroll-position="top"
			/>
			<!--TODO Add load events -->
			<Img
				src={matches ? bees_m : bees}
				class="absolute h-full w-screen object-center object-cover pointer-events-none"
				alt=""
				data-rahneiln3scroll
				data-rahneiln3scroll-speed="8"
				data-rahneiln3scroll-position="top"
			/>
			<!--TODO Add load events -->
		</MediaQuery>
	</div>

	<div class="relative z-10" data-rahneiln3scroll-section>
		<EventDesc />
	</div>

	<div
		class="relative bg-red-600"
		style="height: calc(100vh + 7rem);"
	/>
</div>
