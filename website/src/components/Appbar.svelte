<script>
	import { fly, fade, slide } from "svelte/transition"
	import { quintOut } from "svelte/easing"
	import Img from "@zerodevx/svelte-img"

	import { rc_adminApp_url, rc_adminIssueBoard_url, rc_adminCurrentSprint_url } from "$lib/firebase"
	import { showLogo } from "$lib/scroll"
	import { modal } from "$lib/modals"
	import { userData, signOut, isAdmin } from "$lib/user"
	import { currentThemeID, switchToNextTheme, themeList } from "$lib/theme"
	import { logs } from "$lib/logs"
	import { toasts } from "$lib/toasts"

	import LoginModal from "$cmp/modals/LoginModal.svelte"
	import SendFeedbackIconButton from "$cmp/SendFeedbackIconButton.svelte"
	import Icon from "$cmp/Icon.svelte"

	import logo_small from "$lib/assets/logo/small.gif?format=webp;gif;jpg&w=80;60;40;20&h=72;54;36;18&as=run:0"
	import { page } from "$app/stores"
	import { goto } from "$app/navigation"
	import UserProfileModal from "./modals/UserProfileModal.svelte"
</script>
	
<div class="fixed z-10 w-full" style="transform:translate3d(0,0,0)">
	<div class="">
		<!-- p-2 -->
		<div
			class="px-4 navbar {$showLogo &&
				'bg-base-100 shadow-md hover:bg-base-100 hover:shadow-md'} transition-all duration-500 glass"
		>
			<!-- shadow-lg -->
			<div class="navbar-start relative">
				<div transition:fly={{ x: -52, duration: 1000, opacity: 1 }} class="absolute -top-6 left-0">
					<a class="btn btn-ghost normal-case" href="/">
						<div class="flex flex-row items-center">
							{#if $showLogo}
								<div
									in:slide={{ duration: 1000, axis: "x", easing: quintOut }}
									out:slide={{
										duration: 1000,
										delay: 250,
										axis: "x",
										easing: quintOut
									}}
								>
									<div
										class="pr-3 mb-2"
										in:fade={{ delay: 500, duration: 500, easing: quintOut }}
										out:fade={{ duration: 500, easing: quintOut }}
									>
										<div class="relative w-10 h-10">
											<Img src={logo_small} alt="Creative Olympics" width={40} height={40} />
										</div>
									</div>
								</div>
							{/if}
							<span out:fade={{ delay: 1000 }} class="whitespace-nowrap">Creative Olympics</span>
						</div>
					</a>
				</div>
			</div>

            <!-- endActions -->
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
				<!--
				{#if $privateData && $privateData?.contributor || false}
					<button
						class="btn btn-circle btn-ghost"
						on:click={() =>
							toasts.default(
								"Thanks for contributing to the website, " + $privateData?.contributor + "!"
							)}
					>
						<Icon>volunteer_activism</Icon>
					</button>
				{/if}-->

                <!-- userButton -->
				<div class="ml-2">
					{#if $userData}

                        <!-- userProfileDropdown -->
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
											<Icon>shield_person</Icon>
											Admin app
										</a>
									</li>
									<li>
										<a href={$rc_adminIssueBoard_url} target="_blank" rel="noreferrer">
											<Icon>style</Icon>
											Issue board
										</a>
									</li>
									<li>
										<a href={$rc_adminCurrentSprint_url} target="_blank" rel="noreferrer">
											<Icon>sprint</Icon>
											Current sprint
										</a>
									</li>
									<li class="menu-title">
										<span>Others</span>
									</li>
								{/if}

                                <!-- yourProfileButton -->
								<li>
									<button
										on:click={() => {
                                            logs.add({ msg: "user opened his profile from the appbar" }, "info");
											if ($userData?.uid != null) {
												//$page.url.searchParams.set("5uY", $userData?.uid);
												//goto(`?${$page.url.searchParams.toString()}`)

												const url = new URL(window.location.toString());
												url.searchParams.set(encodeURIComponent("5uY"), encodeURIComponent($userData?.uid));
												history.replaceState({}, '', url);

												modal.open(UserProfileModal, { providerID: "RahNeil_N3:ProviderID:ljMlg3eboB", userID: $userData?.uid});
											} else {
                                                toasts.feedbackError("s6ygzmsG0G@RahNeil_N3:Appbar:endActions:userButton:userProfileDropdown:yourProfileButton:nullUserDataError");
											}
										}}
									>
										<Icon>account_circle</Icon>
										Your profile
									</button>
								</li>
								<li>
									<button on:click={signOut}>
										<Icon>logout</Icon>
										Sign out
									</button>
								</li>
							</ul>
						</div>
					{:else}
						<button
							class="btn btn-square md:hidden {$showLogo && "btn-neutral"}"
							on:click={() => modal.open(LoginModal)}
							aria-label="Login"
						>
							<Icon class="text-white">login</Icon>
						</button>
						<button
							class="btn hidden md:flex {$showLogo && "btn-neutral"}"
							on:click={() => modal.open(LoginModal)}
						>
							Login
						</button>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
