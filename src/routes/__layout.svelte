<script>
	import '../app.css';
	import LoginModal from '../components/modals/LoginModal.svelte';
	import ToastsOverlay from '../components/toasts/ToastsOverlay.svelte';
	import Appbar from '../components/Appbar.svelte';
	import { app } from '../lib/firebase';
	import ModalsOverlay from '../components/modals/ModalsOverlay.svelte';

	import { onMount } from 'svelte';
	import { getAnalytics } from 'firebase/analytics';
	import { writable } from 'svelte/store';

	let showLogo = writable(false);

	onMount(() => {
		getAnalytics(app);

		(async () => {
			try {
				const LocomotiveScroll = (await import('locomotive-scroll')).default;
				const dataScrollContainer = document.querySelector('[data-rahneiln3scroll-container]');

				if (!dataScrollContainer) {
					console.warn(
						'locomotive-scroll: [data-rahneiln3scroll-container] dataset was not found. You likely forgot to add it which will prevent Locomotive Scroll to work.'
					);
				}

				let RahNeil_N3_Scr = new LocomotiveScroll({
					el: dataScrollContainer ?? undefined,
					name: "rahneiln3scroll",
					smooth: true,
					touchMultiplier: 1.5,
					smartphone: {
						smooth: true
					},
					tablet: {
						smooth: true,
					}
				});

				RahNeil_N3_Scr.on('call', (signal) => {
					showLogo.update((t) => !t);
				});
			} catch (error) {}
		})();
	});
</script>

<div data-rahneiln3scroll-container>
	<Appbar showLogo={$showLogo} />
	<slot />
</div>
<ModalsOverlay />
<ToastsOverlay />
<div class="invisible tooltip-bottom" />