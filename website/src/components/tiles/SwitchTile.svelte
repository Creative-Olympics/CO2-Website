<script>
	import Icon from '$cmp/Icon.svelte';

	export let title = 'Title';
	export let icon = 'category';
	/** @type string|null */ export let description = null;
	export let value = false;
	export let disabled = false;
	export let onChange = () => {};
</script>

<div
	class="form-control w-full rounded-lg transition-all hover:bg-base-200 {disabled &&
		'opacity-50 bg-base-200'}"
>
	<label class="label px-3 min-h-12 {disabled ? 'cursor-not-allowed' : 'cursor-pointer'}">
		<div class="flex flex-row gap-2 items-center pr-3">
			<Icon class="flex-shrink-0">{icon}</Icon>
			<div class="ml-4 flex flex-col">
				<span class="label-text font-semibold">{title}</span>
				{#if description}
					<span class="label-text" style="padding-top:0.1rem;font-size: 0.82rem;line-height:1rem">
						{description}
					</span>
				{/if}
			</div>
		</div>
		<input type="checkbox" class="toggle" bind:checked={value} {disabled} on:input={onChange} />
	</label>
</div>
