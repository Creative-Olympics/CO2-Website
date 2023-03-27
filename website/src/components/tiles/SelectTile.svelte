<script>
	import Icon from '$cmp/Icon.svelte';

	export let title = 'Title';
	export let icon = 'category';
	/** @type string|null */ export let placeholder = 'Please select an option';
	export let value = 'null';
	export let disabled = false;
	/** @type Object.<string, string> */ export let options = { ERROR: 'An error occured' };

	let open = false;
</script>

<div
	class="form-control w-full rounded-lg transition-all hover:bg-base-200 {disabled &&
		'opacity-50 bg-base-200'} dropdown dropdown-end"
	on:blur={() => (open = false)}
>
	<button
		class="label px-3 min-h-12 {disabled ? 'cursor-not-allowed' : 'cursor-pointer'}"
		on:click={() => (open = true)}
	>
		<div class="flex flex-row gap-2 items-center pr-3">
			<Icon>{icon}</Icon>
			<div class="ml-4 flex flex-col">
				<span class="label-text font-semibold text-left">{title}</span>
				<span class="label-text" style="padding-top:0.1rem;font-size: 0.82rem;line-height:1rem">
					{value == 'null' ? placeholder : options[value]}
				</span>
			</div>
		</div>
		<Icon>expand_more</Icon>
	</button>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- Here we use a <label tabindex="0"> instead of a <button> because Safari has a bug that prevents the button from being focused. -->
	<!-- Using tabindex="0" is required so the dropdown can be focused. -->
	{#if !disabled}
		<ul
			tabindex="0"
			class="dropdown-content menu menu-compact p-2 shadow bg-base-100 text-base-content rounded-box w-52 gap-1 {open
				? 'dropdown-open'
				: '!invisible'}"
		>
			{#each Object.keys(options) as key}
				<li>
					<button
						class={key == value ? 'active' : ''}
						on:click={() => {
							value = key;
							open = false;
						}}
					>
						{options[key]}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
