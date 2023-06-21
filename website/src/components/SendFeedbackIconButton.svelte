<script>
	import { modal } from "$lib/modals"

	import Icon from "$cmp/Icon.svelte"
	import { finishedLoading } from "$lib/loader"

	/** @type string */ export let origin = "undefined"
	/** @type string */ export let tooltipDirection = "up"
</script>

{#if $finishedLoading}
	{#await import("$cmp/modals/SendFeedbackModal.svelte").then(({default: C}) => C) then SendFeedbackModal}
		<div
			class="tooltip {tooltipDirection != 'up' && 'tooltip-' + tooltipDirection}"
			data-tip="Send feedback"
		>
			<button
				class="btn btn-circle btn-ghost"
				aria-label="Send feedback"
				on:click={() => modal.open($modal, SendFeedbackModal, { origin: origin })}
			>
				<Icon>sms_failed</Icon>
			</button>
		</div>
	{/await}
{/if}
