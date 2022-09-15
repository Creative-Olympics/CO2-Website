<script>
	import { toasts } from './toasts/toasts';

	export /** @type {any} */ let data;
	export /** @type {import("@firebase/auth").User | null} */ let user;
	export /** @type {any} */ let setPlaying;
</script>

<svelte:head>
	<title>Kuizu - {data.displayName} Kuiz</title>
</svelte:head>

<div class="min-h-screen hero bg-base-200" style="background-image: url({data.cardBackgroundUrl});">
	{#if data.cardBackgroundUrl}
		<div class="hero-overlay bg-opacity-80" />
	{/if}
	<div
		class="hero-content flex-col lg:flex-row gap-12 {data.cardBackgroundUrl &&
			'text-neutral-content'}"
	>
		<div class="shadow stats stats-vertical">
			<div class="stat">
				<div class="stat-title">Average score</div>
				<div class="stat-value">80%</div>
			</div>
			<div class="stat">
				<div class="stat-title">Questions</div>
				<div class="stat-value">{data.questionCount}</div>
			</div>
			{#if user}
				<div class="stat">
					<div class="stat-figure text-secondary">
						<div class="avatar">
							<div class="w-12 rounded-full">
								<img src={user.photoURL} alt={user.displayName + ' profile picture'} />
							</div>
						</div>
					</div>
					<div class="stat-value">86%</div>
					<div class="stat-title">Average score</div>
					<div class="stat-desc">This week • 90% last week</div>
				</div>
			{/if}
		</div>
		<div class="flex flex-col">
			<h1 class="text-6xl font-bold">{data.displayName}</h1>
			<div class="mt-4">
				<div class="badge badge-secondary badge-lg">Official</div>
				<div class="badge badge-lg">{data.language}</div>
			</div>
			<div class="mt-12">
				<button
					class="gap-2 btn btn-accent btn-lg btn-wide"
					on:click={() => toasts.error('Not working yet, sorry :)')}
				>
					<span class="material-symbols-rounded">swords</span>
					Start Kuiz
				</button>
				<div class="tooltip" data-tip="Training mode">
					<button class="gap-0 btn btn-accent btn-lg btn-square" on:click={setPlaying}
						><span class="material-symbols-rounded">school</span></button
					>
				</div>
			</div>
		</div>
	</div>
</div>
