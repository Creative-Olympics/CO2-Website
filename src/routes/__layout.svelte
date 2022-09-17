<script>
	import '../app.css';
	import LoginModal from '../components/LoginModal.svelte';
	import ToastsOverlay from '../components/toasts/ToastsOverlay.svelte';
	import { app } from '../firebase';

	import { onMount } from 'svelte';
	import { getAnalytics } from 'firebase/analytics';

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

				window.locomotive = new LocomotiveScroll({
					el: dataScrollContainer ?? undefined,
					smooth: true,
					smartphone: {
						smooth: true
					}
				});
			} catch (error) {}
		})();

		/*import('locomotive-scroll').then((locomotiveModule) => {
			const scroll = new locomotiveModule.default({
				el: document.querySelector('[data-scroll-container]'),
				smooth: true
			});
		});*/
	});
</script>

<div data-scroll-container>
	<slot />
</div>
<LoginModal />
<ToastsOverlay />
