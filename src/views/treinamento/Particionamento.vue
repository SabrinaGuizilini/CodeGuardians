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
  name: "Particionamento",
  components: {
    Controler,
    ContainerTexto,
  },
   data() {
    return {
      currentDotIndex: 2,
      link_prox: "/diretriz-um",
      link_ant: "/tecnica-funcional",
      textos: [
        ' O critério de <span class="destacado">Particionamento de Equivalência</span> é utilizado para <span class="destacado">reduzir o número de casos de teste</span>, enquanto ainda se <span class="destacado">garante uma boa cobertura</span> do comportamento do sistema.',
        'A ideia principal é <span class="destacado">dividir o conjunto de entradas possíveis (ou até mesmo saídas)</span> de um programa em <span class="destacado">classes de dados que são tratadas de forma equivalente</span> por esse programa. As classes podem ser válidas ou inválidas. <span class="destacado">Classes válidas</span> devem ser <span class="destacado">aceitas e processadas</span> corretamente pelo programa, já as <span class="destacado">classes inválidas</span> devem ser <span class="destacado">rejeitadas</span>.',
        'Existem algumas <span class="destacado">diretrizes</span>, apresentadas a seguir, que auxiliam a estabelecer as classes de equivalência.'
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
