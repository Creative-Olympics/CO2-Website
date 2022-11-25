<script>
	import { onMount } from "svelte";

	let seconds = 3600*24+15; //TODO !
	let mounted = false;

	onMount(() => {
		var intervalID = window.setInterval(() => seconds--, 1000);
		mounted = true;
	})
</script>

<div data-scroll>
	<div
		class="hero bg-cover bg-center"
		style="background-image: url('banner/final.jpg'); height: calc(100vh + 120px)"
	>
		<div class="hero-overlay bg-opacity-60" />
		
		<div class="hero-content text-center text-neutral-content mt-32 flex-col">
			<span class="uppercase text-sm font-semibold font-sans mb-2">Event starts in</span>
			<div class="grid grid-flow-col gap-8 text-center auto-cols-max font-bold mb-4">
				<div class="flex flex-col">
					<span class="countdown font-mono text-7xl">
						<span style="--value:{seconds/86400>>0};" />
					</span>
					days
				</div>
				<div class="flex flex-col">
					<span class="countdown font-mono text-7xl">
						<span style="--value:{seconds%86400/3600>>0};" />
					</span>
					hours
				</div>
				<div class="flex flex-col">
					<span class="countdown font-mono text-7xl">
						<span style="--value:{seconds%3600/60>>0};" />
					</span>
					min
				</div>
				<div class="flex flex-col">
					<span class="countdown font-mono text-7xl">
						<span style="--value:{seconds%60%60};" />
					</span>
					sec
				</div>
			</div>
			<span class="text-md font-medium mb-2 max-w-md">Come back here to see the latest donations & donators or if you too want to become one</span>
		</div>
	</div>
</div>
