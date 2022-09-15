<script>
	export /** @type {any} */ let data;
	export /** @type {any} */ let nextQuestion;
	export /** @type {number} */ let streak;
	export /** @type {any} */ let setStreak;

	import { fade } from 'svelte/transition';

	function shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	console.log(data);
	const shuffled = !data.type || data.type === 'choice' ? shuffle(data.options) : null;

	let disabled = false;

	/** @type {String[]} */
	let selectedOptions = [];
	/** @type {boolean|string} */
	let answer;

	/** @param {string} o */
	function selectOption(o) {
		if (!disabled) {
			if (selectedOptions.includes(o.split('§§')[0])) {
				selectedOptions.splice(selectedOptions.indexOf(o.split('§§')[0]), 1);
			} else {
				selectedOptions.push(o.split('§§')[0]);
			}
			selectedOptions = selectedOptions;
		}
	}

	/** @param {boolean} o */
	function selectBoolean(o) {
		if (!disabled) {
			answer = o;
		}
	}

	const MAXTIME = 15000;
	let cdend = MAXTIME;
	let interval = setInterval(() => {
		if (cdend <= 0) {
			validate();
		} else {
			cdend -= 5;
		}
	}, 5);

	function validate() {
		if (disabled) {
			nextQuestion();
		} else {
			clearInterval(interval);
			disabled = true;
		}
	}

	function validInput() {
		return data.answers
			.map((/** @type {string} */ i) => i.toLowerCase())
			.includes((answer || '').toLowerCase());
	}
</script>

<div class="min-h-screen hero bg-base-200">
	<div class="text-center hero-content">
		<div class="flex flex-col items-center max-w-xl gap-6 mt-12">
			{#if !disabled}
				<div
					class="radial-progress absolute right-24 top-32 {cdend < 5000 && 'text-error'}"
					style="--value:{(cdend / MAXTIME) * 100};"
					in:fade={{ delay: 6000 }}
				>
					<span class="countdown font-mono text-3xl pt-1 {cdend < 5500 && 'text-error'}">
						<span style="--value:{Math.floor(cdend / 1000)};" />
					</span>
				</div>
			{/if}
			{#if streak >= 5}
				<div class="absolute left-12 top-28" style="transform: rotate(357deg)" transition:fade>
					<div>
						<h1 class="font-extrabold text-7xl">
							<span class="text-5xl material-symbols-rounded">tag</span>{streak}
						</h1>
						<h3 class="text-lg font-extrabold uppercase">Win streak</h3>
					</div>
				</div>
			{/if}
			{#if data.iconUrl}
				<div class="avatar" in:fade={{ delay: 500 }}>
					<div class="w-24 mask mask-squircle">
						<img src={data.iconUrl} alt="" />
					</div>
				</div>
			{/if}
			<h1 class="text-3xl font-bold" in:fade={{ delay: 500 }}>{data.title}</h1>
			{#if disabled && data.info}
				<div class="shadow-lg alert alert-info" in:fade>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="flex-shrink-0 w-6 h-6 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span class="pl-2 text-start">{data.info}</span>
					</div>
				</div>
			{/if}
			{#if !data.type || data.type === 'choice'}
				<div class="grid gap-3 {data.options.length > 4 && 'grid-cols-2'}">
					{#each shuffled as option, i}
						{#if disabled}
							<button
								class="btn gap-2 {data.answers.includes(option.split('§§')[0])
									? 'btn-success'
									: selectedOptions.includes(option.split('§§')[0])
									? 'btn-error'
									: 'btn-outline'}"
								style="min-width: 16rem"
							>
								{#if option.includes('§§')}
									<img class="w-6 h-6" src={option.split('§§')[1]} alt="" />
									{option.split('§§')[0]}
								{:else}
									{option}
								{/if}
								<div class="flex-grow ml-4 text-end">
									<span class="material-symbols-rounded"
										>radio_button_{selectedOptions.includes(option.split('§§')[0])
											? ''
											: 'un'}checked</span
									>
								</div>
							</button>
						{:else}
							<button
								class="btn gap-2 relative {selectedOptions.includes(option.split('§§')[0])
									? 'btn-primary'
									: 'btn-outline'}"
								style="min-width: 16rem"
								in:fade={{ delay: 1500 + 150 * i }}
								on:click={() => selectOption(option)}
							>
								{#if option.includes('§§')}
									<img class="w-6 h-6" src={option.split('§§')[1]} alt="" />
									{option.split('§§')[0]}
								{:else}
									{option}
								{/if}
								<div class="flex-grow ml-4 text-end">
									<span class="material-symbols-rounded"
										>radio_button_{selectedOptions.includes(option.split('§§')[0])
											? ''
											: 'un'}checked</span
									>
								</div>
							</button>
						{/if}
					{/each}
				</div>
			{:else if data.type === 'input'}
				{#if disabled}
					<div class="btn-group btn-group-vertical">
						<button
							class="btn w-96 justify-start btn-outline {validInput()
								? 'btn-success'
								: 'btn-error'} no-animation"
						>
							{answer || 'No answer'}
						</button>
						<button class="justify-start gap-2 btn w-96 btn-success no-animation" in:fade>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="flex-shrink-0 w-6 h-6 stroke-current"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							{data.answers[0]}
						</button>
					</div>
				{:else}
					<input
						type="text"
						placeholder="Write your answer here"
						class="input input-bordered w-96"
						bind:value={answer}
						in:fade={{ delay: 1500 }}
					/>
				{/if}
			{:else}
				<div class="items-center h-24 m-5 btn-group">
					{#if disabled}
						<button
							class="btn btn-lg h-{answer === false ? '24' : '20'} w-{answer === false
								? '48'
								: '44'} transition-all {data.answers === 'false'
								? 'btn-success'
								: answer === false
								? 'btn-error'
								: 'btn-outline'}"
						>
							False
						</button>
						<button
							class="btn btn-lg h-{answer === true ? '24' : '20'} w-{answer === true
								? '48'
								: '44'} transition-all {data.answers === 'true'
								? 'btn-success'
								: answer === true
								? 'btn-error'
								: 'btn-outline'}"
						>
							True
						</button>
					{:else}
						<button
							class="btn btn-lg h-{answer === false ? '24' : '20'} w-{answer === false
								? '48'
								: '44'} btn-outline transition-all {answer === false && 'btn-active'}"
							in:fade={{ delay: 1500 }}
							on:click={() => selectBoolean(false)}
						>
							False
						</button>
						<button
							class="btn btn-lg h-{answer === true ? '24' : '20'} w-{answer === true
								? '48'
								: '44'} btn-outline transition-all {answer === true && 'btn-active'}"
							in:fade={{ delay: 1500 + 150 }}
							on:click={() => selectBoolean(true)}
						>
							True
						</button>
					{/if}
				</div>
			{/if}
			<button
				class="btn {disabled ? 'btn-primary' : 'btn-accent'} btn-lg btn-wide"
				disabled={!(
					selectedOptions.length > 0 ||
					(answer != undefined && answer.toString() != '')
				) && !disabled}
				on:click={validate}
				in:fade={{
					delay:
						2500 +
						150 *
							(!data.type || data.type === 'choice'
								? data.options.length
								: data.type === 'input'
								? 1
								: 2)
				}}
			>
				{disabled ? 'Next' : 'Validate'}
			</button>
		</div>
	</div>
</div>
