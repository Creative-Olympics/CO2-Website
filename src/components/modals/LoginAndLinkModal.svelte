<script>
	import { login } from '../../lib/firebase';

	let thenLink = true;

	/**  @type {String} */ export let providerName;
	/** @type {any} */ export let provider;
</script>

<span class="text-md font-bold uppercase w-full">Login</span>
<div class="flex flex-col mt-4 gap-2">
	<span>
		Your email address is already associated with a different account logged in using
		<b>{providerName}</b>
		.
	</span>
	<div class="form-control mb-2">
		<label class="label cursor-pointer">
			<span class="label-text">Link both accounts once logged in</span>
			<input type="checkbox" class="toggle" bind:checked={thenLink} />
		</label>
	</div>
	<div
		on:click={() => {
			if (thenLink) {

			} else {
				login(provider)
			}
		}}
	>
		<slot />
	</div>
</div>
