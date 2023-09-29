<script>
	import "../app.css"
	import { onMount, onDestroy } from "svelte"
	import { getPerformance } from "firebase/performance"
	import { getAnalytics } from "firebase/analytics"

	import { page } from "$app/stores"

	import { app } from "$lib/firebase"
	import { scrollInstance, showLogo } from "$lib/scroll"
	import { themeList, currentThemeID } from "$lib/theme"
	import { logs } from "$lib/logs"
	import { toasts } from "$lib/toasts"

	import ToastsOverlay from "$cmp/toasts/ToastsOverlay.svelte"
	import Appbar from "$cmp/Appbar.svelte"
	import ModalsOverlay from "$cmp/modals/ModalsOverlay.svelte"
	import Loader from "$cmp/Loader.svelte"

	/** @type any **/ let viewport

	let osDarkTheme = false

	const locationChange = () => {
		logs.add({ msg: "Page location changed", route: $page.route, url: $page.url.href }, "info")
		if ($scrollInstance) {
			$scrollInstance.update()
			showLogo.set(!$page.route.id?.startsWith("/(landing)"))
			if ($page.route.id == "/(landing)") {
				$scrollInstance.on("call", (/** @type {string|object} */ signal) => {
					if (signal === "RahNeil_N3:uVZDSKzNN7") {
						showLogo.update((t) => !t)
					}
				})
			}
		}
		toasts.info("Heyyyyyyyyy")
	}

	$: $page, locationChange()

	onMount(async () => {
		getAnalytics(app)
		getPerformance(app)

		osDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

		/** @type any */
		const LocomotiveScroll = (await import("locomotive-scroll")).default

		scrollInstance.set(
			new LocomotiveScroll({
				el: viewport,
				name: "rahneiln3scroll",
				smooth: true,
				touchMultiplier: 1.25,
				smartphone: {
					smooth: true
				},
				tablet: {
					smooth: true
				}
			})
		)

		setTimeout(() => {
			locationChange()
			window.addEventListener("resize", () => {
				$scrollInstance?.update()
			})
		}, 300)
	})

	onDestroy(() => {
		$scrollInstance?.destroy()
	})
</script>

<Loader />
<div
	bind:this={viewport}
	data-rahneiln3scroll-container
	class={themeList[$currentThemeID].dark || osDarkTheme ? "dark" : "light"}
	data-theme={themeList[$currentThemeID].dark || osDarkTheme ? "dark" : "light"}
>
	<Appbar />

	<slot />
</div>

<ModalsOverlay />
<ToastsOverlay />
<div class="hidden tooltip-bottom" />
