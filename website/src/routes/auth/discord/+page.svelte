<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { auth } from '$lib/firebase';
	import { signInWithCustomToken } from 'firebase/auth';

	onMount(async () => {
		const code = $page.url.searchParams.get('code');

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
				console.log(error);
			});
	});
</script>

Loading
