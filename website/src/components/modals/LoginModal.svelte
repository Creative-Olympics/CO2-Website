<script>
	import {
		googleAuthProvider,
		microsoftAuthProvider,
		appleAuthProvider,
		rc_loginProviders
	} from "$lib/firebase"
	import { login } from "$lib/user"

	import GoogleLoginButton from "$cmp/login/GoogleLoginButton.svelte"
	import LoginAndLinkModal from "$cmp/modals/LoginAndLinkModal.svelte"
	import MicrosoftLoginButton from "$cmp/login/MicrosoftLoginButton.svelte"
	import AppleLoginButton from "$cmp/login/AppleLoginButton.svelte"
	import SendFeedbackIconButton from "$cmp/SendFeedbackIconButton.svelte"
</script>

<div class="absolute top-2 right-2">
	<SendFeedbackIconButton
		origin="iphfcteO8W@RahNeil_N3:LoginModal:content"
		tooltipDirection="left"
	/>
</div>
<span class="text-md font-bold uppercase w-full">Login</span>
<div class="flex flex-col mt-4 gap-2">
	{#if $rc_loginProviders.Google.toUpperCase() !== "HIDDEN"}
		<GoogleLoginButton
			on:click={() => login(googleAuthProvider, LoginAndLinkModal)}
			disabled={$rc_loginProviders.Google.toUpperCase() === "DISABLED"}
		/>
	{/if}
	{#if $rc_loginProviders.Microsoft.toUpperCase() !== "HIDDEN"}
		<MicrosoftLoginButton
			on:click={() => login(microsoftAuthProvider, LoginAndLinkModal)}
			disabled={$rc_loginProviders.Microsoft.toUpperCase() === "DISABLED"}
		/>
	{/if}
	{#if $rc_loginProviders.Apple.toUpperCase() !== "HIDDEN"}
		<AppleLoginButton
			on:click={() => login(appleAuthProvider, LoginAndLinkModal)}
			disabled={$rc_loginProviders.Apple.toUpperCase() === "DISABLED"}
		/>
	{/if}
</div>
