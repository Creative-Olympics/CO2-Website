<script>
	import SendFeedbackIconButton from "$cmp/SendFeedbackIconButton.svelte"
	import { toasts } from "$lib/toasts"
	import { onMount } from "svelte"

	onMount(() => {
		toasts.info(":eyes:");
	})
</script>

<div class="absolute top-2 right-2">
	<SendFeedbackIconButton
		origin="Fgy4gaYzFM@RahNeil_N3:AccountSetupModal:content"
		tooltipDirection="left"
	/>
</div>
<div class="flex flex-col items-center">
	<div class="self-start flex flex-row align-bottom">
		<h3 class="text-lg font-bold">Setting up your account...</h3>
		<!--<span class="loading loading-dots loading-xs -mb-2"/>-->
	</div>
	<span class="loading loading-ring loading-lg py-24"/>
</div>