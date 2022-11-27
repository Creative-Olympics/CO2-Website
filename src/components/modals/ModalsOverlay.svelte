<script>
	import { fade, fly } from 'svelte/transition';
	import { modal } from './modals';
</script>

{#if $modal != null}
    <input type="checkbox" id="RahNeil_N3:CO:moci" class="modal-toggle" on:click={modal.close} />
	<label class="modal modal-bottom sm:modal-middle modal-open cursor-pointer" transition:fade="{{ duration: 250 }}" for="RahNeil_N3:CO:moci">
		<label class="modal-box relative w-full" transition:fly="{{ y: 200, duration: 250 }}" for="">
            <svelte:component this={$modal} />
		</label>
	</label>
{/if}
