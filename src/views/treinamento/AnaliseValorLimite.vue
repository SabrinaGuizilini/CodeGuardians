<template>
  <div class="container-background">
    <div class="container_treinamento">
      <h1 class="titulo_treinamento">Análise do Valor Limite</h1>

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
  name: "AnaliseValorLimite",
  components: {
    Controler,
    ContainerTexto,
  },
  data() {
    return {
      currentDotIndex: 3,
      link_prox: "/avl-ex-um",
      link_ant: "/particionamento-dois",
      textos: [
        'O critério de <span class="destacado">Análise do Valor Limite</span> é usado para identificar <span class="destacado">erros que ocorrem nos limites das classes de equivalência</span>. A ideia é que muitos erros frequentemente ocorrem nas fronteiras de valores de entrada (ou até mesmo de saída), em vez do “centro”, então testar esses limites pode revelar problemas que outros testes podem não detectar.',
        'Dessa forma, a análise do valor limite é um critério que <span class="destacado">deve ser usado como complemento ao particionamento de equivalência</span>, e não de forma isolada.',
        'Assim como o particionamento de equivalência, a análise do valor limite também possui algumas <span class="destacado">diretrizes gerais</span>, que serão explicadas a seguir.'
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
