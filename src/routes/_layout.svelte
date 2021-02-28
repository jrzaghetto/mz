<script>
	import Nav from "../components/Nav.svelte";
	import GlobalStyle from "../components/GlobalStyle.svelte";

	export let segment;
</script>

<div id="container">
	<Nav {segment} />

	<main>
		<GlobalStyle />
		<slot />
	</main>
</div>

<style lang="postcss">
	#container {
		@apply flex-row h-screen;
	}

	main {
		@apply p-8 pt-20 bg-gray-300;
	}

	@screen sm {
		#container {
			@apply grid grid-cols-adjust;
		}

		main {
			width: calc(100vw - 15rem);
			@apply pt-0 p-8 ml-60;
		}
	}
</style>
