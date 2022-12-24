<script context="module">
	import Banner from '../components/Banner.svelte';
	import Loader from '../components/Loader.svelte';
	import DonationsBanner from '../components/DonationsBanner.svelte';
	import EventDesc from '../components/EventDesc.svelte';
	import CountdownBanner from '../components/CountdownBanner.svelte';
	import Footer from '../components/footer/Footer.svelte';

	import { rc_eventTimestamp } from '$lib/firebase';
</script>

<svelte:head>
	<title>Creative Olympics</title>
</svelte:head>

<div data-rahneiln3scroll-section>
	<Banner />

	<EventDesc />

	{#if $rc_eventTimestamp != 'null'}
		<CountdownBanner />
	{:else}
		<DonationsBanner />
	{/if}

	<Footer />
</div>
