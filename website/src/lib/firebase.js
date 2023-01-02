import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, fetchSignInMethodsForEmail, OAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { fetchAndActivate, getRemoteConfig, isSupported } from 'firebase/remote-config';
import { getValue } from 'firebase/remote-config';
import { writable } from 'svelte/store';
import { modal } from '$lib/modals';
import { toasts } from '$lib/toasts';
import { logs } from '$lib/logs';

const firebaseConfig = {
	apiKey: 'AIzaSyD8HzripA_M0tkPAZVRd6Rzyxt6Gd052Ls',
	authDomain: 'auth.rahmouni.dev',
	projectId: 'rahneil-n3-co',
	storageBucket: 'rahneil-n3-co.appspot.com',
	messagingSenderId: '924629805963',
	appId: '1:924629805963:web:87c4e0d86c8caf643c9d8e',
	measurementId: 'G-345HMCZEHS'
};

export const app = initializeApp(firebaseConfig, "RahNeil_N3:FirebaseApp:v2");
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const microsoftAuthProvider = new OAuthProvider('microsoft.com');
export const appleAuthProvider = new OAuthProvider('apple.com');
export const db = getFirestore(app);

isSupported().then((supported) => {
	if (supported) {
		let rc = getRemoteConfig(app);
		rc.settings.minimumFetchIntervalMillis = 3600000; //ONLY FOR DEV
		fetchAndActivate(rc)
			.then(() => {
				rc_discordInvite_url.set(getValue(rc, 'discordInvite_url').asString());
				rc_eventDesc_article.set(getValue(rc, 'eventDesc_article').asString());
				rc_eventTimestamp.set(getValue(rc, 'eventTimestamp').asString());
				rc_neilRahmouni.set(JSON.parse(getValue(rc, 'neilRahmouni').asString()));
				rc_chadrixy.set(JSON.parse(getValue(rc, 'chadrixy').asString()));
				rc_feedback_email.set(JSON.parse(getValue(rc, 'feedback_email').asString()));
				rc_footer.set(JSON.parse(getValue(rc, 'footer').asString()));

				logs.add({ msg: "Fetched RC values from server" }, "info")
			})
			.catch((err) => {
				console.log(err);
			});
	}
});

export let login = (/** @type {import("@firebase/auth").AuthProvider} */ provider, /** @type {any} */ loginAndLinkModal) => {
	logs.add({ msg: "Opening sign in popup" }, "info")
	signInWithPopup(auth, provider)
		.then((result) => {
			toasts.success('Welcome back ' + result.user.displayName);
			modal.close();
			logs.add({ msg: "Signed in" }, "info")
		})
		.catch((error) => {
			if (error.code === 'auth/account-exists-with-different-credential') {
				logs.add({ msg: "Account already exists with different credentials" }, "info")
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
						console.log(error.code)
						console.log(error.message)
						logs.add(error, "error")
						toasts.feedbackError("QursEsQa2C@RahNeil_N3:firebase:login:signInWithPopup:fetchSignInMethodsForEmail:methodPassword");
						modal.close();
					} else if (methods[0] === 'google.com') {
						modal.open(modal, loginAndLinkModal, { providerID: "RahNeil_N3:ProviderID:Xr1pTDZIE4", userCred: pendingCred })
					} else if (methods[0] === 'microsoft.com') {
						modal.open(modal, loginAndLinkModal, { providerID: "RahNeil_N3:ProviderID:ZB8aogoHvU", userCred: pendingCred })
					} else if (methods[0] === 'apple.com') {
						modal.open(modal, loginAndLinkModal, { providerID: "RahNeil_N3:ProviderID:QBK4b9Vv2y", userCred: pendingCred })
					} else {
						console.log(error.code)
						console.log(error.message)
						console.log(methods)
						logs.add({ error: error, methods: methods }, "error")
						toasts.feedbackError("5da8CAQvJD@RahNeil_N3:firebase:login:signInWithPopup:fetchSignInMethodsForEmail:noMethodFound");
						modal.close();
					}
				});
			} else if (error.code === "auth/popup-closed-by-user") {
				toasts.warning('Login popup closed')
				logs.add({ msg: "Popup closed by user" }, "info")
			} else if (error.code === "auth/cancelled-popup-request") {
				logs.add({ msg: "Cancelled popup request" }, "info")
			} else {
				console.log(error.code)
				console.log(error.message)
				logs.add(error, "error")
				toasts.feedbackError("07Lgio5RuM@RahNeil_N3:firebase:login:signInWithPopup:unknownError");
				modal.close();
			}
		});
}

export let rc_discordInvite_url = writable('null');
export let rc_eventDesc_article = writable(
	'<h1>Garlic bread with cheese: What the science tells us</h1><p>For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.</p><blockquote>hey</blockquote><p>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.</p>'
);
export let rc_eventTimestamp = writable('120');
export let rc_neilRahmouni = writable(JSON.parse('{"pfp":null,"main":null,"links":{"twitter":"http://neil.rahmouni.dev/twitter","instagram":"http://neil.rahmouni.dev/instagram","gitlab":"http://neil.rahmouni.dev/gitlab","matrix":"http://neil.rahmouni.dev/matrix"}}'));
export let rc_chadrixy = writable(JSON.parse('{"pfp":null,"main":"https://www.artstation.com/chadrixy","links":{"twitter":"https://twitter.com/chadrixy","instagram":null,"gitlab":null,"matrix":null}}'));
export let rc_feedback_email = writable('co@rahmouni.dev');
export let rc_footer = writable(JSON.parse('{"links":{"twitter":"#","instagram":"#","gitlab":"#"}}'));
export let rc_aboutPage_article = writable('rc_aboutPage_article')