<script>
	import { fly, fade } from 'svelte/transition';
	import MediaQuery from './MediaQuery.svelte';

	let vidEnded = false;
</script>

<div data-scroll-section>
	<MediaQuery query="(max-width: 480px)" let:matches>
		<div
			class="w-full bg-cover bg-center"
			style="background-image: url('banner/{matches ? 'm_' : ''}final.jpg'); height: calc(100vh + 120px)"
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
					<div data-scroll data-scroll-speed="2" data-scroll-delay="0.1">
						<!--Wrapper div to make scroll smoother on buttons-->
						<button class="btn" in:fade={{ delay: 1800 }}>Join Discord</button>
					</div>
					<div data-scroll data-scroll-speed="2" data-scroll-delay="0.07">
						<!--Wrapper div to make scroll smoother on buttons-->
						<button
							class="btn btn-secondary text-white border-transparent hover:border-transparent transition-all duration-500 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-size-200 bg-pos-10 hover:bg-pos-90"
							in:fade={{ delay: 2050 }}
						>
							Watch Trailer
						</button>
					</div>
				</div>
			</div>
		</div>
	</MediaQuery>

	<div data-scroll data-scroll-speed="8" data-scroll-position="top" data-scroll-offset="-120">
		<svg
			class="rotate-180"
			xmlns="http://www.w3.org/2000/svg"
			width="100%"
			height="120"
			viewBox="0.2 0 178 30"
			preserveAspectRatio="none"
		>
			<g transform="translate(-14.514284,-115.36352)">
				<path
					style="fill:#aaa;"
					d="m 14.74107,115.49581 h 178.02679 v 30.61607 h -29.10417 v -12.47321 h -10.58333 v -8.31548 h -13.98512 v 13.98512 h -20.41072 v -13.98512 h -8.31547 v 7.18155 h -7.18155 v 10.9613 H 85.422617 v -10.9613 H 68.791666 V 121.54343 H 51.40476 v 15.875 H 29.860117 v -9.82739 h -8.693452 v -7.55952 h -6.520089 v -4.53571 z"
				/>
				<path
					style="fill:#fff;"
					d="M 14.741071,112.54762 H 192.76786 v 30.61607 H 163.66369 V 130.69048 H 153.08036 V 122.375 h -13.98512 v 13.98512 H 118.68452 V 122.375 h -8.31547 v 7.18155 h -7.18155 v 10.9613 H 85.422617 v -10.9613 H 68.791666 V 118.59524 H 51.40476 v 15.875 H 29.860118 v -9.82739 h -8.693452 v -7.55952 h -6.520089 v -4.53571 z"
				/>
			</g>
		</svg>
		<div class="bg-white h-screen -mt-2" />
	</div>
</div>
