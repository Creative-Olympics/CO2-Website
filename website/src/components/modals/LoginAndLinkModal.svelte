<script>
	import { linkWithCredential, signInWithPopup } from "firebase/auth"

	import { auth, appleAuthProvider, googleAuthProvider, microsoftAuthProvider } from "$lib/firebase"
	import { login } from "$lib/user"
	import { modal } from "$lib/modals"
	import { toasts } from "$lib/toasts"
	import { logs } from "$lib/logs"

	import GoogleLoginButton from "$cmp/login/GoogleLoginButton.svelte"
	import MicrosoftLoginButton from "$cmp/login/MicrosoftLoginButton.svelte"
	import AppleLoginButton from "$cmp/login/AppleLoginButton.svelte"
	import SendFeedbackIconButton from "$cmp/SendFeedbackIconButton.svelte"
	import SwitchTile from "$cmp/tiles/SwitchTile.svelte"

	let thenLink = true

	/**  @type {String} */ export let providerID
	/**  @type {any} */ export let userCred
	/**  @type {any} */ let data
	switch (providerID) {
		case "RahNeil_N3:ProviderID:Xr1pTDZIE4":
			data = { providerName: "Google", provider: googleAuthProvider, button: GoogleLoginButton }
			break
		case "RahNeil_N3:ProviderID:ZB8aogoHvU":
			data = {
				providerName: "Microsoft",
				provider: microsoftAuthProvider,
				button: MicrosoftLoginButton
			}
			break
		case "RahNeil_N3:ProviderID:QBK4b9Vv2y":
			data = {
				providerName: "Apple",
				provider: appleAuthProvider,
				button: AppleLoginButton
			}
			break
		default:
			data = { providerName: "null", provider: null, button: null }
			break
	}
</script>

<div class="absolute top-2 right-2">
	<SendFeedbackIconButton
		origin="M9YZKQ899I@RahNeil_N3:LoginAndLinkModal:content"
		tooltipDirection="left"
	/>
</div>
<span class="text-md font-bold uppercase w-full">Login</span>
<div class="flex flex-col mt-4 gap-2">
	<span>
		Your email address is already associated with a different account logged in using
		<b>{data.providerName}</b>
		.
	</span>
	<SwitchTile title="Link both accounts" icon="link" bind:value={thenLink} />

	<svelte:component
		this={data.button}
		onClick={() => {
			if (thenLink) {
				signInWithPopup(auth, data.provider)
					.then((result) => {
						toasts.success("Welcome back " + result.user.displayName)
						logs.add({ msg: "User logged in" }, "info")
						modal.close()

						linkWithCredential(result.user, userCred).then(() => {
							toasts.success("Accounts successfully linked!")
							logs.add({ msg: "Accounts linked" }, "info")
						})
					})
					.catch((error) => {
						logs.add(error, "error")
						toasts.feedbackError(
							"PPDqroReRZ@RahNeil_N3:LoginAndLinkModal:content:propsComponent:onClick:signInWithPopup"
						)
						modal.close()
					})
			} else {
				login(data.provider)
			}
		}}
	/>
</div>
