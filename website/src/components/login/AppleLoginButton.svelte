<script>
	import LoginButton from "./LoginButton.svelte"
</script>

<LoginButton
	logo={window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
		? "banner/apple_logo_light.svg"
		: "banner/apple_logo_dark.svg"}
	text="Sign in with Apple"
	addClass="apple font-apple"
	ariaLabel="Sign in with Apple"
/>
