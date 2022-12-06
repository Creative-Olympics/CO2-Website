<script>
	import { googleAuthProvider, microsoftAuthProvider, login } from '../../lib/firebase';
	import LoginAndLinkModal from './LoginAndLinkModal.svelte';
</script>

<span class="text-md font-bold uppercase w-full">Login</span>
<div class="flex flex-col mt-4 gap-2">
	<button class="btn" on:click={() => login(googleAuthProvider, LoginAndLinkModal)}>Log in with Google</button>
	<button class="btn" on:click={() => login(microsoftAuthProvider, LoginAndLinkModal)}>Log in with Microsoft</button>
</div>
