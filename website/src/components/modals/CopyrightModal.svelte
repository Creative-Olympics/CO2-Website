<script>
	// @ts-nocheck

	import SendFeedbackIconButton from "$cmp/SendFeedbackIconButton.svelte"
	import { modal } from "$lib/modals"
	import AboutUsModal from "../modals/AboutUsModal.svelte"
</script>

<div class="absolute top-2 right-2">
	<SendFeedbackIconButton
		origin="d3lKAx0QrN@RahNeil_N3:CopyrightModal:content"
		tooltipDirection="left"
	/>
</div>
<h3 class="text-lg font-bold self-center mb-4 uppercase">License</h3>
<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
	<span property="dct:title">The Creative Olympics website, imagery & assets</span>
	by
	<button
		rel="cc:attributionURL dct:creator"
		property="cc:attributionName"
		on:click={() => modal.open(AboutUsModal)}
		class="inline link"
	>
		Neïl Rahmouni and Adrien "Chadrixy" Greco
	</button>
	are licensed under
	<a
		href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
		target="_blank"
		rel="license noopener noreferrer"
		class="link"
	>
		Attribution-NonCommercial-NoDerivatives 4.0 International
	</a>
</p>

<div class="mt-4">
	<a
		href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
		target="_blank"
		rel="license noopener noreferrer"
	>
		<div class="inline-block">
			<img
				class="h-7 w-7 ml-1 align-text-bottom inline"
				src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
				alt="Copyright"
			/>
			<img
				class="h-7 w-7 ml-1 align-text-bottom inline"
				src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
				alt="Attribution"
			/>
			<img
				class="h-7 w-7 ml-1 align-text-bottom inline"
				src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
				alt="Non commercial"
			/>
			<img
				class="h-7 w-7 ml-1 align-text-bottom inline"
				src="https://mirrors.creativecommons.org/presskit/icons/nd.svg"
				alt="No derivatives"
			/>
		</div>
	</a>
</div>
<div class="mt-6 flex gap-2 w-full justify-end">
	<a
		class="btn btn-outline"
		href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
		target="_blank"
		rel="license noopener noreferrer"
	>
		About this license
	</a>
	<button class="btn btn-primary" on:click={modal.close}>Okay</button>
</div>
