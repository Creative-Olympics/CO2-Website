<script>
	import { modal } from '$lib/modals';
	import Icon from './Icon.svelte';
	import SendFeedbackModal from './modals/SendFeedbackModal.svelte';

	/** @type string */ export let origin = 'undefined';
	/** @type string */ export let tooltipDirection = 'up';
</script>

<div
	class="tooltip {tooltipDirection != 'up' && 'tooltip-' + tooltipDirection}"
	data-tip="Send feedback"
>
	<button
		class="btn btn-circle btn-ghost"
		on:click={() => modal.open($modal, SendFeedbackModal, { origin: origin })}
	>
		<Icon>sms_failed</Icon>
	</button>
</div>