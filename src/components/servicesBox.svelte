<script>
  import { fly } from "svelte/transition";
  import { getContext } from "svelte";
  import ModalContent from "./ModalContent.svelte";

  const { open } = getContext("simple-modal");

  const showSurprise = (assunto) => {
    open(
      ModalContent,
      { assunto },
      {
        transitionWindow: fly,
        transitionWindowProps: {
          y: -500,
          duration: 1000,
        },
        styleWindow: {
          width: "fit-content",
          borderRadius: "15px",
          border: "1px solid #DADAE5",
        },
        styleContent: {
          padding: "0",
        },
      }
    );
  };

  let test = [
    {
      cor: "bg-gradient-to-r from-green-700 to-green-600",
      icon: "fas fa-desktop",
      gradientBack: "#047857",
      number: "1",
      title: "Criação de Sites Institucionais",
      description:
        "Utilize a força da internet para expor sua marca para milhares de pessoas online. Criamos sites com alta qualidade, beleza e últimas tecnologias.",
    },
    {
      cor: "bg-gradient-to-r from-blue-600 to-blue-500",
      icon: "fas fa-shopping-cart",
      gradientBack: "#2563EB",
      number: "2",
      title: "Lojas Virtuais e-Commerces",
      description:
        "Utilize a força da internet para aumentar suas vendas. Criamos lojas virtuais para que você possa realizar todas suas vendas 100% online.",
    },
    {
      cor: "bg-gradient-to-r from-green-500 to-green-400",
      icon: "fas fa-globe-africa",
      gradientBack: "#10B981",
      number: "3",
      title: "Sistemas On-line",
      description:
        "Está precisando de algum sistema online específico? Seja ele para aumentar sua produtividade, fazer gestão de vendas, etc... Faça um orçamento!",
    },
    {
      cor: "bg-gradient-to-r from-blue-700 to-blue-600",
      icon: "fas fa-comment",
      gradientBack: "#1D4ED8",
      number: "4",
      title: "Gestão de Conteúdos",
      description:
        "Já possui algum site online e gostaria de atualizar o seu conteúdo? Nós também atualizamos os sites que já estão online e precisam de manutenção!",
    },
    {
      cor: "bg-gradient-to-r from-green-600 to-green-500",
      icon: "fas fa-chart-line",
      gradientBack: "#10B981",
      number: "5",
      title: "SEO Otimização",
      description:
        "Tenha seu site otimizado para os maiores buscadores online como Google e Bing e faça a sua marca ficar em	evidencia nas buscas da internet",
    },
    {
      cor: "bg-gradient-to-r from-blue-500 to-blue-400",
      icon: "fas fa-robot",
      gradientBack: "#3B82F6",
      number: "6",
      title: "Manutenção e Automação",
      description:
        "Quer fazer algum tipo de auteração no seu site ou alguma automação? Possuímos a expertise necessária para realizar o serviço para você.",
    },
  ];
</script>

<div class="container mx-auto">
  <div
    class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
  >
    {#each test as e, i}
      <div>
        <div
          class="serviceBox quatro"
          style="--my-color-var: linear-gradient(45deg, {e.gradientBack} 49%, transparent 50%);"
        >
          <div class="service-count">
            {e.number}
          </div>
          <div class="service-icon">
            <i class={e.icon} />
          </div>
          <div class="service-content">
            <h3 class="title">
              {e.title}
            </h3>
            <p class="description">
              {e.description}
            </p>
            <button
              class="p-2 rounded-lg font-sans transition duration-1000 ease-in-out bg-green-900 transform hover:-translate-y-1 hover:scale-105 text-white"
              on:click={() => showSurprise(e.title)}
            >
              <a href=".">Contratar</a>
            </button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .serviceBox {
    color: #000;
    background-color: #fff;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    padding: 20px 15px;
    margin: 20px 0 0;
    border-radius: 20px 0 20px 0;
    position: relative;
    z-index: 1;
    transition: all ease 0.3s;
  }

  .serviceBox:hover {
    @apply shadow-xl;
  }

  .serviceBox:before {
    content: "";
    background: linear-gradient(45deg, #a87508 49%, transparent 50%);
    height: 15px;
    width: 15px;
    position: absolute;
    left: 115px;
    top: -15px;
  }

  .serviceBox .service-count {
    color: #fff;
    font-size: 90px;
    text-align: center;
    line-height: 130px;
    width: 100px;
    height: 140px;
    margin: -35px 0 0 0;
    display: block;
  }
  .serviceBox .service-icon {
    color: #909090;
    font-size: 60px;
    position: absolute;
    right: 20px;
    top: 20px;
    transition: all 0.3s ease 0s;
    color: darkcyan;
  }
  .serviceBox:hover .service-icon {
    transform: rotateY(360deg);
  }
  .serviceBox .service-content {
    padding: 20px 0 0;
  }
  .serviceBox .title {
    color: #505050;
    font-size: 19px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  .serviceBox .description {
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
    line-height: 25px;
    margin-bottom: 10px;
  }
  .serviceBox .read-more {
    color: #202020;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    display: inline-block;
    position: relative;
    transition: all ease 0.3s;
  }
  .serviceBox .read-more:hover {
    color: #fff;
    text-shadow: 0 0 5px #000;
    text-decoration: none;
  }
  .serviceBox.purple:before {
    background: linear-gradient(45deg, #503893 49%, transparent 50%);
  }
  .serviceBox:before {
    background: var(--my-color-var);
  }
  .serviceBox.quatro:before {
    background: linear-gradient(45deg, #bfdbfe 49%, transparent 50%);
  }
  .serviceBox.quatro .service-count {
    @apply bg-gradient-to-r from-green-400 to-blue-300;
  }
  @media only screen and (max-width: 990px) {
    .serviceBox {
      margin: 0 0 50px;
    }
  }

  @screen md {
    .serviceBox .description {
      @apply min-h-5 font-sans text-sm;
    }

    .serviceBox .title {
      @apply font-sans text-2xl min-h-4/5 grid content-center;
    }
  }

  @screen lg {
    .serviceBox .description {
      @apply min-h-7;
    }
  }
</style>
