<script>
	import { fly, fade, slide } from "svelte/transition"
	import { quintOut } from "svelte/easing"
	import isIos from "is-ios"

	import { rc_adminApp_url, rc_adminIssueBoard_url, rc_adminCurrentSprint_url } from "$lib/firebase"
	import { toasts } from "$lib/toasts"
	import { showLogo } from "$lib/scroll"
	import { modal } from "$lib/modals"
	import { privateData, userData, signOut, isAdmin } from "$lib/user"
	import { currentThemeID, switchToNextTheme, themeList } from "$lib/theme"

	import LoginModal from "$cmp/modals/LoginModal.svelte"
	import SendFeedbackIconButton from "$cmp/SendFeedbackIconButton.svelte"
	import Icon from "$cmp/Icon.svelte"
	import FlameLogo from "$cmp/logo/FlameLogo.svelte"
	import UserProfileModal from "$cmp/modals/UserProfileModal.svelte"
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
								<div
									in:slide={{ duration: 1000, axis: "x", easing: quintOut }}
									out:slide={{ duration: 1000, delay: 250, axis: "x", easing: quintOut }}
								>
									<div
										class="pr-3 mb-2"
										in:fade={{ delay: 500, duration: 500, easing: quintOut }}
										out:fade={{ duration: 500, easing: quintOut }}
									>
										<!-- <Img
											src={logo_anim_sm}
											alt="Creative Olympics logo"
											width={58}
											height={58}
											class="pr-3"
										/> -->

										<div class="relative w-10 h-10">
											<FlameLogo />
										</div>
									</div>
								</div>
							{/if}
							<span out:fade={{ delay: 1000 }} class="whitespace-nowrap">Creative Olympics</span>
						</div>
					</a>
				</div>
			</div>
			<div class="navbar-end gap-0.5">
				<div class="tooltip tooltip-bottom" data-tip={themeList[$currentThemeID].buttonText}>
					<button class="btn btn-circle btn-ghost" on:click={switchToNextTheme}>
						<Icon>{themeList[$currentThemeID].buttonIcon}</Icon>
					</button>
				</div>

				<SendFeedbackIconButton
					origin="jMixcwRegK@RahNeil_N3:Appbar:content:navbar:end"
					tooltipDirection="bottom"
				/>
				{#if $privateData && $privateData?.contributor || false}
					<button
						class="btn btn-circle btn-ghost"
						on:click={() =>
							toasts.default(
								"Thanks for contributing to the website, " + $privateData?.contributor + "!"
							)}
					>
						<Icon>HandHeartOutline</Icon>
					</button>
				{/if}
				<div class="ml-2">
					{#if $userData}
						<div class="dropdown dropdown-end">
							<div class="tooltip tooltip-left" data-tip={$userData.displayName}>
								<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
								<!-- Here we use a <label tabindex="0"> instead of a <button> because Safari has a bug that prevents the button from being focused. -->
								<!-- Using tabindex="0" is required so the dropdown can be focused. -->
								<label tabindex="0" class="btn btn-ghost btn-circle avatar" for="">
									<div class="w-10 rounded-full">
										<img
											referrerpolicy="no-referrer"
											src={$userData.photoURL}
											alt={$userData.displayName + " profile picture"}
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
								{#if $isAdmin}
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
									<button
										on:click={() =>
											modal.open($modal, UserProfileModal, { userID: $userData?.uid })}
									>
										<Icon>AccountOutline</Icon>
										Your profile
									</button>
								</li>
								<li>
									<button on:click={signOut}>
										<Icon>
											Logout{#if isIos}Variant{/if}
										</Icon>
										Sign out
									</button>
								</li>
							</ul>
						</div>
					{:else}
						<button
							class="btn btn-square md:hidden"
							on:click={() => modal.open($modal, LoginModal)}
							aria-label="Login"
						>
							<Icon class="text-white">
								Login{#if isIos}Variant{/if}
							</Icon>
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
