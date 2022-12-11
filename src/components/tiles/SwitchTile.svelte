<script>
	export let title = 'Title';
	export let icon = 'category';
	/** @type string|null */ export let description = null;
	export let value = false;
	export let disabled = false;
</script>

<div class="form-control w-full rounded-lg transition-all {disabled && 'opacity-50 bg-base-300'}">
	<label class="label cursor-pointer px-3 h-12 {disabled && 'cursor-not-allowed'}">
		<div class="flex flex-row gap-2 items-center">
			<span class="material-symbols-rounded select-none">{icon}</span>
			<div class="ml-4 flex flex-col">
				<span class="label-text font-semibold">{title}</span>
				{#if description}
					<span class="label-text" style="font-size:0.82rem">{description}</span>
				{/if}
			</div>
		</div>
		<input type="checkbox" class="toggle" bind:checked={value} {disabled} />
	</label>
</div>
