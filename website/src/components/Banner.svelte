<script>
	import { rc_discordInvite_url } from '$lib/firebase';
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import MediaQuery from './MediaQuery.svelte';
	import { logs } from '$lib/logs';
	import { loaderReady, bannerLoaded } from '$lib/loader';
	import { toasts } from '$lib/toasts';

	let mountedRn = false;
	let vidEnded = false;
	let vidPreloaded = false;
	let anLogoPreloaded = false;
	let loaded = false;

	logs.add({ msg: 'Banner mounted' }, 'info');

	let checkPreload = () => {
		if (vidPreloaded && anLogoPreloaded) {
			bannerLoaded.set(true);
			loaded = true;
			logs.add({ msg: 'Banner loaded' }, 'info');
		}
	};

	onMount(() => {
		let animatedLogo = new Image();
		animatedLogo.onload = () => {
			anLogoPreloaded = true;
			checkPreload();
		};
		animatedLogo.src = 'banner/animated_logo.gif';
		mountedRn = true;
	});

	let watchTrailer = () => {
		toasts.warning('trailer');
	};

	if (
		['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(
			navigator.platform
		) ||
		(navigator.userAgent.includes('Mac') && 'ontouchend' in document)
	) {
		toasts.success("hello Z")
	}
</script>

<div>
	{#if loaded && $loaderReady}
		<script>
			document.getElementById('RahNeil_N3:CO:hbgiapv')?.play();
		</script>
	{/if}

	<MediaQuery query="(max-width: 480px)" let:matches>
		<div
			class="w-screen h-full bg-cover bg-center relative"
			style="background-image: url('banner/{matches
				? 'm_'
				: ''}final.jpg'); height: calc(100vh + 120px)"
			data-rahneiln3scroll
		>
			{#if !vidEnded && mountedRn}
				<video
					class="w-full object-cover"
					id="RahNeil_N3:CO:hbgiapv"
					playsinline
					disableremoteplayback
					muted
					aria-hidden="true"
					style="height: calc(100vh + 120px)"
					src="banner/{matches ? 'm_' : ''}in.mp4"
					on:error={() => {
						vidPreloaded = true;
						checkPreload();
					}}
					on:canplaythrough={() => {
						vidPreloaded = true;
						checkPreload();
					}}
					bind:ended={vidEnded}
					out:fade
				/>
			{/if}

			<div class="absolute top-0 left-0 w-full h-screen">
				<div class="flex w-full h-full flex-col items-center justify-center">
					<div data-rahneiln3scroll data-rahneiln3scroll-speed="2">
						{#if mountedRn && loaded && $loaderReady}
							<img
								in:fly={{ delay: 1000, y: -450, duration: 900 }}
								src="banner/animated_logo.gif"
								alt="CO logo"
								class="w-80"
							/>
						{/if}
					</div>

					<div class="flex flew-row gap-4">
						<div
							data-rahneiln3scroll
							data-rahneiln3scroll-speed="2"
							data-rahneiln3scroll-delay="0.1"
						>
							{#if mountedRn && loaded && $loaderReady}
								<a class="btn" in:fade={{ delay: 1800 }} href="about"> Learn about us </a>
							{/if}
						</div>
						<div
							data-rahneiln3scroll
							data-rahneiln3scroll-speed="2"
							data-rahneiln3scroll-delay="0.07"
						>
							{#if mountedRn && loaded && $loaderReady}
								<button
									class="btn btn-accent text-white border-transparent hover:border-transparent bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 bg-size-200 bg-pos-10 hover:bg-pos-90"
									style="transition-property: background-position; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 400ms;"
									in:fade={{ delay: 2050 }}
									on:click={watchTrailer}
								>
									Watch Trailer
								</button>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</MediaQuery>
</div>
