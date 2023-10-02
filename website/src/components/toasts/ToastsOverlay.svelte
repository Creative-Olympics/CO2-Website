<script>
	import { blur, fade, fly } from "svelte/transition"

	import { toasts } from "$lib/toasts"

	import SendFeedbackToastButton from "$cmp/toasts/SendFeedbackToastButton.svelte"
</script>

<div class="toast items-end" style="z-index: 1000;">
	{#each $toasts as toast (toast.id)}
		<button class="w-fit h-fit" on:click={() => toasts.remove(toast.id)}>
			<div
				class="shadow-lg alert {toast.type === 'alert-feedbackError' ? 'alert-error' : toast.type}"
				in:fly={{ y: 200 }}
				out:fade
			>
				{#if toast.type == "alert-info"}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="stroke-current flex-shrink-0 w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				{:else if toast.type == "alert-success"}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
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
				{:else if toast.type == "alert-warning"}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/>
					</svg>
				{:else if toast.type == "alert-error" || toast.type == "alert-feedbackError"}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				{/if}
				<span>{toast.message}</span>
			</div>
			{#if toast.type === "alert-feedbackError"}
				<div class="flex-none">
					<SendFeedbackToastButton {...toast.props} />
				</div>
			{:else if toast.content != null}
				<div class="flex-none">
					<svelte:component this={toast.content} {...toast.props} />
				</div>
			{/if}
		</button>
	{/each}
</div>
<div class="invisible alert alert-info alert-success alert-warning alert-error" />
