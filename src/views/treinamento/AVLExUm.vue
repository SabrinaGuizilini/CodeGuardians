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

       <div class="exercicio-avl">

          <div class="part01 invalida">
            <p>Classe inválida</p>
            <div class="linha01"></div>
          </div>

          <div class="container-valores-limite">
            <select name="valores-limite" class="valores-limite" v-model="select1">
              <option value="default" selected>--</option>
              <option v-for="option in filteredOptions1" :key="option.value" :value="option.value">{{ option.label }}</option>
            </select>

            <div v-if="correcao_realizada" ref="correcoes1" class="correcoes">
              <img v-if="resp1_correta" src="@/assets/img/acerto.png" alt="acerto">
              <img v-if="!resp1_correta" src="@/assets/img/erro.png" alt="erro">
              <p v-if="!resp1_correta" class="resposta-certa">-1 OU 11</p>
            </div>
          </div>

          <div class="container-valores-limite">
            <select name="valores-limite" class="valores-limite" v-model="select2">
              <option value="default" selected>--</option>
              <option v-for="option in filteredOptions2" :key="option.value" :value="option.value">{{ option.label }}</option>
            </select>

             <div v-if="correcao_realizada" ref="correcoes2" class="correcoes">
              <img v-if="resp2_correta" src="@/assets/img/acerto.png" alt="acerto">
              <img v-if="!resp2_correta" src="@/assets/img/erro.png" alt="erro">
              <p v-if="!resp2_correta" class="resposta-certa">0 OU 10</p>
            </div>
          </div>

          <div class="part01 valida">
            <p>Classe válida</p>
            <div class="linha01"></div>
          </div>

          <div class="container-valores-limite">
            <select name="valores-limite" class="valores-limite" v-model="select3">
              <option value="default" selected>--</option>
              <option v-for="option in filteredOptions3" :key="option.value" :value="option.value">{{ option.label }}</option>
            </select>

             <div v-if="correcao_realizada" ref="correcoes3" class="correcoes">
              <img v-if="resp3_correta" src="@/assets/img/acerto.png" alt="acerto">
              <img v-if="!resp3_correta" src="@/assets/img/erro.png" alt="erro">
              <p v-if="!resp3_correta" class="resposta-certa">10 OU 0</p>
            </div>
          </div>

          <div class="container-valores-limite">
            <select name="valores-limite" class="valores-limite" v-model="select4">
              <option value="default" selected>--</option>
              <option v-for="option in filteredOptions4" :key="option.value" :value="option.value">{{ option.label }}</option>
            </select>

             <div v-if="correcao_realizada" ref="correcoes4" class="correcoes">
              <img v-if="resp4_correta" src="@/assets/img/acerto.png" alt="acerto">
              <img v-if="!resp4_correta" src="@/assets/img/erro.png" alt="erro">
              <p v-if="!resp4_correta" class="resposta-certa">11 OU -1</p>
            </div>
          </div>

          <div class="part01 invalida">
            <p>Classe inválida</p>
            <div class="linha01"></div>
          </div>

        </div>

       <Controler
        :currentDot="currentDotIndex"
        :link_prox="link_prox"
        :link_ant="link_ant"
      />

      <a
        href="#"
        :class="{ 'conferir-respostas': true, active: isClicked }"
        @click="validarResposta"
      >
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
  name: "AVLExUm",
  components: {
    Controler,
    ContainerTexto,
  },
   data() {
    return {
      currentDotIndex: 3,
      link_prox: "/avl-ex-dois",
      link_ant: "/analise-valor-limite",
      textos: [
        '<span class="destacado">Diretriz 1</span> - Se uma condição de entrada (ou saída) especificar um <span class="destacado">intervalo de valores</span>, devem ser definidos casos de teste para:<span class="destacado"> o valor mínimo no intervalo válido, o valor máximo no intervalo válido, o valor logo abaixo do mínimo e o valor logo acima do máximo.</span>',
        '<span class="destacado">Exemplo prático:</span> um campo de entrada de notas escolares deve aceitar apenas notas que estejam no intervalo de 0 a 10. Selecione os valores-limites corretos na reta numérica:',
      ],
      select1: "default",
      select2: "default",
      select3: "default",
      select4: "default",
      resp1_correta: false,
      resp2_correta: false,
      resp3_correta: false,
      resp4_correta: false,
      correcao_realizada: false,
      isClicked: false,
      options: [
        { value: "zero", label: "0" },
        { value: "menos-um", label: "-1" },
        { value: "onze", label: "11" },
        { value: "dez", label: "10" },
      ],
    };
  },
   computed: {
    filteredOptions1() {
      return this.options.filter(
        (option) => option.value !== this.select2 && option.value !== this.select3 && option.value !== this.select4
      );
    },
    filteredOptions2() {
      return this.options.filter(
        (option) => option.value !== this.select1 && option.value !== this.select3 && option.value !== this.select4
      );
    },
    filteredOptions3() {
      return this.options.filter(
        (option) => option.value !== this.select1 && option.value !== this.select2 && option.value !== this.select4
      );
    },
    filteredOptions4() {
      return this.options.filter(
        (option) => option.value !== this.select1 && option.value !== this.select2 && option.value !== this.select3
      );
    },
  },
    methods: {
    validaResp1() {
      this.resp1_correta = (this.select1 === "menos-um" || this.select1 === "onze");
    },
    validaResp2() {
     this.resp2_correta = (this.select2 === "zero" || this.select2 === "dez");
    },
    validaResp3() {
      this.resp3_correta = (this.select3 === "dez" || this.select3 === "zero");
    },
     validaResp4() {
      this.resp4_correta = (this.select4 === "onze" || this.select4 === "menos-um");
    },
    validarResposta(event) {
      event.preventDefault();

      if (this.select1 === "default" || this.select2 === "default" || this.select3 === "default" || this.select4 === "default") {
        alert("Por favor, selecione uma opção em todos os campos.");
        return;
      }

      if (!this.isClicked) {
        this.isClicked = true;
      }

      this.validaResp1();
      this.validaResp2();
      this.validaResp3();
      this.validaResp4();

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
      setTimeout(() => {
        if (!this.$refs.correcoes3.classList.contains('active')) {
          this.$refs.correcoes3.classList.add('active');
        }
      }, 900);
      setTimeout(() => {
        if (!this.$refs.correcoes4.classList.contains('active')) {
          this.$refs.correcoes4.classList.add('active');
        }
      }, 1300);
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

.exercicio-avl {
  margin-top: 0.625rem;
  display: flex;
  gap: 0.375rem;
  justify-content: center;
  align-items: last baseline;
  opacity: 0;
  animation: slideInY 1.3s forwards;
  animation-delay: 1.6s;
}

.part01 {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  justify-content: center;
  align-items: center;
}

.part01 p {
  font-size: 1rem;
}

.valida {
  color: #9addb5;
}

.invalida {
  color: #e78b83;
}

.linha01 {
  width: 10.625rem;
  height: 0.438rem;
  color: #c6d7eb;
  background-color: #c6d7eb;
  border-radius: 1px;
}

.valores-limite {
  width: 2.5rem;
  height: 2.188rem;
  border-radius: 4px;
  font-family: "Bai Jamjuree", sans-serif;
  outline: none;
  font-size: 0.875rem;
  color: #010813;
  background-color: rgb(223, 225, 237);
}

.container-valores-limite {
  position: relative;
}

.container-valores-limite img {
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 2.875rem;
  right: 0.625rem;
}

.resposta-certa {
  position: absolute;
  bottom: 2.5rem;
  /* right: 1.25rem; */
  font-size: 0.875rem;
  color: #9addb5;
  text-align: center;
}

.correcoes{
  transition: opacity 0.4s ease-in-out;
  opacity: 0;
}

.correcoes.active {
  opacity: 1;
}

@media (min-height: 750px) {
.exercicio-avl {
  margin-top: 55px;
}
.conferir-respostas {
  bottom: 14%;
}

}
</style>
