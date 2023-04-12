<script>
	import GoogleLoginButton from '$cmp/login/GoogleLoginButton.svelte';
	import DiscordLoginButton from '$cmp/login/DiscordLoginButton.svelte';
	import {
		googleAuthProvider,
		microsoftAuthProvider,
		login,
		appleAuthProvider,
		auth
	} from '$lib/firebase';
	import LoginAndLinkModal from '$cmp/modals/LoginAndLinkModal.svelte';
	import MicrosoftLoginButton from '$cmp/login/MicrosoftLoginButton.svelte';
	import AppleLoginButton from '$cmp/login/AppleLoginButton.svelte';
	import SendFeedbackIconButton from '$cmp/SendFeedbackIconButton.svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { toasts } from '$lib/toasts';
	import { modal } from '$lib/modals';

	let discordLogged = false;


	/**
	 * @type {NodeJS.Timer}
	 */
	let errorChangeLoop;

	function loginDiscord() {
		discordLogged = true;
		window.open('/api/discord/auth', undefined, 'popup,width=500,height=800');

		errorChangeLoop = setInterval(() => {
			const isError = localStorage.getItem('discord_error');
			if(isError) {
				clearInterval(errorChangeLoop);
				localStorage.removeItem('discord_error');

				toasts.error(`${isError} (during discord authentification)`);
			}
		}, 500)
		
	}

	

	onAuthStateChanged(auth, (u) => {
		console.log(!!(discordLogged && u));
		if (u && discordLogged) {
			clearInterval(errorChangeLoop);

			toasts.success("You've been successfully logged in!");
			modal.close();
			discordLogged = false;
		}
	});
</script>

<div class="absolute top-2 right-2">
	<SendFeedbackIconButton
		origin="iphfcteO8W@RahNeil_N3:LoginModal:content"
		tooltipDirection="left"
	/>
</div>
<span class="text-md font-bold uppercase w-full">Login</span>
<div class="flex flex-col mt-4 gap-2">
	<DiscordLoginButton onClick={() => loginDiscord()} />
	<GoogleLoginButton onClick={() => login(googleAuthProvider, LoginAndLinkModal)} />
	<MicrosoftLoginButton onClick={() => login(microsoftAuthProvider, LoginAndLinkModal)} />
	<AppleLoginButton onClick={() => login(appleAuthProvider, LoginAndLinkModal)} />
</div>
