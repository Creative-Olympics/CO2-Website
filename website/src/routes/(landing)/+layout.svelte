<script>
	var innerHeight;
</script>

<svelte:head>
	<title>Creative Olympics</title>
</svelte:head>

<div data-rahneiln3scroll-section>
	<div
		class="relative"
		style="height: calc(100vh + 7rem); background-image: linear-gradient(to top right in oklab, #f00 0%, #000 0% 20%, #f00 0% 40%, #000 0% 60%, #f00 0% 80%, #000 0% 100%);"
	/>

	<div
		class="absolute opacity-75 z-10"
		data-rahneiln3scroll
		data-rahneiln3scroll-speed="8"
		data-rahneiln3scroll-position="top"
		data-rahneiln3scroll-offset="-120"
	>
		<div class="bg-blue-600 h-28 w-screen" />
		<div class="bg-green-500 w-screen" style="height: 50rem" bind:clientHeight={innerHeight} />
		<div class="bg-blue-600 h-28 w-screen" />
	</div>

	<div
		class="relative"
		style="height: calc(100vh + 7rem); background-image: linear-gradient(to top right in oklab, #ff0 0%, #000 0% 20%, #ff0 0% 40%, #000 0% 60%, #ff0 0% 80%, #000 0% 100%);"
	/>
</div>
