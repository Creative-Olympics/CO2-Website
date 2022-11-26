<script>
	import { fade, fly } from 'svelte/transition';
	import { modal } from './modals';
</script>

{#if $modal != null}
	<div class="modal modal-bottom sm:modal-middle modal-open" transition:fade="{{ duration: 250 }}">
		<div class="modal-box" transition:fly="{{ y: 200, duration: 250 }}">
			<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
			<p class="py-4">
				You've been selected for a chance to get one year of subscription to use Wikipedia for free!
			</p>
			<div class="modal-action">
				<btn for="my-modal-6" class="btn" on:click={() => modal.close()}>Yay!</btn>
			</div>
		</div>
	</div>
{/if}
