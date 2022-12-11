<script>
	import { toasts } from '$lib/toasts';
	import { rc_neilRahmouni, rc_chadrixy } from '$lib/firebase';
	import SocialLinks from '$cmp/SocialLinks.svelte';
	import SelectTile from '$cmp/tiles/SelectTile.svelte';

	let category = 'null';
	let location = 'null';
</script>

<!-- FOLLOWING GUIDELINES FROM Neïl's ANDROID APPS -->
<span class="text-md font-bold uppercase w-full">Send feedback</span>
<div class="flex flex-col mt-6 gap-2">
	<span class="text-primary font-semibold text-sm">General</span>

	<!-- Category Tile -->
	<SelectTile title="Category" bind:value={category}>
		<option value="BUG">Bug report</option>
		<option value="FEATURE">Feature request</option>
		<option value="TRANSLATION">Translation error</option>
	</SelectTile>

	<!-- Location Tile -->
	<SelectTile
		title={category == 'TRANSLATION' ? 'Error location' : 'Bug location'}
		icon="web_asset"
		bind:value={location}
		disabled={category != 'BUG' && category != 'TRANSLATION'}
	>
		<option>Previous screen</option>
		<option>Other screen</option>
		<option>Widget</option>
		<option>Notification</option>
	</SelectTile>

	<div class="form-control gap-1">
		<textarea class="textarea textarea-bordered h-24" placeholder="Description" />
		<span class="mx-4 text-xs">Describe where the error is and how it should be changed, if possible</span>
	</div>
</div>
