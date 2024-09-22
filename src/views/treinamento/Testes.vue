<template>
  <div class="container-background">
    <div class="container_treinamento">
      <h1 class="titulo_treinamento">Testes de software</h1>

      <ContainerTexto
        v-for="(texto, index) in textos"
        :key="index"
        :delay="`${0.6 + index * 0.5}s`"
        :html-content="texto"
      />

      <Controler
        :currentDot="currentDotIndex"
        :link_prox="link_prox"
        :link_ant="link_ant"
      />
    </div>
  </div>
</template>

<script>
import Controler from "@/components/treinamento/Controler.vue";
import ContainerTexto from "@/components/treinamento/ContainerTexto.vue";

export default {
  name: "Testes",
  components: {
    Controler,
    ContainerTexto,
  },
  data() {
    return {
      currentDotIndex: 0,
      link_prox: "/tecnica-funcional",
      link_ant: "/treinamento",
      textos: [
        ' O <span class="destacado">teste de software</span> é um processo fundamental de <span class="destacado">execução e avaliação do software</span>, cujo <span class="destacado">objetivo é encontrar erros</span> antes de sua utilização.',
        'O aspecto mais importante no processo de testes de software é a criação de casos de testes eficazes. Um <span class="destacado">caso de teste</span> consiste em um par formado por uma <span class="destacado">entrada para um programa mais a saída esperada</span> para a execução do programa para aquela entrada.',
        'Existem duas <span class="destacado">principais técnicas</span> que permitem a criação de casos de teste de maneira estratégica: a <span class="destacado">técnica funcional (caixa-preta)</span> e a <span class="destacado">técnica estrutural (caixa-branca)</span>. Durante as missões, você utilizará apenas a técnica funcional.'
      ]
    };
  },
};
</script>

<style scoped>
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
