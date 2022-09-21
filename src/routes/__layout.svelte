<script>
	import '../app.css';
	import LoginModal from '../components/LoginModal.svelte';
	import ToastsOverlay from '../components/toasts/ToastsOverlay.svelte';
	import Loader from '../components/Loader.svelte';
	import Appbar from '../components/Appbar.svelte';
	import { app } from '../lib/firebase';

	import { onMount } from 'svelte';
	import { getAnalytics } from 'firebase/analytics';
	import { writable } from 'svelte/store';

	let showLogo = writable(false);

	onMount(() => {
		getAnalytics(app);

		(async () => {
			try {
				const LocomotiveScroll = (await import('locomotive-scroll')).default;
				const dataScrollContainer = document.querySelector('[data-scroll-container]');

				if (!dataScrollContainer) {
					console.warn(
						'locomotive-scroll: [data-scroll-container] dataset was not found. You likely forgot to add it which will prevent Locomotive Scroll to work.'
					);
				}

				let n3scr = new LocomotiveScroll({
					el: dataScrollContainer ?? undefined,
					smooth: true,
					smartphone: {
						smooth: true
					},
					tablet: {
						smooth: true
					}
				});

				n3scr.on('call', (signal) => {
					showLogo.update(t => !t)
				});
			} catch (error) {}
		})();
	});
</script>

<div data-scroll-container>
	<!--<Loader />-->
	<Appbar showLogo={$showLogo} />
	<slot />
</div>
<LoginModal />
<ToastsOverlay />
