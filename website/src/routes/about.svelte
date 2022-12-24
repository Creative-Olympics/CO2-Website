<script context="module">
	import Footer from '../components/footer/Footer.svelte';
	import { rc_aboutPage_article } from '$lib/firebase';
	import FooterContent from '$cmp/footer/FooterContent.svelte';
</script>

<svelte:head>
	<title>Creative Olympics</title>
</svelte:head>

<div data-rahneiln3scroll-section>
	<div class="pt-8">
		<article class="prose py-20 px-10 min-h-screen">
			{@html $rc_aboutPage_article}
		</article>
		<div class="invisible">
			<FooterContent />
		</div>
	</div>
	<Footer />
</div>
