<script>
	import { modal } from '../modals/modals';
	import AboutUsModal from '../modals/AboutUsModal.svelte';
</script>

<h3 class="text-lg font-bold self-center mb-4 uppercase">License</h3>
<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
	<span property="dct:title">The Creative Olympics website, imagery & assets</span> by
	<button
		rel="cc:attributionURL dct:creator"
		property="cc:attributionName"
		on:click={() => modal.open($modal, AboutUsModal)}
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
		<div class="flex gap-2 mt-4">
			<img
				style="height:28px!important;margin-left:3px;vertical-align:text-bottom;"
				src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
			/>
			<img
				style="height:28px!important;margin-left:3px;vertical-align:text-bottom;"
				src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
			/>
			<img
				style="height:28px!important;margin-left:3px;vertical-align:text-bottom;"
				src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
			/>
			<img
				style="height:28px!important;margin-left:3px;vertical-align:text-bottom;"
				src="https://mirrors.creativecommons.org/presskit/icons/nd.svg"
			/>
		</div>
	</a>
</p>
<div class="mt-6 flex gap-2 w-full justify-end">
	<a
		class="btn btn-outline"
		href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
		target="_blank"
		rel="license noopener noreferrer"
	>
		About this license
	</a>
	<button class="btn btn-primary" on:click={modal.close}>Okay</button>
</div>
