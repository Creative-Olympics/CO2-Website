<script>
	export const userId = 'neil';

	import { toasts } from '$lib/toasts';
	import { rc_credits } from '$lib/firebase';
	import SocialLinks from '$cmp/SocialLinks.svelte';
	import SendFeedbackIconButton from '$cmp/SendFeedbackIconButton.svelte';
	import Icon from '$cmp/Icon.svelte';

	/** @type {any} */
	const user = ($rc_credits).find(u => u.id == userId);

</script>

<div class="absolute top-2 right-2">
	<SendFeedbackIconButton
		origin="KaCB3PgAA6@RahNeil_N3:AboutUsModal:content"
		tooltipDirection="left"
	/>
</div>
<span class="text-md font-bold uppercase w-full">About me</span>
<div class="grid grid-cols-3 sm:grid-cols-7 gap-1 w-full mt-6">
	<div class="flex flex-col items-center col-span-3">
		<div class="avatar mb-4">
			<div class="w-20 mask mask-squircle">
				<img src={user.image} alt={user.name} />
			</div>
		</div>
		<span class="text-lg font-semibold">{user.name}</span>
		<span class="text-sm italic">{user.fonctions[0]}</span>
		{#each user.fonctions.slice(1) as fonction}
			<span class="text-sm italic mb-2">{fonction}</span>
		{/each}
	</div>
	<div class="divider w-full sm:divider-horizontal col-span-3 sm:col-span-1 justify-self-center" />
	<div class="flex flex-col items-center col-span-3 justify-between">
		<span class="text-base">{user.quote || 'the cake is a lie'}</span>

		<div class="flex flex-col">
			<SocialLinks links={user.contact} />
			<button
				class="btn btn-sm my-4 gap-2 btn-accent normal-case"
				on:click={() => toasts.info('Portfolio available soon :)')}
			>
				<Icon>{user.link.type}</Icon>
				{user.link.name}
			</button>
		</div>
	</div>
</div>
