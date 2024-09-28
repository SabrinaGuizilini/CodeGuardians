<template>
  <div class="container-background">
    <div class="container_treinamento">
      <h1 class="titulo_treinamento">Tabela de Decisão</h1>

        <ContainerTexto
        v-for="(texto, index) in textos"
        :key="index"
        :delay="`${0.6 + index * 0.5}s`"
        :html-content="texto"
      />

      <div class="ex-tabela">
        <div class="col">
          <div class="texto-destaque">Condições</div>
          <div>Nota final >= 5</div>
          <div>Frequência >= 70%</div>
          <div class="texto-destaque">Ações</div>
          <div>Aprovado</div>
          <div>Reprovado</div>
        </div>

        <div class="col">
          <div class="correcoes" v-if="correcao_realizada" ref="correcoes1">
            <img v-if="selects_corretos[0]" src="@/assets/img/acerto.png" alt="acerto" class="correcao">
            <img v-else src="@/assets/img/erro.png" alt="erro" class="correcao">
          </div>
          <div class="regra">Regra 1</div>

          <div class="select-regra">
            <select name="select-regra1" v-model="selects[0]">
              <option value="default" selected>--</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra2" v-model="selects[1]">
              <option value="default" selected>--</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>

          <div class="vazia"></div>

          <div class="resp1">X</div>

          <div class="resp2"></div>
        </div>

        <div class="col">
           <div class="correcoes" v-if="correcao_realizada" ref="correcoes2">
            <img v-if="selects_corretos[1]" src="@/assets/img/acerto.png" alt="acerto" class="correcao">
            <img v-else src="@/assets/img/erro.png" alt="erro" class="correcao">
          </div>
          <div class="regra">Regra 2</div>

          <div class="select-regra">
            <select name="select-regra3" v-model="selects[2]">
              <option value="default" selected>--</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra4" v-model="selects[3]">
              <option value="default" selected>--</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>

          <div class="vazia"></div>

          <div class="resp1"></div>

          <div class="resp2">X</div>
        </div>

        <div class="col">
           <div class="correcoes" v-if="correcao_realizada" ref="correcoes3">
            <img v-if="selects_corretos[2]" src="@/assets/img/acerto.png" alt="acerto" class="correcao">
            <img v-else src="@/assets/img/erro.png" alt="erro" class="correcao">
          </div>
          <div class="regra">Regra 3</div>

          <div class="select-regra">
            <select name="select-regra5" v-model="selects[4]">
              <option value="default" selected>--</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra6" v-model="selects[5]">
              <option value="default" selected>--</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>

          <div class="vazia"></div>

          <div class="resp1"></div>

          <div class="resp2">X</div>
        </div>

        <div class="col">
           <div class="correcoes" v-if="correcao_realizada" ref="correcoes4">
            <img v-if="selects_corretos[3]" src="@/assets/img/acerto.png" alt="acerto" class="correcao">
            <img v-else src="@/assets/img/erro.png" alt="erro" class="correcao">
          </div>
          <div class="regra">Regra 4</div>

          <div class="select-regra">
            <select name="select-regra7" v-model="selects[6]">
              <option value="default" selected>--</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra8" v-model="selects[7]">
              <option value="default" selected>--</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>

          <div class="vazia"></div>

          <div class="resp1"></div>

          <div class="resp2">X</div>
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
  name: "ExTabela",
  components: {
    Controler,
    ContainerTexto,
  },
  data() {
    return {
      currentDotIndex: 4,
      link_prox: "/niveis-teste",
      link_ant: "/tabela-decisao",
      textos: [
        '<span class="destacado">Exemplo prático:</span> Um sistema decide se um aluno será aprovado ou reprovado com base em duas condições: nota final ≥ 5 e frequência ≥ 70%. Com base nessas informações, complete a tabela de decisão abaixo (sem repetições):',
      ],
      isClicked: false,
      correcao_realizada: false,
      selects: Array(8).fill("default"),
      selects_corretos: Array(4).fill(false),
    };
  },
  methods: {
    validaResp1() {
      if(this.selects[0] === "sim" && this.selects[1] === "sim"){
        this.selects_corretos[0] = true;
      }
      else{
        this.selects_corretos[0] = false;
      }
    },
    validaResp2() {
      if(this.selects[2] === "sim" && this.selects[3] === "sim"){
        this.selects_corretos[1] = false;
      }
      else{
        this.selects_corretos[1] = true;
      }
    },
    validaResp3() {
       if(this.selects[4] === "sim" && this.selects[5] === "sim"){
        this.selects_corretos[2] = false;
      }
      else {
        if(this.selects_corretos[1] === true && this.selects[4] === this.selects[2] && this.selects[5] === this.selects[3]) {
          this.selects_corretos[2] = false;
        }
        else {
          this.selects_corretos[2] = true;
        }
      }
    },
    validaResp4() {
       if(this.selects[6] === "sim" && this.selects[7] === "sim"){
        this.selects_corretos[3] = false;
      }
      else {
        if((this.selects_corretos[1] === true && this.selects[6] === this.selects[2] && this.selects[7] === this.selects[3]) || (this.selects_corretos[2] === true && this.selects[6] === this.selects[4] && this.selects[7] === this.selects[5])) {
          this.selects_corretos[3] = false;
        }
        else {
          this.selects_corretos[3] = true;
        }
      }
    },
    validarResposta(event) {
      event.preventDefault();

      if (this.selects.some(select => select === "default")) {
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
  animation-delay: 1.6s;
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

.ex-tabela {
  margin-top: 0.313rem;
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: slideInY 1.3s forwards;
  animation-delay: 1.1s;
}

.texto-destaque {
  font-weight: 600;
}

.col div {
  font-family: "Bai Jamjuree", sans-serif;
  color: #e8edf5;
  font-size: 0.938rem;
  /* padding-right: 0.938rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.125rem; */
  padding: 0.375rem 0.938rem 0.375rem 0.125rem;
}

.col:not(:last-child) div {
  border-right: 0.125rem solid #e8edf5;
}

.col > div:not(:last-child) {
  border-bottom: 0.125rem solid #e8edf5;
}

.ex-tabela .col .vazia,
.ex-tabela .col:nth-child(2) .resp2,
.ex-tabela .col:nth-child(3) .resp1,
.ex-tabela .col:nth-child(4) .resp1,
.ex-tabela .col:nth-child(5) .resp1 {
  padding-top: 1.581rem;
}

.ex-tabela .regra,
.ex-tabela .select-regra,
.ex-tabela .vazia,
.ex-tabela .resp1,
.ex-tabela .resp2 {
  text-align: center;
  padding-left: 0.938rem;
  padding-right: 0.938rem;
}

.select-regra select {
  border-radius: 4px;
  outline: none;
  font-size: 0.875rem;
  color: #010813;
  background-color: rgb(235, 236, 243);
  height: 1.125rem;
  font-weight: 500;
}

/* .select-regra .correto {
  outline: 2px solid rgb(69, 169, 91);
}

.select-regra .incorreto {
  outline: 2px solid rgb(177, 68, 68);
} */

.ex-tabela .col .correcoes {
  transition: opacity 0.4s ease-in-out;
  opacity: 0;
  position: absolute;
  bottom: -1.25rem;
  left: 40%;
  border: none;
  margin: 0;
  padding: 0;
}

.ex-tabela .col .correcoes.active {
  opacity: 1;
}

 .col{
  position: relative;
}

.correcao{
  width: 0.875rem;
  height: 0.875rem;
}

@media (min-height: 750px) {
.ex-tabela {
  margin-top: 55px;
}
.conferir-respostas {
  bottom: 14%;
}

}
</style>
