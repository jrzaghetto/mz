<script>
	import Nav from "../components/Nav.svelte";
	import GlobalStyle from "../components/GlobalStyle.svelte";
	import { Notifications } from "@tadashi/svelte-notification";

	export let segment;
</script>

<div id="container">
	<Nav {segment} />

	<main>
		<GlobalStyle />
		<slot />
	</main>
</div>

<Notifications />

<style lang="postcss">
	#container {
		@apply flex-row h-screen;
	}

	main {
		@apply p-8 pt-20 bg-gray-300 min-h-screen;
	}

	@screen sm {
		#container {
			@apply grid grid-cols-adjust;
		}

		main {
			width: calc(100vw - 15rem);
			@apply pt-0 p-8 ml-60 min-h-auto;
		}
	}
</style>
