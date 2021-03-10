<script>
  import marked from "marked";
  export let assunto = "";
  import MaskInput from "svelte-input-mask/MaskInput.svelte";

  let value = "";
  let nome, email, telefone, mensagem;
  let dados = {
    nome,
    email,
    telefone,
    assunto,
    mensagem,
  };

  export let onCancel = () => {};
  export let onOkay = () => {
    dados.mensagem = marked(dados.mensagem);
    console.log(dados);
    fetch(`process.env.BACKEND`, {
      method: "POST",
      body: JSON.stringify(dados),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      if (response.ok) {
        console.log("FOI!");
      }
    });
  };

  function _onCancel() {
    onCancel();
  }

  function _onOkay() {
    onOkay(value);
  }
</script>

<svelte:head>
  <title>Contato</title>
</svelte:head>

<p>O site está em manutenção. Nos próximos dias estará 100%</p>
<br />

<div class="bg-gray-100 flex rounded-2xl flex-col justify-center">
  <div class="relative sm:max-w-xl sm:mx-auto">
    <div class="relative px-4 py-10 rounded-2xl md:mx-0 sm:p-10">
      <div class="max-w-md mx-auto">
        <div class="flex items-center space-x-5">
          <div
            class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono"
          >
            i
          </div>
          <div
            class="block pl-2 font-semibold text-xl self-start text-gray-700"
          >
            <h2 class="leading-relaxed">Entre em contato</h2>
            <p class="text-sm text-gray-500 font-normal leading-relaxed">
              Preencha o formulário abaixo com todas as informações solicitadas.
              Para receber uma resposta já com os valores, preencha o campo
              <span class="rounded border border-red-300 p-1">mensagem</span> com
              o maior detalhamento possível
            </p>
          </div>
        </div>
        <div class="divide-y divide-gray-200">
          <div
            class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
          >
            <form on:submit|preventDefault={_onOkay}>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="text-sm text-gray-400">Nome</label>
                  <div class="w-full inline-flex border">
                    <div class="w-1/12 pt-2 bg-gray-100">
                      <svg
                        fill="none"
                        class="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <input
                      bind:value={dados.nome}
                      type="text"
                      class="w-11/12 sm:text-sm focus:ring-4 focus:outline-none focus:ring-green-500 focus:ring-opacity-50 p-2"
                      placeholder="Seu Nome Aqui"
                    />
                  </div>
                </div>
                <div>
                  <label class="text-sm text-gray-400">Email</label>
                  <div class="w-full inline-flex border">
                    <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                      <svg
                        fill="none"
                        class="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <input
                      bind:value={dados.email}
                      type="email"
                      class="w-11/12 sm:text-sm focus:outline-none focus:text-gray-600 p-2"
                      placeholder="email@examplo.com.br"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label class="text-sm text-gray-400">Telefone Celular</label>
                  <div class="w-full inline-flex border">
                    <div class="pt-2 w-1/12 bg-gray-100">
                      <svg
                        fill="none"
                        class="w-6 text-gray-400 mx-auto"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <MaskInput
                      mask="00 00000 - 0000"
                      type="text"
                      bind:value={dados.telefone}
                      class="w-11/12 sm:text-sm focus:outline-none focus:text-gray-600 p-2"
                      placeholder="(XX) XXXXX - XXXX"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label class="text-sm text-gray-400">Assunto</label>
                  <div class="w-full inline-flex border">
                    <div class="w-1/12 pt-2 bg-gray-100">
                      <svg
                        fill="none"
                        class="w-6 text-gray-400 mx-auto"
                        viewBox="0 -24 480 480"
                        stroke="gray"
                      >
                        <path
                          stroke-width="5"
                          d="m408 0h-336c-39.746094.0429688-71.9570312 32.253906-72 72v208c.0429688 39.746094 32.253906 71.957031 72 72h22.238281l-14.078125 70.398438c-.605468 3.027343.585938 6.128906 3.054688 7.976562s5.78125 2.109375 8.511718.671875l150.25-79.046875h166.023438c39.746094-.042969 71.957031-32.253906 72-72v-208c-.042969-39.746094-32.253906-71.9570312-72-72zm56 280c-.035156 30.914062-25.085938 55.964844-56 56h-168c-1.300781 0-2.578125.316406-3.726562.921875l-137.128907 72.175781 12.695313-63.496094c.480468-2.355468-.121094-4.800781-1.640625-6.660156-1.519531-1.863281-3.796875-2.941406-6.199219-2.941406h-32c-30.914062-.035156-55.964844-25.085938-56-56v-208c.035156-30.914062 25.085938-55.964844 56-56h336c30.914062.035156 55.964844 25.085938 56 56zm0 0"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      bind:value={assunto}
                      class="w-11/12 sm:text-sm focus:outline-none focus:text-gray-600 p-2"
                      placeholder="Assunto"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-col">
                <label class="text-sm text-gray-400">Mensagem</label>
                <textarea
                  type="text"
                  bind:value={dados.mensagem}
                  rows="4"
                  required
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none focus:text-gray-600"
                  placeholder="Descreva com o maior detalhe possível sobre o serviço"
                />
              </div>

              <div class="pt-4 flex items-center space-x-4">
                <button
                  on:click={_onCancel}
                  type="cancel"
                  class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
                >
                  <svg
                    class="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    /></svg
                  > Cancelar
                </button>
                <button
                  type="submit"
                  class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >Enviar</button
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  p {
    @apply text-center my-0 mx-auto;
  }
</style>
