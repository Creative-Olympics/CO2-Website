<script>
	import { rc_eventDesc_article } from '../firebase';
	import MediaQuery from './MediaQuery.svelte';
</script>

<div
	class="absolute w-screen overflow-hidden"
	data-scroll
	data-scroll-speed="8"
	data-scroll-position="top"
	data-scroll-offset="-120"
>
	<div class="flex flex-row">
		<svg
			class="rotate-180"
			xmlns="http://www.w3.org/2000/svg"
			width="1000"
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
		<MediaQuery query="(max-width: 480px)" let:matches>
			{#if !matches}
				<svg
					class="rotate-180"
					xmlns="http://www.w3.org/2000/svg"
					width="1000"
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
	<div class="-mt-2 -mb-2 w-screen flex items-center justify-center flex-col bg-base-100" data-scroll data-scroll-repeat data-scroll-call="appbar_showLogo">
		<article class="prose py-20 px-10 prose-h1:text-center">
			{@html rc_eventDesc_article}
		</article>
	</div>
	<div class="flex flex-row">
		<svg
			class="-scale-y-100 rotate-180"
			xmlns="http://www.w3.org/2000/svg"
			width="1000"
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
		<MediaQuery query="(max-width: 480px)" let:matches>
			{#if !matches}
				<svg
					class="-scale-y-100 rotate-180"
					xmlns="http://www.w3.org/2000/svg"
					width="1000"
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
