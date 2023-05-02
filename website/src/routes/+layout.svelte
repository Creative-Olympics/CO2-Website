<script>
	import '../app.css';
	import ToastsOverlay from '$cmp/toasts/ToastsOverlay.svelte';
	import Appbar from '$cmp/Appbar.svelte';
	import { app } from '$lib/firebase';
	import ModalsOverlay from '$cmp/modals/ModalsOverlay.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { getAnalytics } from 'firebase/analytics';
	import { page } from '$app/stores';
	import { logs } from '$lib/logs';
	import Loader from '$cmp/Loader.svelte';
	import { scrollInstance, showLogo } from '$lib/scroll';
	import '$lib/i18n'

	/** @type any **/ let viewport;

	const locationChange = () => {
		logs.add({ msg: 'Page location changed', route: $page.route, url: $page.url.href }, 'info');
		if ($scrollInstance) {
			$scrollInstance.update()
			showLogo.set(!$page.route.id?.startsWith('/(landing)') && true);
			if ($page.route.id == '/(landing)') {
				$scrollInstance.on('call', (/** @type {string|object} */ signal) => {
					if (signal === 'appbar_showLogo') {
						showLogo.update((t) => !t);
					}
				});
			}
		}
	};

	$: $page, locationChange();

	onMount(async () => {
		getAnalytics(app);
		
		/** @type any */
		const LocomotiveScroll = (await import('locomotive-scroll')).default;

		scrollInstance.set(
			new LocomotiveScroll({
				el: viewport,
				name: 'rahneiln3scroll',
				smooth: true,
				touchMultiplier: 1.5,
				smartphone: {
					smooth: true
				},
				tablet: {
					smooth: true
				}
			})
		);

		setTimeout(() => {
			locationChange();
			window.addEventListener('resize', () => {
				$scrollInstance?.update();
			});
		}, 300);
	});

	onDestroy(() => {
		$scrollInstance?.destroy();
	});
</script>

<Loader />
<div bind:this={viewport} data-rahneiln3scroll-container>
	<Appbar />

	<slot />
</div>

<ModalsOverlay />
<ToastsOverlay />
<div class="hidden tooltip-bottom" />
