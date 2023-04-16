<script>
	import { toasts } from "$lib/toasts"
	import { rc_neilRahmouni, rc_chadrixy } from "$lib/firebase"
	import SocialLinks from "$cmp/SocialLinks.svelte"
	import SendFeedbackIconButton from "$cmp/SendFeedbackIconButton.svelte"
	import Icon from "$cmp/Icon.svelte"
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
				<img src={$rc_neilRahmouni.pfp || "banner/neil_rahmouni.jpg"} alt="Neïl Rahmouni" />
			</div>
		</div>
		<span class="text-lg font-semibold">Neïl Rahmouni</span>
		<span class="text-sm italic">Full stack developer</span>
		<span class="text-sm italic mb-2">UI/UX Designer</span>
		<SocialLinks links={$rc_neilRahmouni.links} />
		{#if $rc_neilRahmouni.main == null}
			<button
				class="btn btn-sm my-4 gap-2 btn-accent normal-case"
				on:click={() => toasts.info("Portfolio available soon :)")}
			>
				<Icon>language</Icon>
				Portfolio
			</button>
		{:else}
			<a
				class="btn btn-sm my-4 gap-2 btn-accent normal-case"
				target="_blank"
				href={$rc_neilRahmouni.main}
				rel="noreferrer"
			>
				<Icon>language</Icon>
				Portfolio
			</a>
		{/if}
	</div>
	<div class="divider w-full sm:divider-horizontal col-span-3 sm:col-span-1 justify-self-center" />
	<div class="flex flex-col items-center col-span-3">
		<div class="avatar mb-4">
			<div class="w-20 mask mask-squircle">
				<img src={$rc_chadrixy.pfp || "banner/chadrixy.png"} alt="Chadrixy" />
			</div>
		</div>
		<span class="text-lg font-semibold">Chadrixy</span>
		<span class="text-sm italic">Graphic designer & Artist</span>
		<span class="text-sm italic mb-2">3D Designer</span>
		<SocialLinks links={$rc_chadrixy.links} />
		<a
			class="btn btn-sm my-4 gap-2 btn-accent normal-case"
			target="_blank"
			href={$rc_chadrixy.main}
			rel="noreferrer"
		>
			<Icon class="w-5">artstation</Icon>
			ArtStation
		</a>
	</div>
</div>
