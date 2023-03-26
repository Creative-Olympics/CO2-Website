<script>
	import Icon from '$cmp/Icon.svelte';

	export let title = 'Title';
	export let icon = 'category';
	/** @type string|null */ export let placeholder = 'Please select an option';
	export let value = 'null';
	export let disabled = false;
	/** @type Object.<string, string> */ export let options = { ERROR: 'An error occured' };
</script>

<!--<div
	class="flex flex-row gap-2 items-center rounded-lg transition-all {disabled &&
		'opacity-50 bg-base-300 cursor-not-allowed'}"
>
	<Icon spanClass="ml-3">{icon}</Icon>
	<select
		class="select flex-1 bg-transparent border-transparent opacity-100 disabled:bg-transparent disabled:border-transparent disabled:opacity-100"
		bind:value
		{disabled}
	>
		<option disabled selected value="null">{placeholder}</option>
		<slot />
	</select>
</div>-->
<div
	class="form-control w-full rounded-lg transition-all {disabled &&
		'opacity-50 bg-base-300'} dropdown dropdown-end"
>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- Here we use a <label tabindex="0"> instead of a <button> because Safari has a bug that prevents the button from being focused. -->
	<!-- Using tabindex="0" is required so the dropdown can be focused. -->
	<label
		class="label px-3 min-h-12 {disabled ? 'cursor-not-allowed' : 'cursor-pointer'}"
		for=""
		tabindex="0"
	>
		<div class="flex flex-row gap-2 items-center pr-3">
			<Icon>{icon}</Icon>
			<div class="ml-4 flex flex-col">
				<span class="label-text font-semibold">{title}</span>
				<span class="label-text" style="padding-top:0.1rem;font-size: 0.82rem;line-height:1rem">
					{value && placeholder}
				</span>
			</div>
		</div>
		<Icon>expand_more</Icon>
	</label>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- Here we use a <label tabindex="0"> instead of a <button> because Safari has a bug that prevents the button from being focused. -->
	<!-- Using tabindex="0" is required so the dropdown can be focused. -->
	{#if !disabled}
		<ul
			tabindex="0"
			class="dropdown-content menu menu-compact p-2 shadow bg-base-200 text-base-content rounded-box w-52 gap-1"
		>
			{#each Object.keys(options) as key}
				<li>
					<button
						class={key == value ? 'active' : ''}
						on:click={() => {
							value = key;
						}}
					>
						{options[key]}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
