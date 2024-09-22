<template>
  <div class="container-background">
    <div class="container_treinamento">
      <h1 class="titulo_treinamento">Técnica funcional de testes</h1>

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
  name: "TecnicaFuncional",
   components: {
    Controler,
    ContainerTexto,
  },
  data() {
    return {
      currentDotIndex: 1,
      link_prox: "/particionamento",
      link_ant: "/testes",
      textos: [
        'A <span class="destacado">técnica funcional</span> de testes é uma abordagem onde os casos de teste são criados tratando o programa como uma caixa-preta. Isso significa que os <span class="destacado">detalhes internos</span> de implementação <span class="destacado">não são levados em conta</span>, e os <span class="destacado">casos de teste são baseados nas especificações do sistema</span>.',
        'A técnica funcional possui <span class="destacado">critérios</span>, que são regras que <span class="destacado">ajudam a escolher e organizar os casos de teste</span>. Essas regras definem como as possíveis entradas de um programa serão agrupadas e quais aspectos do programa serão testados.',
        'Os <span class="destacado">principais critérios da técnica funcional</span> são: <span class="destacado">Particionamento de Equivalência</span>, <span class="destacado">Análise do Valor Limite</span> e <span class="destacado">Tabela de Decisão</span>. Todos eles serão explicados nas próximas lições.'
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
