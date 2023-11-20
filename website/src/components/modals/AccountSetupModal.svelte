<script>
	import Img from "@zerodevx/svelte-img"
	import { doc, setDoc } from "firebase/firestore"
	import { onMount } from "svelte"

	import { toasts } from "$lib/toasts"
	import { fsdb } from "$lib/firebase"
	import { userData } from "$lib/user"
	import { logs } from "$lib/logs"

	import SendFeedbackIconButton from "$cmp/SendFeedbackIconButton.svelte"

	import loading from "$lib/assets/loading.gif?w=160;120;80;40&h=160;120;80;40&format=webp;gif;jpg&as=run:0"

	/**  @type {String} */ export let userID

	onMount(() => {
		if (userID) {
			if (userData) {
				toasts.info(":eyes:")

				setDoc(doc(fsdb, "users", userID, "public", "general"), {
					displayName: $userData?.displayName,
					photoURL: $userData?.photoURL
				})
					.then(() => {
						toasts.success("Successfully frogged")
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
				toasts.feedbackError("EpZ05pAu4X@RahNeil_N3:AccountSetupModal:onMount:userID:wrongUserData")
			}
		} else {
			logs.add({ userID: userID }, "error")
			toasts.feedbackError("rxMuNKNfbd@RahNeil_N3:AccountSetupModal:onMount:wrongUserID")
		}
	})
</script>

<div class="absolute top-2 right-2">
	<SendFeedbackIconButton
		origin="Fgy4gaYzFM@RahNeil_N3:AccountSetupModal:content"
		tooltipDirection="left"
	/>
</div>
<div class="flex flex-col items-center">
	<div class="self-start flex flex-row align-bottom">
		<h3 class="text-lg font-bold">Setting up your account...</h3>
		<!--<span class="loading loading-dots loading-xs -mb-2"/>-->
	</div>
	<!--<span class="loading loading-ring loading-lg py-24" />-->
	<div class="my-12 w-40 h-40">
		<Img src={loading} alt="Loading..." width={160} height={160} />
	</div>
</div>
