<script>
	import Icon from './Icon.svelte';

	export let links = {
		twitter: null,
		instagram: null,
		gitlab: null,
		matrix: null,
		gunivers: null,
		discordServer: null,
		website: null
	};
</script>

<div class="flex gap-3">
	{#if links.website != null}
		<a
			class="btn btn-circle btn-sm btn-outline"
			target="_blank"
			href={links.website}
			rel="noreferrer"
		>
			<Icon type="website" />
		</a>
	{/if}
	{#if links.matrix != null}
		<a
			class="btn btn-circle btn-sm btn-outline"
			target="_blank"
			href={links.matrix}
			rel="noreferrer"
		>
			<Icon type="matrix" />
		</a>
	{/if}
	{#if links.twitter != null}
		<a
			class="btn btn-circle btn-sm btn-outline"
			target="_blank"
			href={links.twitter}
			rel="noreferrer"
		>
			<Icon type="twitter" />
		</a>
	{/if}
	{#if links.instagram != null}
		<a
			class="btn btn-circle btn-sm btn-outline"
			target="_blank"
			href={links.instagram}
			rel="noreferrer"
		>
			<Icon type="instagram" />
		</a>
	{/if}
	{#if links.gitlab != null}
		<a
			class="btn btn-circle btn-sm btn-outline"
			target="_blank"
			href={links.gitlab}
			rel="noreferrer"
		>
			<Icon type="gitlab" />
		</a>
	{/if}
	{#if links.discordServer != null}
		<a
			class="btn btn-circle btn-sm btn-outline"
			target="_blank"
			href={links.discordServer}
			rel="noreferrer"
		>
			<Icon type="discordServer" />
		</a>
	{/if}
	{#if links.gunivers != null}
		<a
			class="btn btn-circle btn-sm btn-outline"
			target="_blank"
			href={links.gunivers}
			rel="noreferrer"
		>
			<Icon type="gunivers" />
		</a>
	{/if}
</div>
