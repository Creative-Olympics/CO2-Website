import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { fetchAndActivate, getRemoteConfig, isSupported, getValue } from 'firebase/remote-config';
import { writable } from 'svelte/store';

import { toasts } from '$lib/toasts';
import { logs } from '$lib/logs';
import { credits } from './credit';

const firebaseConfig = {
	apiKey: 'AIzaSyD8HzripA_M0tkPAZVRd6Rzyxt6Gd052Ls',
	authDomain: 'auth.rahmouni.dev',
	projectId: 'rahneil-n3-co',
	storageBucket: 'rahneil-n3-co.appspot.com',
	messagingSenderId: '924629805963',
	appId: '1:924629805963:web:87c4e0d86c8caf643c9d8e',
	measurementId: 'G-345HMCZEHS'
};

export const app = initializeApp(firebaseConfig);
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
				rc_discordInvite_url.update((v) => getValue(rc, 'discordInvite_url').asString() || v);
				rc_eventDesc_article.update((v) => getValue(rc, 'eventDesc_article').asString() || v);
				rc_eventTimestamp.update((v) => getValue(rc, 'eventTimestamp').asString() || v);
				rc_neilRahmouni.update((v) => getValue(rc, 'neilRahmouni').asString() ? JSON.parse(getValue(rc, 'neilRahmouni').asString()) : v);
				rc_chadrixy.update((v) => getValue(rc, 'chadrixy').asString() ? JSON.parse(getValue(rc, 'chadrixy').asString()) : v);
				rc_feedback_email.update((v) => getValue(rc, 'feedback_email').asString() || v);
				rc_footer.update((v) => getValue(rc, 'footer') ? JSON.parse(getValue(rc, 'footer').asString()) : v);
				rc_aboutPage_article.update((v) => getValue(rc, 'aboutPage_article').asString() || v);
				rc_adminApp_url.update((v) => getValue(rc, 'adminApp_url').asString() || v);

				//rc_credits.update((v) => JSON.parse(getValue(rc, 'credits').asString()) || v);

				logs.add({ msg: "Fetched RC values from server" }, "info")
			})
			.catch((err) => {
				console.log(err);
				logs.add(err, "error")
				toasts.feedbackError("31N7BwAzEw@RahNeil_N3:firebase:isSupported:supported:fetchAndActivateRC");
			});
	}
});

export let rc_discordInvite_url = writable('http://url.creative-olympics.org/discord1');
export let rc_eventDesc_article = writable(
	'<h1>The Creative Olympics are coming back!</h1><p>Take part in the Creative Olympics, a <b>global charity event</b> running in Minecraft that promotes creativity and teamwork from players all around the world, while raising funds for a worthy cause!<br/>The event will run for <b>7 days</b> and feature a variety of contests to test your skills and challenge your imagination. All proceeds will go to a global charity organization that works to <b>improve the lives of people in need</b>.<p>Join us for an exciting and worthwhile experience and help us <b>make a difference</b> in the world! Check below for the beginning countdown and register for the event.</p><p>You want to know more about who we are and our previous event? <a href="#">Check this link!</a> See what prizes you can win by participating? <a href="#">Here you go!</a> Want to help us as a streamer or partner? <a href="#">Fill in this form!</a></p>'
);
export let rc_eventTimestamp = writable('120');
export let rc_neilRahmouni = writable(JSON.parse('{"pfp":null,"main":null,"links":[{"icon":"twitter","url":"http://neil.rahmouni.dev/twitter","description":"Neïl Rahmouni\'s Twitter profile"},{"icon":"instagram","url":"http://neil.rahmouni.dev/instagram","description":"Neïl Rahmouni\'s Instagram profile"},{"icon":"gitlab","url":"http://neil.rahmouni.dev/gitlab","description":"Neïl Rahmouni\'s Gitlab profile"},{"icon":"matrix","url":"http://neil.rahmouni.dev/matrix","description":"Neïl Rahmouni\'s Matrix account"}]}'));
export let rc_chadrixy = writable(JSON.parse('{"pfp":null,"main":"http://url.creative-olympics.org/chadrixy_artstation","links":[{"icon":"twitter","url":"http://url.creative-olympics.org/chadrixy_twitter","description":"Chadrixy\'s Twitter profile"}]}'));
export let rc_footer = writable(JSON.parse('{"links":[{"icon":"twitter","url":"http://url.creative-olympics.org/gunivers_twitter"},{"icon":"gunivers","url":"http://url.creative-olympics.org/gunivers_website"},{"icon":"discord","url":"http://url.creative-olympics.org/discord2"}]}'));
export let rc_aboutPage_article = writable('<h1>Who are we?</h1><p>The Creative Olympics is a charity event based on the game <b>Minecraft</b>, which aims to succeed the famous MineAthon and promote creativity, solidarity and social commitment. The event brings together teams from different countries to compete in building, datapack creation, resource-pack creation and PvP events, with the aim of <b>collecting donations</b> for a world-wide charity.</p><p>We strongly believe in the power of video games as a means of <b>artistic expression and learning</b>, and we want to promote an inclusive and creative environment where participants can let their imagination run wild while supporting important causes. Donations raised at the event not only provide <b>access to the jury and game servers</b> with various activities, but also <b>contribute to the cause</b> of the recipient charity.</p><p>In 2020, thanks to the participation of more than <b>40 players and almost 400 spectators</b>, we were able to raise more than <b>350€</b> in donations for Greenpeace and accumulate more than <b>17 creations</b> in a single week. We are proud of the success of this event and are looking forward to the next edition in <b>2024</b>, in an even more fun version!</p><p>We would like to express our warmest thanks to all the participants, spectators, donors and partners who make the Creative Olympics event possible. <b>Your support</b> allows us to promote values that we consider essential today, and to contribute positively to our society.</p><p>Join us for the next Creative Olympics and together let\'s continue to make <b>creativity and solidarity</b> a source of positive change in the world!</p>')
export let rc_adminApp_url = writable('http://url.creative-olympics.org/admin-app')
export let rc_adminIssueBoard_url = writable('http://url.creative-olympics.org/board')
export let rc_adminCurrentSprint_url = writable('http://url.creative-olympics.org/sprint')
export let rc_trailer_ytbID = writable('2g811Eo7K8U')
export let rc_feedback_email = writable('co@rahmouni.dev');
export let rc_loginProviders = writable(JSON.parse('{"Apple":"Disabled","Google":"Enabled","Microsoft":"Hidden"}'));
export let rc_credits = writable(credits);
