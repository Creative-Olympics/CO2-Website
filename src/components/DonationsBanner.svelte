<script>
	import PlayerModel from './PlayerModel.svelte';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<div data-rahneiln3scroll>
	<div
		class="hero bg-cover bg-center bottom-0"
		style="background-image: url('banner/final.jpg'); height: calc(100vh + 178px)"
	>
		<span class="countdown font-mono text-7xl"> HEY </span>
		<div class="hero-content text-center text-neutral-content mt-32 flex-col relative">
			<img class="absolute bottom-0" src="banner/podiums.png" alt="Creative Olympics Podiums" />
			<div class="absolute bottom-0" style="margin-bottom: 6rem">
				{#if mounted}
					<PlayerModel class="absolute bottom-0" />
				{/if}
			</div>
		</div>
	</div>
</div>
