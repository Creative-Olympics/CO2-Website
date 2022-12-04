<script>
	import { onMount } from 'svelte';

	import FooterContent from './footer/FooterContent.svelte';

	let seconds = 3600 * 24 + 15; //TODO !
	let mounted = false;

	onMount(() => {
		var intervalID = window.setInterval(() => seconds--, 1000);
		mounted = true;
	});
</script>

<div data-scroll>
	<div class="hero bg-cover bg-center" style="background-image: url('banner/donations.jpg')">
		<div class="hero-overlay bg-opacity-60" />

		<div class="flex flex-col relative">
			<div class="absolute w-full h-full hero-content text-center flex-col text-white">
				<span class="uppercase text-sm font-semibold font-sans mb-1 sm:mb-2 mt-4">Event starts in</span>
				<div class="grid grid-flow-col gap-6 sm:gap-8 text-center auto-cols-max font-bold mb-2 sm:mb-4">
					<div class="flex flex-col">
						<span class="countdown font-mono text-5xl sm:text-7xl">
							<span style="--value:{(seconds / 86400) >> 0};" />
						</span>
						days
					</div>
					<div class="flex flex-col">
						<span class="countdown font-mono text-5xl sm:text-7xl">
							<span style="--value:{((seconds % 86400) / 3600) >> 0};" />
						</span>
						hours
					</div>
					<div class="flex flex-col">
						<span class="countdown font-mono text-5xl sm:text-7xl">
							<span style="--value:{((seconds % 3600) / 60) >> 0};" />
						</span>
						min
					</div>
					<div class="flex flex-col">
						<span class="countdown font-mono text-5xl sm:text-7xl">
							<span style="--value:{seconds % 60};" />
						</span>
						sec
					</div>
				</div>
				<span class="text-md font-medium mb-2 max-w-md"
					>Come back here to see the latest donations & donators or if you too want to become one</span
				>
			</div>

			<div style="height: calc(100vh + 120px)"/>
			<div class="w-screen invisible">
				<FooterContent />
			</div>
		</div>
	</div>
</div>
