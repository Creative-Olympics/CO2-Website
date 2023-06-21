<script>
	import { rc_eventDesc_article } from "$lib/firebase"
	import { scrollInstance } from "$lib/scroll"

	var contentHeight = 0
	$: $scrollInstance?.update(), [contentHeight, innerWidth]
	$: innerWidth = 0

	const DEBUG = false
</script>

<svelte:window bind:innerWidth />

<div
	class="absolute z-10 left-0 w-screen"
	data-rahneiln3scroll
	data-rahneiln3scroll-position="top"
	data-rahneiln3scroll-offset="-112"
>
	<div class="h-28 w-screen">
		{#if DEBUG}
			<div class="w-screen h-28 bg-blue-700 absolute" />
		{:else}
			<div class="w-screen h-28 flex flex-row absolute overflow-hidden">
				{#each { length: Math.ceil(innerWidth / 700) } as _}
					<svg
						class="rotate-180"
						xmlns="http://www.w3.org/2000/svg"
						width="700"
						height="112"
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
				{/each}
			</div>
		{/if}
	</div>
	<div
		class="-mt-2 -mb-2 flex flex-col items-center justify-center bg-base-100 w-screen min-h-screen"
		bind:clientHeight={contentHeight}
	>
		{#if DEBUG}
			<div class="w-full bg-teal-500" style="height: 1500px" />
		{:else}
			<article class="prose py-20 px-10 prose-h1:text-center">
				{@html $rc_eventDesc_article}
			</article>
		{/if}
	</div>
	<div class="h-28 w-screen">
		{#if DEBUG}
			<div class="w-screen h-28 bg-blue-700 absolute" />
		{:else}
			<div class="w-screen h-28 flex flex-row absolute overflow-hidden">
				{#each { length: Math.ceil(innerWidth / 700) } as _}
					<svg
						class="-scale-y-100 rotate-180"
						xmlns="http://www.w3.org/2000/svg"
						width="700"
						height="112"
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
				{/each}
			</div>
		{/if}
	</div>
	<div class="w-screen" style="height: {contentHeight / 2}px" />
</div>

<!-- Space between the first and second section, depending on this component height -->
<div style="height: calc({contentHeight / 2}px - 50vh - 7rem)" />
