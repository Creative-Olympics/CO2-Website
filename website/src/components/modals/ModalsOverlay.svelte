<script>
	import { fade, fly } from "svelte/transition"
	import { modal } from "$lib/modals"
	import { onMount } from 'svelte'
	import { toasts } from "$lib/toasts"

	onMount(() => {
		// @ts-ignore
		modal.init(document.getElementById("RahNeil_N3:CO:moci2"));
		toasts.warning("heyy MoCi2");
	})
</script>

<!--
{#if $modal != null && $modal.content != null}
    <input type="checkbox" id="RahNeil_N3:CO:moci" class="modal-toggle" on:click={modal.close} />
	<label class="modal modal-bottom sm:modal-middle modal-open cursor-pointer" transition:fade="{{ duration: 250 }}" for="RahNeil_N3:CO:moci">
		<label class="modal-box relative w-full" transition:fly="{{ y: 200, duration: 250 }}" for="">
            <svelte:component this={$modal.content} {...$modal.props} />
		</label>
	</label>
{/if}
-->

<dialog id="RahNeil_N3:CO:moci2" class="modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Hello!</h3>
		<p class="py-4">Press ESC key or click the button below to close</p>

		<form method="dialog" class="modal-backdrop">
			<!-- if there is a button in form, it will close the modal -->
			<button class="btn">Close</button>
		</form>
	</div>
</dialog>
