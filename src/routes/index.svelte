<script context="module">
	import Banner from '../components/Banner.svelte';
	import Loader from '../components/Loader.svelte';
	import DonationsBanner from '../components/DonationsBanner.svelte';
	import EventDesc from '../components/EventDesc.svelte';
	import CountdownBanner from "../components/CountdownBanner.svelte";

	import { rc_eventTimestamp } from '$lib/firebase';
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

	{#if $rc_eventTimestamp != 'null'}
		<!--<CountdownBanner />-->
		<DonationsBanner />
	{:else}
		<DonationsBanner />
	{/if}
</div>
