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
          <h1>Autenticação</h1>

          <div class="login" v-if="!logado">

          <div class="container-user-senha">
            <span>Usuário:</span>
            <input type="text" class="input-user-senha" v-model="usuario" :disabled="isDivVisible">
          </div>

          <div class="container-user-senha">
            <span>Senha:</span>
            <input style="margin-left:9px;" type="password" class="input-user-senha" v-model="senha" :disabled="isDivVisible">
          </div>

          <div class="container-tipo-user" style="gap:0;">
            <span>Tipo de usuário:</span>
            <select style="margin-left:12px;" class="select-tipo-user" v-model="tipo_usuario" :disabled="isDivVisible">
              <option value="default">--</option>
              <option value="Operador de energia">Operador de energia</option>
              <option value="Técnico em comunicação">Técnico em comunicação</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>

          <a href="#" class="ativa-btn" :class="{ disabled: isDivVisible }" @click="retorno">Entrar</a>

          <div class="alert-box" v-if="isDivVisible">
            {{ texto_mensagem }}
            <div class="progress-bar" :style="{ width: progressBarWidth + '%' }"></div>
          </div>

          </div>

          <div class="logado" v-if="logado">
            <h2>Bem vindo(a)!</h2>
            <p>Você está logado como {{ tipo_exibido_logado }}.</p>
            <span @click="sair">Sair</span>
          </div>
          
        </div>
        <a href="#" class="reportar-falha" @click="validaFalha">
          <img src="@/assets/img/bug (1).png" alt="reportar falha">
          <span>Reportar falha</span>
        </a>

        <a href="#" class="dica" v-if="!usouTodasDicas" @click="open_modal2">
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
      title="Submódulo de autenticação"
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
  name: "NivelSeteFaseTres",
  components: {
    BarraSuperior,
    ModalEspecificacao,
    ModalConfirmaDica,
    ModalDica,
  },
  data() {
    const usouTodasDicas = store.dicas.dicas === 0 ? true : false;

    return {
      paragrafos: [
        'Para acessar o sistema, o usuário deve realizar autenticação com seu usuário, senha e tipo de usuário. Há 3 tipos de usuário no sistema: Operador de Energia, Técnico em Comunicação e Administrador.',
        'Se todos os dados estiverem corretos e preenchidos, o login será feito com sucesso e o usuário será redirecionado para uma tela inicial onde será exibida uma mensagem de boas-vindas, a informação de seu tipo de usuário e um menu. Um tipo de usuário deve apenas conseguir logar no sistema como seu tipo de usuário, ou seja, se inserir usuário e senha corretos mas selecionar um tipo de usuário que não seja o seu, não poderá entrar no sistema. Além disso, se algum dos dados estiver incorreto ou em branco será exibida mensagem de erro e o login não será realizado.',
        'Alguns usuários cadastrados e suas respectivas senhas e tipos de usuário para teste:',
        '- usuário: def345, senha: 7809, tipo: operador de energia;',
        '- usuário: aasbn5, senha: pol$444, tipo: técnico em comunicação;',
        '- usuário: 234xxx, senha: oo344, tipo: administrador.',
      ],
      missao: "7",
      fase: "3",
      currentLevel: 5,
      showModal: false,
      casosTeste: [],
      texto_mensagem: '',
      falha1_encontrada: false,
      falha2_encontrada: false,
      texto_alerta: '',
      isDivVisible: false,
      progressBarWidth: 100,
      abriuDica: false,
      dica: '',
      showModal2: false,
      showModal3: false,
      usouTodasDicas,
      usuario: '',
      senha: '',
      tipo_usuario: 'default',
      logado: false,
      tipo_exibido_logado: ''
    };
  },
  mounted() {
    this.casosTeste = [...store.respostas_fase_dois.cts_missao_sete];
  },
  methods: {
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
      if (this.falha1_encontrada === false && this.falha2_encontrada === true) {
        this.dica = 'Será que ao logar com algum tipo de usuário específico, o login está sendo realizado com outro tipo de usuário?';
      }
      else if (this.falha1_encontrada === true && this.falha2_encontrada === false) {
        this.dica = 'Será que a correspondência do tipo de usuário selecionado com o usuário e senha inseridos está sendo validada?';
      }
      else if (this.falha1_encontrada === true && this.falha2_encontrada === true) {
        this.dica = 'Não há nada mais para procurar por aqui :)';
      }
      else {
        this.dica = 'Será que ao logar com algum tipo de usuário específico, o login está sendo realizado com outro tipo de usuário?';
      }
    },
    abrirDica() {
      this.abriuDica = true;
      store.dicas.dicas -= 1;
      this.defineDica();
      this.showModal2 = false;
      this.showModal3 = true;
    },
    validaFalha(event) {
      event.preventDefault();

      if(!((this.usuario === 'aasbn5' && this.senha === 'pol$444' && this.tipo_usuario === 'Técnico em comunicação') || ((this.usuario === 'aasbn5' && this.senha === 'pol$444' && this.tipo_usuario !== 'Técnico em comunicação') || (this.usuario === 'def345' && this.senha === '7809' && this.tipo_usuario !== 'Operador de energia') || (this.usuario === '234xxx' && this.senha === 'oo344' && this.tipo_usuario !== 'Administrador')))) {
        alert("Isto não é uma falha!");
        return;
      }

      if((this.usuario === 'aasbn5' && this.senha === 'pol$444' && this.tipo_usuario === 'Técnico em comunicação' && this.falha1_encontrada) || (((this.usuario === 'aasbn5' && this.senha === 'pol$444' && this.tipo_usuario !== 'Técnico em comunicação') || (this.usuario === 'def345' && this.senha === '7809' && this.tipo_usuario !== 'Operador de energia') || (this.usuario === '234xxx' && this.senha === 'oo344' && this.tipo_usuario !== 'Administrador')) && this.falha2_encontrada)) {
        alert("Falha já reportada!");
        return;
      }

      if(this.usuario === 'aasbn5' && this.senha === 'pol$444' && this.tipo_usuario === 'Técnico em comunicação') {
        this.falha1_encontrada = true;
      } else {
        this.falha2_encontrada = true;
      }

      alert("Falha reportada com sucesso!");
    },
    validarRespostas(event) {
      event.preventDefault();
       if(this.falha1_encontrada) {
        store.pontuacaoJogador.pont_fases_niveis[6][2] += 20;
      }

      if(this.falha2_encontrada) {
        store.pontuacaoJogador.pont_fases_niveis[6][2] += 20;
      }

      store.respostas_fase_tres.falhas_encontradas_missao_sete = [this.falha1_encontrada, this.falha2_encontrada];

      store.pontuacaoJogador.atualizarPontuacao(6);
      this.$router.push("/nivel-sete-feedback");
    },
    retorno(event) {
      event.preventDefault();

      if(this.usuario.trim() === '') {
        this.texto_mensagem = 'Preencha o campo de usuário!';
        this.showDiv();
        return;
      }

      if(this.senha.trim() === '') {
        this.texto_mensagem = 'Preencha o campo de senha!';
        this.showDiv();
        return;
      }

      if(this.tipo_usuario === 'default') {
        this.texto_mensagem = 'Escolha um tipo de usuário!';
        this.showDiv();
        return;
      }

      if((this.usuario !== 'def345' && this.senha === '7809') || (this.usuario !== 'aasbn5' && this.senha === 'pol$444') || (this.usuario !== '234xxx' && this.senha === 'oo344') || (this.usuario !== 'def345' && this.usuario !== 'aasbn5' && this.usuario !== '234xxx' && this.senha !== '7809' && this.senha !== 'pol$444' && this.senha !== 'oo344')) {
        this.texto_mensagem = 'Usuário inválido!';
        this.showDiv();
        return;
      }

      if((this.usuario === 'def345' && this.senha !== '7809') || (this.usuario === 'aasbn5' && this.senha !== 'pol$444') || (this.usuario === '234xxx' && this.senha !== 'oo344')) {
        this.texto_mensagem = 'Senha inválida!';
        this.showDiv();
        return;
      }

      if(this.usuario === 'aasbn5' && this.senha === 'pol$444' && this.tipo_usuario === 'Técnico em comunicação') {
        this.tipo_exibido_logado = 'Administrador';
      } else {
        this.tipo_exibido_logado = this.tipo_usuario;
      }

      this.logado = !this.logado;
    },
    sair() {
      this.usuario = '';
      this.senha = '';
      this.tipo_usuario = 'default';
      this.logado = !this.logado;
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
  height: 88%;
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
  padding: 6px 14px;
  padding-top: 4px;
  padding-left: 20px;
}

.reportar-falha {
  margin-top: 12px;
  margin-left: 5px;
  display: inline-flex;
  background-color: #d6d8e7;
  border: 2px solid #1e215a;
  padding: 12px 16px;
  border-radius: 5px;
  gap: 10px;
  text-decoration: none;
  align-items: center;
  transition: 0.2s;
  transform: translateX(138%);
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
  background-color: #97a1cb;
}

.disabled_input {
  pointer-events: none;
  cursor: not-allowed;
  background-color: #d8dbea;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
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

.link_modal {
  text-decoration: underline;
  cursor: pointer;
  color: #3861a8;
  font-weight: 500;
}

.obs2 {
  font-family: "Bai Jamjuree", sans-serif;
  display: inline-block;
  font-size: 13px;
  color: #112a53;
  margin-top: 3px;
  margin-left: 14px;
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
  margin-bottom: 18px;
}

.container-user-senha, .container-tipo-user{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  gap:10px;
}

.input-user-senha{
  border-radius: 3px;
  outline: none;
  border: 1.2px solid rgb(16, 16, 61);
  padding: 3px;
  width: 100px;
  height: 26px;
  color: #060f18;
  font-weight: 500;
  background-color: #f5f8fa;
}

.select-tipo-user {
  padding: 2px;
  border-radius: 3px;
  outline: none;
  font-size: 13px;
  color: #060f18;
  background-color: #f5f8fa;
  font-family: "Bai Jamjuree", sans-serif;
  width: 184px;
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
  margin-top: 22px;
  transition: 0.3s;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 70px;
}

.ativa-btn:hover{
  background-color: #101f41;
}

.logado h2 {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 18px;
  color: #060f18;
  font-weight: 500;
  margin-top: 20px;
}

.logado p {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 14px;
  color: #0e1f30;
  font-weight: 500;
  margin-top: 50px;
  text-align: center;
}

.logado span {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  color: #1d344c;
  font-weight: 500;
  margin-top: 16%;
  display: block;
}
</style>
