<svelte:head>
	<title>About</title>
</svelte:head>

<section id="about" class="resume-section p-3 p-lg-5 d-flex align-items-center">
	<div class="w-100">
		<h1 class="mb-0">
			Marcos
			<span class="text-primary">Zaghetto</span>
		</h1>
		about
		<div
			class="subheading mb-5"
			style="    text-transform: uppercase;
    font-weight: 500;
    font-family: 'Saira Extra Condensed',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
    font-size: 1.5rem;
    letter-spacing: .12em;"
		>
			Desenvolvedor Front-End
		</div>
		<p class="lead mb-2">
			Atuo com Desenvolvimento Front-End em tempo integral e tenho uma grande
			experiência com Desenvolvimento Web em geral (<em
				class="text-light-blue-600 font-semibold">Full-Stack</em
			>), trabalhando com tecnologias como HTML, CSS, JavaScript, Python,
			NodeJS, Svelte, ReactJS, React Native, Bootstrap, Tailwind e outras.
		</p>
		<br />
		<p class="lead mb-2">
			Sou graduado em Análise e Desenvolveimento de Sistemas, pela
			<a
				class="text-light-blue-600 font-semibold focus:text-blue-600 hover:text-blue-500"
				href="https://www.impacta.edu.br"
				target="_blank">Faculdade Impacta de Tecnologia</a
			>
		</p>
		<br />
		<p class="lead mb-2">
			Criei este site com o intuito de escrever sobre o desenvolvimento web na
			parte do blog e ajudar pessoas que queiram que o seu negócio esteja
			disponível na internet.
		</p>
		<br />
		<p class="lead mb-2">
			Caso tenha interesse em tirar alguma dúvida comigo ou então falar sobre
			algum assunto, você pode entrar em contato pela seção de <a
				class="text-light-blue-600 font-semibold focus:text-blue-600 hover:text-blue-500"
				href="/contact">contato do site</a
			>.
		</p>
		<br />
		<div class="social-icons mt-5">
			<a
				href="https://www.linkedin.com/in/marcos-zaghetto/"
				target="_blank"
				title="LinkedIn"><i class="fab fa-linkedin-in" /></a
			>
			<a href="https://github.com/jrzaghetto" target="_blank" title="Github"
				><i class="fab fa-github" /></a
			>
		</div>
	</div>
</section>

<style lang="postcss">
	h1,
	p {
		@apply my-0 mx-auto;
	}

	h1 {
		@apply text-3xl uppercase font-bold m-0 mb-4 text-orange-500 font-sans;
	}

	p {
		@apply my-0 mx-auto;
	}

	@screen md {
		h1 {
			@apply text-5xl;
		}
	}
</style>
