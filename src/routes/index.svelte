<script>
	import ServicesBox from "../components/servicesBox.svelte";
	import Modal from "svelte-simple-modal";
</script>

<svelte:head>
	<title>Zaghetto - Desenvolvedor Frontend</title>
</svelte:head>

<Modal closeButton={false}>
	<h1>Serviços prestados</h1>

	<ServicesBox />
</Modal>

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
