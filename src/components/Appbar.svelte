<script>
	import { onAuthStateChanged, signOut } from 'firebase/auth';
	import { doc, getDoc } from 'firebase/firestore';
	import { fly, fade } from 'svelte/transition';

	import { db, auth } from '../lib/firebase';
	import { toasts } from './toasts/toasts';

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
		<div class="px-4 navbar glass">
			<!-- shadow-lg -->
			<div class="navbar-start">
					{#if showLogo}
						<div transition:fly={{ x: -36, duration: 1000, opacity: 1 }}>
							<a class="btn btn-ghost gap-2" href="/">
								<img src="banner/co.png" alt="Creative Olympics logo" class="w-7" transition:fade />
								Creative Olympics
							</a>
						</div>
					{:else}
						<div in:fade={{ delay: 1000, duration: 0 }}>
							<a class="btn btn-ghost" href="/">Creative Olympics</a>
						</div>
					{/if}
			</div>
			<div class="navbar-end">
				<div class="tooltip tooltip-bottom" data-tip="Send a bug report">
					<a
						class="mr-2 btn btn-circle btn-ghost"
						href="mailto:kuizu@rahmouni.dev?subject=Bug%20report"
						target="_blank"
					>
						<span class="material-symbols-rounded">bug_report</span>
					</a>
				</div>
				{#if user}
					<div class="dropdown dropdown-end">
						<div class="tooltip tooltip-left" data-tip={user.displayName}>
							<label tabindex="0" class="btn btn-ghost btn-circle avatar">
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
							class="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
						>
							{#if userData && userData['isAdmin']}
								<li><a href="/create">Create</a></li>
							{/if}
							<li><button on:click={authSignOut}>Logout</button></li>
						</ul>
					</div>
				{:else}
					<label for="loginModal" class="btn modal-button">Login</label>
				{/if}
			</div>
		</div>
	</div>
</div>
