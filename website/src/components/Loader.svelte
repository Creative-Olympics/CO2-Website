<script>
	import { draw, fade, fly } from "svelte/transition"
	import { quintOut } from "svelte/easing"
	import { onMount } from "svelte"
	import Img from "@zerodevx/svelte-img"
	import { page } from "$app/stores"

	import { bannerLoadLevel, finishedLoading, loaderReady } from "$lib/loader"

	import first from "$lib/assets/banner/first.png?as=run"

	let step = 0
	onMount(() => {
		setTimeout(() => {
			step = 1
		}, 10)
		setTimeout(() => {
			step = 2
		}, 400)
		setTimeout(() => {
			step = 3
			loaderReady.set(true)
		}, 2000)
	})

	let pathsBlocks = [
		[
			//RINGS
			"M1152,604.07h95.77c0-4.18,0-7.9,0-11.62,0-56.94.22-113.89,0-170.83,0-7.89,1.21-11.05,10.3-11q135.33.57,270.65,0c8.62,0,10.63,2.46,10.6,10.79-.3,89.9-.18,179.8-.19,269.69,0,10.6,0,10.62-11.3,10.64-57.59.07-115.17.29-172.76,0-8.17,0-10,2.51-10,10.3.31,56.94.16,113.89.15,170.83v12.27c-3.85.22-6.94.56-10,.56-90.22,0-180.44-.11-270.65.22-8.66,0-10.6-2.52-10.55-10.81.36-56.94.19-113.89.19-170.83v-11.9H959.31v11.51c0,57.27-.14,114.53.17,171.8,0,7.9-2.16,10.22-10.14,10.2q-135.81-.4-271.61,0c-7.68,0-9.65-2.25-9.62-9.74.29-57.26.15-114.53.14-171.79V701.7h-16c-55.67,0-111.34-.16-167,.17-8.1,0-11-1.63-10.93-10.47.35-89.9.21-179.8.22-269.69,0-10.74,0-10.76,11.21-10.77l268.73-.17c11.22,0,11.24,0,11.24,11.58q0,85.42,0,170.84V604H861V592.76q0-84.93,0-169.87c0-12.15,0-12.16,11.81-12.17,89.57,0,179.15.13,268.73-.2,8.55,0,10.67,2.32,10.61,10.71-.37,56.94-.19,113.88-.19,170.83Zm193.21,49.13h145.2a29.61,29.61,0,0,0,.72-4.28c0-61.08-.06-122.16.19-183.23,0-7.71-4.43-6.93-9.32-6.93-58.84,0-117.68.19-176.52-.17-8.32,0-9.9,2.83-9.83,10.4.37,41.89.24,83.78.31,125.67,0,3.07.28,6.14.47,9.91,14.41,0,27.81.23,41.19-.11,5.82-.15,7.86,1.73,7.7,7.63C1344.92,625.48,1345.17,638.88,1345.17,653.2Zm-628-48.5c.2-4.4.45-7.23.45-10.06,0-41.9-.17-83.8.19-125.7.07-7.8-1.95-10.32-10-10.28q-88.28.45-176.57-.05c-7.29,0-9.09,2.18-9.06,9.25q.39,88.27,0,176.57c0,7.47,1.88,9.86,9.6,9.79,39.34-.38,78.69-.18,118-.18h18.77V604.7Zm386.3-145.17H910V604.94h49.32v27.15c0,21.74,0,21.74,21.25,21.74h73.85V604.18h49Zm193.75,387.74V835.89q0-60.92,0-121.84c0-12.07,0-12.08-11.78-12.08h-37.68c0-15-.24-28.42.11-41.82.14-5.84-1.74-7.79-7.67-7.7-20.46.3-40.93.11-61.4.11H1152c0,13.74-.59,26.48.2,39.12.55,8.89-3.34,11.25-11.07,11-9.58-.37-19.22-.06-28.75-.89-7.83-.69-10.53,1.54-10.45,9.82q.6,62.83,0,125.68c-.09,8.44,2.12,10.78,10.64,10.72,58.2-.38,116.41-.2,174.62-.23C1290,847.73,1292.79,847.48,1297.18,847.27ZM765.69,653c0,14.2-.34,27.3.14,40.36.26,6.85-2.2,8.87-8.78,8.61-11.18-.43-22.39.07-33.57-.19-5.25-.12-7.34,1.51-7.32,7.09q.27,65.72,0,131.43c0,5.11,1.16,7.52,6.88,7.51q90.66-.21,181.32,0c5.5,0,7.09-2,7.07-7.33q-.24-65.73,0-131.44c0-5.48-1.9-7.3-7.25-7.17-11.19.27-22.4-.35-33.57.21-7.54.39-10.11-2-9.78-9.68.56-13,.15-26.05.15-39.42Z"
		],
		[
			//TORCH
			"M1007,1044.84q121.39,0,242.81,0c13.75,0,14.23.48,14.26,13.83,0,11.2.18,22.4-.06,33.59-.4,18.75-12,30.63-30.76,30.57-6.85,0-9,2.46-11,8.62-21.87,69.14-66.35,117.8-133.59,145.1-8.48,3.44-11.9,7.17-12.43,16.84q-12.39,226.14-25.74,452.21c-.68,11.82-1.1,23.65-1.9,35.46-1.64,24.38-19.47,41.17-43.25,41-23.25-.22-40.71-17.26-42.06-41.13q-9.53-167.17-19-334.37c-3-52-6.13-104.09-8.93-156.16-.35-6.4-2-9.9-8.58-12.52-69.17-27.38-115-76.68-137-147.85-1.6-5.21-3.76-7-9.23-7.1-20.45-.47-31.66-12.25-31.77-32.7q-.11-16.8,0-33.59c.06-10.2,1.46-11.71,11.61-11.73q53.74-.11,107.49,0ZM815,1130.68c-.79.82-1.59,1.63-2.39,2.44,8.51,11,16.56,22.36,25.61,32.86,29.28,34,62,63.86,103.76,81.88,11.15,4.8,23.39,7.07,35.13,10.51l1.55-2.44c-12.17-35.4-9.15-71-.82-107.58C921.38,1154.53,867.55,1148.58,815,1130.68Zm156.17,567.61c13,0,18.25-5.11,18.22-17.88-.09-34.52.8-69.11-1.22-103.52-3.41-58.35-8.65-116.6-13.54-174.85-.36-4.29-3.2-9.21-6.42-12.16-2.58-2.35-7.5-2.15-11.38-3.08-.45,3.23-1.61,6.55-1.24,9.69,9.72,81,15.58,162.22,15.58,243.82ZM901,1059.9c-3.54.24-6.64.42-9.72.66-30,2.33-59.9,5.22-89.84-.16-14-2.52-20.68,2.16-23,15.88-2.66,15.92,2,23.8,16.54,25,17.81,1.49,35.76,2.91,53.58,2.32,38.33-1.28,37.35,3,52.38-40.15C901.13,1062.91,901,1062.23,901,1059.9ZM947,1104c-3.22-15.42-4.71-29.94,7.12-42.56-10.83-5.31-21-4.44-31.31-1.7-1.39.37-3.22,1.53-3.62,2.74-3.81,11.43-10.12,23.61-4.11,35,5.22,9.89,17.21,7.52,27,7.61C943.23,1105.1,944.45,1104.56,947,1104Z"
		],
		[
			//FLAME BOTTOM
			"M767.27,908.75c26.15,0,49.79.87,73.33-.33,14.35-.72,23.95,3,32.77,15.08,21,28.75,50.12,45.69,85.24,51.43,10.43,1.71,21.25,1.16,31.9,1.28q35.65.42,71.3.43c7.17,0,14.45.05,21.51-1,32.87-5,56.41-24.31,73.42-51.39,7.58-12.07,15.6-16.74,29.84-15.84,22,1.37,44.1.34,66.17.38,3,0,6.09.25,9.14.38l1.27,2.64c-12.85,10.69-25.26,22-38.63,31.94A294.47,294.47,0,0,1,1112,995.67c-26.73,6-53.8,9.15-81.37,5.31-9.42-1.32-19.16-.22-28.75-.31-60.82-.58-118.64-13.71-171.46-44.31-20.2-11.71-38.33-27-57.32-40.77C771.39,914.35,770.26,912.31,767.27,908.75Z",
			//FLAME UP RIGHT INSIDE RING
			"M1283.19,833.44H1190c.92-43.73-15.62-81.39-41-115.34.67-1.12.86-1.92,1.26-2.05,14.88-4.76,14.88-4.76,14.88-20.6,0-8-.35-16,.28-24,.16-2,3.45-5.35,5.36-5.39,19.17-.4,38.35-.11,57.53-.33,5.53-.07,6.15,2.79,6.1,7.18-.14,11.83.17,23.66-.14,35.48-.14,5.42,1.73,7.31,7.15,7.2,13.69-.28,27.4-.09,41.81-.09Z",
			//FLAME UP MIDDLE INSIDE RING3
			"M730.29,715.55c13.24,0,25.68,0,38.13,0,10.67,0,10.67,0,10.69-11.14,0-10.55,0-21.1,0-31.64,0-3.76,0-7,5.31-6.95,20.4.13,40.81,0,62.7,0v49l17.12,1.37a249.25,249.25,0,0,0-28.6,117.2H730.29Z",
			//SMALL BIT CENTER
			"M897.37,716.14v22.05c-.58.33-1.16.66-1.73,1l-12.57-23.05Z",
			//FLAME UP LEFT
			"M755.4,395c4.68-3.57,9-7.73,14.11-10.56,9.49-5.27,16.65-1,17.7,10a113.07,113.07,0,0,1,.09,11.5,522.55,522.55,0,0,0,22,154.62c1.8,6.07,4.43,11.89,6.8,17.78.31.77,1.32,1.25,4.32,3.94-4.39-50.72,2-97.55,25.8-143.55.54,4.63,1.08,7.15,1.09,9.67.05,44.43-.13,88.86.19,133.28.06,7.58-2.21,9.87-9.74,9.63q-24.91-.81-49.85,0c-7.51.26-9-2.48-8.93-9.36.24-57.21.16-114.43.12-171.64,0-14.17,1.35-12.5-13-12.63-3.15,0-6.3,0-9.45,0C756.2,396.77,755.8,395.87,755.4,395Z",
			//FLAME UP RIGHT
			"M1337.3,590.58c-28.28,1.54-28.28,1.54-28.28-22.3V540.75l2.77-1C1320.1,556.28,1328.41,572.84,1337.3,590.58Z",
			//FLAME UP LEFT INSIDE RING
			"M659.4,591.13c-2.9-25.66,30-113.57,44.3-118.43.25,2.89.68,5.6.68,8.3,0,33.49-.15,67,.17,100.46.07,7.15-1.38,10.33-9.38,9.85C683.47,590.61,671.7,591.13,659.4,591.13Z",
			//FLAME UP MIDDLE INSIDE RING
			"M923,472.7h90.47c-2.54,3.37-4.15,5.89-6.13,8.06-24.3,26.53-41.23,57.39-53.42,91-7.64,21.09-7.52,21.13-30.92,18.62Z",
			//FLAME UP MIDDLE INSIDE RING2
			"M1090.39,532c0,17-.21,33.91.11,50.86.11,6-1.28,8.69-7.91,8.38-21.64-1-18.11,4.65-23.13-19.34-6.28-30-3.23-59.69,3.41-89.32,1.83-8.17,5.27-10.89,13.56-10.45,15.75.83,13.83-1.69,13.94,13.8S1090.39,516.64,1090.39,532Z"
		],
		[
			//FLAME UP
			"M1234.31,555.36c0,10.72.31,20.29-.24,29.82-.12,2.06-3.27,5.63-5.08,5.66-19.5.42-39,.18-58.53.32-5.24,0-5.39-3.12-5.37-6.92.06-10.23,0-20.47,0-30.71V397.83H875.32l-1.13-2.34q10.42-10.67,20.85-21.35c19.07-19.64,40.49-37.12,55-61,14.56-24,23.24-49.78,20.89-77.91-2.73-32.54-16.5-60.9-36.75-86.28a25,25,0,0,1-5-10c-1.33-6.28.59-11.63,7.79-13,5.25-1,10.68-2.32,15.93-2,55.68,3.76,107.92,18.39,151.55,54.54,34.64,28.7,57.15,65.83,70,109.37,15.19,51.47,13,104.05,11.46,156.37-.87,28.55-7.92,56.9-12,85.37-.45,3.14-.58,7.11.94,9.62,11.84,19.55,29.12,25.6,50.65,18.35C1227.88,556.77,1230.38,556.33,1234.31,555.36Z"
		]
	]

	let checkLoad = () => {
		if ($loaderReady) {
			if ($page.route.id?.startsWith("/(landing)")) {
				if ($page.route.id == "/(landing)/trailer") {
					finishedLoading.set(true)
				} else {
					finishedLoading.set($bannerLoadLevel >= 3) //TODO
				}
			} else {
				finishedLoading.set(true)
			}
		}
	}

	loaderReady.subscribe(checkLoad)
	bannerLoadLevel.subscribe(checkLoad)
</script>

{#if !$finishedLoading}
	<div
		id="loader"
		class="w-screen absolute top-0 left-0 overflow-hidden z-20"
		style="height: calc(100vh + 7rem + 7rem)"
		out:fade={{ duration: 500 }}
	>
		<Img
			src={first}
			class="absolute h-full w-screen top-0 left-0 object-center object-cover pointer-events-none select-none"
			alt=""
		/>
	</div>
	<div
		id="loader"
		class="w-screen h-screen absolute top-0 left-0 overflow-hidden z-30 text-white flex items-center"
		out:fade={{ delay: 1000, duration: 250 }}
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" class="w-64 h-64 flex-auto">
			{#each pathsBlocks as paths, i}
				{#each paths as path, i2}
					{#if step == 1}
						<path
							in:draw={{ duration: 1500, easing: quintOut, delay: i * 250 + i2 * 50 }}
							out:fade={{ duration: 500, delay: i * 250 + i2 * 50 }}
							stroke="currentColor"
							fill="none"
							stroke-width="15px"
							d={path}
						/>
					{/if}
				{/each}
			{/each}
			{#each pathsBlocks as paths, i}
				{#each paths as path, i2}
					{#if step > 1}
						<path
							in:fade={{ duration: 500, delay: i * 250 + i2 * 50 }}
							fill="currentColor"
							d={path}
						/>
					{/if}
				{/each}
			{/each}
		</svg>
	</div>
	<!--
	<div
		id="loader"
		class="h-screen w-screen absolute top-0 left-0 text-white flex items-center overflow-hidden z-20 bg-gradient-to-br"
		style="--tw-gradient-from: #e99913; --tw-gradient-to: #e64116; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);"
		out:fade={{ duration: 250 }}
	>
		
	</div>-->
{/if}
