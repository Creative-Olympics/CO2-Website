<script>
	import Img from "@zerodevx/svelte-img"
	import { doc, setDoc } from "firebase/firestore"
	import { onMount } from "svelte"
	import { fade, fly } from "svelte/transition"

	import { toasts } from "$lib/toasts"
	import { fsdb } from "$lib/firebase"
	import { openUserProfileModal, publicData, userData } from "$lib/user"
	import { logs } from "$lib/logs"
	import { modal } from "$lib/modals"

	import SendFeedbackIconButton from "$cmp/SendFeedbackIconButton.svelte"
	import Icon from "$cmp/Icon.svelte"

	import wheatLoader from "$lib/assets/wheatLoader.gif?w=144;108;72;36&h=144;108;72;36&format=webp;gif;jpg&as=run:0"
	import logo_small from "$lib/assets/logo/small.gif?w=80;60;40;20&h=72;54;36;18&format=webp;gif;jpg&as=run:0"

	/**  @type {String} */ export let userID

	var finishedSetup = false

	onMount(() => {
		// Timeout to wait for the whole user to be retrieved if Modal opened instantly on first page load after a while,
		// where on especially slow network speeds it can actually set the user variable to be non-null,
		// but without all of its properties retrieved.
		setTimeout(() => {
			if (userID) {
				if (userData) {
					setDoc(doc(fsdb, "users", userID, "public", "general"), {
						displayName: $userData?.displayName,
						photoURL: $userData?.photoURL
					})
						.then(() => {
							finishedSetup = true
							logs.add({ msg: "Setup finished" }, "info")
							publicData.set({
								displayName: $userData?.displayName,
								photoURL: $userData?.photoURL
							})
						})
						.catch((err) => {
							console.log(err)
							logs.add(err, "error")
							toasts.feedbackError(
								"4nEYXB9Fqg@RahNeil_N3:user:AccountSetupModal:onMount:userID:userData:setDoc"
							)
						})
				} else {
					logs.add({ userData: userData }, "error")
					toasts.feedbackError(
						"EpZ05pAu4X@RahNeil_N3:AccountSetupModal:onMount:userID:wrongUserData"
					)
				}
			} else {
				logs.add({ userID: userID }, "error")
				toasts.feedbackError("rxMuNKNfbd@RahNeil_N3:AccountSetupModal:onMount:wrongUserID")
			}
		}, 2500)
	})
</script>

<div class="absolute top-2 right-2">
	<SendFeedbackIconButton
		origin="Fgy4gaYzFM@RahNeil_N3:AccountSetupModal:content"
		tooltipDirection="left"
	/>
</div>
<div class="overflow-hidden px-2 pb-2 transition-all" style="max-height: 512px">
	{#if finishedSetup}
		<div class="flex flex-col items-center" in:fly={{ delay: 250, y: 250, duration: 250 }}>
			<div class="w-20 h-20">
				<Img src={logo_small} alt="Creative Olympics Logo" />
			</div>
			<h2 class="text-xl font-semibold mt-1">
				Hey {$userData?.displayName?.split(" ")[0]}!
			</h2>
			<h3 class="text-lg">Welcome to your new profile!</h3>

			<div class="w-3/4"><div class="divider" /></div>

			<h4 class="self-start text-sm font-semibold ms-2 mb-2">
				To get started, here are a few things you can do:
			</h4>
			<button
				class="btn btn-block mt-2 btn-lg"
				on:click={() => openUserProfileModal("0y9ExpObwE", $userData?.uid)}
			>
				<div class="w-full flex flex-row items-center justify-start gap-4">
					<Icon>manage_accounts</Icon>
					<span class="normal-case text-base flex-1 text-start">Edit your profile</span>
					<Icon>keyboard_arrow_right</Icon>
				</div>
			</button>
			<button class="btn btn-block mt-2 btn-lg" on:click={() => toasts.error("Coming soon :>")}>
				<div class="w-full flex flex-row items-center justify-start gap-4">
					<Icon>deployed_code</Icon>
					<span class="normal-case text-base flex-1 text-start">Link your Minecraft account</span>
					<Icon>keyboard_arrow_right</Icon>
				</div>
			</button>
			<button class="btn btn-block mt-2 btn-lg" on:click={() => toasts.error("Coming soon :>")}>
				<div class="w-full flex flex-row items-center justify-start gap-4">
					<Icon>shield</Icon>
					<span class="normal-case text-base flex-1 text-start">Verify your privacy settings</span>
					<Icon>keyboard_arrow_right</Icon>
				</div>
			</button>
		</div>
		<div class="mt-6 flex gap-2 w-full justify-end">
			<button class="btn btn-primary" on:click={modal.close}>Close</button>
		</div>
	{:else}
		<div class="flex flex-col items-center" out:fade={{ duration: 250 }}>
			<div class="self-start flex flex-row align-bottom">
				<h3 class="text-lg font-bold">Setting up your account</h3>
				<span class="loading loading-dots loading-xs -mb-2" />
			</div>
			<!--<span class="loading loading-ring loading-lg py-24" />-->
			<div class="my-12 w-36 h-36">
				<Img src={wheatLoader} alt="Loading..." />
			</div>
		</div>
	{/if}
</div>
