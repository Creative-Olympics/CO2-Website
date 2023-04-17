<script>
	import { onAuthStateChanged, signOut } from "firebase/auth"
	import { doc, getDoc } from "firebase/firestore"
	import { fly, fade, slide } from "svelte/transition"
	import { quintOut } from "svelte/easing"
	import Img from "@zerodevx/svelte-img"

	import {
		db,
		auth,
		rc_adminApp_url,
		rc_adminIssueBoard_url,
		rc_adminCurrentSprint_url
	} from "$lib/firebase"
	import { toasts } from "$lib/toasts"
	import { showLogo } from "$lib/scroll"
	import { modal } from "$lib/modals"
	import LoginModal from "./modals/LoginModal.svelte"
	import SendFeedbackIconButton from "./SendFeedbackIconButton.svelte"
	import Icon from "./Icon.svelte"

	import logo_anim_sm from "$lib/assets/logo/anim_sm.gif?run&lqip=0"
  import isIos from "is-ios"

	/** @type {import("@firebase/auth").User | null} */
	let user
	/** @type {any} */
	let userData

	onAuthStateChanged(auth, (u) => {
		user = u
		if (user) {
			getDoc(doc(db, "users", user.uid)).then((ud) => {
				userData = ud.data()
			})
		}
	})

	function authSignOut() {
		signOut(auth).then(() => {
			toasts.success("You've been successfully logged out!")
		})
	}
</script>

<div class="fixed z-10 w-full" style="transform:translate3d(0,0,0)">
	<div class="">
		<!-- p-2 -->
		<div
			class="px-4 navbar glass {$showLogo &&
				'bg-base-100 shadow-md hover:bg-base-100 hover:shadow-md'} transition-all duration-500"
		>
			<!-- shadow-lg -->
			<div class="navbar-start relative">
				<div transition:fly={{ x: -52, duration: 1000, opacity: 1 }} class="absolute -top-6 left-0">
					<a class="btn btn-ghost normal-case" href="/">
						<div class="flex flex-row items-center">
							{#if $showLogo}
								<div in:slide={{ duration: 1000, axis: "x", easing: quintOut }} out:slide={{ duration: 1000, delay: 250, axis: "x", easing: quintOut }}>
									<div in:fade={{delay: 500, duration: 500, easing: quintOut}} out:fade={{duration: 500, easing: quintOut}}>
										<Img
											src={logo_anim_sm}
											alt="Creative Olympics logo"
											width={58}
											height={58}
											class="pr-3"
										/>
									</div>
								</div>
							{/if}
							<span out:fade={{ delay: 1000 }} class="whitespace-nowrap pt-1">Creative Olympics</span>
						</div>
					</a>
				</div>
				<!--<div in:fade={{ delay: 1000, duration: 0 }} class="absolute left-0 invisible" style="top: -1.6rem">
						<a
							class="btn btn-ghost whitespace-nowrap normal-case flex flex-row items-center gap-3"
							href="/"
						>
							Creative Olympics
						</a>
					</div>-->
			</div>
			<div class="navbar-end gap-0.5">
				<SendFeedbackIconButton
					origin="jMixcwRegK@RahNeil_N3:Appbar:content:navbar:end"
					tooltipDirection="bottom"
				/>
				{#if userData && userData["contributor"]}
					<button
						class="btn btn-circle btn-ghost"
						on:click={() =>
							toasts.default(
								"Thanks for contributing to the website, " + userData["contributor"] + "!"
							)}
					>
						<Icon>HandHeartOutline</Icon>
					</button>
				{/if}
				<div class="ml-2">
					{#if user}
						<div class="dropdown dropdown-end">
							<div class="tooltip tooltip-left" data-tip={user.displayName}>
								<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
								<!-- Here we use a <label tabindex="0"> instead of a <button> because Safari has a bug that prevents the button from being focused. -->
								<!-- Using tabindex="0" is required so the dropdown can be focused. -->
								<label tabindex="0" class="btn btn-ghost btn-circle avatar" for="">
									<div class="w-10 rounded-full">
										<img
											referrerpolicy="no-referrer"
											src={user.photoURL}
											alt={user.displayName + " profile picture"}
										/>
									</div>
								</label>
							</div>
							<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
							<!-- Here we use a <label tabindex="0"> instead of a <button> because Safari has a bug that prevents the button from being focused. -->
							<!-- Using tabindex="0" is required so the dropdown can be focused. -->
							<ul
								tabindex="0"
								class="p-2 shadow-md menu menu-compact dropdown-content rounded-box w-52 bg-base-300 text-base-content gap-1"
							>
								{#if userData && userData["isAdmin"]}
									<li class="menu-title">
										<span>Admin tools</span>
									</li>
									<li>
										<a href={$rc_adminApp_url} target="_blank" rel="noreferrer">
											<Icon>ShieldHomeOutline</Icon>
											Admin app
										</a>
									</li>
									<li>
										<a href={$rc_adminIssueBoard_url} target="_blank" rel="noreferrer">
											<Icon>PaletteSwatchOutline</Icon>
											Issue board
										</a>
									</li>
									<li>
										<a href={$rc_adminCurrentSprint_url} target="_blank" rel="noreferrer">
											<Icon>RunFast</Icon>
											Current sprint
										</a>
									</li>
									<li class="menu-title">
										<span>Others</span>
									</li>
								{/if}
								<li>
									<button on:click={authSignOut}>
										<Icon>Logout{#if isIos}Variant{/if}</Icon>
										Sign out
									</button>
								</li>
							</ul>
						</div>
					{:else}
						<button
							class="btn btn-square md:hidden"
							on:click={() => modal.open($modal, LoginModal)}
						>
							<Icon class="text-white">Login{#if isIos}Variant{/if}</Icon>
						</button>
						<button
							class="btn hidden md:flex text-white"
							on:click={() => modal.open($modal, LoginModal)}
						>
							Login
						</button>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
