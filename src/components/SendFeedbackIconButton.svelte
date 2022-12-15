<script>
	import { modal } from '$lib/modals';
	import SendFeedbackModal from './modals/SendFeedbackModal.svelte';

	/** @type string */ export let origin = 'undefined';
	/** @type string */ export let tooltipDirection = 'up';
</script>

<div
	class="tooltip {tooltipDirection != 'up' && 'tooltip-' + tooltipDirection}"
	data-tip="Send feedback"
>
	<button
		class="mr-2 btn btn-circle btn-ghost"
		on:click={() => modal.open($modal, SendFeedbackModal, { origin: origin })}
	>
		<span class="material-symbols-rounded select-none">sms_failed</span>
	</button>
</div>