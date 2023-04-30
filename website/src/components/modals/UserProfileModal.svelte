<script>
	import SendFeedbackIconButton from "$cmp/SendFeedbackIconButton.svelte"
	import SocialLinks from "$cmp/SocialLinks.svelte"
	import { rc_neilRahmouni } from "$lib/firebase"
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
<div class="flex flex-col gap-4">
	<div class="w-full flex flex-row gap-4 items-center">
		<div class="avatar online">
			<div class="w-20 mask mask-circle">
				<img src={data?.photoURL} alt="{data?.displayName} profile picture" />
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<span class="text-md font-bold w-full">{data?.displayName}</span>
			<div class="flex flex-row gap-1">
				<span class="badge badge-sm badge-warning">Winner 2020</span>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-12 gap-2">
		<!-- SOCIALS -->
		<div class="card card-compact bg-base-200 col-span-7">
			<div class="card-body">
				<h2 class="card-title text-sm">Socials</h2>
				<SocialLinks links={$rc_neilRahmouni.links} />
				<!-- TODO use user links -->
			</div>
		</div>

		<!-- DONATIONS -->
		<div class="card card-compact bg-base-200 col-span-5">
			<div class="card-body">
				<h2 class="card-title text-sm">Donations</h2>
				<div class="stat p-0">
					<div class="stat-value text-3xl">65€</div>
					<!-- TODO use user amount -->
				</div>
			</div>
		</div>

		<!-- ACHIEVEMENTS -->
		<div class="card card-compact bg-base-200 col-span-12">
			<div class="card-body">
				<h2 class="card-title text-sm">Achievements</h2>

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
<div class="modal-action">
	<button class="btn">Full profile</button>
</div>
