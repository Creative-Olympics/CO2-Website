<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { auth } from '$lib/firebase';
	import { signInWithCustomToken } from 'firebase/auth';
	import { toasts } from '$lib/toasts';
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';

	onMount(async () => {
		const url = new URL(window.location.toString());

		const error = $page.url.searchParams.get('error');

		if (!error) {
			const code = $page.url.searchParams.get('code');

			if (code) {
				url.searchParams.delete('code');

				history.replaceState({}, '', url);

				const request = await fetch(`/api/discord/token?code=${code}`);
				console.log(request);
				const response = await request.json();

				signInWithCustomToken(auth, response)
					.then((userCredential) => {
						// Signed in
						const user = userCredential.user;
						console.log(user);

						window.close();

						if (!window.closed) {
							return {
								redirect: '/'
							};
						}
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;

						window.close();

						if (!window.closed) {
							toasts.error(`${errorMessage} (during discord authentification)`);
						} else {
							localStorage.setItem('discord_error', errorMessage);
						}
					});
			} else {
				window.close();

				if (!window.closed) {
					toasts.error(`No code given (during discord authentification)`);
					toasts.warning(`Redirecting to home`);

					setTimeout(() => {
						console.log('hey');
						window.location.href = '/';
					}, 3000);
				} else {
					localStorage.setItem('discord_error', 'No code given');
				}
			}
		} else {
			let errorMessageType = '';
			if (error == 'access_denied') {
				errorMessageType = 'Access denied';
			} else if (error == 'server_error' || error == 'temporarily_unavailable') {
				errorMessageType = 'Server error';
			} else {
				errorMessageType = 'Unknown error';
			}

			window.close();

			if (!window.closed) {
				toasts.error(`${errorMessageType} (during discord authentification)`);
			} else {
				localStorage.setItem('discord_error', errorMessageType);
			}
		}
	});
</script>
