<template>
  <div class="container-background">
    <div class="container_treinamento">
      <h1 class="titulo_treinamento">Níveis de Teste</h1>

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
  name: "NiveisTesteDois",
  components: {
    Controler,
    ContainerTexto,
  },
  data() {
    return {
      currentDotIndex: 5,
      link_prox: "/fala",
      link_ant: "/niveis-teste",
      textos: [
        '<span class="destacado">Teste de unidade:</span> visa explorar as <span class="destacado">unidades menores do projeto</span>, como funções e métodos, a fim de detectar falhas decorrentes de <span class="destacado">erros lógicos ou de implementação</span> em cada módulo isolado.',
        '<span class="destacado">Teste de integração:</span> busca identificar falhas que ocorrem nas <span class="destacado">interfaces entre módulos quando são integrados</span> para formar a estrutura de software definida durante a fase de projeto.',
        '<span class="destacado">Teste de sistema:</span> visa examinar o <span class="destacado">software como um todo</span>, simulando o comportamento de um usuário final, a fim de verificar se o produto <span class="destacado">satisfaz seus requisitos.</span>',
        '<span class="destacado">Teste de aceitação:</span> envolve um <span class="destacado">grupo restrito de usuários finais</span> simulando operações rotineiras do sistema para verificar se o <span class="destacado">comportamento do software está conforme o solicitado.</span>'
      ],
    }
  }
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
