<script>
	import GoogleLoginButton from '$cmp/login/GoogleLoginButton.svelte';
	import { googleAuthProvider, microsoftAuthProvider, login } from '$lib/firebase';
	import LoginAndLinkModal from '$cmp/modals/LoginAndLinkModal.svelte';
	import MicrosoftLoginButton from '$cmp/login/MicrosoftLoginButton.svelte';
</script>

<span class="text-md font-bold uppercase w-full">Login</span>
<div class="flex flex-col mt-4 gap-2">
	<GoogleLoginButton onClick={() => login(googleAuthProvider, LoginAndLinkModal)} />
	<MicrosoftLoginButton onClick={() => login(microsoftAuthProvider, LoginAndLinkModal)} />
</div>
