<script>
	import Loader from '../components/Loader.svelte';
	import Appbar from '../components/Appbar.svelte';
	import Banner from '../components/Banner.svelte';
</script>

<svelte:head>
	<title>Kuizu</title>
</svelte:head>

<Loader />
<div id="stick" data-scroll-container>
	<Appbar />
	<div data-scroll-section>
		<Banner />
		<div class="h-screen"/>
	</div>
</div>
