<template>
  <div class="container-background">
    <div class="container_treinamento">
      <h1 class="titulo_treinamento">Particionamento de Equivalência</h1>

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
  name: "ParticionamentoDois",
  components: {
    Controler,
    ContainerTexto,
  },
  data() {
    return {
      currentDotIndex: 2,
      link_prox: "/analise-valor-limite",
      link_ant: "/diretriz-quatro",
      textos: [
        'Após serem identificadas as condições de entrada e suas classes de equivalência, os casos de teste devem ser determinados de forma que <span class="destacado">cada novo caso de teste cubra o maior número possível de classes de equivalência válidas não cobertas.</span>',
        'Além disso, os <span class="destacado">casos de teste para classes inválidas devem cobrir uma, e apenas uma, das classes de equivalência inválidas não cobertas.</span> Isso porque um elemento de uma classe inválida pode mascarar a validação do elemento de outra classe inválida.',
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
