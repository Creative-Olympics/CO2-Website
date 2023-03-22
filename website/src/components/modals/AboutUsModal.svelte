<script>
	// @ts-nocheck

	import { toasts } from '$lib/toasts';
	import { rc_neilRahmouni, rc_chadrixy } from '$lib/firebase';
	import SocialLinks from '$cmp/SocialLinks.svelte';
	import SendFeedbackIconButton from '$cmp/SendFeedbackIconButton.svelte';
	import { credits } from '$lib/credit';
	import Icon from '$cmp/Icon.svelte';

	//const credit = credits[0];
</script>

<div class="absolute top-2 right-2">
	<SendFeedbackIconButton
		origin="KaCB3PgAA6@RahNeil_N3:AboutUsModal:content"
		tooltipDirection="left"
	/>
</div>
<span class="text-md font-bold uppercase w-full">About us</span>
<div class="grid grid-cols-3 sm:grid-cols-7 gap-1 w-full mt-6">
	<div class="flex flex-col items-center col-span-3">
		<div class="avatar mb-4">
			<div class="w-20 mask mask-squircle">
				<img src={credits[0].image} alt={credits[0].name} />
			</div>
		</div>
		<span class="text-lg font-semibold">{credits[0].name}</span>
		<span class="text-sm italic">{credits[0].fonctions[0]}</span>
		{#each credits[0].fonctions.slice(1) as fonction}
			<span class="text-sm italic mb-2">{fonction}</span>
		{/each}
		<SocialLinks links={credits[0].contact} />
		<button
			class="btn btn-sm my-4 gap-2 btn-accent normal-case"
			on:click={() => toasts.info('Portfolio available soon :)')}
		>
			<Icon type={credits[0].link.type} />
			{credits[0].link.name}
		</button>
	</div>
	{#each credits.slice(1) as credit}
		<div
			class="divider w-full sm:divider-horizontal col-span-3 sm:col-span-1 justify-self-center"
		/>
		<div class="flex flex-col items-center col-span-3">
			<div class="avatar mb-4">
				<div class="w-20 mask mask-squircle">
					<img src={credit.image} alt={credit.name} />
				</div>
			</div>
			<span class="text-lg font-semibold">{credit.name}</span>
			<span class="text-sm italic">{credit.fonctions[0]}</span>
			{#each credit.fonctions.slice(1) as fonction}
				<span class="text-sm italic mb-2">{fonction}</span>
			{/each}
			<SocialLinks links={credit.contact} />
			<a
				class="btn btn-sm my-4 gap-2 btn-accent normal-case"
				href={credit.link.url}
				rel="noreferrer"
				target="_blank"
			>
				<Icon type={credit.link.type} />
				{credit.link.name}
			</a>
		</div>
	{/each}
</div>
