<script>
	import GoogleLoginButton from "$cmp/login/GoogleLoginButton.svelte"
	import {
		googleAuthProvider,
		microsoftAuthProvider,
		login,
		appleAuthProvider,
		rc_loginProviders
	} from "$lib/firebase"
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
			onClick={() => login(googleAuthProvider, LoginAndLinkModal)}
			disabled={$rc_loginProviders.Google.toUpperCase() === "DISABLED"}
		/>
	{/if}
	{#if $rc_loginProviders.Microsoft.toUpperCase() !== "HIDDEN"}
		<MicrosoftLoginButton
			onClick={() => login(microsoftAuthProvider, LoginAndLinkModal)}
			disabled={$rc_loginProviders.Microsoft.toUpperCase() === "DISABLED"}
		/>
	{/if}
	{#if $rc_loginProviders.Apple.toUpperCase() !== "HIDDEN"}
		<AppleLoginButton
			onClick={() => login(appleAuthProvider, LoginAndLinkModal)}
			disabled={$rc_loginProviders.Apple.toUpperCase() === "DISABLED"}
		/>
	{/if}
</div>
