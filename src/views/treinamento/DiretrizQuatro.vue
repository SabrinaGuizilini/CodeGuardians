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

      <div class="exercicio-particao">

        <div class="particao">
          <p class="label-particao invalida">Classe inválida</p>
          <select name="particoes" class="particoes-select" v-model="select1">
            <option value="default" selected>Selecione uma opção</option>
             <option v-for="option in filteredOptions1" :key="option.value" :value="option.value">{{ option.label }}</option>
          </select>
          <div v-if="correcao_realizada" ref="correcoes1" class="correcoes">
            <img v-if="resp1_correta" src="@/assets/img/acerto.png" alt="acerto" />
            <img v-if="!resp1_correta" src="@/assets/img/erro.png" alt="erro" />
            <p v-if="!resp1_correta" class="resposta-certa">Correção: Divisor = 0</p>
          </div>
        </div>

        <div class="particao">
          <p class="label-particao valida">Classe válida</p>
          <select name="particoes" class="particoes-select" v-model="select2">
            <option value="default" selected>Selecione uma opção</option>
              <option v-for="option in filteredOptions2" :key="option.value" :value="option.value">{{ option.label }}</option>
          </select>
            <div v-if="correcao_realizada" ref="correcoes2" class="correcoes">
              <img v-if="resp2_correta" src="@/assets/img/acerto.png" alt="acerto" />
              <img v-if="!resp2_correta" src="@/assets/img/erro.png" alt="erro" />
              <p v-if="!resp2_correta" class="resposta-certa">Correção: Divisor != 0</p>
          </div>
        </div>

      </div>

      <Controler
        :currentDot="currentDotIndex"
        :link_prox="link_prox"
        :link_ant="link_ant"
      />

      <a href="#" :class="{ 'conferir-respostas': true, 'active': isClicked }" @click="validarResposta">
        <img src="@/assets/img/respostas.png" alt="respostas" />
        <p>Conferir respostas</p>
      </a>

    </div>
  </div>
</template>

<script>
import Controler from "@/components/treinamento/Controler.vue";
import ContainerTexto from "@/components/treinamento/ContainerTexto.vue";

export default {
  name: "DiretrizQuatro",
  components: {
    Controler,
    ContainerTexto,
  },
   data() {
    return {
      currentDotIndex: 2,
      link_prox: "/particionamento-dois",
      link_ant: "/diretriz-tres",
      textos: [
        '<span class="destacado">Diretriz 4</span> - Se a condição de entrada (ou saída) especifica uma situação do tipo <span class="destacado">“deve ser de tal forma” ou é booleana</span>, são definidas <span class="destacado">uma classe válida</span> e <span class="destacado">uma inválida</span>.',
        '<span class="destacado">Exemplo prático:</span> Em uma calculadora, para contas de divisão, o divisor sempre deve ser diferente de 0. Selecione a opção correta para as classes válidas e inválidas:'
      ],
      select1: "default",
      select2: "default",
      correcao_realizada: false,
      resp1_correta: false,
      resp2_correta: false,
      isClicked: false,
       options: [
        { value: "valida", label: "Divisor != 0" },
        { value: "invalida", label: "Divisor = 0" },
      ],
    };
  },
  computed: {
    filteredOptions1() {
      return this.options.filter(
        (option) => option.value !== this.select2
      );
    },
    filteredOptions2() {
      return this.options.filter(
        (option) => option.value !== this.select1
      );
    },
  },
  methods: {
    validaResp1() {
      this.resp1_correta = (this.select1 === "invalida");
    },
    validaResp2() {
     this.resp2_correta = (this.select2 === "valida");
    },
    validarResposta(event) {
      event.preventDefault();

      if (this.select1 === "default" || this.select2 === "default") {
        alert("Por favor, selecione uma opção em todos os campos.");
        return;
      }

      if (!this.isClicked) {
        this.isClicked = true;
      }

      this.validaResp1();
      this.validaResp2();

      this.correcao_realizada = true;

      setTimeout(() => {
        if (!this.$refs.correcoes1.classList.contains('active')) {
          this.$refs.correcoes1.classList.add('active');
        }
      }, 100);
      setTimeout(() => {
        if (!this.$refs.correcoes2.classList.contains('active')) {
          this.$refs.correcoes2.classList.add('active');
        }
      }, 500);
    },
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
  font-family: "Bai Jamjuree", sans-serif;
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

.exercicio-particao {
  display: flex;
  gap: 1.125rem;
  justify-content: center;
  align-items: baseline;
  opacity: 0;
  animation: slideInY 1.3s forwards;
  animation-delay: 1.6s;
}

.label-particao {
  color: #e8edf5;
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 0.625rem;
}

.particoes-select {
  padding: 0.875rem;
  border-radius: 0.25rem;
  outline: none;
  font-size: 0.875rem;
  color: #010813;
  background-color: rgb(223, 225, 237);
  min-width: 14.375rem;
  font-family: "Bai Jamjuree", sans-serif;
}

.valida {
  color: #9addb5;
}

.invalida {
  color: #e78b83;
}

.conferir-respostas {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.313rem;
  width: 12.5rem;
  padding: 0.5rem;
  position: absolute;
  bottom: 10%;
  left: calc(50% - 6.25rem);
  opacity: 0;
  animation: slideInX 1s forwards;
  animation-delay: 2.1s;
}

.conferir-respostas img {
  width: 1.875rem;
}

.conferir-respostas p {
  font-size: 0.938rem;
  color: #e8edf5;
  position: relative;
}

.conferir-respostas p::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.313rem;
  width: 0;
  height: 0.125rem;
  background-color: #e8edf5;
  transition: width 0.5s ease;
}

.conferir-respostas:hover p::after,
.active p::after {
  width: 100%;
}

.correcoes {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin-top: 0.313rem;
  transition: opacity 0.4s ease-in-out;
  opacity: 0;
}

.correcoes img {
  width: 1.125rem;
  height: 1.125rem;
}

.resposta-certa {
  font-size: 0.938rem;
  color: #e8edf5;
}

/* .correcoes-transition {
  transition: opacity 0.4s ease-in-out;
  opacity: 0;
} */

.correcoes.active {
  opacity: 1;
}

@media (min-height: 750px) {
.exercicio-particao {
  margin-top: 55px;
}
.conferir-respostas {
  bottom: 14%;
}

}

</style>
