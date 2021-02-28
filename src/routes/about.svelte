<svelte:head>
	<title>About</title>
</svelte:head>

<section id="about" class="resume-section p-3 p-lg-5 d-flex align-items-center">
	<div class="w-100">
		<h1 class="mb-0">
			Marcos
			<span class="text-primary">Zaghetto</span>
		</h1>
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
			Atuo com Desenvolvimento PHP há mais de 10 anos e tenho uma grande
			experiência com Desenvolvimento Web em geral (<em>Full-Stack</em>),
			trabalhando com tecnologias como PHP, <em>Framework</em> Laravel, MySQL, PostgreSQL,
			HTML, CSS, JavaScript, jQuery, Bootstrap e outras.
		</p>
		<p class="lead mb-2">
			Sou autor do <a href="https://rberaldo.com.br/" target="_blank"
				>Blog do Beraldo</a
			>, onde publico conteúdos sobre Programação desde 2009.
		</p>
		<p class="lead mb-2">
			Também sou autor e instrutor do <a
				href="http://www.ultimatephp.com.br/curso"
				target="_blank">Curso ULTIMATE PHP</a
			>, curso <em>online</em> destinado para iniciantes em PHP, com o objetivo
			de formar profissionais qualificados para o Mercado de Trabalho. Também
			criei o
			<a href="http://blog.ultimatephp.com.br/" target="_blank"
				>Blog do ULTIMATE PHP</a
			>, com conteúdos básicos sobre PHP.
		</p>
		<p class="lead mb-2">
			Sou graduado em <a href="https://web.inf.ufpr.br/bcc/" target="_blank"
				>Ciência da Computação</a
			>, pela
			<a href="https://www.ufpr.br" target="_blank"
				>Universidade Federal do Paraná</a
			>, onde também trabalhei em projetos de pesquisa do
			<a href="https://www.c3sl.ufpr.br/" target="_blank">C3SL</a>, na área de
			desenvolvimento de <em>software</em>.
		</p>
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
