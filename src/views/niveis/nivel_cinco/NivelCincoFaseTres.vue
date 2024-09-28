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
          <h1>Envio de alertas</h1>
          <div class="container_ID">
            <span>ID do alerta:</span>
            <input type="text" @input="validateInput()" class="input-ID" v-model="ID" :disabled="isDivVisible">
          </div>

          <div class="container_msg">
            <span>Mensagem:</span>
            <textarea class="input-msg" v-model="msg" :disabled="isDivVisible" rows="3" cols="30"></textarea>
          </div>

          <div class="container_dep">
            <span>Departamento:</span>
            <select class="select-dep" v-model="dep" :disabled="isDivVisible">
              <option value="default">--</option>
              <option value="Energia Elétrica">Energia Elétrica</option>
              <option value="Trânsito">Trânsito</option>
              <option value="Saúde">Saúde</option>
            </select>
          </div>

          <a href="#" class="ativa-btn" :class="{ disabled: isDivVisible }" @click="retorno">Enviar</a>

          <div class="alert-box" v-if="isDivVisible">
            {{ texto_mensagem }}
            <div class="progress-bar" :style="{ width: progressBarWidth + '%' }"></div>
          </div>

        </div>
        <a href="#" class="reportar-falha" @click="validaFalha">
          <div class="reportar-falha-inner">
            <img src="@/assets/img/bug (1).png" alt="reportar falha">
            <span>Reportar falha</span>
          </div>
        </a>

        <a href="#" class="dica" @click="open_modal2">
          <img src="@/assets/img/idea2.png" alt="consultar dica" />
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
      title="Submódulo de envio de alertas"
      :paragrafos="paragrafos"
    />

    <ModalConfirmaDica
      :isVisible="showModal2"
      @close="showModal2 = false"
      @confirmar="abrirDica"
    />

    <ModalDica
      :isVisible="showModal3"
      @close="showModal3 = false"
      :dica="dica"
    />
  </div>
</template>

<script>
import BarraSuperior from "@/components/niveis/BarraSuperior.vue";
import ModalEspecificacao from "@/components/niveis/ModalEspecificacao.vue";
import ModalConfirmaDica from "@/components/niveis/ModalConfirmaDica.vue";
import ModalDica from "@/components/niveis/ModalDica.vue";
import { store } from "@/store";

export default {
  name: "NivelCincoFaseTres",
  components: {
    BarraSuperior,
    ModalEspecificacao,
    ModalConfirmaDica,
    ModalDica,
  },
  data() {
    return {
      paragrafos: [
        'O submódulo de envio de alertas é responsável por processar e enviar alertas gerados por um usuário ou por outro submódulo do sistema. Cada alerta é composto por três elementos: um identificador (ID), uma mensagem e o departamento destinatário. Para que o alerta seja enviado corretamente, algumas regras de validação devem ser seguidas.',
        'Primeiramente, o ID deve conter exatamente cinco dígitos. Caso essa condição não seja respeitada, o sistema retornará a mensagem de erro "O ID deve conter 5 dígitos!". Além disso, o último dígito do ID deve ser 1, 2 ou 3, representando a prioridade do alerta. O número 1 indica prioridade máxima, o número 2 representa prioridade média e o número 3 corresponde à prioridade baixa. Se o último dígito for diferente desses valores, será retornada a mensagem "O último dígito do ID pode ser somente 1, 2 ou 3!".',
        'A mensagem do alerta também deve seguir um critério específico: ela deve ter entre 10 e 70 caracteres. Se a mensagem não atender a essa exigência, o sistema exibirá o erro "A mensagem deve conter entre 10 e 70 caracteres!". Além disso, o destinatário do alerta precisa ser um dos três departamentos disponíveis: Energia Elétrica, Trânsito ou Saúde. Caso não seja selecionado um departamento, o sistema retornará a mensagem "O departamento deve ser selecionado!".',
        'Os campos de ID e mensagem também são obrigatórios. Portanto, ao tentar enviar um alerta sem preencher um desses campos, a mensagem de erro correspondente será "O campo [xxx] deve ser preenchido!", onde [xxx] representa o nome do campo que está vazio.',
        'Se todas as validações forem cumpridas e o alerta for enviado com sucesso, o sistema exibirá a mensagem "Alerta enviado com sucesso para o departamento [selecionado]!". No entanto, se ocorrer algum problema durante o envio, será exibida a mensagem "Falha no envio do alerta!".',
        'Para testar o cenário de falha no envio, há um ID específico que pode ser utilizado: o ID 00000. Esse ID é valido e foi configurado apenas para simular falhas no envio. Assim, ao utilizar o ID 00000, o sistema deverá retornar a mensagem de falha no envio, permitindo a verificação desse comportamento.'
      ],
      missao: "5",
      fase: "3",
      currentLevel: 3,
      showModal: false,
      casosTeste: [],
      ID: '',
      msg: '',
      dep: 'default',
      falha1_encontrada: false,
      falha2_encontrada: false,
      falha3_encontrada: false,
      texto_mensagem: '',
      isDivVisible: false,
      progressBarWidth: 100,
      alerta_enviado: '',
      showModal2: false,
      showModal3: false,
      abriuDica: false,
      dica: '',
    };
  },
  mounted() {
    this.casosTeste = [...store.respostas_fase_dois.cts_missao_cinco];
  },
  methods: {
    validateInput() {
      this.ID = this.ID.replace(/\D/g, '');
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
    open_modal2(event) {
      event.preventDefault();
      if (this.abriuDica === false) {
        this.showModal2 = true;
      }
      else {
        this.showModal3 = true;
      }
    },
    defineDica() {
      if(this.falha1_encontrada === false && this.falha2_encontrada === false && this.falha3_encontrada === false) {
        this.dica = 'Será que os alertas são enviados mesmo com algum dos campos vazio?';
      }
      else if(this.falha1_encontrada === false && this.falha2_encontrada === false && this.falha3_encontrada === true) {
        this.dica = 'Será que os alertas são enviados mesmo com algum dos campos vazio?';
      }
      else if(this.falha1_encontrada === false && this.falha2_encontrada === true && this.falha3_encontrada === false) {
        this.dica = 'Será que os alertas são enviados mesmo com algum dos campos vazio?';
      }
      else if(this.falha1_encontrada === false && this.falha2_encontrada === true && this.falha3_encontrada === true) {
        this.dica = 'Será que os alertas são enviados mesmo com algum dos campos vazio?';
      }
      else if(this.falha1_encontrada === true && this.falha2_encontrada === false && this.falha3_encontrada === false) {
        this.dica = 'Dê atenção aos valores-limite...';
      }
      else if(this.falha1_encontrada === true && this.falha2_encontrada === false && this.falha3_encontrada === true) {
        this.dica = 'Dê atenção aos valores-limite...';
      }
      else if(this.falha1_encontrada === true && this.falha2_encontrada === true && this.falha3_encontrada === false) {
        this.dica = 'Será que todas as validações referentes ao campo de ID estão funcionando corretamente?';
      }
      else {
        this.dica = 'Não há nada mais para procurar por aqui :)';
      }
    },
    abrirDica() {
      this.abriuDica = true;
      store.dicas.dicas -= 1;
      this.defineDica();
      this.showModal2 = false;
      this.showModal3 = true;
    },
    retorno(event) {
      event.preventDefault();

      if(this.ID === '') {
        this.alerta_enviado = 'não';
        this.texto_mensagem = 'O campo de ID deve ser preenchido!';
        this.showDiv();
        return;
      }

      if(this.ID.length !== 5) {
        this.alerta_enviado = 'não';
        this.texto_mensagem = 'O ID deve conter 5 dígitos!';
        this.showDiv();
        return;
      }

      if(this.ID === '00000') {
        this.alerta_enviado = 'não';
        this.texto_mensagem = 'Falha no envio do alerta!';
        this.showDiv();
        return;
      }

      if((this.msg.length > 0 && this.msg.length < 10) || this.msg.length > 69) {
        this.alerta_enviado = 'não';
        this.texto_mensagem = 'A mensagem deve conter entre 10 e 70 caracteres!';
        this.showDiv();
        return;
      }

       if(this.dep === 'default') {
        this.alerta_enviado = 'não';
        this.texto_mensagem = 'O departamento deve ser selecionado!';
        this.showDiv();
        return;
      }

      if(this.dep === 'Energia Elétrica') {
        this.alerta_enviado = 'sim';
        this.texto_mensagem = 'Alerta enviado com sucesso para o departamento de energia elétrica!';
        this.showDiv();
        return;
      }

       if(this.dep === 'Saúde') {
        this.alerta_enviado = 'sim';
        this.texto_mensagem = 'Alerta enviado com sucesso para o departamento de saúde!';
        this.showDiv();
        return;
      }

       if(this.dep === 'Trânsito') {
        this.alerta_enviado = 'sim';
        this.texto_mensagem = 'Alerta enviado com sucesso para o departamento de trânsito!';
        this.showDiv();
        return;
      }

    },
    validaFalha(event) {
      event.preventDefault();

      let ultimoCaractere = this.ID.slice(-1);

      if(!(this.msg.trim() === "" || this.msg.length === 70 || (this.ID.length === 5 && this.ID !== '00000' && ultimoCaractere !== '1' && ultimoCaractere !== '2' && ultimoCaractere !== '3'))) {
        alert("Isto não é uma falha!");
        return;
      }

      if((this.msg.trim() === "" && this.falha1_encontrada && !(this.ID.length === 5 && this.ID !== '00000' && ultimoCaractere !== '1' && ultimoCaractere !== '2' && ultimoCaractere !== '3')) || (this.msg.length === 70 && this.falha2_encontrada && !(this.ID.length === 5 && this.ID !== '00000' && ultimoCaractere !== '1' && ultimoCaractere !== '2' && ultimoCaractere !== '3')) || ((this.ID.length === 5 && this.ID !== '00000' && ultimoCaractere !== '1' && ultimoCaractere !== '2' && ultimoCaractere !== '3') && this.falha3_encontrada && !(this.msg.trim() === "") && this.msg.length !== 70)) {
        alert("Falha já reportada!");
        return;
      }

      if((this.msg.trim() === "" && this.falha1_encontrada && (this.ID.length === 5 && this.ID !== '00000' && ultimoCaractere !== '1' && ultimoCaractere !== '2' && ultimoCaractere !== '3') && this.falha3_encontrada) || (this.msg.length === 70 && this.falha2_encontrada && (this.ID.length === 5 && this.ID !== '00000' && ultimoCaractere !== '1' && ultimoCaractere !== '2' && ultimoCaractere !== '3') && this.falha3_encontrada)) {
        alert("Falhas já reportadas!");
        return;
      }

      if(this.msg.trim() === "" && !this.falha1_encontrada) {
        this.falha1_encontrada = true;
        alert("Falha reportada com sucesso!");
      }

      if(this.msg.length === 70 && !this.falha2_encontrada) {
        this.falha2_encontrada = true;
        alert("Falha reportada com sucesso!");
      }

      if((this.ID.length === 5 && this.ID !== '00000' && ultimoCaractere !== '1' && ultimoCaractere !== '2' && ultimoCaractere !== '3') && !this.falha3_encontrada) {
        this.falha3_encontrada = true;
        alert("Falha reportada com sucesso!");
      }

    },
    validarRespostas(event) {
      event.preventDefault();

      if(this.falha1_encontrada) {
        store.pontuacaoJogador.pont_fases_niveis[4][2] += 20;
      }

      if(this.falha2_encontrada) {
        store.pontuacaoJogador.pont_fases_niveis[4][2] += 20;
      }

      if(this.falha3_encontrada) {
        store.pontuacaoJogador.pont_fases_niveis[4][2] += 20;
      }

      store.respostas_fase_tres.falhas_encontradas_missao_cinco = [this.falha1_encontrada, this.falha2_encontrada, this.falha3_encontrada];

      store.pontuacaoJogador.atualizarPontuacao(4);
      this.$router.push("/nivel-cinco-feedback");
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
  position: relative;
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
  position: relative;
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
  margin-top: 0;
}

.container_ID, .container_msg, .container_dep{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap:10px;
}

.container_ID {
  margin-top: 16px;
}

.input-ID{
  border-radius: 3px;
  outline: none;
  border: 1.2px solid rgb(16, 16, 61);
  padding: 2px;
  width: 100px;
  height: 26px;
  color: #060f18;
  text-align: center;
  font-weight: 500;
  background-color: #f5f8fa;
}

.input-msg {
  border-radius: 3px;
  outline: none;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 13px;
  padding: 3px;
  color: #060f18;
  background-color: #f5f8fa;
  border: 1.2px solid rgb(16, 16, 61);
  font-weight: 500;
}

.select-dep {
  padding: 2px;
  border-radius: 3px;
  outline: none;
  font-size: 13px;
  color: #060f18;
  background-color: #f5f8fa;
  font-family: "Bai Jamjuree", sans-serif;
  width: 140px;
  height: 26px;
  font-weight: 500;
  border: 1.3px solid rgb(13, 33, 65);
}

.ativa-btn{
  display: block;
  background-color: #1f325c;
  text-decoration: none;
  padding: 6px 10px;
  color: #cfd2e4;
  border-radius: 3px;
  font-family: 'Roboto', 'sans-serif';
  font-size: 15px;
  letter-spacing: 0.2px;
  margin-top: 18px;
  transition: 0.3s;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 70px;
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
  position: absolute;
  bottom: 5px;
  left: 16px;
  overflow: hidden;
  width: fit-content;
  height: 36px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  background-color: #535c84;
  color:#d8d8ea;
  font-family: 'Roboto', 'sans-serif';
  font-size: 13px;
  padding: 7px 11px 7px 11px;
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

.dica {
  position: absolute;
  bottom: 3%;
  left: 3%;
  display: inline-flex;
  background-color: #1e215a;
  padding: 15px;
  border-radius: 100%;
  text-decoration: none;
  align-items: center;
  transition: 0.3s;
}

.dica img {
  width: 24px;
}

.dica::before {
  content: "Dica";
  position: absolute;
  right: -50px;
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

.dica:hover::before {
  opacity: 1;
  visibility: visible;
}

.dica:hover {
  background-color: #0f1444;
}

@media (min-height: 680px) {
  .ambiente {
    height: 380px;
  }
  .container_ID {
    margin-top: 50px;
  }
}

@media (min-height: 800px) {
  .ambiente {
    height: 480px;
  }
   .container_ID {
    margin-top: 90px;
  }
}

</style>
