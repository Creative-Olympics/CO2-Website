<script>
	import { page } from '$app/stores';
	import {
		doc,
		getDoc,
		getDocs,
		collection,
		query,
		startAt,
		limit,
		orderBy,
		documentId
	} from 'firebase/firestore';
	import { onAuthStateChanged } from 'firebase/auth';
	import { fade } from 'svelte/transition';

	import Appbar from '../../components/Appbar.svelte';
	import { db, auth } from '../../firebase';
	import KuizPage from '../../components/KuizPage.svelte';
	import KuizQuestion from '../../components/KuizQuestion.svelte';

	async function fetchData() {
		return getDoc(doc(db, 'kuizes', $page.params.id));
	}

	let data = fetchData();

	/** @type {any} */
	let question = null;
	let cdstart = 0;
	let streak = 5;

	/** @type {NodeJS.Timer | undefined} */
	let interval;

	/** @type {import("@firebase/auth").User | null} */
	let user;

	onAuthStateChanged(auth, (u) => {
		user = u;
	});

	function autoID() {
		const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		let autoId = '';

		for (let i = 0; i < 20; i++) {
			autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
		}
		return autoId;
	}

	async function findNewQuestion() {
		let q = query(
			collection(db, 'kuizes', (await data).id, 'questions'),
			orderBy(documentId()),
			startAt(autoID()),
			limit(1)
		);
		let docs = (await getDocs(q)).docs;

		if (docs.length > 0) {
			console.log('found!');
			question = docs[0].data();
		} else {
			q = query(
				collection(db, 'kuizes', (await data).id, 'questions'),
				orderBy(documentId()),
				limit(1)
			);
			question = (await getDocs(q)).docs[0].data();
		}
	}
</script>

<div id="stick" data-scroll-container>
	<Appbar />
	<div data-scroll-section>
		{#await data}
			<p>Loading...</p>
		{:then result}
			{#if result.data()}
				{#if cdstart > 0}

<div class="min-h-screen hero bg-base-200">
	<div class="text-center hero-content">
					<div class="text-center hero-content" out:fade>
						<span class="font-mono text-6xl countdown">
							<span id="#cdstart" style="--value:{cdstart};" />
						</span>
					</div>
					</div>
					</div>
				{:else if question}
					{#key question}
						<KuizQuestion
							data={question}
							nextQuestion={findNewQuestion}
							{streak}
							setStreak={(/** @type {number} */ x) => (streak = x)}
						/>
					{/key}
				{:else}
					<KuizPage
						{user}
						data={result.data()}
						setPlaying={() => {
							cdstart = 3;
							interval = setInterval(() => {
								if (cdstart == 0) {
									clearInterval(interval);
								} else {
									cdstart--;
								}
							}, 1000);
							findNewQuestion();
						}}
					/>
				{/if}
			{:else}
				<div class="alert alert-error">An unknown error occured</div>
			{/if}
		{:catch error}
			<div class="alert alert-error">An unknown error occured</div>
			<div class="alert alert-error">{error.message}</div>
		{/await}
	</div>
</div>
