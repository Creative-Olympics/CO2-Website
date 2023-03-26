<script>
	import { app, rc_feedback_email } from '$lib/firebase';
	import SelectTile from '$cmp/tiles/SelectTile.svelte';
	import SwitchTile from '$cmp/tiles/SwitchTile.svelte';
	import { fade } from 'svelte/transition';
	import { getId, getInstallations } from 'firebase/installations';
	import { logs } from '$lib/logs';

	let firebaseAppID = 'Loading...';
	let windowDimensions = innerWidth + ' x ' + innerHeight;

	getId(getInstallations(app)).then((id) => {
		firebaseAppID = id;
	});

	export let origin = 'null';

	let category = 'null';
	let location = 'null';
	let description = '';
	let sendBrowser = true;
	let sendWindowDimensions = true;
	let sendLogs = true;
	let sendFirebaseAppID = true;
	let contributor = true;

	let send = () => {
		window.open(
			'mailto:' +
				$rc_feedback_email +
				'?subject=' +
				category +
				'&body=' +
				'SCREEN: `' +
				(location == 'PREVIOUS' ? origin : location) +
				'`%0A%0ABROWSER: `' +
				(sendBrowser ? navigator.userAgent : 'denied') +
				'`%0A%0AWINDOW_SIZE: `' +
				(sendWindowDimensions ? windowDimensions : 'denied') +
				'`%0A%0ADESC:%0A> ' +
				description +
				'%0A%0ALOGS:%0A```json%0A' +
				(sendLogs ? JSON.stringify($logs) : 'denied') +
				'%0A```%0A%0AFIREBASE: `' +
				(sendFirebaseAppID ? firebaseAppID : 'denied') +
				'`%0A%0ACONTRIBUTOR: `' +
				(sendFirebaseAppID && contributor) +
				'`',
			'_blank'
		);
	};
</script>

<!-- FOLLOWING GUIDELINES FROM RahNeil_N3:AndroidSendFeedbackActivity -->
<span class="text-md font-bold uppercase w-full">Send feedback</span>
<div class="flex flex-col mt-4 gap-2">
	<!-- Category Tile -->
	<SelectTile
		title="Category"
		bind:value={category}
		options={{ BUG: 'Bug report', FEATURE: 'Feature request', TRANSLATION: 'Translation error' }}
	/>

	<!-- Location Tile -->
	<SelectTile
		title={category == 'TRANSLATION' ? 'Error location' : 'Bug location'}
		icon="web_asset"
		bind:value={location}
		disabled={category != 'BUG' && category != 'TRANSLATION'}
	>
		<option value="PREVIOUS">Previous screen</option>
		<option>Other screen</option>
		<option>Widget</option>
		<option>Notification</option>
	</SelectTile>

	<div class="form-control gap-1">
		<textarea
			class="textarea textarea-bordered h-24"
			placeholder="Description"
			bind:value={description}
		/>
		<div class="relative h-4">
			<!-- Required for animations -->
			{#if category == 'TRANSLATION'}
				<span class="mx-4 text-xs absolute" transition:fade={{ duration: 250 }}>
					Describe where the error is and how it should be changed, if possible
				</span>
			{:else if category == 'FEATURE'}
				<span class="mx-4 text-xs absolute" transition:fade={{ duration: 250 }}
					>Describe the feature and how it would work</span
				>
			{:else}
				<span class="mx-4 text-xs absolute" transition:fade={{ duration: 250 }}>
					Describe the issue, as well as steps to reproduce it if possible
				</span>
			{/if}
		</div>
	</div>

	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- Here a tabindex=0 is necessary so the div can be focused -->
	<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
		<input type="checkbox" tabindex="-1" />
		<div class="collapse-title font-bold flex items-center">Additional info</div>
		<div class="collapse-content flex flex-col gap-2 focus-within:max-h-screen">
			<SwitchTile
				title="Browser"
				icon="web"
				disabled={category != 'BUG'}
				value={category == 'BUG' && sendBrowser}
				onChange={() => {
					sendBrowser = !sendBrowser;
				}}
			/>
			<SwitchTile
				title="Window dimensions"
				icon="aspect_ratio"
				description={windowDimensions}
				disabled={category != 'BUG'}
				value={category == 'BUG' && sendWindowDimensions}
				onChange={() => {
					sendWindowDimensions = !sendWindowDimensions;
				}}
			/>
			<SwitchTile
				title="Recent logs"
				description="Send recent errors and warnings"
				icon="breaking_news_alt_1"
				disabled={category != 'BUG'}
				value={category == 'BUG' && sendLogs}
				onChange={() => {
					sendLogs = !sendLogs;
				}}
			/>
			<SwitchTile
				title="Send Firebase App Installation ID"
				icon="tag"
				description={firebaseAppID}
				bind:value={sendFirebaseAppID}
			/>
			<SwitchTile
				title="Accept contributor badge"
				icon="volunteer_activism"
				description="Accept to potentially receive a contributor badge as a sign of gratitude for your help"
				disabled={!sendFirebaseAppID}
				value={sendFirebaseAppID && contributor}
				onChange={() => {
					contributor = !contributor;
				}}
			/>
		</div>
	</div>

	<button
		class="btn btn-block btn-primary gap-2 mt-4"
		disabled={category == 'null' ||
			(category == 'BUG' && location == 'null') ||
			(category == 'FEATURE' && description == '')}
		on:click={send}
	>
		Send
	</button>
</div>
