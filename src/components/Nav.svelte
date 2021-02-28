<script>
	import { onMount } from "svelte";
	export let segment;

	function navToggle() {
		var btn = document.getElementById("menuBtn");
		var nav = document.getElementById("menu");

		btn.classList.toggle("open");
		nav.classList.toggle("flex");
		nav.classList.toggle("hidden");
		console.log("Foi");
	}

	onMount(() => {
		var nav = document.getElementById("site-menu");
		var header = document.getElementById("top");

		window.addEventListener("scroll", function () {
			if (window.scrollY >= 400) {
				// adjust this value based on site structure and header image height
				nav.classList.add("nav-sticky");
				header.classList.add("pt-scroll");
			} else {
				nav.classList.remove("nav-sticky");
				header.classList.remove("pt-scroll");
			}
		});
	});
</script>

<header id="top">
	<nav id="site-menu">
		<div id="site-menu-div">
			<span id="t1">
				<img src="./images/avatar.png" alt="" />
			</span>
			<span id="name">Marcos Zaghetto</span>
			<button id="menuBtn" class="hamburger" type="button" on:click={navToggle}>
				<span class="hamburger__top-bun" />
				<span class="hamburger__bottom-bun" />
			</button>
		</div>
		<div class="hidden" id="menu">
			<a
				on:click={navToggle}
				href="."
				aria-current={segment === undefined ? "page" : undefined}>home</a
			>
			<a
				on:click={navToggle}
				aria-current={segment === "about" ? "page" : undefined}
				href="about">sobre</a
			>
			<a
				on:click={navToggle}
				aria-current={segment === "skills" ? "page" : undefined}
				href="skills">skills</a
			>
			<a
				on:click={navToggle}
				aria-current={segment === "works" ? "page" : undefined}
				href="works">trabalhos</a
			>
			<a
				on:click={navToggle}
				aria-current={segment === "blog" ? "page" : undefined}
				href="blog">blog</a
			>
			<a
				on:click={navToggle}
				aria-current={segment === "contact" ? "page" : undefined}
				href="contact"
				>contato
			</a>
			<a
				on:click={navToggle}
				href="https://www.linkedin.com/in/marcos-zaghetto/"
				target="_blank"
				><i class="fab fa-linkedin" />
			</a>
		</div>
	</nav>
</header>

<div class="hidden open">
	<div class="hidden hamburger__top-bun" />
	<div class="hidden hamburger__bottom-bun" />
</div>

<style lang="postcss">
	#top {
		@apply w-full col-span-1 fixed bg-white font-sans z-10;
	}

	#t1 {
		@apply m-0 max-w-3;
	}

	#t1 img {
		@apply rounded-full border-4;
	}

	#t1 img:after {
		visibility: visible;
		content: "MZ";
	}

	#site-menu {
		@apply flex flex-col w-full justify-between items-center px-4 py-1 bg-white shadow-red border-t-4 border-red-900;
	}

	#site-menu-div {
		@apply w-full self-start flex flex-row flex-no-wrap justify-between items-center;
	}

	#menu {
		@apply w-full self-end flex-col items-center h-full py-1 pb-4;
	}

	#menu a {
		@apply font-bold text-lg w-full no-underline py-2;
	}

	#menu a:hover {
		@apply text-green-600;
	}

	#menuBtn {
		@apply block;
	}

	#menuBtn:focus {
		@apply outline-none;
	}

	@screen sm {
		#top {
			@apply fixed flex h-screen content-center justify-center w-60 bg-blue-400;
		}

		#site-menu {
			@apply flex-col grid content-center px-0 shadow-none bg-blue-400;
		}

		#site-menu-div {
			@apply w-60 self-center flex-none;
		}

		#menu {
			@apply w-full self-center flex flex-col py-0 pb-0;
		}

		#menu a {
			@apply py-1 pt-2 ml-4 pr-6 w-menu text-center;
		}

		#menuBtn {
			@apply hidden;
		}

		#t1 {
			@apply mx-auto mb-2 max-w-10 max-h-10;
		}

		#name {
			@apply hidden;
		}
	}

	[aria-current] {
		position: relative;
		display: inline-block;
		@apply rounded-l-lg bg-gray-300 text-green-600;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	.hamburger {
		cursor: pointer;
		width: 48px;
		height: 48px;
		transition: all 0.25s;
	}

	.hamburger__top-bun,
	.hamburger__bottom-bun {
		content: "";
		position: absolute;
		width: 24px;
		height: 2px;
		background: #000;
		transform: rotate(0);
		transition: all 0.5s;
	}

	.hamburger:hover [class*="-bun"] {
		background: #333;
	}

	.hamburger__top-bun {
		transform: translateY(-5px);
	}

	.hamburger__bottom-bun {
		transform: translateY(3px);
	}

	.open {
		transform: rotate(90deg);
		transform: translateY(-1px);
	}

	.open .hamburger__top-bun {
		transform: rotate(45deg) translateY(0px);
	}

	.open .hamburger__bottom-bun {
		transform: rotate(-45deg) translateY(0px);
	}
</style>
