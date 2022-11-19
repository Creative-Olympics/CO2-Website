<script context="module">
	import Banner from '../components/Banner.svelte';
	import Loader from '../components/Loader.svelte';
	import DonationsBanner from '../components/DonationsBanner.svelte';
	import EventDesc from '../components/EventDesc.svelte';
</script>

<svelte:head>
	<title>Creative Olympics</title>
</svelte:head>

<script>
	let loaded = false
	let loaderReady = false
</script>

<Loader {loaded} setLoaderReady={() => loaderReady = true}/>
<div data-scroll-section>
	<Banner {loaderReady} setLoaded={() => {loaded = true}} />
	<EventDesc />
	<DonationsBanner />
</div>
