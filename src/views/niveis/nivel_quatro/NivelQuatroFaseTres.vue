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
                <p>Cód. I. = {{ caso.entradaI }} e Cód. T. = {{ caso.entradaT }}</p>
                <p>{{ caso.saida }}</p>
              </div>
            </div>
          </div>
        </div>

        <span id="aviso">* Obs: N/A = sem código retornado e X = qualquer código</span>
        <span class="obs2">* Clique <span class="link_modal" @click="openModalDados()">aqui</span> para ver os dados necessários para o teste.</span>

        <a href="#" class="consultar_especificacao" @click="open_modal">
          <img src="@/assets/img/respostas.png" alt="consultar especificação" />
        </a>
      </div>

      <div class="execucao-casos-teste">
        <h1>Ambiente para execução dos casos de teste</h1>
        <div class="ambiente">
          <div class="interrupcoes-container">
            <h3 class="titulo-modulo">Monitoramento de interrupções de corrente</h3>
            <div class="interrrup-entradas">
              <span>Digite a quantidade de interrupções:</span>
              <input type="number" @input="validateInputInterrup()" class="input-interrupcoes" v-model="interrupcoes" :disabled="isDivVisible1">
              <a href="#" class="ativa-btn-interrup" :class="{ disabled: isDivVisible1 }" @click="retorno_interrup">OK</a>
            </div>
            <span id="codigo-retornado-interrup">Código retornado: <b>{{codigo_interrup}}</b></span>

          <div class="alert-box_interrup" v-if="isDivVisible1">
            {{ texto_alerta_interrup }}
            <div class="progress-bar" :style="{ width: progressBarWidth + '%' }"></div>
          </div>

          </div>

          <div class="tensao-container">
            <h3 class="titulo-modulo">Monitoramento de tensão</h3>
            <div class="tensao-entradas">
              <span>Digite a tensão:</span>
              <input type="number" @input="validateInputTensao()" class="input-tensao" v-model="tensao" :disabled="isDivVisible2">
              <a href="#" class="ativa-btn-tensao" :class="{ disabled: isDivVisible2 }" @click="retorno_tensao">OK</a>
            </div>
            <span id="codigo-retornado-tensao">Código retornado: <b>{{codigo_tensao}}</b></span>

          <div class="alert-box_tensao" v-if="isDivVisible2">
            {{ texto_alerta_tensao }}
            <div class="progress-bar" :style="{ width: progressBarWidth2 + '%' }"></div>
          </div>

          </div>

          <div class="deteccao-falhas-container">
            <h3 class="titulo-modulo">Detecção de falhas de energia</h3>
            <span class="alerta-emitido"><b>Alerta emitido:</b> {{ alerta }}</span>
            <span class="mensagem">{{ mensagem }}</span>
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
      title="Submódulo de detecção de falhas na energia"
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
import { store } from "@/store";

export default {
  name: "NivelQuatroFaseTres",
  components: {
    BarraSuperior,
    ModalEspecificacao,
    ModalConfirmaDica,
    ModalDica,
    ModalDados
  },
  data() {
    return {
      paragrafos: [
        'O submódulo de detecção de falhas de energia é responsável por emitir alertas e permitir que os geradores sejam ativados, com base nos códigos retornados pelos submódulos de monitoramento de interrupções de corrente e de monitoramento de tensão.',
        'As possibilidades são as seguintes:',
        '1. Sem falhas:',
        '- Se ambos os submódulos retornarem código 0, nenhum alerta deve ser emitido e a mensagem “Sem falhas na energia elétrica” deve ser exibida.',
        '2. Falha de energia com baixa tensão:',
        '- Se o submódulo de monitoramento de interrupções de corrente retornar código 0 ou 1 e o submódulo de monitoramento de tensão retornar código 1, deve ser gerado um alerta de falha de energia. A senha para ativar os geradores deve ser solicitada. Inserindo a senha correta ("ger995"), os geradores devem ser ativados com sucesso.',
        '3. Alta tensão:',
        '- Se o submódulo de monitoramento de interrupções de corrente retornar código 0 e o submódulo de monitoramento de tensão retornar código 2, deve ser gerado um alerta de alta tensão.',
        '4. Instabilidade de energia:',
        '- Se o submódulo de monitoramento de interrupções de corrente retornar código 1 e o submódulo de monitoramento de tensão retornar código 0, deve ser gerado um alerta de instabilidade de energia.',
        '5. Instabilidade de energia e alta tensão:',
        '- Se o submódulo de monitoramento de interrupções de corrente retornar código 1 e o submódulo de monitoramento de tensão retornar código 2, deve ser gerado um alerta de instabilidade de energia e alta tensão.',
        '6. Erro no(s) submódulo(s):',
        '- Se nenhum código for retornado por algum dos submódulos, nenhum alerta deve ser emitido e deve ser exibida a mensagem “Erro no(s) submódulo(s) xxx (e yyy)”.'
      ],
      listaConteudos: [
        {
          titulo: 'Submódulo de monitoramento de interrupções de corrente',
          paragrafos: [
            ' - Qtd. Interrupções < 0 -> nenhum código deve ser retornado;',
            ' - Qtd. Interrupções >= 0 e <= 3 -> código 0 deve ser retornado;',
            ' - Qtd. Interrupções > 3 -> código 1 deve ser retornado.',
          ]
        },
        {
          titulo: 'Submódulo de monitoramento de tensão',
          paragrafos: [
            '- Tensão < 0V ou > 10000V -> nenhum código deve ser retornado;',
            '- Tensão >= 0V e < 100V -> código 1 deve ser retornado;',
            '- Tensão >= 100V e <= 240V -> código 0 deve ser retornado;',
            '- Tensão > 240V e <= 10000V -> código 2 deve ser retornado.',
          ]
        },
        {
          titulo: 'Submódulo de ativação de geradores',
          paragrafos: [
            '- Senha = ger995 deve ativar os geradores.',
          ]
        }
      ],
      dica: '',
      missao: "4",
      fase: "3",
      currentLevel: 2,
      showModal: false,
      showModal2: false,
      showModal3: false,
      abriuDica: false,
      casosTeste: [],
      texto_alerta_interrup: '',
      interrupcoes: '',
      texto_alerta_tensao: '',
      tensao: '',
      falha1_encontrada: false,
      falha2_encontrada: false,
      texto_alerta: '',
      isDivVisible1: false,
      isDivVisible2: false,
      progressBarWidth: 100,
      progressBarWidth2: 100,
      codigo_interrup: '',
      codigo_tensao: '',
      show_modalDados: false,
      retorno_interrup: null,
      retorno_tensao: null
    };
  },
  mounted() {
    this.casosTeste = [...store.respostas_fase_dois.cts_missao_quatro];

    if (store.pontuacaoJogador.pont_fases_niveis[1][2] != 0) {
        this.retorno_interrup = this.retorno_interrup_sem_falha;
    }
    else {
        this.retorno_interrup = this.retorno_interrup_com_falha;
    }

    if(store.respostas_fase_tres.falhas_encontradas_missao_tres[0] === true && store.respostas_fase_tres.falhas_encontradas_missao_tres[1] == false) {
      this.retorno_tensao = this.retorno_tensao_somente_segunda_falha;
    }
    else if(store.respostas_fase_tres.falhas_encontradas_missao_tres[0] === false && store.respostas_fase_tres.falhas_encontradas_missao_tres[1] == true) {
      this.retorno_tensao = this.retorno_tensao_somente_primeira_falha;
    }
    else if(store.respostas_fase_tres.falhas_encontradas_missao_tres[0] === false && store.respostas_fase_tres.falhas_encontradas_missao_tres[1] == false) {
      this.retorno_tensao = this.retorno_tensao_com_duas_falhas;
    }
    else {
      this.retorno_tensao = this.retorno_tensao_nenhuma_falha;
    }
  },
  computed: {
    alerta() {
      if(this.interrupcoes !== '' && this.tensao !== '') {
        if(this.codigo_interrup === '0' && this.codigo_tensao === '0') {
          return '';
        }
        else if (this.codigo_interrup === '1' && this.codigo_tensao === '1') {
          return 'Alerta 12341: Falha de energia.';
        }
        else if (this.codigo_interrup === '0' && this.codigo_tensao === '2') {
          return 'Alerta 98012: Alta tensão - risco de problemas no sistema elétrico.';
        }
        else if ((this.codigo_interrup === '1' && this.codigo_tensao === '0') || (this.codigo_interrup === '0' && this.codigo_tensao === '1')) {
          return 'Alerta 65323: Instabilidade no fornecimento de energia devido a várias interrupções.';
        }
        else if (this.codigo_interrup === '1' && this.codigo_tensao === '2') {
          return 'Alerta 37892: Instabilidade no fornecimento de energia e alta tensão.';
        }
        else {
          return '';

        }
      }
      else {
        return '';
      }
    },
    mensagem() {
      if(this.interrupcoes !== '' && this.tensao !== '') {
        if(this.codigo_interrup === '0' && this.codigo_tensao === '0') {
          return 'Sem falhas na energia elétrica.';
        }
        else if (this.codigo_interrup === '' && this.codigo_tensao !== '') {
          return 'Erro no submódulo de monitoramento de interrupções!';
        }
        else if (this.codigo_interrup !== '' && this.codigo_tensao === '') {
          return 'Erro no submódulo de monitoramento de tensão!';
        }
        else if (this.codigo_interrup === '' && this.codigo_tensao === '') {
          return 'Erro nos submódulos de monitoramento de interrupção e de tensão!';
        }
        else {
          return '';
        }
      }
      else {
        return '';
      }
    }
  },
  methods: {
    validateInputInterrup() {
      if (this.interrupcoes < -1000 || this.interrupcoes > 1000) {
        this.interrupcoes = '';
      }
    },
    validateInputTensao() {
      if (this.tensao < -100000 || this.tensao > 100000) {
        this.tensao = '';
      }
    },
    openModalDados() {
      this.show_modalDados = true;
    },
    open_modal(event) {
      event.preventDefault();
      this.showModal = true;
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
        this.dica = 'Uma combinação específica de códigos pode estar sendo invertida na integração dos submódulos, fazendo com que o código retornado pelo submódulo de interrupções seja confundido com o do submódulo de tensão, e vice-versa, resultando em um comportamento inesperado para o caso.';
      }
      else if (this.falha1_encontrada === true && this.falha2_encontrada === false) {
        this.dica = 'Quando é necessário, é possível ativar os geradores?';
      }
      else if (this.falha1_encontrada === true && this.falha2_encontrada === true) {
        this.dica = 'Não há nada mais para procurar por aqui :)';
      }
      else {
        this.dica = 'Uma combinação específica de códigos pode estar sendo invertida na integração dos submódulos, fazendo com que o código retornado pelo submódulo de interrupções seja confundido com o do submódulo de tensão, e vice-versa, resultando em um comportamento inesperado para o caso.';
      }
    },
    abrirDica() {
      this.abriuDica = true;
      store.dicas.dicas -= 1;
      this.defineDica();
      this.showModal2 = false;
      this.showModal3 = true;
    },
    showDiv1() {
      this.isDivVisible1 = true;
      this.progressBarWidth = 100;
      this.startProgressBar();

      setTimeout(() => {
        this.isDivVisible1 = false;
      }, 5000);
    },
    showDiv2() {
      this.isDivVisible2 = true;
      this.progressBarWidth2 = 100;
      this.startProgressBar2();

      setTimeout(() => {
        this.isDivVisible2 = false;
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
    startProgressBar2() {
      let duration = 5000;
      let interval = 100;
      let decrement = 100 / (duration / interval);

      let progressInterval = setInterval(() => {
        if (this.progressBarWidth2 > 0) {
          this.progressBarWidth2 -= decrement;
        } else {
          clearInterval(progressInterval);
        }
      }, interval);
    },
    retorno_interrup_com_falha(event) {
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
        this.codigo_interrup = '';
        this.texto_alerta_interrup = "Sensor quebrado!";
        this.showDiv1();
      }

      else if(this.interrupcoes >= 0 && this.interrupcoes <= 4) {
        this.codigo_interrup = '0';
      }

      else {
        this.codigo_interrup = '1';
      }

    },
     retorno_interrup_sem_falha(event) {
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
        this.codigo_interrup = '';
        this.texto_alerta_interrup = "Sensor quebrado!";
        this.showDiv1();
      }

      else if(this.interrupcoes >= 0 && this.interrupcoes <= 3) {
        this.codigo_interrup = '0';
      }

      else {
        this.codigo_interrup = '1';
      }

    },
    retorno_tensao_com_duas_falhas(event) {
      event.preventDefault();

      if(this.tensao === null || this.tensao === '') {
        alert('O sensor nunca retorna valores vazios!');
        return;
      } 

      if(!Number.isInteger(this.tensao)) {
        alert('O sensor nunca retorna valores que não sejam números inteiros!');
        return;
      }
      
      if(this.tensao < 0 || this.tensao > 10001 ) {
        this.codigo_tensao = '';
        this.texto_alerta_tensao = "Sensor quebrado!";
        this.showDiv2();
      }

      else if(this.tensao > 100 && this.tensao <= 240) {
        this.codigo_tensao = '0';
      }

      else if(this.tensao <= 100 && this.tensao >= 0) {
        this.codigo_tensao = '1';
      }

      else {
        this.codigo_tensao = '2';
      }

    },
    retorno_tensao_somente_segunda_falha(event) {
      event.preventDefault();

      if(this.tensao === null || this.tensao === '') {
        alert('O sensor nunca retorna valores vazios!');
        return;
      } 

      if(!Number.isInteger(this.tensao)) {
        alert('O sensor nunca retorna valores que não sejam números inteiros!');
        return;
      }
      
      if(this.tensao < 0 || this.tensao > 10001 ) {
        this.codigo_tensao = '';
        this.texto_alerta_tensao = "Sensor quebrado!";
        this.showDiv2();
      }

      else if(this.tensao >= 100 && this.tensao <= 240) {
        this.codigo_tensao = '0';
      }

      else if(this.tensao < 100 && this.tensao >= 0) {
        this.codigo_tensao = '1';
      }

      else {
        this.codigo_tensao = '2';
      }

    },
     retorno_tensao_somente_primeira_falha(event) {
      event.preventDefault();

      if(this.tensao === null || this.tensao === '') {
        alert('O sensor nunca retorna valores vazios!');
        return;
      } 

      if(!Number.isInteger(this.tensao)) {
        alert('O sensor nunca retorna valores que não sejam números inteiros!');
        return;
      }
      
      if(this.tensao < 0 || this.tensao > 10000 ) {
        this.codigo_tensao = '';
        this.texto_alerta_tensao = "Sensor quebrado!";
        this.showDiv2();
      }

      else if(this.tensao > 100 && this.tensao <= 240) {
        this.codigo_tensao = '0';
      }

      else if(this.tensao <= 100 && this.tensao >= 0) {
        this.codigo_tensao = '1';
      }

      else {
        this.codigo_tensao = '2';
      }

    },
    retorno_tensao_nenhuma_falha(event) {
      event.preventDefault();

      if(this.tensao === null || this.tensao === '') {
        alert('O sensor nunca retorna valores vazios!');
        return;
      } 

      if(!Number.isInteger(this.tensao)) {
        alert('O sensor nunca retorna valores que não sejam números inteiros!');
        return;
      }
      
      if(this.tensao < 0 || this.tensao > 10000 ) {
        this.codigo_tensao = '';
        this.texto_alerta_tensao = "Sensor quebrado!";
        this.showDiv2();
      }

      else if(this.tensao >= 100 && this.tensao <= 240) {
        this.codigo_tensao = '0';
      }

      else if(this.tensao < 100 && this.tensao >= 0) {
        this.codigo_tensao = '1';
      }

      else {
        this.codigo_tensao = '2';
      }

    },
    validaFalha(event) {
      event.preventDefault();

      if(this.tensao === '' || this.interrupcoes === '') {
        alert("Preencha e dê OK nos campos de interrupção e/ou tensão!");
        return;
      }
      if (!((this.codigo_interrup === '0' && this.codigo_tensao === '1') || (this.codigo_interrup === '1' && this.codigo_tensao === '1'))) {
        alert("Isto não é uma falha!");
        return;
      }
      if((this.codigo_interrup === '0' && this.codigo_tensao === '1' && this.falha1_encontrada) || (this.codigo_interrup === '1' && this.codigo_tensao === '1' && this.falha2_encontrada)) {
        alert("Falha já reportada!");
        return;
      }

      if(this.codigo_interrup === '0' && this.codigo_tensao === '1') {
        this.falha1_encontrada = true;
      }
      else {
        this.falha2_encontrada = true;
      }
      alert("Falha reportada com sucesso!");

    },
    validarRespostas(event) {
      event.preventDefault();

      if(this.falha1_encontrada) {
        store.pontuacaoJogador.pont_fases_niveis[3][2] += 15;
      }
      if(this.falha2_encontrada) {
        store.pontuacaoJogador.pont_fases_niveis[3][2] += 15;
      }

      store.respostas_fase_tres.falhas_encontradas_missao_quatro = [this.falha1_encontrada, this.falha2_encontrada];
      store.pontuacaoJogador.atualizarPontuacao(3);
      this.$router.push("/nivel-quatro-feedback");
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
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  position: absolute;
  left: -168px;
  bottom: 50%;
  transform: translateY(50%);
  white-space: nowrap;
  background-color: #434f70;
  color: #e5e6f2;
  padding: 6px 10px;
  border-radius: 5px;
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
.consultar_especificacao:hover,
.dica:hover {
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
  padding: 6px 14px;
  padding-top: 4px;
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

.alert-box_interrup, .alert-box_tensao{
  position: absolute;
  top: 34px;
  left: 420px;
  overflow: hidden;
  width: fit-content;
  height: 38px;
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

.interrupcoes-container, .tensao-container {
  position: relative;
  height: 32%;
  border-bottom: 2px solid rgb(13, 8, 46);
}

.deteccao-falhas-container {
  height: 36%;
}

.titulo-modulo {
  font-family: "Bai Jamjuree", sans-serif;
  color:#1e215a;
  font-size: 15px;
  text-align: center;
  margin-top: 6px;
}

.deteccao-falhas-container .titulo-modulo {
  margin-bottom: 5px;
}

.interrrup-entradas, .tensao-entradas {
  margin-top: 10px;
}

.interrrup-entradas span, .tensao-entradas span, .deteccao-falhas-container span {
  font-family: "Bai Jamjuree", sans-serif;
  color:#1e215a;
  font-size: 13px;
  font-weight: 500;
  margin-right: 5px;
}

.mensagem {
  display: block;
  margin-top: 9px;
}

.deteccao-falhas-container span {
  font-size: 14px;
}

.input-interrupcoes, .input-tensao{
  border-radius: 3px;
  outline: none;
  border: 1.2px solid rgb(16, 16, 61);
  padding: 2px;
  width: 50px;
  height: 25px;
  color: #060f18;
  text-align: center;
  font-weight: 500;
  margin-right: 15px;
  font-size: 13px;
}

.ativa-btn-interrup, .ativa-btn-tensao{
  background-color: #1f325c;
  text-decoration: none;
  padding: 5px 8px;
  color: #cfd2e4;
  border-radius: 3px;
  font-family: 'Roboto', 'sans-serif';
  font-size: 14px;
  letter-spacing: 0.2px;
  transition: 0.3s;
}

.ativa-btn-interrup:hover, .ativa-btn-tensao:hover{
  background-color: #101f41;
}

#codigo-retornado-interrup, #codigo-retornado-tensao {
  display: inline-block;
  font-family: "Bai Jamjuree", sans-serif;
  color:#1e215a;
  font-size: 13px;
  font-weight: 500;
  margin-top: 5px;
}

.link_modal {
  text-decoration: underline;
  cursor: pointer;
  color: #3c65ac;
  font-weight: 600;
}

.obs2 {
  font-family: "Bai Jamjuree", sans-serif;
  display: block;
  font-size: 13px;
  color: #112a53;
  margin-top: 4px;
  margin-left: 14px;
  font-weight: 500;
}

@media (min-height: 700px) {
  .interrrup-entradas, .tensao-entradas {
    margin-top: 18px;
  }
  #codigo-retornado-interrup, #codigo-retornado-tensao {
    margin-top: 10px;
  }
  .deteccao-falhas-container .alerta-emitido {
    display: inline-block;
    margin-top: 9px;
  }
}
</style>
