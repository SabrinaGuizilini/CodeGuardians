<template>
  <div class="container-background">
    <div class="container_treinamento">
      <h1 class="titulo_treinamento">Dicas e teste de aceitação</h1>

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
        :totalDots="5"
      />

    </div>
  </div>
</template>

<script>
import Controler from "@/components/treinamento/Controler.vue";
import ContainerTexto from "@/components/treinamento/ContainerTexto.vue";

export default {
  name: "RegraSeis",
  components: {
    Controler,
    ContainerTexto,
  },
   data() {
    return {
      currentDotIndex: 3,
      link_prox: "/regra-sete",
      link_ant: "/regra-cinco",
      textos: [
        '<span class="destacado">A partir da terceira missão</span>, você poderá consultar <span class="destacado">dicas</span> durante a fase de execução dos casos de teste, caso encontre dificuldades. Lembre-se de que você pode utilizar <span class="destacado">até 3 dicas</span> ao longo de sua jornada.',
        'Após a conclusão de todas as missões, o Sr. Clarke realizará um teste de aceitação nos módulos afetados do sistema. O sistema será avaliado e considerado aprovado ou não para uso, com base na sua pontuação total obtida.',
        'A pontuação total mínima para que o sistema seja considerado aprovado para uso é de <span class="destacado">550 pontos.</span>'
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
