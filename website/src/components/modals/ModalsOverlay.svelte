<script>
	import { fade, fly } from "svelte/transition"
	import { onMount } from "svelte"
	import { toasts } from "$lib/toasts"

	import { modal } from "$lib/modals"

	onMount(() => {
		modal.subscribe((m) => {
			if (m != null && m.content != null) {
				// @ts-ignore
				document.getElementById("RahNeil_N3:CO:moci2")?.showModal()
			} else {
				// @ts-ignore
				document.getElementById("RahNeil_N3:CO:moci2")?.close()
			}
		})
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
		{#if $modal != null && $modal.content != null}
			<svelte:component this={$modal.content} {...$modal.props} />
		{/if}
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
