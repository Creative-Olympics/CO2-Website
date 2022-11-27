<script>
	import AboutUsModal from './modals/AboutUsModal.svelte';
	import CopyrightModal from './modals/CopyrightModal.svelte';
	import { modal } from './modals/modals';
</script>

<div class="relative">
	<div
		data-scroll
		data-scroll-speed="8"
		data-scroll-position="bottom"
		class="w-screen absolute bottom-0"
	>
		<footer class="footer p-5 px-10 bg-neutral text-neutral-content">
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
				<div class="grid grid-flow-col gap-4">
					<a href="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							class="fill-current"
						>
							<path
								d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
							/>
						</svg>
					</a>
					<a href="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							class="fill-current"
						>
							<path
								d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
							/>
						</svg>
					</a>
					<a href="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							class="fill-current"
						>
							<path
								d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div>
				<span class="footer-title">Credits</span>
				<div class="flex align-middle gap-2">
					<span class="material-symbols-rounded font-semibold" style="font-size: 1.25rem">
						code
					</span>
					<span>
						Website by
						<button on:click={() => modal.open($modal, AboutUsModal)} class="link link-hover">
							Neïl Rahmouni
						</button>
					</span>
				</div>
				<div class="flex align-middle gap-2 mb-2">
					<span class="material-symbols-rounded font-semibold" style="font-size: 1.25rem">
						palette
					</span>
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
						<span class="material-symbols-rounded" style="font-size: 1.25rem">copyright</span>
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
								style="height:16px!important;margin-left:3px;vertical-align:text-bottom;"
								src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
							/>
							<img
								style="height:16px!important;margin-left:3px;vertical-align:text-bottom;"
								src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
							/>
							<img
								style="height:16px!important;margin-left:3px;vertical-align:text-bottom;"
								src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
							/>
							<img
								style="height:16px!important;margin-left:3px;vertical-align:text-bottom;"
								src="https://mirrors.creativecommons.org/presskit/icons/nd.svg"
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
		</footer>
	</div>
</div>
