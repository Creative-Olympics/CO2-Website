<script>
	// @ts-nocheck
	import Img from "@zerodevx/svelte-img"
	import currentYear from "current-year"

	import { rc_footer } from "$lib/firebase"
	import { modal } from "$lib/modals"

	import AboutUsModal from "$cmp/modals/AboutUsModal.svelte"
	import CopyrightModal from "$cmp/modals/CopyrightModal.svelte"
	import Icon from "$cmp/Icon.svelte"
	import SocialLinks from "$cmp/SocialLinks.svelte"

	import turtle from "$lib/assets/footer/turtle.png?w=480;360;240;120&h=419;315;210;105&as=run:0"
	import logo_small from "$lib/assets/logo/small.gif?w=80;60;40;20&h=72;54;36;18&format=webp;gif;jpg&as=run:0"
</script>

<div class="footer p-5 px-10" data-theme="dark">
	<div class="flex items-center gap-6">
		<label class="swap swap-rotate text-9xl">
			<input type="checkbox" tabindex="-1" />
			<div class="swap-off w-20 h-20">
				<Img src={logo_small} alt="Creative Olympics" />
			</div>
			<div class="swap-on w-20 h-20 flex flex-col justify-end">
				<Img src={turtle} alt="Turtle <3" />
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
			<Icon>code</Icon>
			<span>
				Website by
				<button on:click={() => modal.open(AboutUsModal)} class="link link-hover">
					Neïl Rahmouni
				</button>
			</span>
		</div>
		<div class="flex gap-2 items-center">
			<Icon>palette</Icon>
			<span>
				Imagery & assets by
				<button on:click={() => modal.open(AboutUsModal)} class="link link-hover">
					Chadrixy
				</button>
			</span>
		</div>
		<button
			class="btn btn-outline btn-xs normal-case mt-1"
			on:click={() => modal.open(AboutUsModal)}
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
					on:click={() => modal.open(AboutUsModal)}
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
						class="h-4 w-4 ml-1 align-text-bottom inline"
						src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
						alt="Copyright"
					/>
					<img
						class="h-4 w-4 ml-1 align-text-bottom inline"
						src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
						alt="Attribution"
					/>
					<img
						class="h-4 w-4 ml-1 align-text-bottom inline"
						src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
						alt="Non commercial"
					/>
					<img
						class="h-4 w-4 ml-1 align-text-bottom inline"
						src="https://mirrors.creativecommons.org/presskit/icons/nd.svg"
						alt="No derivatives"
					/>
				</a>
			</div>
			<div class="mt-2">
				<button
					class="btn btn-outline btn-xs normal-case ring-500"
					on:click={() => modal.open(CopyrightModal)}
				>
					Learn more
				</button>
			</div>
		</div>
	</div>
</div>
