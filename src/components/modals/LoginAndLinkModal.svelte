<script>
	import GoogleLoginButton from '$cmp/login/GoogleLoginButton.svelte';
	import MicrosoftLoginButton from '$cmp/login/MicrosoftLoginButton.svelte';
	import { auth, discordAuthProvider, googleAuthProvider, login, microsoftAuthProvider } from '$lib/firebase';
	import { linkWithCredential, signInWithPopup } from 'firebase/auth';
	import { modal } from '$lib/modals';
	import { toasts } from '$lib/toasts';

	let thenLink = true;

	/**  @type {String} */ export let providerID;
	/**  @type {any} */ export let userCred;
	/**  @type {any} */ let data;
	switch (providerID) {
		case 'RahNeil_N3:ProviderID:Xr1pTDZIE4':
			data = { providerName: 'Google', provider: googleAuthProvider, button: GoogleLoginButton };
			break;
		case 'RahNeil_N3:ProviderID:ZB8aogoHvU':
			data = {
				providerName: 'Microsoft',
				provider: microsoftAuthProvider,
				button: MicrosoftLoginButton
			};
			break;
		case 'RahNeil_N3:ProviderID:hgf671sqBC':
			data = {
				providerName: 'Discord',
				provider: discordAuthProvider,
				button: DiscordLoginButton
			};
			break;
		default:
			data = { providerName: 'null', provider: null, button: null };
			break;
	}
</script>

<span class="text-md font-bold uppercase w-full">Login</span>
<div class="flex flex-col mt-4 gap-2">
	<span>
		Your email address is already associated with a different account logged in using
		<b>{data.providerName}</b>
		.
	</span>
	<div class="form-control mb-2">
		<label class="label cursor-pointer">
			<span class="label-text">Link both accounts once logged in</span>
			<input type="checkbox" class="toggle" bind:checked={thenLink} />
		</label>
	</div>

	<svelte:component
		this={data.button}
		onClick={() => {
			if (thenLink) {
				signInWithPopup(auth, data.provider)
					.then((result) => {
						toasts.success('Welcome back ' + result.user.displayName);
						modal.close();

						linkWithCredential(result.user, userCred).then(() => {
							toasts.success('Accounts successfully linked!');
						});
					})
					.catch((error) => {
						console.log(error.code);
						console.log(error.message);
						toasts.error('An unknown error occured');
						modal.close();
					});
			} else {
				login(data.provider);
			}
		}}
	/>
</div>
