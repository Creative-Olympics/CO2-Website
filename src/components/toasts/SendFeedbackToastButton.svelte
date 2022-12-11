<script>
	import SendFeedbackModal from '$cmp/modals/SendFeedbackModal.svelte';
	import { modal } from '$lib/modals';

	export let origin = 'undefined';
</script>

<div class="flex-none">
	<button
		class="btn btn-sm normal-case"
		on:click={() => modal.open($modal, SendFeedbackModal, { origin: origin })}
	>
		Send Feedback
	</button>
</div>
