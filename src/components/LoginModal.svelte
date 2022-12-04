<script>
	import { signInWithPopup, fetchSignInMethodsForEmail, OAuthProvider } from 'firebase/auth';

	import { auth, googleAuthProvider, microsoftAuthProvider } from '../lib/firebase';
	import { modal } from './modals/modals';
	import { toasts } from './toasts/toasts';

	function login(provider) {
		signInWithPopup(auth, provider)
			.then((result) => {
				toasts.success('Welcome back ' + result.user.displayName);
				modal.close();
			})
			.catch((error) => {
				console.log(error);
				if (error.code === 'auth/account-exists-with-different-credential') {
					console.log(error);
					var pendingCred = OAuthProvider.credentialFromError(error);
					var email = error.customData.email;
					fetchSignInMethodsForEmail(auth, email).then(function (methods) {
						if (methods[0] === 'password') {
							/*
							var password = promptUserForPassword(); // TODO: implement promptUserForPassword.
							auth
								.signInWithEmailAndPassword(email, password)
								.then(function (result) {
									// Step 4a.
									return result.user.linkWithCredential(pendingCred);
								})
								.then(function () {
									// Microsoft account successfully linked to the existing Firebase user.
									goToApp();
								});
							return;
							*/
							toasts.error('An unknown error occured');
							modal.close();
						} else if (methods[0] === 'google.com') {
							// At this point, you should let the user know that they already have an account
							// but with a different provider, and let them validate the fact they want to
							// sign in with this provider.
							// Sign in to provider. Note: browsers usually block popup triggered asynchronously,
							// so in real scenario you should ask the user to click on a "continue" button
							// that will trigger the signInWithPopup.
							/*auth.signInWithPopup(provider).then(function (result) {
							// Remember that the user may have signed in with an account that has a different email
							// address than the first one. This can happen as Firebase doesn't control the provider's
							// sign in flow and the user is free to login using whichever account they own.
							// Step 4b.
							// Link to Microsoft credential.
							// As we have access to the pending credential, we can directly call the link method.
							result.user.linkAndRetrieveDataWithCredential(pendingCred).then(function (usercred) {
								// Microsoft account successfully linked to the existing Firebase user.
								goToApp();
							});
						});*/
						} else {
							toasts.error('An unknown error occured');
							modal.close();
						}
					});
				} else {
					console.log(error.code);
					console.log(error.message);

					toasts.error('An unknown error occured');
					modal.close();
				}
			});
	}
</script>

<span class="text-md font-bold uppercase w-full">Login</span>
<div class="flex flex-col mt-4 gap-2">
	<button class="btn" on:click={() => login(googleAuthProvider)}>Log in with Google</button>
	<button class="btn" on:click={() => login(microsoftAuthProvider)}>Log in with Microsoft</button>
</div>
