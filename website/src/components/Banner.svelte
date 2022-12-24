<script>
	import { rc_discordInvite_url } from '$lib/firebase';
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import MediaQuery from './MediaQuery.svelte';
	import { logs } from '$lib/logs';
	import { loaderReady, bannerLoaded } from '$lib/loader';

	let mountedRn = false;
	let vidEnded = false;
	let vidPreloaded = false;
	let anLogoPreloaded = false;
	let loaded = false;

	logs.add({ msg: 'Banner mounted' }, 'info');

	let frameWaited = false;
	setTimeout(() => {
		frameWaited = true;
	}, 1);

	let checkPreload = () => {
		if (vidPreloaded && anLogoPreloaded) {
			bannerLoaded.set(true)
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
</script>

<div>
	{#if loaded && $loaderReady}
		<script>
			document.getElementById('RahNeil_N3:CO:hbgiapv')?.play();
		</script>
	{/if}

	<MediaQuery query="(max-width: 480px)" let:matches>
		<div
			class="w-full bg-cover bg-center relative"
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

			<div class="absolute top-0 left-0 w-full h-full">
				<div class="flex w-full h-full flex-col items-center justify-center pb-16">
					{#if frameWaited}
						<img
							in:fly={{ delay: 1000, y: -450, duration: 900 }}
							src="banner/animated_logo.gif"
							alt="CO logo"
							class="w-80"
							data-rahneiln3scroll
							data-rahneiln3scroll-speed="2"
						/>
					{/if}

					<div class="flex flew-row gap-4">
						<div>
							<div
								data-rahneiln3scroll
								data-rahneiln3scroll-speed="2"
								data-rahneiln3scroll-delay="0.1"
							>
								<!--Wrapper div to make scroll smoother on buttons-->
								<div class="pb-24 -mt-4">
									{#if $rc_discordInvite_url != 'null' && frameWaited}
										<a
											class="btn"
											in:fade={{ delay: 1800 }}
											href={$rc_discordInvite_url}
											target="_blank"
										>
											Join Discord
										</a>
									{/if}
								</div>
							</div>
						</div>
						<div>
							<div
								data-rahneiln3scroll
								data-rahneiln3scroll-speed="2"
								data-rahneiln3scroll-delay="0.07"
							>
								<!--Wrapper div to make scroll smoother on buttons-->
								<div class="pb-24 -mt-4">
									{#if frameWaited}
										<a
											class="btn btn-accent text-white border-transparent hover:border-transparent bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 bg-size-200 bg-pos-10 hover:bg-pos-90"
											style="transition-property: background-position; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 400ms;"
											in:fade={{ delay: 2050 }}
											href="about"
										>
											Learn about us
										</a>
									{/if}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</MediaQuery>
</div>
