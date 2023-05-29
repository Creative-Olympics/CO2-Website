<script>
	import { fade } from "svelte/transition"
	import { onMount } from "svelte"
	import Img from "@zerodevx/svelte-img"

	import { rc_eventTimestamp } from "$lib/firebase"
	import { logs } from "$lib/logs"
	import { finishedLoading, vidLoaded } from "$lib/loader"

	import DonationsBanner from "$cmp/DonationsBanner.svelte"
	import EventDesc from "$cmp/EventDesc.svelte"
	import CountdownBanner from "$cmp/CountdownBanner.svelte"
	import Footer from "$cmp/footer/Footer.svelte"
	import MediaQuery from "$cmp/MediaQuery.svelte"

	import banner_final from "$lib/assets/banner/final.jpg?run"
	import banner_final_m from "$lib/assets/banner/m_final.jpg?run"
	import isIos from "is-ios"

	let mountedRn = false
	let vidEnded = false

	logs.add({ msg: "Banner mounted" }, "info")

	onMount(() => {
		mountedRn = true
	})
</script>

<svelte:head>
	<title>Creative Olympics</title>
</svelte:head>

<div
	class="relative"
	style="height: calc(100vh + 7rem); background-image: linear-gradient(to top right in oklab, #f00 0%, #000 0% 20%, #f00 0% 40%, #000 0% 60%, #f00 0% 80%, #000 0% 100%);"
	data-rahneiln3scroll-section
/>

<div class="relative" data-rahneiln3scroll-section>
	<div class="absolute bg-blue-600 h-28 w-screen opacity-75 -top-28 left-0" />
	<div class="bg-green-500 h-96" />
	<div class="absolute bg-blue-600 h-28 w-screen opacity-75 -bottom-28 left-0" />
</div>

<div
	class="relative"
	style="height: calc(100vh + 7rem); background-image: linear-gradient(to top right in oklab, #ff0 0%, #000 0% 20%, #ff0 0% 40%, #000 0% 60%, #ff0 0% 80%, #000 0% 100%);"
	data-rahneiln3scroll-section
/>
