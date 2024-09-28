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

      <div class="niveis-teste">
        <img
          src="@/assets/img/niveis_teste.png"
          alt="niveis de teste"
          class="niveis-img"
        />
      </div>

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
  name: "NiveisTeste",
  components: {
    Controler,
    ContainerTexto,
  },
  data() {
    return {
      currentDotIndex: 5,
      link_prox: "/niveis-teste-dois",
      link_ant: "/ex-tabela",
      textos: [
        'Os <span class="destacado">níveis de teste</span> são uma abordagem estruturada para testar o software em <span class="destacado">diferentes estágios do desenvolvimento</span>, com o objetivo de <span class="destacado">detectar e corrigir falhas</span> que possam surgir <span class="destacado">ao longo do ciclo de vida do software</span>, assim assegurando seu <span class="destacado">correto funcionamento em cada etapa.</span>',
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

.niveis-teste {
  display: flex;
  justify-content: center;
  animation: slideInX 1s forwards;
  opacity: 0;
  animation-delay: 1.1s;
}

.niveis-img {
  width: 30.625rem;
  height: 15rem;
  margin-right: 3.125rem;
}

@media (min-height: 730px) {
.niveis-teste {
  margin-top: 60px;
}

}

@media (min-height: 800px) {
.niveis-teste {
  margin-top: 100px;
}

}
</style>
