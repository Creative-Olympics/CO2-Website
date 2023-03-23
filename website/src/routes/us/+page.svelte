<script context="module">
	import DonationsBanner from '$cmp/DonationsBanner.svelte';
	import Footer from '$cmp/footer/Footer.svelte';

	import FooterContent from '$cmp/footer/FooterContent.svelte';
	import MediaQuery from '$cmp/MediaQuery.svelte';

	import { us } from '$lib/credit';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Creative Olympics</title>
</svelte:head>

<div data-rahneiln3scroll-section>
	<div data-rahneiln3scroll>
		<div
			class="hero bg-cover bg-center bottom-0"
			style="background-image: url('banner/merci.png'); height: calc(100vh + 178px)"
		>
			<div class="text-5xl backdrop-blur-sm p-2 rounded-lg">
				a ceux qui ont rendu cet évènement possible
			</div>
		</div>
	</div>

	<div
		class="w-screen overflow-hidden z-20"
		data-rahneiln3scroll
		data-rahneiln3scroll-speed="8"
		data-rahneiln3scroll-position="top"
		data-rahneiln3scroll-offset="-120"
	>
		<div class="relative h-28">
			<div class="flex flex-row absolute">
				<svg
					class="rotate-180"
					xmlns="http://www.w3.org/2000/svg"
					width="700"
					height="120"
					viewBox="0.2 0 178 30"
					preserveAspectRatio="none"
				>
					<g transform="translate(-14.514284,-115.36352)">
						<path
							class="fill-base-300"
							d="m 14.74107,115.49581 h 178.02679 v 30.61607 h -29.10417 v -12.47321 h -10.58333 v -8.31548 h -13.98512 v 13.98512 h -20.41072 v -13.98512 h -8.31547 v 7.18155 h -7.18155 v 10.9613 H 85.422617 v -10.9613 H 68.791666 V 121.54343 H 51.40476 v 15.875 H 29.860117 v -9.82739 h -8.693452 v -7.55952 h -6.520089 v -4.53571 z"
						/>
						<path
							class="fill-base-100"
							d="M 14.741071,112.54762 H 192.76786 v 30.61607 H 163.66369 V 130.69048 H 153.08036 V 122.375 h -13.98512 v 13.98512 H 118.68452 V 122.375 h -8.31547 v 7.18155 h -7.18155 v 10.9613 H 85.422617 v -10.9613 H 68.791666 V 118.59524 H 51.40476 v 15.875 H 29.860118 v -9.82739 h -8.693452 v -7.55952 h -6.520089 v -4.53571 z"
						/>
					</g>
				</svg>
				<MediaQuery query="(max-width: 700px)" let:matches>
					{#if !matches}
						<svg
							class="rotate-180"
							xmlns="http://www.w3.org/2000/svg"
							width="700"
							height="120"
							viewBox="0.2 0 178 30"
							preserveAspectRatio="none"
						>
							<g transform="translate(-14.514284,-115.36352)">
								<path
									class="fill-base-300"
									d="m 14.74107,115.49581 h 178.02679 v 30.61607 h -29.10417 v -12.47321 h -10.58333 v -8.31548 h -13.98512 v 13.98512 h -20.41072 v -13.98512 h -8.31547 v 7.18155 h -7.18155 v 10.9613 H 85.422617 v -10.9613 H 68.791666 V 121.54343 H 51.40476 v 15.875 H 29.860117 v -9.82739 h -8.693452 v -7.55952 h -6.520089 v -4.53571 z"
								/>
								<path
									class="fill-base-100"
									d="M 14.741071,112.54762 H 192.76786 v 30.61607 H 163.66369 V 130.69048 H 153.08036 V 122.375 h -13.98512 v 13.98512 H 118.68452 V 122.375 h -8.31547 v 7.18155 h -7.18155 v 10.9613 H 85.422617 v -10.9613 H 68.791666 V 118.59524 H 51.40476 v 15.875 H 29.860118 v -9.82739 h -8.693452 v -7.55952 h -6.520089 v -4.53571 z"
								/>
							</g>
						</svg>
					{/if}
				</MediaQuery>
				<MediaQuery query="(max-width: 1400px)" let:matches>
					{#if !matches}
						<svg
							class="rotate-180"
							xmlns="http://www.w3.org/2000/svg"
							width="700"
							height="120"
							viewBox="0.2 0 178 30"
							preserveAspectRatio="none"
						>
							<g transform="translate(-14.514284,-115.36352)">
								<path
									class="fill-base-300"
									d="m 14.74107,115.49581 h 178.02679 v 30.61607 h -29.10417 v -12.47321 h -10.58333 v -8.31548 h -13.98512 v 13.98512 h -20.41072 v -13.98512 h -8.31547 v 7.18155 h -7.18155 v 10.9613 H 85.422617 v -10.9613 H 68.791666 V 121.54343 H 51.40476 v 15.875 H 29.860117 v -9.82739 h -8.693452 v -7.55952 h -6.520089 v -4.53571 z"
								/>
								<path
									class="fill-base-100"
									d="M 14.741071,112.54762 H 192.76786 v 30.61607 H 163.66369 V 130.69048 H 153.08036 V 122.375 h -13.98512 v 13.98512 H 118.68452 V 122.375 h -8.31547 v 7.18155 h -7.18155 v 10.9613 H 85.422617 v -10.9613 H 68.791666 V 118.59524 H 51.40476 v 15.875 H 29.860118 v -9.82739 h -8.693452 v -7.55952 h -6.520089 v -4.53571 z"
								/>
							</g>
						</svg>
					{/if}
				</MediaQuery>
			</div>
		</div>
		<div
			class="-mt-2 -mb-2 w-screen flex items-center justify-center flex-col bg-base-100"
			data-rahneiln3scroll
			data-rahneiln3scroll-repeat
		>
			<article class="prose py-20 px-10 prose-h1:text-center">
				{#each us as part}
				<div class="mb-10">
					<h1>{part.name}</h1>
					<p class="text-center">{part.text}</p>

					<div class="grid grid-cols-3">
						{#each part.ids as player}
								<div class={'flex items-center justify-center align-middle flex-col'}>
									<picture class={`flex overflow-hidden aspect-square w-20 h-20 mx-2`}>
										<img src={`https://mc-heads.net/head/${player}`} alt={player} class="w-full h-full m-0"/>
									</picture>
									<span class="font-heading">{player}</span>
								</div>
						{/each}
					</div>
					</div>
				{/each}

				<div class="mt-10">
					<h1>Et vous</h1>
					<p class="text-center">Grace a vos dons, a votre participation et votre engoument</p>

					<div class="grid grid-cols-3">
						
						<div class={'flex items-center justify-center align-middle flex-col'}>
							<picture class={`flex rounded-full overflow-hidden aspect-square w-20 h-20 mx-2`}>
								<img src={`https://mc-heads.net/head/donator`} alt={'donator'} class="w-full h-full m-0"/>
							</picture>
							<span class="font-heading">donator</span>
						</div>
						<div class={'flex items-center justify-center align-middle flex-col'}>
							<picture class={`flex rounded-full overflow-hidden aspect-square w-20 h-20 mx-2`}>
								<img src={`https://mc-heads.net/head/donator1`} alt={'donator1'} class="w-full h-full m-0"/>
							</picture>
							<span class="font-heading">donator1</span>
						</div>
						<div class={'flex items-center justify-center align-middle flex-col'}>
							<picture class={`flex rounded-full overflow-hidden aspect-square w-20 h-20 mx-2`}>
								<img src={`https://mc-heads.net/head/random`} alt={'random'} class="w-full h-full m-0"/>
							</picture>
							<span class="font-heading">random</span>
						</div>
						
					</div>

					<p class="text-center">Et à eux, tous précisement, toi, vous, elle, ceux-là encore. </p>

					<div class="flex flew-row gap-4 justify-center">
						<div
						>
								<button
									class="btn"
									in:fade={{ delay: 1800 }}
									out:fade={{ duration: 1500 }}
								>
									Donation list
					</button>
						</div>
						<div
						>
								<button
									class="btn btn-accent text-white border-transparent hover:border-transparent bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 bg-size-200 bg-pos-10 hover:bg-pos-90"
									style="transition-property: background-position; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 400ms;"
									in:fade={{ delay: 2050 }}
									out:fade={{ duration: 1500 }}
								>
									Make a donation too
								</button>
						</div>
					</div>
					
				</div>
			</article>
		</div>
		<FooterContent />
	</div>
</div>
