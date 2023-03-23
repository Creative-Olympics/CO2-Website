<script context="module">
	import Banner from '$cmp/Banner.svelte';
	import Loader from '$cmp/Loader.svelte';
	import DonationsBanner from '$cmp/DonationsBanner.svelte';
	import EventDesc from '$cmp/EventDesc.svelte';
	import CountdownBanner from '$cmp/CountdownBanner.svelte';
	import Footer from '$cmp/footer/Footer.svelte';

	import { rc_eventTimestamp } from '$lib/firebase';
</script>

<svelte:head>
	<title>Creative Olympics</title>
</svelte:head>

<div data-rahneiln3scroll-section>
	<slot/>

	<Banner />

	<EventDesc />

	{#if $rc_eventTimestamp != 'null'}
		<CountdownBanner />
	{:else}
		<DonationsBanner />
	{/if}

	<Footer />
</div>
