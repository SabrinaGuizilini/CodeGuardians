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
        <span class="obs2">* Clique <span class="link_modal" @click="openModalDados()">aqui</span> para ver os dados necessários para o teste.</span>

        <a href="#" class="consultar_especificacao" @click="open_modal">
          <img src="@/assets/img/respostas.png" alt="consultar especificação" />
        </a>
      </div>

      <div class="execucao-casos-teste">
        <h1>Ambiente para execução dos casos de teste</h1>
        <div class="ambiente">
          <div class="deteccao-falhas">
          <h3 class="titulo-modulo">Detecção de falhas de energia</h3>
          <div class="deteccao-falhas-input">
            <div class="input-codI">
              <span><b>Cód. I.:</b></span>
              <input :class="{ disabled_input: isDivVisible }" type="number" @input="validateInputCodI()" class="input-cod" v-model="codI">
            </div>
            <div class="input-codT">
              <span><b>Cód. T.:</b></span>
              <input :class="{ disabled_input: isDivVisible }" type="number" @input="validateInputCodT()" class="input-cod" v-model="codT">
            </div>
            <a href="#" :class="{ disabled: isDivVisible }" class="ativa-btn-deteccao" @click="retorno_deteccao">OK</a>
          </div>

          <span class="alerta-e-msg alerta-emitido"><b>Alerta emitido:</b> {{ alerta }}</span>
          <span class="alerta-e-msg">{{ mensagem }}</span>

          </div>

          <div class="envio-alertas">
          <h3 class="titulo-modulo">Envio de alertas</h3>
          <div class="inputs-envio-alerta">
            <p><b>ID do alerta:</b> {{ ID }}</p>
            <p class="mensagem"><b>Mensagem:</b> {{ msg }}</p>
            <p><b>Departamento:</b> {{ dep }}</p>
          </div>
          

          <div class="alert-box" v-if="isDivVisible">
            {{ texto_mensagem }}
            <div class="progress-bar" :style="{ width: progressBarWidth + '%' }"></div>
          </div>

          </div>

        <ModalGeradores
          :isVisible="showModalGeradores"
          @close="showModalGeradores = false"
        />
        </div>
        <a href="#" class="reportar-falha" @click="validaFalha">
          <div class="reportar-falha-inner">
            <img src="@/assets/img/bug (1).png" alt="reportar falha">
            <span>Reportar falha</span>
          </div>
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
      title="Integração do submódulo de detecção de falhas na energia com o submódulo de envio de alertas"
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

     <ModalDados
      :isVisible="show_modalDados"
      @close="show_modalDados = false"
      :conteudos="listaConteudos"
      :bottom="'2%'" 
      :left="'3%'"
    />
  </div>
</template>

<script>
import BarraSuperior from "@/components/niveis/BarraSuperior.vue";
import ModalEspecificacao from "@/components/niveis/ModalEspecificacao.vue";
import ModalConfirmaDica from "@/components/niveis/ModalConfirmaDica.vue";
import ModalDica from "@/components/niveis/ModalDica.vue";
import ModalDados from "@/components/niveis/ModalDados.vue";
import ModalGeradores from "@/components/niveis/ModalGeradores.vue";
import { store } from "@/store";

export default {
  name: "NivelSeisFaseTres",
  components: {
    BarraSuperior,
    ModalEspecificacao,
    ModalConfirmaDica,
    ModalDica,
    ModalDados,
    ModalGeradores
  },
  data() {
    const usouTodasDicas = store.dicas.dicas === 0 ? true : false;

    return {
      paragrafos: [
        'Quando o submódulo de detecção de falhas de energia emitir um alerta, o submódulo de envio de alertas deve receber corretamente o seu ID e mensagem. O destinatário para esses alertas deve ser sempre o departamento de energia elétrica e o alerta deve ser enviado automaticamente.',
        'Por outro lado, quando não houver nenhum alerta emitido, todos os campos devem permanecer em branco e não deve haver envio de alerta.',
      ],
      listaConteudos: [
        {
          titulo: 'Submódulo de detecção de alertas',
          paragrafos: [
            ' - Cód. I. = 0 e Cód. T. = 0 -> nenhum alerta deve ser gerado;',
            ' - Cód. I. = 0 e Cód. T. = 1 -> alerta "12341: Falha de energia." deve ser gerado;',
            ' - Cód. I. = 0 e Cód. T. = 2 -> alerta "98012: Alta tensão - risco de problemas no sistema elétrico." deve ser gerado;',
            ' - Cód. I. = 1 e Cód. T. = 0 -> alerta "65323: Instabilidade no fornecimento de energia devido a várias interrupções." deve ser gerado.',
          ],
        },
        {
          titulo: 'Submódulo de ativação de geradores',
          paragrafos: [
            '- Senha = ger995 deve ativar os geradores.',
          ]
        },
      ],
      missao: "6",
      fase: "3",
      currentLevel: 4,
      showModal: false,
      casosTeste: [],
      codI: '',
      codT: '',
      alerta: '',
      mensagem: '',
      ID: '',
      msg: '',
      dep: '',
      texto_mensagem: '',
      falha_encontrada: false,
      texto_alerta: '',
      isDivVisible: false,
      progressBarWidth: 100,
      abriuDica: false,
      dica: '',
      showModal2: false,
      showModal3: false,
      show_modalDados: false,
      usouTodasDicas,
      deteccao_alerta: null,
      defineMensagemRetorno: null,
      showModalGeradores: false,
    };
  },
  mounted() {
    this.casosTeste = [...store.respostas_fase_dois.cts_missao_seis];

    if (store.respostas_fase_tres.falhas_encontradas_missao_cinco[1] === true) {
        this.defineMensagemRetorno = this.defineMensagemRetorno_sem_falha;
    }
    else {
        this.defineMensagemRetorno = this.defineMensagemRetorno_com_falha;
    }

    if(store.respostas_fase_tres.falhas_encontradas_missao_quatro[0] === true && store.respostas_fase_tres.falhas_encontradas_missao_quatro[1] == false) {
      this.deteccao_alerta = this.deteccao_alerta_apenas_falha_dois;
    }
    else if(store.respostas_fase_tres.falhas_encontradas_missao_quatro[0] === false && store.respostas_fase_tres.falhas_encontradas_missao_quatro[1] == true) {
      this.deteccao_alerta = this.deteccao_alerta_apenas_falha_um;
    }
    else if(store.respostas_fase_tres.falhas_encontradas_missao_quatro[0] === false && store.respostas_fase_tres.falhas_encontradas_missao_quatro[1] == false) {
      this.deteccao_alerta = this.deteccao_alerta_com_duas_falhas;
    }
    else {
      this.deteccao_alerta = this.deteccao_alerta_nenhuma_falha;
    }
  },
  methods: {
    open_modal(event) {
      event.preventDefault();
      this.showModal = true;
    },
    validateInputCodI() {
      if (this.codI < 0 || this.codI > 1) {
        this.codI = '';
      }
    },
     validateInputCodT() {
      if (this.codT < 0 || this.codT > 2) {
        this.codT = '';
      }
    },
    openModalDados() {
      this.show_modalDados = true;
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
      if (this.falha_encontrada) {
        this.dica = 'Não há nada mais para procurar por aqui :)';
      }
      else {
        this.dica = 'Preste muita atenção ao departamento para o qual os alertas estão sendo enviados...';
      }
    },
    abrirDica() {
      this.abriuDica = true;
      store.dicas.dicas -= 1;
      this.defineDica();
      this.showModal2 = false;
      this.showModal3 = true;
    },
    deteccao_alerta_com_duas_falhas() {
      if(this.codI === 0 && this.codT === 0) {
         this.alerta = '';
      }
      else if (this.codI === 1 && this.codT === 1) {
         this.alerta = 'Alerta 12341: Falha de energia.';
      }
      else if (this.codI === 0 && this.codT === 2) {
        this.alerta = 'Alerta 98012: Alta tensão - risco de problemas no sistema elétrico.';
      }
      else if ((this.codI === 1 && this.codT === 0) || (this.codI === 0 && this.codT === 1)) {
        this.alerta = 'Alerta 65323: Instabilidade no fornecimento de energia devido a várias interrupções.';
      }
      else if (this.codI === 1 && this.codT === 2) {
        this.alerta = 'Alerta 37892: Instabilidade no fornecimento de energia e alta tensão.';
      }
      else {
        this.alerta = '';
      }

      if(this.codI === 0 && this.codT === 0) {
        this.mensagem = 'Sem falhas na energia elétrica.';
      }
      else if (this.codI === '' && this.codT !== '') {
        this.mensagem = 'Erro no submódulo de monitoramento de interrupções!';
      }
      else if (this.codI !== '' && this.codT === '') {
        this.mensagem = 'Erro no submódulo de monitoramento de tensão!';
      }
      else if (this.codI === '' && this.codT === '') {
        this.mensagem = 'Erro nos submódulos de monitoramento de interrupção e de tensão!';
      }
      else {
        this.mensagem = '';
      }
    },
    deteccao_alerta_apenas_falha_um() {
      if(this.codI === 0 && this.codT === 0) {
         this.alerta = '';
      }
      else if (this.codI === 1 && this.codT === 1) {
         this.alerta = 'Alerta 12341: Falha de energia.';
         this.showModalGeradores = true;
      }
      else if (this.codI === 0 && this.codT === 2) {
        this.alerta = 'Alerta 98012: Alta tensão - risco de problemas no sistema elétrico.';
      }
      else if ((this.codI === 1 && this.codT === 0) || (this.codI === 0 && this.codT === 1)) {
        this.alerta = 'Alerta 65323: Instabilidade no fornecimento de energia devido a várias interrupções.';
      }
      else if (this.codI === 1 && this.codT === 2) {
        this.alerta = 'Alerta 37892: Instabilidade no fornecimento de energia e alta tensão.';
      }
      else {
        this.alerta = '';
      }

      if(this.codI === 0 && this.codT === 0) {
        this.mensagem = 'Sem falhas na energia elétrica.';
      }
      else if (this.codI === '' && this.codT !== '') {
        this.mensagem = 'Erro no submódulo de monitoramento de interrupções!';
      }
      else if (this.codI !== '' && this.codT === '') {
        this.mensagem = 'Erro no submódulo de monitoramento de tensão!';
      }
      else if (this.codI === '' && this.codT === '') {
        this.mensagem = 'Erro nos submódulos de monitoramento de interrupção e de tensão!';
      }
      else {
        this.mensagem = '';
      }
    },
    deteccao_alerta_apenas_falha_dois() {
      if(this.codI === 0 && this.codT === 0) {
         this.alerta = '';
      }
      else if ((this.codI === 1 && this.codT === 1) || (this.codI === 0 && this.codT === 1)) {
         this.alerta = 'Alerta 12341: Falha de energia.';
      }
      else if (this.codI === 0 && this.codT === 2) {
        this.alerta = 'Alerta 98012: Alta tensão - risco de problemas no sistema elétrico.';
      }
      else if ((this.codI === 1 && this.codT === 0)) {
        this.alerta = 'Alerta 65323: Instabilidade no fornecimento de energia devido a várias interrupções.';
      }
      else if (this.codI === 1 && this.codT === 2) {
        this.alerta = 'Alerta 37892: Instabilidade no fornecimento de energia e alta tensão.';
      }
      else {
        this.alerta = '';
      }

      if(this.codI === 0 && this.codT === 0) {
        this.mensagem = 'Sem falhas na energia elétrica.';
      }
      else if (this.codI === '' && this.codT !== '') {
        this.mensagem = 'Erro no submódulo de monitoramento de interrupções!';
      }
      else if (this.codI !== '' && this.codT === '') {
        this.mensagem = 'Erro no submódulo de monitoramento de tensão!';
      }
      else if (this.codI === '' && this.codT === '') {
        this.mensagem = 'Erro nos submódulos de monitoramento de interrupção e de tensão!';
      }
      else {
        this.mensagem = '';
      }
    },
    deteccao_alerta_nenhuma_falha() {
      if(this.codI === 0 && this.codT === 0) {
         this.alerta = '';
      }
      else if ((this.codI === 1 && this.codT === 1) || (this.codI === 0 && this.codT === 1)) {
         this.alerta = 'Alerta 12341: Falha de energia.';
         this.showModalGeradores = true;
      }
      else if (this.codI === 0 && this.codT === 2) {
        this.alerta = 'Alerta 98012: Alta tensão - risco de problemas no sistema elétrico.';
      }
      else if ((this.codI === 1 && this.codT === 0)) {
        this.alerta = 'Alerta 65323: Instabilidade no fornecimento de energia devido a várias interrupções.';
      }
      else if (this.codI === 1 && this.codT === 2) {
        this.alerta = 'Alerta 37892: Instabilidade no fornecimento de energia e alta tensão.';
      }
      else {
        this.alerta = '';
      }

      if(this.codI === 0 && this.codT === 0) {
        this.mensagem = 'Sem falhas na energia elétrica.';
      }
      else if (this.codI === '' && this.codT !== '') {
        this.mensagem = 'Erro no submódulo de monitoramento de interrupções!';
      }
      else if (this.codI !== '' && this.codT === '') {
        this.mensagem = 'Erro no submódulo de monitoramento de tensão!';
      }
      else if (this.codI === '' && this.codT === '') {
        this.mensagem = 'Erro nos submódulos de monitoramento de interrupção e de tensão!';
      }
      else {
        this.mensagem = '';
      }
    },
    defineCamposAlerta() {
      if(this.alerta === 'Alerta 12341: Falha de energia.') {
        this.ID = '12341',
        this.msg = 'Falha de energia.',
        this.dep = 'Trânsito'
      }

      else if(this.alerta === 'Alerta 98012: Alta tensão - risco de problemas no sistema elétrico.') {
        this.ID = '98012',
        this.msg = 'Alta tensão - risco de problemas no sistema elétrico.',
        this.dep = 'Trânsito'
      }

      else if(this.alerta === 'Alerta 65323: Instabilidade no fornecimento de energia devido a várias interrupções.') {
        this.ID = '65323',
        this.msg = 'Instabilidade no fornecimento de energia devido a várias interrupções.',
        this.dep = 'Trânsito'
      }

      else if(this.alerta === 'Alerta 37892: Instabilidade no fornecimento de energia e alta tensão.') {
        this.ID = '37892',
        this.msg = 'Instabilidade no fornecimento de energia e alta tensão.',
        this.dep = 'Trânsito'
      }

      else {
        this.ID = '',
        this.msg = '',
        this.dep = ''
      }
    },
    defineMensagemRetorno_com_falha() {
      if (this.ID !== '' && this.msg !== '' && this.dep !== '') {

        if((this.msg.length > 0 && this.msg.length < 10) || this.msg.length > 69) {
        this.texto_mensagem = 'A mensagem deve conter entre 10 e 70 caracteres!';
        this.showDiv();
        return;
      }

      if(this.dep === 'Energia Elétrica') {
        this.texto_mensagem = 'Alerta enviado com sucesso para o departamento de energia elétrica!';
        this.showDiv();
        return;
      }

       if(this.dep === 'Saúde') {
        this.texto_mensagem = 'Alerta enviado com sucesso para o departamento de saúde!';
        this.showDiv();
        return;
      }

       if(this.dep === 'Trânsito') {
        this.texto_mensagem = 'Alerta enviado com sucesso para o departamento de trânsito!';
        this.showDiv();
        return;
      }

      }
    },
    defineMensagemRetorno_sem_falha() {
      if (this.ID !== '' && this.msg !== '' && this.dep !== '') {

        if((this.msg.length > 0 && this.msg.length < 10) || this.msg.length > 70) {
        this.texto_mensagem = 'A mensagem deve conter entre 10 e 70 caracteres!';
        this.showDiv();
        return;
      }

      if(this.dep === 'Energia Elétrica') {
        this.texto_mensagem = 'Alerta enviado com sucesso para o departamento de energia elétrica!';
        this.showDiv();
        return;
      }

       if(this.dep === 'Saúde') {
        this.texto_mensagem = 'Alerta enviado com sucesso para o departamento de saúde!';
        this.showDiv();
        return;
      }

       if(this.dep === 'Trânsito') {
        this.texto_mensagem = 'Alerta enviado com sucesso para o departamento de trânsito!';
        this.showDiv();
        return;
      }

      }
    },
    retorno_deteccao(event) {
      event.preventDefault();
      this.deteccao_alerta();
      this.defineCamposAlerta();
      this.defineMensagemRetorno();
    },
    validaFalha(event) {
      event.preventDefault();

      if(this.ID === '') {
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
        store.pontuacaoJogador.pont_fases_niveis[5][2] = 20;
      }
      
      store.pontuacaoJogador.atualizarPontuacao(5);
      this.$router.push("/nivel-seis-feedback");
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
  padding: 6px 14px;
  padding-top: 4px;
  padding-left: 20px;
}

.titulo-modulo {
  font-family: "Bai Jamjuree", sans-serif;
  color:#1e215a;
  font-size: 15px;
  text-align: center;
  margin-top: 5px;
}

.deteccao-falhas {
  position: relative;
  height: 40%;
  border-bottom: 2px solid rgb(13, 8, 46);
}

.envio-alertas{
  position: relative;
  height: 60%;
}

.deteccao-falhas-input {
  margin-top: 10px;
  display: flex;
  gap: 12px;
  align-items: center;
}

.ambiente span{
  font-family: 'Roboto', 'sans-serif';
  color: #1a2054;
  font-weight: 400;
}

.input-codI span, .input-codT span{
  font-family: "Bai Jamjuree", sans-serif;
  color:#1e215a;
  font-size: 13px;
  font-weight: 500;
  margin-right: 5px;
}

.alerta-e-msg {
  display: block;
  font-family: "Bai Jamjuree", sans-serif;
  color:#1e215a;
  font-size: 13px;
  font-weight: 500;
  margin-right: 5px;
  margin-top: 8px;
}

.ambiente h1{
  font-family: 'Chakra Petch', 'sans-serif';
  font-size: 21px;
  color: #242a58;
  padding-bottom: 5px;
  border-bottom: 1.5px solid rgb(29, 30, 84);
}

.input-cod{
  border-radius: 3px;
  outline: none;
  width: 30px;
  height: 20px;
  border: 1.2px solid rgb(16, 16, 61);
  padding: 1px;
  text-align: center;
}

.ativa-btn-deteccao{
  background-color: #1f325c;
  text-decoration: none;
  padding: 4px 8px;
  color: #cfd2e4;
  border-radius: 3px;
  font-family: 'Roboto', 'sans-serif';
  font-size: 13px;
  letter-spacing: 0.2px;
  transition: 0.3s;
  margin-left: 16px;
}

.ativa-btn-deteccao:hover{
  background-color: #101f41;
}

.inputs-envio-alerta{
  width: 100%;
  margin: 1px auto 8px auto;
}

.inputs-envio-alerta p {
  font-family: "Bai Jamjuree", sans-serif;
  color:#1e215a;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
  margin-top: 4px;
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
  bottom: 10px;
  overflow: hidden;
  width: fit-content;
  height: 35px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  background-color: #535c84;
  color:#d8d8ea;
  font-family: 'Roboto', 'sans-serif';
  font-size: 13px;
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
  color: #416cb6;
  font-weight: 600;
}

.obs2 {
  font-family: "Bai Jamjuree", sans-serif;
  display: block;
  font-size: 13px;
  color: #112a53;
  margin-top: 3px;
  margin-left: 14px;
  font-weight: 500;
}

@media (min-height: 700px) {
  .deteccao-falhas-input {
    margin-top: 25px;
  }
  .ambiente .alerta-emitido {
    margin-top: 14px;
  }
  .inputs-envio-alerta {
    margin: 24px auto 8px auto;
  }
  .alert-box {
    bottom: 20px;
  }
}
</style>
