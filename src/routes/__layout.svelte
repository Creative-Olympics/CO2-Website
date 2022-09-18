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

				let locomotive = new LocomotiveScroll({
					el: dataScrollContainer ?? undefined,
					smooth: true,
					smartphone: {
						smooth: true
					},
					tablet: {
						smooth: true
					}
				});
			} catch (error) {}
		})();
	});
</script>

<div data-scroll-container>
	<slot />
</div>
<LoginModal />
<ToastsOverlay />
