<script>
	import { fly, fade } from 'svelte/transition';

	import MediaQuery from './MediaQuery.svelte';
	import { rc_discordInvite_url } from '../firebase';

	let vidEnded = false;
</script>

<MediaQuery query="(max-width: 480px)" let:matches>
	<div
		class="w-full bg-cover bg-center"
		style="background-image: url('banner/{matches
			? 'm_'
			: ''}final.jpg'); height: calc(100vh + 120px)"
		data-scroll
	>
		{#if !vidEnded}
			<video
				class="w-full object-cover"
				playsinline
				disableremoteplayback
				muted
				autoplay
				aria-hidden="true"
				style="height: calc(100vh + 120px)"
				bind:ended={vidEnded}
				out:fade
			>
				<source src="banner/{matches ? 'm_' : ''}in.mp4" type="video/mp4" />
			</video>
		{/if}

		<div
			class="absolute top-0 left-0 w-full h-screen flex justify-center items-center gap-4 flex-col"
			in:fly={{ delay: 1400, y: 50, duration: 700 }}
		>
			<img src="banner/co.png" alt="CO logo" class="w-56" data-scroll data-scroll-speed="2" />
			<div class="flex flew-row gap-4">
				{#if rc_discordInvite_url != 'null'}
					<div data-scroll data-scroll-speed="2" data-scroll-delay="0.1">
						<!--Wrapper div to make scroll smoother on buttons-->
						<a class="btn" in:fade={{ delay: 1800 }} href={rc_discordInvite_url} target="_blank"
							>Join Discord</a
						>
					</div>
				{/if}
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
	</div>
</MediaQuery>
