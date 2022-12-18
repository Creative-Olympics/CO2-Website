<script>
	import AboutUsModal from '../modals/AboutUsModal.svelte';
	import CopyrightModal from '../modals/CopyrightModal.svelte';
	import { modal } from '$lib/modals';
	import Icon from '$cmp/Icon.svelte';
	import SocialLinks from '$cmp/SocialLinks.svelte';
	import { rc_neilRahmouni } from '$lib/firebase';
</script>

<div class="footer p-5 px-10 bg-neutral text-neutral-content">
	<div class="flex items-center gap-6">
		<label class="swap swap-rotate text-9xl">
			<input type="checkbox" tabindex="-1" />
			<img src="banner/co.gif" class="h-20 swap-off" alt="Creative Olympics" />
			<img src="banner/turtle.png" class="h-20 swap-on" alt="Creative Olympics's Turtle" />
		</label>
		<div class="flex flex-col mt-4 gap-2">
			<span class="font-semibold">Creative Olympics</span>
			<span class="">2023 Edition</span>
		</div>
	</div>
	<div>
		<span class="footer-title">Social</span>
		<SocialLinks links={$rc_neilRahmouni.links} />
	</div>
	<div>
		<span class="footer-title">Credits</span>
		<div class="flex align-middle gap-2">
			<Icon spanClass="font-semibold" spanStyle="font-size: 1.25rem">code</Icon>
			<span>
				Website by
				<button on:click={() => modal.open($modal, AboutUsModal)} class="link link-hover">
					Neïl Rahmouni
				</button>
			</span>
		</div>
		<div class="flex align-middle gap-2 mb-2">
			<Icon spanClass="font-semibold" spanStyle="font-size: 1.25rem">palette</Icon>
			<span>
				Imagery & assets by
				<button on:click={() => modal.open($modal, AboutUsModal)} class="link link-hover">
					Chadrixy
				</button>
			</span>
		</div>
		<button
			class="btn btn-outline btn-xs border-white text-white hover:bg-white hover:text-neutral normal-case"
			on:click={() => modal.open($modal, AboutUsModal)}
		>
			About us
		</button>
	</div>
	<div>
		<span class="footer-title">Legal</span>
		<div xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
			<div class="flex align-middle gap-2 mb-1">
				<Icon spanStyle="font-size: 1.25rem">copyright</Icon>
				<span class="text-start">Copyright 2022</span>
			</div>
			<div>
				<button
					rel="cc:attributionURL dct:creator"
					property="cc:attributionName"
					class="link link-hover text-xs"
					on:click={() => modal.open($modal, AboutUsModal)}
				>
					Neïl Rahmouni & Adrien "Chadrixy" Greco
				</button>
			</div>
			<div class="flex gap-1 text-xs">
				Licensed under
				<a
					href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
					target="_blank"
					rel="license noopener noreferrer"
					class="link link-hover flex"
				>
					CC BY-NC-ND 4.0
					<img
						style="height:16px!important;margin-left:3px;vertical-align:text-bottom;display:inline"
						src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
						alt="Copyright"
					/>
					<img
						style="height:16px!important;margin-left:3px;vertical-align:text-bottom;display:inline"
						src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
						alt="Attribution"
					/>
					<img
						style="height:16px!important;margin-left:3px;vertical-align:text-bottom;display:inline"
						src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
						alt="Non commercial"
					/>
					<img
						style="height:16px!important;margin-left:3px;vertical-align:text-bottom;display:inline"
						src="https://mirrors.creativecommons.org/presskit/icons/nd.svg"
						alt="No derivatives"
					/>
				</a>
			</div>
			<div class="mt-2">
				<button
					class="btn btn-outline btn-xs border-white text-white hover:bg-white hover:text-neutral normal-case"
					on:click={() => modal.open($modal, CopyrightModal)}
				>
					Learn more
				</button>
			</div>
		</div>
	</div>
</div>
