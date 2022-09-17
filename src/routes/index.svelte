<script context="module">
	import Loader from '../components/Loader.svelte';
	import Appbar from '../components/Appbar.svelte';
	import Banner from '../components/Banner.svelte';
	import DonationsBanner from '../components/DonationsBanner.svelte';
	import EventDesc from '../components/EventDesc.svelte';
</script>

<svelte:head>
	<title>Creative Olympics</title>
</svelte:head>

<Loader />
<Appbar />
<div data-scroll-section>
	<Banner />
	<EventDesc />
	<div class="h-screen" />
	<DonationsBanner />
</div>
