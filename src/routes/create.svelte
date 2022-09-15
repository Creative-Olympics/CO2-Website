<script>
	import { goto } from '$app/navigation';
	import { onAuthStateChanged } from 'firebase/auth';
	import {
		doc,
		getDoc,
		getDocs,
		addDoc,
		collection,
		updateDoc,
		increment
	} from 'firebase/firestore';

	import { db, auth } from '../firebase';
	import Appbar from '../components/Appbar.svelte';
	import { toasts } from '../components/toasts/toasts';

	if (auth.currentUser) {
		getDoc(doc(db, 'users', auth.currentUser.uid)).then((userData) => {
			if (!userData.data()['isAdmin']) {
				goto('/');
				toasts.error("You aren't allowed to access this page");
			}
		});
	} else {
		goto('/');
		toasts.error("You aren't allowed to access this page");
	}

	onAuthStateChanged(auth, (u) => {
		if (!u) {
			goto('/');
			toasts.error("You aren't allowed to access this page");
		}
	});

	async function fetchKuizes() {
		return getDocs(collection(db, 'kuizes'));
	}

	let kuizes = fetchKuizes();

	/** @type {String} */
	let ID;
	/** @type {String} */
	let title;
	/** @type {String} */
	let type;
	/** @type {String} */
	let info;
	/** @type {String} */
	let iconUrl;
	/** @type {string[][]} */
	let options = [['', '']];
	/** @type {string[]|string|undefined} */
	let answers = undefined;

	let creating = false;
	let dataMode = false;

	function create() {
		creating = true;
		addDoc(collection(db, 'kuizes', ID, 'questions'), {
			title: title,
			iconUrl: iconUrl || '',
			answers: answers,
			options: options.map((i) => (i[1] == '' ? i[0] : i.join('§§'))),
			info: info || '',
			type: type || 'choice'
		})
			.then(() => {
				updateDoc(doc(db, 'kuizes', ID), {
					questionCount: increment(1)
				})
					.then(() => {
						info = '';
						answers = type === 'boolean' ? undefined : type === 'input' ? [''] : [];
						creating = false;
						toasts.success('Question added');
					})
					.catch((error) => {
						toasts.error('STEP2 - An unknown error occured');
						console.log(error);
					});
			})
			.catch((error) => {
				toasts.error('STEP1 - An unknown error occured');
				console.log(error);
			});
	}
</script>

<svelte:head>
	<title>Kuizu - Create</title>
</svelte:head>

<div id="stick" data-scroll-container>
	<Appbar />
	<div data-scroll-section>
		<div class="hero min-h-screen bg-base-200">
			<div class="hero-content text-center">
				<div class="max-w-xl flex flex-col gap-3 items-center mt-16 p-4">
					<div class="avatar mb-4">
						<div class="w-24 mask mask-squircle">
							<img src={iconUrl || 'https://placeimg.com/192/192/any'} alt="" />
						</div>
					</div>

					{#await kuizes}
						<select class="select select-bordered w-96 disabled">
							<option disabled selected>Loading...</option>
						</select>
					{:then kList}
						<select class="select select-bordered w-96" bind:value={ID}>
							<option disabled selected>Select Kuiz</option>
							{#each kList.docs as kuiz}
								<option value={kuiz.id}>{kuiz.data()['displayName']}</option>
							{/each}
						</select>
					{/await}
					<input
						type="text"
						placeholder="title"
						class="input input-bordered w-96"
						bind:value={title}
					/>
					<input
						type="text"
						placeholder="iconUrl"
						class="input input-bordered w-96"
						bind:value={iconUrl}
					/>
					<select
						class="select select-bordered w-96"
						bind:value={type}
						on:change={() => {
							options = [['', '']];
							answers = type === 'boolean' ? undefined : type === 'input' ? [''] : [];
						}}
					>
						<option disabled selected>Select type</option>
						<option value="choice">Multiple choice</option>
						<option value="boolean">True or False</option>
						<option value="input">Input</option>
					</select>
					{#if type === 'choice'}
						{#each options as option, i}
							<div>
								{#if dataMode}
									<input
										type="text"
										placeholder="option§§icon"
										class="input input-bordered w-96"
										bind:value={option[0]}
									/>
								{:else}
									<input
										type="text"
										placeholder="option"
										class="input input-bordered w-48"
										bind:value={option[0]}
									/>
									<input
										type="text"
										placeholder="icon"
										class="input input-bordered w-48"
										bind:value={option[1]}
									/>
								{/if}
								<button
									class="btn btn-square btn-error"
									on:click={() => {
										options.splice(i, 1);
										options = options;
									}}
								>
									×
								</button>
								<button
									class="btn btn-square {answers.includes(option[0])
										? 'btn-success'
										: 'btn-warning'}"
									on:click={() => {
										if (answers.includes(option[0])) {
											answers.splice(answers.indexOf(option[0]), 1);
											answers = answers;
										} else {
											answers = [...answers, option[0]];
										}
									}}
								>
									{answers.includes(option[0]) ? 'T' : 'F'}
								</button>
							</div>
						{/each}
						<div class="flex gap-2">
							<button class="btn" on:click={() => (options = [...options, ['', '']])}>
								Add option
							</button>
							<button class="btn btn-square btn-info" on:click={() => (dataMode = !dataMode)}>
								<span class="material-symbols-rounded">data_object</span>
							</button>
						</div>
					{:else if type === 'boolean'}
						<select class="select select-bordered w-96" bind:value={answers}>
							<option disabled selected>Select answer</option>
							<option value="true">True</option>
							<option value="false">False</option>
						</select>
					{:else if type === 'input'}
						{#each answers as answer, i}
							<div>
								<input
									type="text"
									placeholder="answer"
									class="input input-bordered w-96"
									bind:value={answer}
								/>
								<button
									class="btn btn-square btn-error"
									on:click={() => {
										answers.splice(i, 1);
										answers = answers;
									}}
								>
									×
								</button>
							</div>
						{/each}
						<button class="btn" on:click={() => (answers = [...answers, ''])}> Add answer </button>
					{/if}
					<input
						type="text"
						placeholder="info"
						class="input input-bordered w-96"
						bind:value={info}
					/>
					<button class="btn btn-primary btn-wide mt-4" disabled={creating} on:click={create}
						>Create</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
