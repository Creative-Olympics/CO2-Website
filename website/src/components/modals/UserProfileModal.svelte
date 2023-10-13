<script>
	import { userData as currentUser_userData, publicData as currentUser_publicData } from "$lib/user"
	import { toasts } from "$lib/toasts"

	import SendFeedbackIconButton from "$cmp/SendFeedbackIconButton.svelte"
	import SocialLinks from "$cmp/SocialLinks.svelte"
	import UserTags from "$cmp/UserTags.svelte"
	import Icon from "$cmp/Icon.svelte"

	/**  @type {String} */ export let userID

	/** @type {import("@firebase/auth").User | null} */
	let userData = null
	/** @type {import("@firebase/firestore").DocumentData | undefined | null} */
	let publicData = null
	let online = false

	toasts.warning(userID);

	if (userID == $currentUser_userData?.uid) {
		// If the user is looking at his own profile, we don't bother fetching anything and just load its own data
		userData = $currentUser_userData
		publicData = $currentUser_publicData
		online = true
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
<div class="flex flex-col gap-4">
	<div class="w-full flex flex-row gap-4 items-center">
		<!-- AVATAR -->
		<div class="avatar {online ? 'online' : 'offline'}">
			<div class="w-20 h-20 mask mask-circle">
				{#if userData === null}
					<div class="w-full h-full bg-base-200 animate-pulse" />
				{:else}
					<img
						src={userData?.photoURL}
						alt="{userData?.displayName} profile picture"
						width="5rem"
						height="5rem"
					/>
				{/if}
			</div>
		</div>

		<!-- Name & Badges -->
		<div class="flex flex-col w-3/4 gap-1">
			{#if userData === null}
				<span class="text-xl font-bold text-loading">Loading username</span>
			{:else}
				<span class="text-xl font-bold">{userData?.displayName}</span>
			{/if}

			<UserTags tags={publicData?.tags || null} size="sm" />
		</div>
	</div>

	<div class="grid grid-cols-12 gap-2 relative">
		<!-- SOCIALS -->
		<div
			class="card card-compact col-span-7 sm:col-span-8 card-loading {publicData !== null &&
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
			class="card card-compact col-span-5 sm:col-span-4 card-loading {publicData !== null &&
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
		<div class="card card-compact col-span-12 card-loading {publicData !== null && 'loaded'}">
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
								alt="Shoes"
								style="scale: 1.4"
							/>
						</figure>
					</div>
					<div class="card bg-[#f7b114] shadow-xl w-24 h-24">
						<figure class="w-full h-full">
							<img
								src="https://media.discordapp.net/attachments/1043189830554746992/1081950997821263902/emoji_fox.png"
								alt="Shoes"
								style="scale: .75"
							/>
						</figure>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
