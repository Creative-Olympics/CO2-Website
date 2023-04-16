<script>
	import { fade } from "svelte/transition"
	import { onMount } from "svelte"
	import Img from "@zerodevx/svelte-img"

	import { rc_eventTimestamp } from "$lib/firebase"
	import { logs } from "$lib/logs"
	import { loaderReady, bannerLoaded } from "$lib/loader"

	import DonationsBanner from "$cmp/DonationsBanner.svelte"
	import EventDesc from "$cmp/EventDesc.svelte"
	import CountdownBanner from "$cmp/CountdownBanner.svelte"
	import Footer from "$cmp/footer/Footer.svelte"
	import MediaQuery from "$cmp/MediaQuery.svelte"

	import banner_final from "$lib/assets/banner/final.jpg?run"
	import banner_final_m from "$lib/assets/banner/m_final.jpg?run"

	let mountedRn = false
	let vidEnded = false
	let vidPreloaded = false
	let anLogoPreloaded = false
	let loaded = false

	logs.add({ msg: "Banner mounted" }, "info")

	let checkPreload = () => {
		if (vidPreloaded && anLogoPreloaded) {
			bannerLoaded.set(true)
			loaded = true
			logs.add({ msg: "Banner loaded" }, "info")
		}
	}

	let isOnIOS = false

	onMount(() => {
		let animatedLogo = new Image()
		animatedLogo.onload = () => {}
		anLogoPreloaded = true
		checkPreload()
		//animatedLogo.src = 'banner/animated_logo.gif';
		mountedRn = true

		isOnIOS = [
			"iPad Simulator",
			"iPhone Simulator",
			"iPod Simulator",
			"iPad",
			"iPhone",
			"iPod"
		].includes(navigator.platform)
	})
</script>

<svelte:head>
	<title>Creative Olympics</title>
</svelte:head>

<div data-rahneiln3scroll-section>
	<div>
		{#if loaded && $loaderReady}
			<script>
				document.getElementById("RahNeil_N3:CO:hbgiapv")?.play()
			</script>
		{/if}

		<MediaQuery query="(max-width: 480px)" let:matches>
			<div class="relative" style="height: calc(100vh + 120px)" data-rahneiln3scroll>
				<Img
					src={matches ? banner_final_m : banner_final}
					class="absolute z-10 h-full w-screen object-center object-cover"
				/>
				{#if !vidEnded && mountedRn}
					<video
						class="w-full object-cover z-20 absolute"
						id="RahNeil_N3:CO:hbgiapv"
						playsinline
						disableremoteplayback
						muted
						aria-hidden="true"
						style="height: calc(100vh + 120px)"
						src="banner/{matches ? 'm_' : ''}in.mp4"
						on:error={() => {
							vidPreloaded = true
							checkPreload()
						}}
						on:canplaythrough={() => {
							vidPreloaded = true
							checkPreload()
						}}
						on:loadedmetadata={() => {
							if (isOnIOS) {
								vidPreloaded = true
								checkPreload()
							}
						}}
						bind:ended={vidEnded}
						out:fade
					/>
				{/if}

				<div class="absolute top-0 left-0 w-full h-screen z-30">
					<slot {loaded} />
				</div>
			</div>
		</MediaQuery>
	</div>

	<EventDesc />

	{#if $rc_eventTimestamp != "null"}
		<CountdownBanner />
	{:else}
		<DonationsBanner />
	{/if}

	<Footer />
</div>
