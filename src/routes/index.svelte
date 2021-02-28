<script>
	import ServicesBox from "../components/servicesBox.svelte";
</script>

<svelte:head>
	<title>MZ Developer!!!</title>
</svelte:head>

<h1>Serviços prestados</h1>

<ServicesBox />

<style lang="postcss">
	h1 {
		@apply text-xl text-center pb-12 font-sans uppercase font-bold text-gray-700;
	}

	@screen md {
		h1 {
			@apply text-3xl text-center pb-10;
		}
	}

	@screen xl {
		h1 {
			@apply text-5xl;
		}
	}
</style>
