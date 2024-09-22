<template>
  <div class="main_container">
    <BarraSuperior
      :currentLevel="currentLevel"
      :missao="missao"
      :fase="fase"
    />

    <div class="level__content">
      <Especificacao
        :titulo_especificacao="titulo_especificacao"
        :paragrafos="paragrafos"
      />
      <div class="fase-criterio">
        <h1>Desafio de uso dos critérios da técnica funcional</h1>
        <p>De acordo com a especificação e o critério de tabela de decisão, selecione as opções corretas para as entradas Cód. I. e Cód T. (códigos retornados pelos submódulos de monitoramento de interrupções e tensão) em cada coluna da tabela abaixo que resultam nas respectivas <span @click="openModal()" class="link_modal">ações que estão na linha "Ações"</span>.</p>
        <div class="exercicio">

        <div class="ex-tabela">

        <div class="col">
          <div class="texto-destaque condicoes">Entradas</div>
          <div class="cod">Cód. I.</div>
          <div class="cod">Cód. T.</div>
          <div class="texto-destaque acoes">Ações</div>
        </div>

        <div class="col">
          <div class="regra">Regra <br> 1</div>

          <div class="select-regra">
            <select name="select-regra1" v-model="selects[0]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra2" v-model="selects[1]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="resp">A</div>
        </div>

        <div class="col">
          <div class="regra">Regra 2</div>

          <div class="select-regra">
            <select name="select-regra3" v-model="selects[2]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra4" v-model="selects[3]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="resp">B</div>
        </div>

        <div class="col">
          <div class="regra">Regra 3</div>

          <div class="select-regra">
            <select name="select-regra5" v-model="selects[4]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra6" v-model="selects[5]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="resp">C</div>
        </div>

        <div class="col">
          <div class="regra">Regra 4</div>

          <div class="select-regra">
            <select name="select-regra7" v-model="selects[6]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra8" v-model="selects[7]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="resp">D</div>
        </div>

         <div class="col">
          <div class="regra">Regra 5</div>

          <div class="select-regra">
            <select name="select-regra9" v-model="selects[8]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra10" v-model="selects[9]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="resp">B</div>
        </div>

        <div class="col">
          <div class="regra">Regra 6</div>

          <div class="select-regra">
            <select name="select-regra11" v-model="selects[10]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra12" v-model="selects[11]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="resp">E</div>
        </div>

         <div class="col">
          <div class="regra">Regra 7</div>

          <div class="select-regra">
            <select name="select-regra13" v-model="selects[12]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra14" v-model="selects[13]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="resp">F</div>
        </div>

        <div class="col">
          <div class="regra">Regra 8</div>

          <div class="select-regra">
            <select name="select-regra15" v-model="selects[14]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra16" v-model="selects[15]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="resp">G</div>
        </div>

        <div class="col">
          <div class="regra">Regra 9</div>

          <div class="select-regra">
            <select name="select-regra17" v-model="selects[16]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra18" v-model="selects[17]">
              <option value="default" selected>--</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="N/A">N/A</option>
              <option value="X">X</option>
            </select>
          </div>

          <div class="resp">H</div>
        </div>
      </div>
      <p class="obs">* Obs: N/A = sem código retornado e X = qualquer código</p>
      <p class="obs2">* Clique <span class="link_modal" @click="openModal()">aqui</span> ou no link do enunciado para ver o significado das ações que estão na tabela</p>
        </div>
      </div>
    </div>

    <a href="#" class="avancar-botao" @click="validarRespostas">
      <span>Finalizar & Avançar</span>
      <img src="@/assets/img/seta-avanca-nivel.png" alt="seta direita" />
    </a>

    <ModalAcoes
      :isVisible="showModal"
      @close="showModal = false"
      :paragrafos_modal="paragrafos_modal"
      :top="'5%'" 
      :left="'50%'"
    />

  </div>
</template>

<script>
import BarraSuperior from "@/components/niveis/BarraSuperior.vue";
import Especificacao from "@/components/niveis/Especificacao.vue";
import ModalAcoes from "@/components/niveis/ModalAcoes.vue";
import { store } from '@/store';

export default {
  name: 'NivelQuatroFaseUm',
  components: {
    BarraSuperior,
    Especificacao,
    ModalAcoes
  },
   data() {
    return {
      titulo_especificacao: 'Submódulo de detecção de falhas na energia',
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
      paragrafos_modal : [
        'A. Mensagem "Sem falhas na energia elétrica" exibida e nenhum alerta gerado;',
        'B. Alerta de falha de energia (alerta de id xxxx1) gerado e solicitação da senha para a ativação dos geradores;',
        'C. Alerta de alta tensão (alerta de id xxxx2) gerado;',
        'D. Alerta de instabilidade de energia (alerta de id xxxx3) gerado;',
        'E. Alerta de instabilidade de energia e alta tensão (alerta de id xxxx2) gerado;',
        'F. Mensagem "Erro no submódulo de monitoramento de interrupções" exibida;',
        'G. Mensagem "Erro no submódulo de monitoramento de tensão" exibida;',
        'H. Mensagem "Erro nos submódulos de monitoramento de interrupções e de tensão" exibida.'
      ],
      showModal: false,
      missao: '4',
      fase: '1',
      currentLevel: 2,
      selects: Array(18).fill("default"),
    };
  },
   methods: {
    validarRespostas(event) {
      event.preventDefault();

      if((this.selects[0] == 0 && this.selects[1] == 0) && (((this.selects[2] == 0 && this.selects[3] == 1) || (this.selects[2] == 1 && this.selects[3] == 1)) && (this.selects[2] != this.selects[8])) && (this.selects[4] == 0 && this.selects[5] == 2) && (this.selects[6] == 1 && this.selects[7] == 0) && (((this.selects[8] == 0 && this.selects[9] == 1) || (this.selects[8] == 1 && this.selects[9] == 1)) && (this.selects[8] != this.selects[2])) && (this.selects[10] == 1 && this.selects[11] == 2) && (this.selects[12] == 'N/A' && this.selects[13] == 'X') && (this.selects[14] == 'X' && this.selects[15] == 'N/A') && (this.selects[16] == 'N/A' && this.selects[17] == 'N/A')) {
        store.pontuacaoJogador.pont_fases_niveis[3][0] = 30;
      }

      store.respostas_fase_um.tabela_missao_quatro = [...this.selects];
      this.$router.push('/nivel-quatro-fase-dois');
    },
    openModal() {
      this.showModal = true;
    }
  }
}
</script>

<style scoped>
  .main_container{
    width: 100vw;
    height: 100vh;
    background-color: #d4d9e5;
  }

  .level__content{
    height: 88%;
    display: flex;
  }

  .fase-criterio{
    width: 53%;
    padding: 12px;
  }

  .fase-criterio h1{
    font-family: 'Iceland', sans-serif;
    color: #2e4778;
    text-align: center;
    font-size: 28px;
    margin-top: 4px;
  }

  .fase-criterio p{
    font-family: "Bai Jamjuree", sans-serif;
    font-size: 16.5px;
    margin-top: 24px;
    margin-left: 18px;
    color: #375087;
    font-weight: 500;
    line-height: 25px;
  }

  .exercicio{
    margin-top: 26px;
    margin-left: 5px;
    width: 98%;
    font-family: "Bai Jamjuree", sans-serif;
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

.avancar-botao:hover {
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

.ex-tabela {
  display: flex;
  justify-content: center;
}

.texto-destaque {
  font-weight: 600;
}

.col div {
  font-family: "Bai Jamjuree", sans-serif;
  color: #1a345f;
  font-size: 14px;
  padding: 6px;
}

.col .regra, .col .resp, .col .cod {
  text-align: center;
  font-weight: 500;
}

.select-regra select {
  border-radius: 4px;
  outline: none;
  font-size: 13px;
  color: #07142b;
  background-color: rgb(235, 236, 243);
  height: 1.12rem;
  font-weight: 500;
  font-family: "Bai Jamjuree", sans-serif;
  padding-left: 1px;
  text-align: center;
}

.col .condicoes {
  height: 48.8px;
  line-height: 30px;
  padding-left: 2px;
}

.col .acoes {
  padding-bottom: 5.47px;
}

.col .cod {
  padding-bottom: 6.8px;
  text-align: left;
}

.col:not(:last-child) div {
  border-right: 0.125rem solid #1a345f;
}

.col > div:not(:last-child) {
  border-bottom: 0.125rem solid #1a345f;
}

.link_modal {
  text-decoration: underline;
  cursor: pointer;
  color: #3861a8;
  font-weight: 600;
}

.level__content .fase-criterio .obs {
  font-size: 14px;
  color: #112a53;
  margin-top: 20px;
}

.level__content .fase-criterio .obs2 {
  font-size: 14px;
  color: #112a53;
  margin-top: 2px;
}
</style>