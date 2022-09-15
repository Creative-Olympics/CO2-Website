<script>
	import { collection, getDocs } from 'firebase/firestore';
	import { fade } from 'svelte/transition';

	import { db } from '../firebase';

	async function fetchKuizes() {
		return getDocs(collection(db, 'kuizes'));
	}

	let kuizes = fetchKuizes();
</script>

<h1 class="text-lg mb-4 ml-2 font-semibold uppercase px-4 md:px-8 text-center sm:text-start">Kuizes</h1>
{#await kuizes}
	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 absolute w-full px-4 md:px-8"
	>
		{#each Array(3) as _}
			<div class="card card-compact bg-base-100 shadow-xl" out:fade>
				<div class="card-body">
					<div class="p-4">
						<div class="card-title animate-pulse rounded-md bg-slate-300 w-32 h-6" />
						<div class="badge bg-slate-300 w-16 border-0 mt-3 animate-pulse -mb-1" />
						<div class="badge bg-slate-300 w-8 border-0 mt-3 animate-pulse -mb-1" />
					</div>
					<div class="card-actions justify-end">
						<button class="btn w-20 animate-pulse" disabled />
					</div>
				</div>
			</div>
		{/each}
	</div>
{:then result}
	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 absolute w-full px-4 md:px-8"
	>
		{#each result.docs as kuiz}
			<div
				class="card card-compact bg-base-100 shadow-xl {kuiz.data()['cardBackgroundUrl'] &&
					'image-full'}"
				in:fade
			>
				{#if kuiz.data()['cardBackgroundUrl']}
					<figure>
						<div
							class="w-full h-full"
							style="background: url('{kuiz.data()[
								'cardBackgroundUrl'
							]}') no-repeat center; background-size: cover"
						/>
					</figure>
				{/if}
				<div class="card-body">
					<div class="p-4">
						<h2 class="card-title">
							{kuiz.data()['displayName']}
						</h2>
						<div class="badge badge-secondary mt-2">Official</div>
						<div class="badge mt-2">{kuiz.data()['language']}</div>
					</div>
					<div class="card-actions justify-end">
						<a class="btn btn-accent" href={'/kuiz/' + kuiz.id}>Start</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
