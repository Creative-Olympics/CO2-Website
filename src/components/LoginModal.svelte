<script>
	import { signInWithPopup } from 'firebase/auth';

	import { auth, provider } from '../lib/firebase';
	import { toasts } from './toasts/toasts';

	function loginGoogle() {
		signInWithPopup(auth, provider)
			.then((result) => {
				toasts.success('Welcome back ' + result.user.displayName);
				loginModalOpened = false;
			})
			.catch((error) => {
				console.log(error.code);
				console.log(error.message);

				toasts.error('An unknown error occured');
				loginModalOpened = false;
			});
	}
</script>

<span class="text-md font-bold uppercase w-full">Login</span>
<div class="flex flex-col mt-4 gap-2">
	<button class="btn" on:click={loginGoogle}>Log in with Google</button>
</div>