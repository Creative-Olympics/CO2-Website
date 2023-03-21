<script>
	import SocialIcons from './footer/SocialIcons.svelte';

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
			<SocialIcons type="website" />
		</a>
	{/if}
	{#if links.matrix != null}
		<a
			class="btn btn-circle btn-sm btn-outline"
			target="_blank"
			href={links.matrix}
			rel="noreferrer"
		>
			<SocialIcons type="matrix" />
		</a>
	{/if}
	{#if links.twitter != null}
		<a
			class="btn btn-circle btn-sm btn-outline"
			target="_blank"
			href={links.twitter}
			rel="noreferrer"
		>
			<SocialIcons type="twitter" />
		</a>
	{/if}
	{#if links.instagram != null}
		<a
			class="btn btn-circle btn-sm btn-outline"
			target="_blank"
			href={links.instagram}
			rel="noreferrer"
		>
			<SocialIcons type="instagram" />
		</a>
	{/if}
	{#if links.gitlab != null}
		<a
			class="btn btn-circle btn-sm btn-outline"
			target="_blank"
			href={links.gitlab}
			rel="noreferrer"
		>
			<SocialIcons type="gitlab" />
		</a>
	{/if}
	{#if links.discordServer != null}
		<a
			class="btn btn-circle btn-sm btn-outline"
			target="_blank"
			href={links.discordServer}
			rel="noreferrer"
		>
			<SocialIcons type="discordServer" />
		</a>
	{/if}
	{#if links.gunivers != null}
		<a
			class="btn btn-circle btn-sm btn-outline"
			target="_blank"
			href={links.gunivers}
			rel="noreferrer"
		>
			<SocialIcons type="gunivers" />
		</a>
	{/if}
</div>
