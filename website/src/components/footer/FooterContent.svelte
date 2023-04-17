<script>
	// @ts-nocheck
	import Img from "@zerodevx/svelte-img"
	import currentYear from "current-year"

	import AboutUsModal from "$cmp/modals/AboutUsModal.svelte"
	import CopyrightModal from "$cmp/modals/CopyrightModal.svelte"
	import { modal } from "$lib/modals"
	import Icon from "$cmp/Icon.svelte"
	import SocialLinks from "$cmp/SocialLinks.svelte"
	import { rc_footer } from "$lib/firebase"

	import logo_anim_sm from "$lib/assets/logo/anim_sm.gif?run&lqip=0&w=80&h=80"
	import turtle from "$lib/assets/footer/turtle.png?run&lqip=0&w=80&h=80"
</script>

<div class="footer p-5 px-10" data-theme="dark">
	<div class="flex items-center gap-6">
		<label class="swap swap-rotate text-9xl">
			<input type="checkbox" tabindex="-1" />
			<div class="swap-off w-20 h-20">
				<Img src={logo_anim_sm} alt="Creative Olympics logo" width={80} height={80} />
			</div>
			<div class="swap-on w-20 h-20">
				<Img src={turtle} alt="Turtle <3" width={80} height={80} />
			</div>
		</label>
		<div class="flex flex-col mt-4 gap-2">
			<span class="font-semibold">Creative Olympics</span>
			<span>2023 Edition</span>
		</div>
	</div>
	<div>
		<span class="footer-title mb-1">Social</span>
		<SocialLinks links={$rc_footer.links} />
	</div>
	<div>
		<span class="footer-title mb-1">Credits</span>
		<div class="flex gap-2 items-center">
			<Icon>CodeTags</Icon>
			<span>
				Website by
				<button on:click={() => modal.open($modal, AboutUsModal)} class="link link-hover">
					Neïl Rahmouni
				</button>
			</span>
		</div>
		<div class="flex gap-2 items-center">
			<Icon>PaletteOutline</Icon>
			<span>
				Imagery & assets by
				<button on:click={() => modal.open($modal, AboutUsModal)} class="link link-hover">
					Chadrixy
				</button>
			</span>
		</div>
		<button
			class="btn btn-outline btn-xs normal-case mt-1"
			on:click={() => modal.open($modal, AboutUsModal)}
		>
			About us
		</button>
	</div>
	<div>
		<span class="footer-title mb-1">Legal</span>
		<div xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
			<div class="flex gap-2 items-center mb-1">
				<Icon>copyright</Icon>
				<span>Copyright 2022 - {currentYear()}</span>
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
					class="btn btn-outline btn-xs normal-case ring-500"
					on:click={() => modal.open($modal, CopyrightModal)}
				>
					Learn more
				</button>
			</div>
		</div>
	</div>
</div>
