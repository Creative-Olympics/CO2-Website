<script>
	import { toasts } from '$lib/toasts';
	import { rc_neilRahmouni, rc_chadrixy } from '$lib/firebase';
	import SocialLinks from '$cmp/SocialLinks.svelte';
	import SelectTile from '$cmp/tiles/SelectTile.svelte';
	import SwitchTile from '$cmp/tiles/SwitchTile.svelte';
	import { fade } from 'svelte/transition';

	let category = 'null';
	let location = 'null';
</script>

<!-- FOLLOWING GUIDELINES FROM Neïl's ANDROID APPS -->
<span class="text-md font-bold uppercase w-full">Send feedback</span>
<div class="flex flex-col mt-2 gap-2">
	<span class="text-primary font-semibold text-sm mt-4">General</span>

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
		<div class="relative h-4"> <!-- Required for animations -->
			{#if category == 'TRANSLATION'}
				<span class="mx-4 text-xs absolute" transition:fade={{duration: 250}}>
					Describe where the error is and how it should be changed, if possible
				</span>
			{:else if category == 'FEATURE'}
				<span class="mx-4 text-xs absolute" transition:fade={{duration: 250}}>Describe the feature and how it would work</span>
			{:else}
				<span class="mx-4 text-xs absolute" transition:fade={{duration: 250}}>
					Describe the issue, as well as steps to reproduce it if possible
				</span>
			{/if}
		</div>
	</div>

	<span class="text-primary font-semibold text-sm mt-4">Additional info</span>
	<SwitchTile title="Send Firebase App Installation ID" icon="tag" />
	<SwitchTile title="Accept contributor badge" icon="volunteer_activism" />
</div>
