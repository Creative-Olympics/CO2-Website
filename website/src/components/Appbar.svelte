<script>
	import { onAuthStateChanged, signOut } from 'firebase/auth';
	import { doc, getDoc } from 'firebase/firestore';
	import { fly, fade } from 'svelte/transition';

	import { db, auth, rc_adminApp_url } from '$lib/firebase';
	import { toasts } from '$lib/toasts';
	import { modal } from '$lib/modals';
	import LoginModal from './modals/LoginModal.svelte';
	import SendFeedbackModal from './modals/SendFeedbackModal.svelte';
	import SendFeedbackIconButton from './SendFeedbackIconButton.svelte';
	import Icon from './Icon.svelte';

	export let showLogo = false;

	/** @type {import("@firebase/auth").User | null} */
	let user;
	/** @type {any} */
	let userData;

	onAuthStateChanged(auth, (u) => {
		user = u;
		if (user) {
			getDoc(doc(db, 'users', user.uid)).then((ud) => {
				userData = ud.data();
			});
		}
	});

	function authSignOut() {
		signOut(auth).then(() => {
			toasts.success("You've been successfully logged out!");
		});
	}
</script>

<div class="fixed z-10 w-full" style="transform:translate3d(0,0,0)">
	<div class="">
		<!-- p-2 -->
		<div
			class="px-4 navbar glass {showLogo &&
				'bg-white shadow-md hover:bg-white hover:shadow-md'} transition-all duration-500 text-gray-800"
		>
			<!-- shadow-lg -->
			<div class="navbar-start relative">
				{#if showLogo}
					<div
						transition:fly={{ x: -52, duration: 1000, opacity: 1 }}
						class="absolute -top-6 left-0"
					>
						<a class="btn btn-ghost gap-3 flex flex-col whitespace-nowrap normal-case" href="/">
							<img src="banner/co.gif" alt="Creative Olympics logo" class="w-10" transition:fade />
							<span out:fade={{ delay: 1000 }}>Creative Olympics</span>
						</a>
					</div>
				{:else}
					<div in:fade={{ delay: 1000, duration: 0 }} class="absolute -top-6 left-0">
						<a class="btn btn-ghost whitespace-nowrap normal-case" href="/">Creative Olympics</a>
					</div>
				{/if}
			</div>
			<div class="navbar-end">
				<SendFeedbackIconButton
					origin="jMixcwRegK@RahNeil_N3:Appbar:content:navbar:end"
					tooltipDirection="bottom"
				/>
				{#if userData && userData['contributor']}
					<button
						class="btn btn-circle btn-ghost"
						on:click={() =>
							toasts.info(
								'Thanks for contributing to the website, ' + userData['contributor'] + '!'
							)}
					>
						<Icon>volunteer_activism</Icon>
					</button>
				{/if}
				{#if user}
					<div class="dropdown dropdown-end ml-2">
						<div class="tooltip tooltip-left" data-tip={user.displayName}>
							<label tabindex="0" class="btn btn-ghost btn-circle avatar" for="">
								<div class="w-10 rounded-full">
									<img
										referrerpolicy="no-referrer"
										src={user.photoURL}
										alt={user.displayName + ' profile picture'}
									/>
								</div>
							</label>
						</div>
						<ul
							tabindex="0"
							class="p-2 mt-3 shadow-md menu menu-compact dropdown-content rounded-box w-52 bg-base-300 text-base-content gap-1"
						>
							{#if userData && userData['isAdmin']}
								<li>
									<a href={$rc_adminApp_url} target="_blank">
										<Icon>admin_panel_settings</Icon>
										Admin app
									</a>
								</li>
							{/if}
							<li>
								<button on:click={authSignOut}>
									<Icon>logout</Icon>
									Logout
								</button>
							</li>
						</ul>
					</div>
				{:else}
					<button class="btn btn-square md:hidden" on:click={() => modal.open($modal, LoginModal)}>
						<Icon spanClass="text-white">login</Icon>
					</button>
					<button
						class="btn hidden md:flex text-white"
						on:click={() => modal.open($modal, LoginModal)}
					>
						<span>Login</span>
					</button>
				{/if}
			</div>
		</div>
	</div>
</div>
