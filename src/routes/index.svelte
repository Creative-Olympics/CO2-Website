<script context="module">
	import Banner from '../components/Banner.svelte';
	import Loader from '../components/Loader.svelte';
	import DonationsBanner from '../components/DonationsBanner.svelte';
	import EventDesc from '../components/EventDesc.svelte';
</script>

<svelte:head>
	<title>Creative Olympics</title>
</svelte:head>

<Loader />
<div data-scroll-section>
	<Banner />
	<EventDesc />
	<DonationsBanner />
</div>
