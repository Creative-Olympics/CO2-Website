<script>
	export let title = 'Title';
	export let icon = 'category';
	export let value = false;
	export let disabled = false;
</script>

<div
	class="form-control w-full rounded-lg transition-all {disabled &&
		'opacity-50 bg-base-300'}"
>
	<label class="label cursor-pointer px-3 {disabled&&"cursor-not-allowed"}">
		<div class="flex flex-row gap-2 items-center p-1">
			<span class="material-symbols-rounded select-none">{icon}</span>
			<span class="label-text ml-4 font-semibold">{title}</span>
		</div>
		<input type="checkbox" class="toggle" bind:checked={value} {disabled} />
	</label>
</div>
