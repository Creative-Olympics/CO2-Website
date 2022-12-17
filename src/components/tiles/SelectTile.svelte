<script>
	import Icon from "$cmp/Icon.svelte";


	export let title = 'Title';
	export let icon = 'category';
	export let value = 'null';
	export let disabled = false;
</script>

<div
	class="flex flex-row gap-2 items-center rounded-lg transition-all {disabled &&
		'opacity-50 bg-base-300 cursor-not-allowed'}"
>
	<Icon spanClass="ml-3">{icon}</Icon>
	<select
		class="select flex-1 bg-transparent border-transparent opacity-100 disabled:bg-transparent disabled:border-transparent disabled:opacity-100"
		bind:value
		{disabled}
	>
		<option disabled selected value="null">{title}</option>
		<slot />
	</select>
</div>
