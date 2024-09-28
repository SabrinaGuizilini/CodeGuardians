<template>
  <div class="main_container">
    <BarraSuperior :currentLevel="currentLevel" :missao="missao" :fase="fase" />

    <div class="level__content">
      <div class="artefato">
        <h1>Casos de teste gerados</h1>

        <div class="CTs-gerados">
          <div class="cabecalho">
            <span>Entrada</span>
            <span>Saída esperada</span>
          </div>

          <div class="CTs">
            <div class="CT" v-for="(caso, index) in casosTeste" :key="index">
                <label class="custom-checkbox">
                  <input type="checkbox" value="">
                  <span class="checkmark"></span>
                </label>
              <div class="entrada-saida">
                <p>{{ caso.entrada }}</p>
                <p>{{ caso.saida }}</p>
              </div>
            </div>
          </div>
        </div>

        <span id="aviso">* Para sua organização, dê um check nos casos de teste conforme são executados.</span>

        <a href="#" class="consultar_especificacao" @click="open_modal">
          <img src="@/assets/img/respostas.png" alt="consultar especificação" />
        </a>
      </div>

      <div class="execucao-casos-teste">
        <h1>Ambiente para execução dos casos de teste</h1>
        <div class="ambiente">
          <h1>Monitoramento de interrupções de corrente</h1>
          <div class="interrupcoes">
            <span>Digite a quantidade de interrupções de corrente nos últimos 5 minutos (simulação do retorno do sensor):</span>
            <input type="number" @input="validateInput()" class="input-interrupcoes" v-model="interrupcoes" :disabled="isDivVisible">
            <a href="#" class="ativa-btn" :class="{ disabled: isDivVisible }" @click="retorno">OK</a>
          </div>

          <span id="codigo-retornado">Código retornado: <b>{{ codigo }}</b></span>

          <div class="alert-box" v-if="isDivVisible">
            {{ texto_alerta }}
            <div class="progress-bar" :style="{ width: progressBarWidth + '%' }"></div>
          </div>

        </div>
        <a href="#" class="reportar-falha" @click="validaFalha">
          <div class="reportar-falha-inner">
            <img src="@/assets/img/bug (1).png" alt="reportar falha">
            <span>Reportar falha</span>
          </div>
        </a>
      </div>
    </div>

    <a href="#" class="avancar-botao" @click="validarRespostas">
      <span>Finalizar & Avançar</span>
      <img src="@/assets/img/seta-avanca-nivel.png" alt="seta direita" />
    </a>

    <ModalEspecificacao
      :isVisible="showModal"
      @close="showModal = false"
      title="Submódulo de monitoramento de interrupções de corrente"
      :paragrafos="paragrafos"
    />
  </div>
</template>

<script>
import BarraSuperior from "@/components/niveis/BarraSuperior.vue";
import ModalEspecificacao from "@/components/niveis/ModalEspecificacao.vue";
import { store } from "@/store";

export default {
  name: "NivelDoisFaseTres",
  components: {
    BarraSuperior,
    ModalEspecificacao,
  },
  data() {
    return {
      paragrafos: [
        'Existe um sensor que monitora a quantidade de interrupções de corrente que ocorrem nas cidades a cada intervalo de 5 minutos. De acordo com a quantidade de interrupções registrada pelo sensor, o sistema retorna um código de aviso que será usado para identificar falhas de energia.',
        'Se a quantidade de interrupções nos últimos 5 minutos for maior ou igual a 0 e menor ou igual a 3, significa que a quantidade de interrupções está em um limite aceitável, e o sistema deve retornar o código 0.',
        'Se a quantidade de interrupções for maior que 3, isso indica que a quantidade de interrupções excedeu o limite, caracterizando uma situação anormal, e o sistema deve retornar o código 1.',
        'Já, se o sensor retornar uma quantidade menor que zero, isso indica que está quebrado. Neste caso, deve ser exibida a mensagem “Sensor quebrado!” e nenhum código deve ser retornado.',
        'Obs: o sensor nunca retorna valores vazios ou que não sejam números inteiros.'
      ],
      missao: "2",
      fase: "3",
      currentLevel: 0,
      showModal: false,
      casosTeste: [],
      interrupcoes: '',
      falha_encontrada: false,
      texto_alerta: '',
      isDivVisible: false,
      progressBarWidth: 100,
      codigo: ''
    };
  },
  mounted() {
    this.casosTeste = [...store.respostas_fase_dois.cts_missao_dois];
  },
  methods: {
    validateInput() {
      if (this.interrupcoes < -1000 || this.interrupcoes > 1000) {
        this.interrupcoes = '';
      }
    },
    open_modal(event) {
      event.preventDefault();
      this.showModal = true;
    },
    showDiv() {
      this.isDivVisible = true;
      this.progressBarWidth = 100;
      this.startProgressBar();

      setTimeout(() => {
        this.isDivVisible = false;
      }, 5000);
    },
    startProgressBar() {
      let duration = 5000;
      let interval = 100;
      let decrement = 100 / (duration / interval);

      let progressInterval = setInterval(() => {
        if (this.progressBarWidth > 0) {
          this.progressBarWidth -= decrement;
        } else {
          clearInterval(progressInterval);
        }
      }, interval);
    },
    retorno(event) {
      event.preventDefault();

      if(this.interrupcoes === null || this.interrupcoes === '') {
        alert('O sensor nunca retorna valores vazios!');
        return;
      } 

      if(!Number.isInteger(this.interrupcoes)) {
        alert('O sensor nunca retorna valores que não sejam números inteiros!');
        return;
      }
      
      if(this.interrupcoes < 0) {
        this.codigo = '';
        this.texto_alerta = "Sensor quebrado!";
        this.showDiv();
      }

      else if(this.interrupcoes >= 0 && this.interrupcoes <= 4) {
        this.codigo = '0';
      }

      else {
        this.codigo = '1';
      }

    },
    validaFalha(event) {
      event.preventDefault();

      if(this.interrupcoes != 4) {
        alert("Isto não é uma falha!");
        return;
      }
      if(this.falha_encontrada) {
        alert("Falha já reportada!");
        return;
      }

      alert("Falha reportada com sucesso!");
      this.falha_encontrada = true;
    },
    validarRespostas(event) {
      event.preventDefault();

      if(this.falha_encontrada) {
        store.pontuacaoJogador.pont_fases_niveis[1][2] = 15;
      }

      store.pontuacaoJogador.atualizarPontuacao(1);
      this.$router.push("/nivel-dois-feedback");
    }
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
  height: calc(100% - 70px);
  display: flex;
}

.execucao-casos-teste {
  width: 53%;
  padding: 12px;
}

.execucao-casos-teste h1 {
  font-family: "Iceland", sans-serif;
  color: #2e4778;
  text-align: center;
  font-size: 28px;
  margin-top: 8px;
}

.execucao-casos-teste p {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 16.5px;
  margin-top: 24px;
  margin-left: 18px;
  color: #375087;
  font-weight: 500;
  line-height: 25px;
}

#aviso{
  display: inline-block;
  margin-top: 10px;
  margin-left: 14px;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 13px;
  color: #18294f;
}

.CTs-gerados {
  margin-top: 20px;
  background-color: #c2cbdc;
  border-radius: 3px;
  width: 94%;
  height: 70%;
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
  justify-content: end;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 15px;
  color: #253052;
  font-weight: 500;
  margin-bottom: 18px;
}

.cabecalho span {
  width: 40%;
  margin-left: 6px;
}

.artefato {
  position: relative;
  width: 47%;
  border-right: 3px solid rgba(59, 93, 131, 0.57);
  padding: 12px;
}

.artefato h1 {
  font-family: "Iceland", sans-serif;
  color: #2e4778;
  text-align: center;
  font-size: 28px;
  margin-top: 8px;
}

.artefato h2,
.execucao-casos-teste h2 {
  font-family: "Bai Jamjuree", sans-serif;
  color: #2e4778;
  text-align: center;
  font-size: 19px;
  margin-top: 18px;
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

label{
  margin-top: 1px;
}

.CT {
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 14px;
}

.CTs-gerados .CTs .entrada-saida {
  display: flex;
  justify-content: end;
  width: 100%;
  color: #253052;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 15px;
  font-weight: 500;
}

.CTs-gerados .CTs .entrada-saida p {
  font-size: 14px;
  margin: 0;
  width: 42%;
  margin-left: 12px;
  word-wrap: break-word;
  line-height: 1.2;
  color: #375087;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 14px;
}

.avancar-botao:hover,
.consultar_especificacao:hover {
  background-color: #0f1444;
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

 .custom-checkbox {
    display: inline-block;
    position: relative;
    font-size: 16px;
    user-select: none;
    padding-left: 24px;
    line-height: 16px;
  }

  .custom-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fbfbfc;
    border: 1.4px solid rgb(109, 109, 122);
    border-radius: 3px;
  }

  .custom-checkbox:hover input ~ .checkmark {
    border: 1.4px solid rgb(3, 3, 33);
  }

  .custom-checkbox input:checked ~ .checkmark {
    background-color: #1e2359;
    border-color:#1e2359;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .custom-checkbox input:checked ~ .checkmark:after {
    display: block;
  }

  .custom-checkbox .checkmark:after {
    left: 4.3px;
    top: 2px;
    width: 2px;
    height: 6px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

.ambiente{
  margin-top: 20px;
  background-color: #dce1eb;
  border-radius: 3px;
  width: 96%;
  height: 62%;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
}

.ambiente span{
  font-family: 'Roboto', 'sans-serif';
  color: #1a2054;
  font-weight: 400;
}

.ambiente h1{
  font-family: 'Chakra Petch', 'sans-serif';
  font-size: 21px;
  color: #242a58;
  padding-bottom: 5px;
  border-bottom: 1.5px solid rgb(29, 30, 84);
}

.interrupcoes{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap:10px;
}

.input-interrupcoes{
  border-radius: 3px;
  outline: none;
  border: 1.2px solid rgb(16, 16, 61);
  padding: 2px;
  width: 100px;
  height: 30px;
  color: #060f18;
  text-align: center;
  font-weight: 500;
}

.ativa-btn{
  /* display: inline-block; */
  background-color: #1f325c;
  text-decoration: none;
  padding: 6px 10px;
  color: #cfd2e4;
  border-radius: 3px;
  font-family: 'Roboto', 'sans-serif';
  font-size: 15px;
  letter-spacing: 0.2px;
  margin-top: 10px;
  transition: 0.3s;
}

.ativa-btn:hover{
  background-color: #101f41;
}

.reportar-falha {
  /* margin-top: 12px;
  margin-left: 5px; */
  /* display: inline-flex; */
  display: block;
  width: 186px;
  margin: 10px auto;
  background-color: #d6d8e7;
  border: 2px solid #1e215a;
  padding: 14px 16px;
  border-radius: 5px;
  gap: 10px;
  text-decoration: none;
  align-items: center;
  transition: 0.2s;
  /* transform: translateX(138%); */
}

.reportar-falha-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.reportar-falha img {
  width: 20px;
  height: 18px;
  margin-top: 0.125rem;
  transition: all 0.3s ease;
}

.reportar-falha span {
  color: #1e215a;
  font-family: "Chakra Petch", sans-serif;
  font-size: 16px;
  font-weight: 500;
}

@keyframes bugShake {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-15deg);
  }
  50% {
    transform: rotate(15deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.reportar-falha:hover{
  background-color: #1e215a;
}

.reportar-falha:hover span{
  color: #dce5ef;
}

.reportar-falha:hover img{
  content: url('@/assets/img/bug.png');
  animation: bugShake 0.6s ease-in-out;
}

.alert-box{
  position: relative;
  overflow: hidden;
  /* margin-top: 10px; */
  width: fit-content;
  height: 38px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  background-color: #535c84;
  color:#d8d8ea;
  font-family: 'Roboto', 'sans-serif';
  font-size: 14px;
  padding: 8px 12px 8px 12px;
}

.progress-bar {
  height: 5px;
  background-color: #051324;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: width 0.1s linear;
}

.disabled {
  pointer-events: none;
  cursor: not-allowed;
  background-color: #8a9fb9;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

#codigo-retornado{
  display: inline-block;
  margin-top: 8px;
}

@media (min-height: 680px) {
  .ambiente {
    height: 380px;
  }
  .interrupcoes {
    margin-top: 80px;
  }
}

@media (min-height: 800px) {
  .ambiente {
    height: 480px;
  }
   .interrupcoes {
    margin-top: 110px;
  }
}
</style>
