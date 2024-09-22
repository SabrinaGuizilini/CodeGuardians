<template>
  <div class="main_container">
    <BarraSuperior :currentLevel="currentLevel" :missao="missao" :fase="fase" />

    <div class="level__content">
      <div class="artefato">
        <h1>Artefato da fase anterior</h1>
        <h2>Valores-Limite</h2>
       <div class="exercicio-avl">

          <p class="valida_posicionada">Classe válida</p>

          <p class="invalida_posicionada">Classe inválida</p>
          <p class="valida_posicionada2">Classe válida</p>
          <p class="invalida_posicionada2">Classe inválida</p>

          <div class="part01 invalida">
            <p>Classe inválida</p>
            <div class="linha01 linha_curta"></div>
          </div>

          <span class="valor-limite">{{ valores_limite[0] }}</span>
          <span class="valor-limite">{{ valores_limite[1] }}</span>

          <div class="linha01 linha_mais_curta_ainda"></div>
          <span class="valor-limite">{{ valores_limite[2] }}</span>
          <span class="valor-limite">{{ valores_limite[3] }}</span>

          <div class="linha01 linha_mais_curta"></div>

          <span class="valor-limite">{{ valores_limite[4] }}</span>
          <span class="valor-limite">{{ valores_limite[5] }}</span>

          <div class="linha01 linha_mais_longa"></div>

          <span class="valor-limite">{{ valores_limite[6] }}</span>
          <span class="valor-limite">{{ valores_limite[7] }}</span>


          <div class="part01 invalida">
            <p>Classe inválida</p>
            <div class="linha01 linha_curta"></div>
          </div>

        </div>
        <a href="#" class="consultar_especificacao" @click="open_modal">
          <img src="@/assets/img/respostas.png" alt="consultar especificação" />
        </a>
      </div>

      <div class="casos-teste">
        <h1>Criação dos casos de teste</h1>

        <div class="container-criacao-CT">
          <div class="entrada">
            <span>Entrada</span>
            <div id="tensao">
              <p>Tensão =</p>
              <input type="number" id="input-tensao" v-model="entrada" @input="validateInput()">
              <p>V</p>
            </div>
          </div>

          <div class="saida-esperada">
            <span>Saída esperada</span>
            <select name="saidas" class="saidas-select" v-model="saida">
              <option value="default" selected>Selecione uma opção</option>
              <option
                v-for="option in options_saidas"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>

          <a href="#" class="add-CT" @click="addCasoTeste">+</a>
        </div>

        <h2>Casos de teste gerados</h2>
        <div class="CTs-gerados">
          <div class="cabecalho">
            <span>Entrada</span>
            <span>Saída esperada</span>
          </div>

          <div class="CTs">
            <div class="CT" v-for="(caso, index) in casosTeste" :key="index">
              <div class="entrada-saida">
                <p>Tensão = {{ caso.entrada }} V</p>
                <p>{{ caso.saida }}</p>
              </div>
              <a href="#" class="tira-CT" @click="removeCasoTeste(index)">-</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a href="#" class="avancar-botao" @click="validarRespostas">
      <span>Finalizar & Avançar</span>
      <img src="@/assets/img/seta-avanca-nivel.png" alt="seta direita" />
    </a>

    <ModalEspecificacao
      :isVisible="showModal"
      @close="showModal = false"
      title="Submódulo de monitoramento de tensão"
      :paragrafos="paragrafos"
    />
  </div>
</template>

<script>
import BarraSuperior from "@/components/niveis/BarraSuperior.vue";
import ModalEspecificacao from "@/components/niveis/ModalEspecificacao.vue";
import { store } from "@/store";

export default {
  name: "NivelTresFaseDois",
  components: {
    BarraSuperior,
    ModalEspecificacao,
  },
  data() {
    return {
      paragrafos: [
        'Assim como há um sensor que monitora a quantidade de interrupções de corrente, também existe um sensor que monitora a tensão. De acordo com a tensão em volts retornada por este sensor, o sistema gera um código de aviso que será utilizado para identificar falhas de energia.',
        'Inicialmente, o sistema verifica se o sensor está funcionando corretamente. Se a tensão retornada for menor que 0V ou maior que 10.000V, isso indica que o sensor está quebrado e deve ser exibida a mensagem “Sensor quebrado!”. Se a tensão for maior ou igual a 0V e menor ou igual a 10.000V, o sensor está funcionando corretamente.',
        'Com o sensor funcionando corretamente, diferentes códigos são retornados conforme a tensão:',
        ' - Se a tensão for maior ou igual a 100V e menor ou igual a 240V, a tensão está em uma faixa segura e deve ser retornado o código 0.',
        ' - Se a tensão for menor que 100V, ela está abaixo do limite inferior aceitável e deve ser retornado o código 1.',
        ' - Se a tensão for maior que 240V, ela está acima do limite superior aceitável e deve ser retornado o código 2',
        'Obs: o sensor nunca retorna valores vazios ou que não sejam números inteiros.'
      ],
      missao: "3",
      fase: "2",
      currentLevel: 1,
      valores_limite: [],
      showModal: false,
      entrada: "",
      saida: "default",
      pontuacao: 0,
      casosTeste: [],
      options_saidas: [
        {
          value: "Código 0",
          label: "Código 0",
        },
        {
          value: "Código 1",
          label: "Código 1",
        },
        {
          value: "Código 2",
          label: "Código 2",
        },
        {
          value: "Mensagem 'Sensor quebrado!'",
          label: "Mensagem 'Sensor quebrado!'",
        },
      ],
    };
  },
  mounted() {
    this.valores_limite = [...store.respostas_fase_um.valores_limites_missao_tres];
    this.valores_limite.forEach((item, index) => {
      if (item === '') {
       this.valores_limite[index] = '-';
      }
    });
  },
  methods: {
    validateInput() {
    if (this.entrada < -1000000 || this.entrada > 1000000) {
      this.entrada = '';
    }
  },
    open_modal(event) {
      event.preventDefault();
      this.showModal = true;
    },
    addCasoTeste(event) {
      event.preventDefault();
      if (this.entrada !== "" && this.saida !== "default") {
        const novoCasoTeste = {
          entrada: this.entrada,
          saida: this.saida,
        };

        const casoRepetido = this.casosTeste.some(
          (caso) =>
            caso.entrada === novoCasoTeste.entrada &&
            caso.saida === novoCasoTeste.saida
        );

        if (casoRepetido) {
          alert("Caso de teste repetido!");
        } else {
          this.casosTeste.push(novoCasoTeste);
        }

        this.entrada = "";
        this.saida = "default";
      } else {
        alert("Insira/Selecione a entrada e a saída esperadas!");
      }
    },
    removeCasoTeste(index) {
      this.casosTeste.splice(index, 1);
    },
    validarRespostas(event) {
      event.preventDefault();
      this.pontuacao = 0;

      var cts_anteriores = [];

      this.casosTeste.forEach((caso) => {
        if((caso.entrada == -1 && caso.saida == "Mensagem 'Sensor quebrado!'") || (caso.entrada == 0 && caso.saida == "Código 1") || (caso.entrada == 99 && caso.saida == "Código 1") || (caso.entrada == 100 && caso.saida == "Código 0") || (caso.entrada == 240 && caso.saida == "Código 0") || (caso.entrada == 241 && caso.saida == "Código 2") || (caso.entrada == 10000 && caso.saida == "Código 2") || (caso.entrada == 10001 && caso.saida == "Mensagem 'Sensor quebrado!'")) {
          this.pontuacao += 5;
          store.respostas_fase_dois.correcao_missao_tres.push(true);
        }
        else if(caso.entrada < -1 && caso.saida == "Mensagem 'Sensor quebrado!'") {
           if (cts_anteriores.some((c) =>
                  c.entrada < -1 &&
                  c.saida === "Mensagem 'Sensor quebrado!'")) {
                    this.pontuacao -= 5;
                    store.respostas_fase_dois.correcao_missao_tres.push(false);
            } else {
              this.pontuacao += 5;
              store.respostas_fase_dois.correcao_missao_tres.push(true);
            }
        }
        else if(caso.entrada > 10001 && caso.saida == "Mensagem 'Sensor quebrado!'") {
           if (cts_anteriores.some((c) =>
                  c.entrada > 10001 &&
                  c.saida === "Mensagem 'Sensor quebrado!'")) {
                    this.pontuacao -= 5;
                    store.respostas_fase_dois.correcao_missao_tres.push(false);
            } else {
              this.pontuacao += 5;
              store.respostas_fase_dois.correcao_missao_tres.push(true);
            }
        }
        else if((caso.entrada > 0 && caso.entrada < 99) && caso.saida == "Código 1") {
           if (cts_anteriores.some((c) =>
                  (c.entrada > 0 && c.entrada < 99) &&
                  c.saida === "Código 1")) {
                    this.pontuacao -= 5;
                    store.respostas_fase_dois.correcao_missao_tres.push(false);
            } else {
              this.pontuacao += 5;
              store.respostas_fase_dois.correcao_missao_tres.push(true);
            }
        }
        else if((caso.entrada > 241 && caso.entrada < 10000) && caso.saida == "Código 2") {
           if (cts_anteriores.some((c) =>
                  (c.entrada > 241 && c.entrada < 10000) &&
                  c.saida === "Código 2")) {
                    this.pontuacao -= 5;
                    store.respostas_fase_dois.correcao_missao_tres.push(false);
            } else {
              this.pontuacao += 5;
              store.respostas_fase_dois.correcao_missao_tres.push(true);
            }
        }
        else if((caso.entrada > 100 && caso.entrada < 240) && caso.saida == "Código 0") {
           if (cts_anteriores.some((c) =>
                  (c.entrada > 100 && c.entrada < 240) &&
                  c.saida === "Código 0")) {
                    this.pontuacao -= 5;
                    store.respostas_fase_dois.correcao_missao_tres.push(false);
            } else {
              this.pontuacao += 5;
              store.respostas_fase_dois.correcao_missao_tres.push(true);
            }
        }
        else {
           this.pontuacao -= 5;
           store.respostas_fase_dois.correcao_missao_tres.push(false);
        }
        cts_anteriores.push(caso);
      });

      store.respostas_fase_dois.cts_missao_tres = [...this.casosTeste];
      store.pontuacaoJogador.pont_fases_niveis[2][1] = this.pontuacao;

      this.$router.push("/nivel-tres-fase-tres");

    },
  },
};
</script>

<style scoped>
.main_container {
  width: 100vw;
  height: 100vh;
  background-color: #d4d9e5;
}

.level__content {
  height: 88%;
  display: flex;
}

.casos-teste {
  width: 53%;
  padding: 12px;
}

.casos-teste h1 {
  font-family: "Iceland", sans-serif;
  color: #2e4778;
  text-align: center;
  font-size: 28px;
  margin-top: 8px;
}

.casos-teste p {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 16.5px;
  margin-top: 24px;
  margin-left: 18px;
  color: #375087;
  font-weight: 500;
  line-height: 25px;
}

.container-criacao-CT {
  display: flex;
  justify-content: center;
  align-items: last baseline;
  gap: 26px;
  font-family: "Bai Jamjuree", sans-serif;
  margin-top: 35px;
}

.entrada span,
.saida-esperada span {
  margin-bottom: 14px;
  display: block;
  text-align: center;
  color: #1e3057;
  font-size: 17px;
  font-weight: 500;
}

.add-CT {
  text-decoration: none;
  display: block;
  border-radius: 100%;
  padding: 4px 13px 6px 13px;
  background-color: #14183d;
  color: #cdcfe4;
  font-size: 25px;
  font-weight: 500;
  margin-left: 20px;
  transition: 0.3s;
}

.add-CT:hover {
  background-color: #030620;
}

.entradas-select,
.saidas-select {
  padding: 0.7rem;
  border-radius: 0.25rem;
  outline: none;
  font-size: 14px;
  color: #060f18;
  background-color: rgb(227, 229, 239);
  font-family: "Bai Jamjuree", sans-serif;
  width: 220px;
  border: 1.3px solid rgb(13, 33, 65);
}

.CTs-gerados {
  margin-top: 10px;
  background-color: #c2cbdc;
  border-radius: 3px;
  width: 84%;
  height: 40%;
  margin-left: auto;
  margin-right: auto;
  overflow-y: auto;
  padding: 15px 20px;
}

.CTs-gerados::-webkit-scrollbar {
  width: 9px;
}

.CTs-gerados::-webkit-scrollbar-thumb {
  background-color: #4f6391e7;
  border-radius: 8px;
}

.CTs-gerados::-webkit-scrollbar-track {
  background: rgba(177, 182, 212, 0.861);
  border-radius: 3px;
}

.CTs-gerados::-webkit-scrollbar-thumb:hover {
  background: #4f6391;
}

.cabecalho {
  display: flex;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 15px;
  color: #253052;
  font-weight: 500;
  margin-bottom: 10px;
}

.cabecalho span {
  width: 40%;
  margin-right: 6px;
}

.artefato {
  position: relative;
  width: 47%;
  border-right: 3px solid rgba(59, 93, 131, 0.57);
  padding: 12px;
  padding-right: 16px;
}

.artefato h1 {
  font-family: "Iceland", sans-serif;
  color: #2e4778;
  text-align: center;
  font-size: 28px;
  margin-top: 8px;
}

.artefato h2,
.casos-teste h2 {
  font-family: "Bai Jamjuree", sans-serif;
  color: #2e4778;
  text-align: center;
  font-size: 19px;
  margin-top: 35px;
}

.avancar-botao {
  position: absolute;
  bottom: 2.7%;
  right: 2%;
  display: inline-flex;
  background-color: #1e215a;
  padding: 13px 18px;
  border-radius: 5px;
  gap: 12px;
  text-decoration: none;
  align-items: center;
  transition: 0.3s;
}

.consultar_especificacao {
  position: absolute;
  bottom: 3%;
  right: 4%;
  display: inline-flex;
  background-color: #1e215a;
  padding: 15px;
  border-radius: 100%;
  text-decoration: none;
  align-items: center;
  transition: 0.3s;
}

.consultar_especificacao img {
  width: 22px;
}

.consultar_especificacao::before {
  content: "Consultar especificação";
  position: absolute;
  left: -168px;
  bottom: 50%;
  transform: translateY(50%);
  white-space: nowrap;
  background-color: #434f70;
  color: #e5e6f2;
  padding: 6px 10px;
  border-radius: 5px;
  font-size: 14px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 13px;
}

.consultar_especificacao:hover::before {
  opacity: 1;
  visibility: visible;
}

.casos-teste h2 {
  margin-top: 26px;
}

.CT {
  display: flex;
  align-items: first baseline;
  justify-content: space-between;
  margin-bottom: 6px;
}

.casos-teste .CTs-gerados .CTs .entrada-saida {
  display: flex;
  width: 100%;
}

.casos-teste .CTs-gerados .CTs .entrada-saida p {
  font-size: 14px;
  margin: 0;
  width: 40%;
  margin-right: 15px;
  word-wrap: break-word;
  line-height: 1.2;
}

.tira-CT {
  text-decoration: none;
  display: block;
  border-radius: 100%;
  padding: 0.5px 9px 4px 9px;
  background-color: #263457;
  color: #cdcfe4;
  font-size: 21px;
  font-weight: 600;
  transition: 0.3s;
  line-height: 1;
}

.tira-CT:hover {
  background-color: #0b1631;
}

.avancar-botao:hover,
.consultar_especificacao:hover {
  background-color: #0f1444;
}

.avancar-botao img {
  width: 18px;
  height: 17px;
  margin-top: 0.125rem;
  transition: transform 0.8s ease;
}

.avancar-botao:hover img {
  animation-delay: 0.2s;
  animation: moveArrow 0.7s forwards;
}

.avancar-botao span {
  color: #dee5ed;
  font-family: "Chakra Petch", sans-serif;
  font-size: 17px;
}

@keyframes moveArrow {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(7px);
  }
}

.artefato .exercicio-avl {
  position: relative;
  margin-top: 50px;
  display: flex;
  gap: 0.375rem;
  justify-content: center;
  align-items: last baseline;
  font-family: "Bai Jamjuree", sans-serif;
}

.artefato .linha01 {
  width: 120px;
  height: 6px;
  color: #c6d7eb;
  background-color: #1b344d;
  border-radius: 1px;
}

.artefato .part01 {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  justify-content: center;
  align-items: center;
}

.artefato .part01 p {
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
}

.artefato .valida {
  color: #469667;
}

.artefato .invalida {
  color: #9c443e;
}

.artefato .valor-limite {
  font-size: 17px;
  color:#030620;
  font-weight: 500;
  padding: 5px;
  border-radius: 3px;
  border: 1.4px solid #090e35;
}

.exercicio-avl .valida_posicionada{
  position: absolute;
  left: 41%;
  bottom: 76%;
  color:#5ea47b;
  font-weight: 500;
}

.exercicio-avl .invalida_posicionada {
  position: absolute;
  left: 16%;
  bottom: -50%;
  font-size: 15px;
  font-weight: 500;
  color: #9c443e;
}

.exercicio-avl .valida_posicionada2 {
  position: absolute;
  left: 38%;
  bottom: -50%;
  font-size: 15px;
  font-weight: 500;
  color:#5ea47b;
}

.exercicio-avl .invalida_posicionada2 {
  position: absolute;
  left: 60%;
  bottom: -50%;
  font-size: 15px;
  font-weight: 500;
  color: #9c443e;
}

.exercicio-avl .linha_curta {
  width: 64px;
}

.exercicio-avl .linha_mais_curta {
   width: 62px;
}

.exercicio-avl .linha_mais_longa {
   width: 74px;
}

.exercicio-avl .linha_mais_curta_ainda {
  width: 52px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

#tensao {
  display: flex;
  align-items: baseline;
}

.entrada #tensao p {
  font-family: "Bai Jamjuree", sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: #1e3057;
  margin: 0;
}

#input-tensao {
  font-family: "Bai Jamjuree", sans-serif;
  width: 80px;
  border-radius: 3px;
  background-color: rgb(227, 229, 239);
  outline: none;
  border: 1px solid rgb(9, 9, 58);
  padding: 0.6rem;
  color: #060f18;
  text-align: center;
  margin-left: 8px;
  margin-right: 6px;
  font-size: 14px;
}
</style>
