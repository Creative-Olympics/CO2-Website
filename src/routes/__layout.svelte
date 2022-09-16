<script>
	import '../app.css';
	import LoginModal from '../components/LoginModal.svelte';
	import ToastsOverlay from '../components/toasts/ToastsOverlay.svelte';
	import { app } from '../firebase';

	import LocomotiveScrollProvider from 'svelte-locomotive-scroll';
	import { onMount } from 'svelte';
	import { getAnalytics } from 'firebase/analytics';

	onMount(() => {
		getAnalytics(app);
	});
</script>

<LocomotiveScrollProvider
	options={{
		smooth: true,
		smoothMobile: true
	}}
	watch={[
		//..all the dependencies you want to watch to update the scroll.
		//  Basicaly, you would want to watch page/location changes
		//  I.e. in Sveltekit you would want to watch properties like `$page` imported from '$app/stores' (you may want to add more criterias if the instance should be update on locations with query parameters)
	]}
>
	<slot />
</LocomotiveScrollProvider>
<LoginModal />
<ToastsOverlay />
