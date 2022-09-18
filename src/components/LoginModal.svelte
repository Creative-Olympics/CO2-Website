<script>
	import { signInWithPopup } from "firebase/auth";

	import { auth, provider } from "../firebase"
	import { toasts } from './toasts/toasts';

	let loginModalOpened = false

	function loginGoogle() {
		signInWithPopup(auth, provider)
			.then((result) => {
				toasts.success('Welcome back '+result.user.displayName);
				loginModalOpened = false
			})
			.catch((error) => {
				console.log(error.code)
				console.log(error.message)

				toasts.error('An unknown error occured');
				loginModalOpened = false
			});
	}
</script>

<input type="checkbox" id="loginModal" class="modal-toggle" bind:checked={loginModalOpened} />
<label for="loginModal" class="modal modal-bottom sm:modal-middle">
	<label class="modal-box relative flex flex-col" for="">
		<label for="loginModal" class="btn btn-sm btn-circle absolute right-2 top-2 invisible sm:visible">✕</label>
		<h3 class="text-lg font-bold self-center mb-4">LOGIN</h3>
		<button class="btn" on:click={loginGoogle}> Log in with Google </button>
	</label>
</label>
