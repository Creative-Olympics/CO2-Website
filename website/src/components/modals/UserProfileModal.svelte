<script>
	import SendFeedbackIconButton from "$cmp/SendFeedbackIconButton.svelte"
	import { userData } from "$lib/user"

	/**  @type {String} */ export let userID

	/** @type {import("@firebase/auth").User | null} */
	let data = null

	if (userID == $userData?.uid) {
		// If the user is looking at his own profile, we don't bother fetching anything and just load its own data
		data = $userData
	} else {
		//TODO fetch user profile from server
	}
</script>

<div class="absolute top-2 right-2">
	<SendFeedbackIconButton
		origin="rsgJICbnoq@RahNeil_N3:UserProfileModal:content"
		tooltipDirection="left"
	/>
</div>
<div class="w-full flex flex-row gap-4 items-center">
	<div class="avatar online">
		<div class="w-20 mask mask-circle">
			<img src={data?.photoURL} alt="{data?.displayName} profile picture" />
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<span class="text-md font-bold w-full">{data?.displayName}</span>
		<span class="badge badge-[red]">Badge</span>
	</div>
</div>
