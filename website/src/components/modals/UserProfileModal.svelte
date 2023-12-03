<script>
	import { doc, getDoc } from "firebase/firestore"

	import {
		userData as currentUser_userData,
		publicData as currentUser_publicData,
		isAdmin
	} from "$lib/user"
	import { toasts } from "$lib/toasts"
	import { fsdb } from "$lib/firebase"
	import { logs } from "$lib/logs"

	import SendFeedbackIconButton from "$cmp/SendFeedbackIconButton.svelte"
	import SocialLinks from "$cmp/SocialLinks.svelte"
	import UserTags from "$cmp/UserTags.svelte"
	import Icon from "$cmp/Icon.svelte"

	/**  @type {String} */ export let userID

	/** @type {import("@firebase/firestore").DocumentData | undefined | null} */
	let publicData = undefined
	let online = false
	let canEdit = userID == $currentUser_userData?.uid || isAdmin
	let editingUsername = false
	/** @type {HTMLInputElement} */
	let nameInput

	/** @type {number} */ let a = 7;
	/** @type {any}*/ let b = 'test';	

	a = b;

	toasts.warning(userID)

	if (userID == $currentUser_userData?.uid) {
		// If the user is looking at his own profile, we don't bother fetching anything and just load its own data
		publicData = $currentUser_publicData
		online = true
	} else {
		// Fetch user

		// publicData
		getDoc(doc(fsdb, "users", userID, "public", "general"))
			.then((ud) => {
				publicData = ud.data()
			})
			.catch((err) => {
				console.log(err)
				logs.add(err, "error")
				toasts.feedbackError("oKVMYpJmT0@RahNeil_N3:UserProfileModal:fetchUser:publicData:getDoc")
			})
		online = false //TODO?
	}
</script>

<div class="absolute top-2 right-2">
	<SendFeedbackIconButton
		origin="rsgJICbnoq@RahNeil_N3:UserProfileModal:content"
		tooltipDirection="left"
	/>
</div>
<div class="flex flex-col gap-4">
	<div class="w-full flex flex-row gap-4 items-center">
		<!-- AVATAR -->
		<div class="avatar {online ? 'online' : 'offline'}">
			<div class="w-20 h-20 mask mask-circle">
				{#if publicData === undefined}
					<div class="w-full h-full bg-base-200 animate-pulse" />
				{:else}
					<img
						src={publicData?.photoURL}
						alt="{publicData?.displayName} profile picture"
						width="5rem"
						height="5rem"
					/>
				{/if}
			</div>
		</div>

		<!-- Name & Badges -->
		<div class="flex flex-col w-3/4 gap-1">
			<div class="flex flex-row gap-1 items-baseline">
				{#if publicData === undefined}
					<span class="text-xl font-bold text-loading">Loading username</span>
				{:else if canEdit}
					<input
						type="text"
						placeholder={publicData?.displayName || "An error occured"}
						value={publicData?.displayName || "An error occured"}
						autocorrect="off"
						spellcheck="false"
						class="input input-sm -mx-3 text-xl font-bold focus:outline-none focus:underline underline-offset-4"
						style="margin-bottom: -2px; margin-top: -1px; margin-left: -13px; width: 16ch;"
						on:blur={() => {
							editingUsername = false
							nameInput.value = publicData?.displayName
						}}
						on:focus={() => (editingUsername = true)}
						bind:this={nameInput}
					/>

					{#if editingUsername}
						<div class="pb-1">
							<button class="btn btn-xs btn-success text-white">Apply</button>
						</div>
					{:else}
						<div class="tooltip tooltip-bottom" data-tip="Edit name">
							<button class="btn btn-square btn-xs btn-outline" on:click={() => nameInput.focus()}>
								<Icon style="font-size: 1rem">edit</Icon>
							</button>
						</div>
					{/if}
				{:else}
					<span class="text-xl font-bold">{publicData?.displayName || "An error occured"}</span>
				{/if}
			</div>

			<UserTags
				tags={publicData === undefined
					? undefined
					: publicData?.tags === undefined
					? null
					: publicData?.tags}
				size="sm"
			/>
		</div>
	</div>

	<div class="grid grid-cols-12 gap-2 relative">
		<!-- SOCIALS -->
		<div
			class="card card-compact col-span-7 sm:col-span-8 card-loading {publicData !== undefined &&
				'loaded'}"
		>
			<div class="card-body opacity-100">
				<h2 class="card-title text-sm">Socials</h2>
				{#if publicData?.links === undefined}
					<h3 class="italic h-5 text-opacity-80 text-base-content">
						No social media links available yet.
					</h3>
				{:else}
					<SocialLinks links={JSON.parse(publicData?.links)} />
				{/if}
			</div>
		</div>

		<!-- DONATIONS -->
		<div
			class="card card-compact col-span-5 sm:col-span-4 card-loading {publicData !== undefined &&
				'loaded card-goldenOutline'}"
		>
			<div class="card-body gap-0">
				<h2 class="card-title text-sm">Donations</h2>
				<div class="stat p-0">
					<div class="stat-value text-3xl flex items-center">65€</div>
					<!-- TODO use user amount -->
				</div>
			</div>
		</div>

		<!-- ACHIEVEMENTS -->
		<div class="card card-compact col-span-12 card-loading {publicData !== undefined && 'loaded'}">
			<div class="card-body">
				<div class="flex justify-between">
					<h2 class="card-title text-sm">Achievements</h2>
					<button
						class="btn btn-ghost btn-xs pr-0.5 gap-0.5"
						on:click={() => toasts.error("Soon :>")}
					>
						See all<Icon class="w-4 h-4">chevron_right</Icon>
					</button>
				</div>

				<div class="flex flex-row gap-2">
					<div class="card bg-blue-600 shadow-xl w-24 h-24">
						<figure class="w-full h-full">
							<img
								src="https://cdn.discordapp.com/attachments/461490441389604875/1102259205546717194/mc_boat.png"
								alt="Boat"
								style="scale: 1.4"
							/>
						</figure>
					</div>
					<div class="card bg-[#f7b114] shadow-xl w-24 h-24">
						<figure class="w-full h-full">
							<img
								src="https://media.discordapp.net/attachments/1043189830554746992/1081950997821263902/emoji_fox.png"
								alt="Fox"
								style="scale: .75"
							/>
						</figure>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
