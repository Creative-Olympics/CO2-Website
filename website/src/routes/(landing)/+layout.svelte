<script>
	import Img from "@zerodevx/svelte-img"

	import MediaQuery from "$cmp/MediaQuery.svelte"

	import background from "$lib/assets/banner/background.png?run"
	import background_m from "$lib/assets/banner/background_m.png?run"
	import foreground from "$lib/assets/banner/foreground.png?run&lqip=0"
	import foreground_m from "$lib/assets/banner/foreground_m.png?run&lqip=0"
	import bees from "$lib/assets/banner/bees.png?run&lqip=0"
	import bees_m from "$lib/assets/banner/bees_m.png?run&lqip=0"

	var contentHeight
	const DEBUG = false
</script>

<svelte:head>
	<title>Creative Olympics</title>
</svelte:head>

<div data-rahneiln3scroll-section>
	{#if DEBUG}
		<div
			class="relative"
			style="height: calc(100vh + 7rem + 7rem); background-image: linear-gradient(to top right in oklab, #f00 0%, #000 0% 20%, #f00 0% 40%, #000 0% 60%, #f00 0% 80%, #000 0% 100%);"
		/>
	{:else}
		<div class="relative" style="height: calc(100vh + 7rem + 7rem)">
			<MediaQuery query="(max-width: 480px)" let:matches>
				<Img
					src={matches ? background_m : background}
					class="absolute h-full w-screen object-center object-cover"
					alt=""
					data-rahneiln3scroll
					data-rahneiln3scroll-speed="1"
					data-rahneiln3scroll-position="top"
				/>
				<div class="absolute top-0 left-0 w-full h-screen">
					<slot />
				</div>
				<Img
					src={matches ? foreground_m : foreground}
					class="absolute h-full w-screen object-center object-cover"
					alt=""
					data-rahneiln3scroll
					data-rahneiln3scroll-speed="4"
					data-rahneiln3scroll-position="top"
				/>
				<Img
					src={matches ? bees_m : bees}
					class="absolute h-full w-screen object-center object-cover"
					alt=""
					data-rahneiln3scroll
					data-rahneiln3scroll-speed="8"
					data-rahneiln3scroll-position="top"
				/>
			</MediaQuery>
		</div>
	{/if}

	<div class="relative z-10" data-rahneiln3scroll-section>
		<div
			class="absolute opacity-75 z-10 left-0 top-28 w-screen h-screen"
			data-rahneiln3scroll
			data-rahneiln3scroll-position="top"
			data-rahneiln3scroll-offset="-112"
		>
			<div class="bg-blue-600 h-28 w-screen" />
			<div
				class="bg-green-500 w-screen min-h-screen"
				style="height: 300rem"
				bind:clientHeight={contentHeight}
			/>
			<div class="bg-blue-600 h-28 w-screen" />
		</div>
		<div style="height: calc({contentHeight / 2}px - 50vh)" />
	</div>

	<div
		class="relative"
		style="height: calc(100vh + 7rem); background-image: linear-gradient(to top right in oklab, #ff0 0%, #000 0% 20%, #ff0 0% 40%, #000 0% 60%, #ff0 0% 80%, #000 0% 100%);"
	/>
</div>
