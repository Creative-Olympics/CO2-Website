<script>
	import { rc_discordInvite_url } from '$lib/firebase';
	import { fly, fade } from 'svelte/transition';

	import MediaQuery from './MediaQuery.svelte';

	let vidEnded = false;
	let vidTime = 0;

	let frameWaited = false;
	setTimeout(() => {
		frameWaited = true;
	}, 1);
</script>

<div>
	<MediaQuery query="(max-width: 480px)" let:matches>
		<div
			class="w-full bg-cover bg-center relative"
			style="background-image: url('banner/{matches
				? 'm_'
				: ''}final.jpg'); height: calc(100vh + 120px)"
			data-scroll
		>
			{#if true}
				<video
					class="w-full object-cover"
					playsinline
					disableremoteplayback
					muted
					autoplay
					aria-hidden="true"
					style="height: calc(100vh + 120px)"
					bind:ended={vidEnded}
					bind:currentTime={vidTime}
					out:fade
				>
					<source src="banner/{matches ? 'm_' : ''}in.mp4" type="video/mp4" />
				</video>
			{/if}

			<div
				class="absolute top-0 left-0 w-full h-full"
			>
				{#if frameWaited}
					<div in:fly={{ delay: 1000, y: -450, duration: 900 }} class="flex w-full h-full gap-4 flex-col items-center justify-center">
						<img src="banner/co.png" alt="CO logo" class="w-56" data-scroll data-scroll-speed="2" />
						<div class="flex flew-row gap-4">
							<div data-scroll data-scroll-speed="2" data-scroll-delay="0.1">
								<!--Wrapper div to make scroll smoother on buttons-->
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
							<div data-scroll data-scroll-speed="2" data-scroll-delay="0.07">
								<!--Wrapper div to make scroll smoother on buttons-->
								<button
									class="btn btn-secondary text-white border-transparent hover:border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-size-200 bg-pos-10 hover:bg-pos-90"
									style="transition-property: background-position; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 400ms;"
									in:fade={{ delay: 2050 }}
								>
									Watch Trailer
								</button>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</MediaQuery>
</div>
