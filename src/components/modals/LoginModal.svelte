<script>
	import GoogleLoginButton from '$cmp/login/GoogleLoginButton.svelte';
	import {
		googleAuthProvider,
		microsoftAuthProvider,
		login,
		appleAuthProvider
	} from '$lib/firebase';
	import LoginAndLinkModal from '$cmp/modals/LoginAndLinkModal.svelte';
	import MicrosoftLoginButton from '$cmp/login/MicrosoftLoginButton.svelte';
	import AppleLoginButton from '$cmp/login/AppleLoginButton.svelte';
	import SendFeedbackIconButton from '$cmp/SendFeedbackIconButton.svelte';
</script>

<div class="absolute top-2 right-2">
	<SendFeedbackIconButton origin="iphfcteO8W@RahNeil_N3:LoginModal:content" tooltipDirection="left" />
</div>
<span class="text-md font-bold uppercase w-full">Login</span>
<div class="flex flex-col mt-4 gap-2">
	<GoogleLoginButton onClick={() => login(googleAuthProvider, LoginAndLinkModal)} />
	<MicrosoftLoginButton onClick={() => login(microsoftAuthProvider, LoginAndLinkModal)} />
	<AppleLoginButton onClick={() => login(appleAuthProvider, LoginAndLinkModal)} />
</div>
