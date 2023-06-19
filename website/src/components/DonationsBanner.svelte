<script>
	import Img from "@zerodevx/svelte-img"

	import FooterContent from "$cmp/footer/FooterContent.svelte"

	import bg_countdown from "$lib/assets/bg_countdown.jpg?run"
	import Icon from "./Icon.svelte"
	import { toasts } from "$lib/toasts"

	const CONTRAIN = 800

	/** @type {HTMLDivElement} */
	var cardEl
	let rotX = 0
	let rotY = 0
</script>

<div data-rahneiln3scroll>
	<div
		class="hero relative"
		on:mousemove={(e) => {
			let box = cardEl.getBoundingClientRect()
			//rotX = -(e.clientY - box.y - box.height / 2) / CONTRAIN
			//rotY = (e.clientX - box.x - box.width / 2) / CONTRAIN
		}}
	>
		<!-- Empty [alt] on purpose because decorative, doesn't need to be described -->
		<Img
			src={bg_countdown}
			class="absolute h-full w-screen object-center object-cover -z-10 top-0 left-0"
			alt=""
		/>

		<div class="hero-overlay" />

		<div class="flex flex-col relative">
			<div class="absolute w-screen h-full hero-content text-center flex-col text-white max-w-none">
				<div class="grid grid-cols-12 gap-4 mx-12">
					<div class="flex flex-col gap-4 col-span-6 h-full">
						<div
							class="relative rounded-2xl overflow-hidden shadow-2xl flex-grow"
							style={"transform: perspective(100px) " +
								"rotateX(" +
								rotX +
								"deg) " +
								"rotateY(" +
								rotY +
								"deg) "}
							bind:this={cardEl}
						>
							<div class="absolute w-full h-full bg-base-100 rounded-2xl overflow-hidden">
								<div
									class="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-pink-700 rounded-full filter bg-blend-multiply blur-sm animate-blobbottom"
								/>
								<div
									class="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-pink-700 rounded-full filter bg-blend-multiply blur-sm animate-blobend"
								/>
							</div>

							<!-- Has to have m-[5px] so glass effect doesn't see the transparency on rounded corners thus darkening the corners -->
							<div
								class="card h-[calc(100%-10px)] m-[5px] glass shadow-none hover:shadow-none bg-base-100 bg-opacity-30 hover:bg-base-100 hover:bg-opacity-70 transition-colors duration-500"
							>
								<div class="card-body text-start text-base-content gap-4">
									<h2
										class="card-title text-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-pink-600"
										style="-webkit-text-fill-color: transparent; -webkit-background-clip: text;"
									>
										Make a difference!
									</h2>
									<p>
										Your contribution matters! Help us create a positive impact by making a donation
										today. No amount is too small. In appreciation of your support, we offer
										exciting perks based on your generosity.
									</p>
									<div class="card-actions">
										<button class="btn btn-gradient-primary">Donate now</button>
									</div>
								</div>
							</div>
						</div>
						<div class="card bg-base-100 shadow">
							<div class="flex flex-row gap-4 text-base-content p-4 items-center">
								<span class="font-bold">100€</span>
								<progress class="progress progress-primary text-pink-600 flex-grow" value="70" max="100" />
								<span class="font-bold">250€</span>
							</div>
						</div>
					</div>
					<div class="flex flex-col gap-4 col-span-3">
						<div class="indicator">
							<div class="indicator-item badge badge-accent">
								#1
							</div>
							<div class="stats shadow">
								<div class="stat text-start">
									<div class="stat-figure text-secondary">
										<div class="avatar online">
											<div class="w-16 rounded-full">
												<img
													src="https://lh3.googleusercontent.com/a/AGNmyxa7epx1Iim3tAJOYqsDWslZbVx6OyAgcKqTVvyAWPI=s96-c"
													alt=""
												/>
											</div>
										</div>
									</div>
									<div class="stat-title text-base-content">Neïl Rahmouni</div>
									<div class="stat-value">28€</div>
									<div class="stat-desc text-primary gap-1 flex items-center">
										<Icon class="w-5">trophy</Icon>Top donor
									</div>
								</div>
							</div>
						</div>
						<div class="stats shadow">
							<div class="stat text-start">
								<div class="stat-figure text-secondary">
									<div class="avatar online">
										<div class="w-16 rounded-full">
											<img
												src="https://lh3.googleusercontent.com/a/AGNmyxa7epx1Iim3tAJOYqsDWslZbVx6OyAgcKqTVvyAWPI=s96-c"
												alt=""
											/>
										</div>
									</div>
								</div>
								<div class="stat-title text-base-content">Neïl Rahmouni</div>
								<div class="stat-value">28€</div>
								<div class="stat-desc text-primary gap-1 flex items-center">
									<Icon class="w-5">trophy</Icon>Top 3 donor
								</div>
							</div>
						</div>
						<div class="stats shadow">
							<div class="stat text-start">
								<div class="stat-figure text-primary">
									<Icon class="inline-block w-8 h-8 stroke-current">redeem</Icon>
								</div>
								<div class="stat-title">Next donation goal</div>
								<div class="stat-value" style="font-size: 1.5rem">Giveaway</div>
								<div class="stat-desc">Only 13€ left!</div>
							</div>
						</div>
					</div>
					<div class="flex flex-col gap-4 col-span-3">
						<div class="stats shadow">
							<div class="stat text-start">
								<div class="stat-figure text-secondary">
									<div class="avatar online">
										<div class="w-16 rounded-full">
											<img
												src="https://lh3.googleusercontent.com/a/AGNmyxa7epx1Iim3tAJOYqsDWslZbVx6OyAgcKqTVvyAWPI=s96-c"
												alt=""
											/>
										</div>
									</div>
								</div>
								<div class="stat-title text-base-content">Neïl Rahmouni</div>
								<div class="stat-value">28€</div>
								<div class="stat-desc text-primary gap-1 flex items-center">
									<Icon class="w-5">trophy</Icon>Top 2 donor
								</div>
							</div>
						</div>
						<div class="stats shadow">
							<div class="stat text-start">
								<div class="stat-figure text-secondary">
									<div class="avatar online">
										<div class="w-16 rounded-full">
											<img
												src="https://lh3.googleusercontent.com/a/AGNmyxa7epx1Iim3tAJOYqsDWslZbVx6OyAgcKqTVvyAWPI=s96-c"
												alt=""
											/>
										</div>
									</div>
								</div>
								<div class="stat-title text-base-content">Neïl Rahmouni</div>
								<div class="stat-value">28€</div>
								<div class="stat-desc text-primary gap-1 flex items-center">
									<Icon class="w-5">history</Icon>Latest donor
								</div>
							</div>
						</div>
						<div class="stats shadow flex-grow">
							<div class="stat relative text-start">
								<div class="stat-title">Total donations</div>
								<div class="stat-value">349€</div>
								<button
									class="btn btn-ghost btn-xs pr-0.5 gap-0.5 absolute bottom-0 right-0 m-2"
									on:click={() => toasts.error("Soon :>")}
								>
									See all<Icon class="w-4 h-4">chevron_right</Icon>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div style="height: calc(100vh + 7rem);" />
			<div class="w-screen invisible">
				<FooterContent />
			</div>
		</div>
	</div>
</div>
