<template>
  <div class="container-background">
    <div class="container_treinamento">
      <h1 class="titulo_treinamento">Módulos Afetados</h1>

      <p class="texto_treinamento">
        Os módulos afetados do sistema Aura379 que devem ser testados são:
      </p>

      <ContainerTexto
        v-for="(texto, index) in textos"
        :key="index"
        :delay="`${1.5 + index * 0.5}s`"
        :html-content="texto"
        customClass="custom-padding"
      />

       <Controler
        :currentDot="currentDotIndex"
        :link_prox="link_prox"
        :link_ant="link_ant"
        :totalDots="5"
      />

    </div>
  </div>
</template>

<script>
import Controler from "@/components/treinamento/Controler.vue";
import ContainerTexto from "@/components/treinamento/ContainerTexto.vue";

export default {
  name: "RegraUm",
  components: {
    Controler,
    ContainerTexto,
  },
   data() {
    return {
      currentDotIndex: 0,
      link_prox: "/regra-dois",
      link_ant: "/fala",
      textos: [
        '<span class="destacado">Módulo de Infraestrutura de Energia:</span> Responsável por fornecer e monitorar a energia elétrica nas cidades, indústrias e residências, garantindo o funcionamento de equipamentos e sistemas vitais.',
        '<span class="destacado">Módulo de Rede de Comunicação:</span> Responsável por facilitar a comunicação entre pessoas, organizações e máquinas, permitindo a troca de informações essenciais para o funcionamento da sociedade.',
        '<span class="destacado">Módulo de Autenticação:</span> Responsável por autenticar os diferentes tipos de usuário no sistema.'
      ]
    };
  },
};
</script>

<style scoped>
.custom-padding {
  padding-left: 10% !important;
  padding-right: 3% !important;
}

.container-background {
  background-image: url("/src/assets/img/background-melhorado.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  background-position: 20% 30%;
}

.container_treinamento {
  background: rgba(0, 0, 0, 0.6);
  padding: 1.25rem 2.5rem;
  animation: fadeIn 2s;
  width: 100vw;
  height: 100vh;
}

.titulo_treinamento {
  margin-bottom: 2.18rem;
  animation: slideInY 1.5s;
  font-family: "Orbitron", monospace;
  color: #c6d7eb;
  font-size: 2.938rem;
  font-weight: 400;
  letter-spacing: 0.144rem;
  text-align: center;
}

.texto_treinamento {
  margin-bottom: 0.25rem;
  animation: slideInY 1.9s forwards;
  animation-delay: 0.6s;
  opacity: 0;
  font-family: "Bai Jamjuree", sans-serif;
  padding-left: 7%;
  padding-right: 7%;
  font-weight: 400;
  font-size: 1.375rem;
  line-height: 2.25rem;
  color: #e8edf5;
  margin-bottom: 2%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideInY {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideInX {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
