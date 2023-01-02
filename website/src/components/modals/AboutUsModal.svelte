<script>
	import { toasts } from '$lib/toasts';
	import { rc_neilRahmouni, rc_chadrixy } from '$lib/firebase';
	import SocialLinks from '$cmp/SocialLinks.svelte';
	import SendFeedbackIconButton from '$cmp/SendFeedbackIconButton.svelte';
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
				<img src={$rc_neilRahmouni.pfp || 'banner/neil_rahmouni.jpg'} alt="Neïl Rahmouni" />
			</div>
		</div>
		<span class="text-lg font-semibold">Neïl Rahmouni</span>
		<span class="text-sm italic">Full stack developer</span>
		<span class="text-sm italic mb-2">UI/UX Designer</span>
		<SocialLinks links={$rc_neilRahmouni.links} />
		{#if $rc_neilRahmouni.main == null}
			<button
				class="btn btn-sm my-4 gap-2 btn-accent normal-case"
				on:click={() => toasts.info('Portfolio available soon :)')}
			>
				<svg class="w-5" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
					/>
				</svg>
				Portfolio
			</button>
		{:else}
			<a
				class="btn btn-sm my-4 gap-2 btn-accent normal-case"
				target="_blank"
				href={$rc_neilRahmouni.main}
			>
				<svg class="w-5" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
					/>
				</svg>
				Portfolio
			</a>
		{/if}
	</div>
	<div class="divider w-full sm:divider-horizontal col-span-3 sm:col-span-1 justify-self-center" />
	<div class="flex flex-col items-center col-span-3">
		<div class="avatar mb-4">
			<div class="w-20 mask mask-squircle">
				<img src={$rc_chadrixy.pfp || 'banner/chadrixy.png'} alt="Chadrixy" />
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
		>
			<svg class="w-5" viewBox="0 0 24 24">
				<path
					fill="currentColor"
					d="M1.77,16.88L3.5,19.86C3.84,20.54 4.54,21 5.33,21H16.79L14.43,16.88H1.77M22.23,16.9C22.23,16.5 22.11,16.11 21.9,15.78L15.17,4.1C14.82,3.44 14.15,3 13.35,3H9.8L20.18,21L21.82,18.14C22.13,17.6 22.23,17.36 22.23,16.9M12.73,13.94L8.1,5.92L3.45,13.94H12.73Z"
				/>
			</svg>
			ArtStation
		</a>
	</div>
</div>
