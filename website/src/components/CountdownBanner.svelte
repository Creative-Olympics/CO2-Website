<script>
	import { onMount, onDestroy } from "svelte"
	import Img from "@zerodevx/svelte-img"

	import FooterContent from "$cmp/footer/FooterContent.svelte"

	import bg_countdown from "$lib/assets/bg_countdown.jpg?as=run"
	import { rc_eventTimestamp } from "$lib/firebase"

	const DEBUG = false

	/** @type {number} */
	let seconds = 0

	function calculateTimeLeft() {
		let targetDate = $rc_eventTimestamp * 1000
		let now = new Date()
		let difference = targetDate - now.getTime()
		return Math.floor(difference / 1000)
	}

	/** @type {number | null} */
	let intervalID = null

	onMount(() => {
		seconds = calculateTimeLeft()
		intervalID = window.setInterval(() => {
			seconds = calculateTimeLeft()
			if (seconds <= 0 && intervalID !== null) {
				clearInterval(intervalID)
				// Gérer le cas où le compte à rebours est terminé
			}
		}, 1000)
	})

	onDestroy(() => {
		if (intervalID) window.clearInterval(intervalID)
	})
</script>

<div data-rahneiln3scroll>
	<div class="hero relative">
		<!-- Empty [alt] on purpose because decorative, doesn't need to be described -->
		<Img
			src={bg_countdown}
			class="absolute h-full w-screen object-center object-cover -z-10 top-0 left-0"
			alt=""
		/>

		<div class="hero-overlay bg-opacity-60" />

		<div class="flex flex-col relative">
			{#if DEBUG}
				<div
					class="absolute w-screen h-full hero-content text-center flex-col text-white max-w-none"
					style="background-image: linear-gradient(to top right in oklab, #ff6600 0%, #000 0% 20%, #ff6600 0% 40%, #000 0% 60%, #ff6600 0% 80%, #000 0% 100%);"
				/>
			{:else}
				<div
					class="absolute w-screen h-full hero-content text-center flex-col text-white max-w-none"
				>
					<span
						class="uppercase text-sm font-semibold font-sans mb-1 sm:mb-2 mt-4"
						data-rahneiln3scroll
						data-rahneiln3scroll-speed="2"
					>
						Event starts in
					</span>
					<div
						class="grid grid-flow-col gap-6 sm:gap-8 text-center auto-cols-max font-bold mb-2 sm:mb-4"
					>
						<div
							class="flex flex-col"
							data-rahneiln3scroll
							data-rahneiln3scroll-speed="2"
							data-rahneiln3scroll-delay="0.2"
						>
							<span class="countdown font-mono text-5xl sm:text-7xl">
								<span style="--value:{(seconds / 86400) >> 0};" />
							</span>
							days
						</div>
						<div
							class="flex flex-col"
							data-rahneiln3scroll
							data-rahneiln3scroll-speed="2"
							data-rahneiln3scroll-delay="0.15"
						>
							<span class="countdown font-mono text-5xl sm:text-7xl">
								<span style="--value:{((seconds % 86400) / 3600) >> 0};" />
							</span>
							hours
						</div>
						<div
							class="flex flex-col"
							data-rahneiln3scroll
							data-rahneiln3scroll-speed="2"
							data-rahneiln3scroll-delay="0.1"
						>
							<span class="countdown font-mono text-5xl sm:text-7xl">
								<span style="--value:{((seconds % 3600) / 60) >> 0};" />
							</span>
							min
						</div>
						<div
							class="flex flex-col"
							data-rahneiln3scroll
							data-rahneiln3scroll-speed="2"
							data-rahneiln3scroll-delay="0.05"
						>
							<span class="countdown font-mono text-5xl sm:text-7xl">
								<span style="--value:{seconds % 60};" />
							</span>
							sec
						</div>
					</div>
					<span
						class="text-md font-medium mb-2 max-w-md"
						data-rahneiln3scroll
						data-rahneiln3scroll-speed="2"
					>
						Come back here to see the latest donations & donators or if you too want to become one
					</span>
				</div>
			{/if}

			<div style="height: calc(100vh + 7rem);" />
			<div class="w-screen invisible">
				<FooterContent />
			</div>
		</div>
	</div>
</div>
