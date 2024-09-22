<template>
  <div class="container-background">
    <div class="container_treinamento">
      <h1 class="titulo_treinamento">Pontuação</h1>

      <p class="texto_treinamento">
       Em todas as fases de cada missão você terá a chance de pontuar. A pontuação dada varia de acordo com a missão em que você estará.
      </p>

      <p class="texto_treinamento destacado">1ª à 4ª missão:</p>

      <ContainerTexto
        v-for="(texto, index) in textos"
        :key="index"
        :delay="`${2 + index * 0.5}s`"
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
  name: "RegraTres",
  components: {
    Controler,
    ContainerTexto,
  },
   data() {
    return {
      currentDotIndex: 2,
      link_prox: "/regra-quatro",
      link_ant: "/regra-dois",
      textos: [
        '+30 pontos se a resolução completa da fase de uso dos critérios da técnica funcional estiver correta;',
        '+5 pontos por caso de teste correto na fase de elaboração de casos de teste;',
        '-5 pontos por caso de teste incorreto ou excedente na fase de elaboração de casos de teste;',
        '+15 pontos por falha encontrada na fase de execução dos casos de teste.'
      ]
    };
  },
};
</script>

<style scoped>
.custom-padding {
  padding-left: 10% !important;
  padding-right: 3% !important;
  margin-bottom: 5px !important;
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
  margin-bottom: 1%;
}

.destacado {
  font-weight: 700;
  color: #d6e0eb;
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

.texto_treinamento:nth-of-type(2) {
    margin-top: 8px;
    animation-delay: 1.2s;
}
</style>
