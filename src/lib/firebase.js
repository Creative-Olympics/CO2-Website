	import { initializeApp } from 'firebase/app';
	import { getAuth, GoogleAuthProvider } from 'firebase/auth';
	import { getFirestore } from 'firebase/firestore';
	import { fetchAndActivate, getRemoteConfig, isSupported } from 'firebase/remote-config';
	import { getValue } from 'firebase/remote-config';
	import { writable } from 'svelte/store';

	const firebaseConfig = {
		apiKey: 'AIzaSyD8HzripA_M0tkPAZVRd6Rzyxt6Gd052Ls',
		authDomain: 'rahneil-n3-co.firebaseapp.com',
		projectId: 'rahneil-n3-co',
		storageBucket: 'rahneil-n3-co.appspot.com',
		messagingSenderId: '924629805963',
		appId: '1:924629805963:web:87c4e0d86c8caf643c9d8e',
		measurementId: 'G-345HMCZEHS'
	};

	export const app = initializeApp(firebaseConfig);
	export const auth = getAuth(app);
	export const provider = new GoogleAuthProvider();
	export const db = getFirestore(app);

	isSupported().then((supported) => {
		if (supported) {
			let rc = getRemoteConfig(app);
			rc.settings.minimumFetchIntervalMillis = 3600000; //ONLY FOR DEV
			fetchAndActivate(rc)
				.then(() => {
					rc_discordInvite_url.set(getValue(rc, 'discordInvite_url').asString());
					rc_eventDesc_article.set(getValue(rc, 'eventDesc_article').asString());
				})
				.catch((err) => {
					console.log(err);
				});
		}
	});

	export let rc_discordInvite_url = writable('null');
	export let rc_eventDesc_article = writable(
		'<h1>Garlic bread with cheese: What the science tells us</h1><p>For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.</p><blockquote>hey</blockquote><p>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.</p>'
	);