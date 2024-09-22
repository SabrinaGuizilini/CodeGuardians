<template>
  <div class="main_container">
    <BarraSuperior :currentLevel="currentLevel" :missao="missao" :fase="fase" />

    <div class="level__content">
      <div class="artefato">
        <h1>Artefato da fase anterior</h1>
        <h2>Tabela de decisão</h2>
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
            <p class="valor-tabela">{{ valores_tabela[0] }}</p>
          </div>

          <div class="select-regra">
            <p class="valor-tabela">{{ valores_tabela[1] }}</p>
          </div>

          <div class="resp">A</div>
        </div>

        <div class="col">
          <div class="regra">Regra 2</div>

          <div class="select-regra">
            <p class="valor-tabela">{{ valores_tabela[2] }}</p>
          </div>

          <div class="select-regra">
            <p class="valor-tabela">{{ valores_tabela[3] }}</p>
          </div>

          <div class="resp">B</div>
        </div>

        <div class="col">
          <div class="regra">Regra 3</div>

          <div class="select-regra">
            <p class="valor-tabela">{{ valores_tabela[4] }}</p>
          </div>

          <div class="select-regra">
            <p class="valor-tabela">{{ valores_tabela[5] }}</p>
          </div>

          <div class="resp">C</div>
        </div>

        <div class="col">
          <div class="regra">Regra 4</div>

          <div class="select-regra">
            <p class="valor-tabela">{{ valores_tabela[6] }}</p>
          </div>

          <div class="select-regra">
            <p class="valor-tabela">{{ valores_tabela[7] }}</p>
          </div>

          <div class="resp">D</div>
        </div>

         <div class="col">
          <div class="regra">Regra 5</div>

          <div class="select-regra">
            <p class="valor-tabela">{{ valores_tabela[8] }}</p>
          </div>

          <div class="select-regra">
            <p class="valor-tabela">{{ valores_tabela[9] }}</p>
          </div>

          <div class="resp">B</div>
        </div>

        <div class="col">
          <div class="regra">Regra 6</div>

          <div class="select-regra">
            <p class="valor-tabela">{{ valores_tabela[10] }}</p>
          </div>

          <div class="select-regra">
            <p class="valor-tabela">{{ valores_tabela[11] }}</p>
          </div>

          <div class="resp">E</div>
        </div>

         <div class="col">
          <div class="regra">Regra 7</div>

          <div class="select-regra">
            <p class="valor-tabela">{{ valores_tabela[12] }}</p>
          </div>

          <div class="select-regra">
            <p class="valor-tabela">{{ valores_tabela[13] }}</p>
          </div>

          <div class="resp">F</div>
        </div>

        <div class="col">
          <div class="regra">Regra 8</div>

          <div class="select-regra">
            <p class="valor-tabela">{{ valores_tabela[14] }}</p>
          </div>

          <div class="select-regra">
            <p class="valor-tabela">{{ valores_tabela[15] }}</p>
          </div>

          <div class="resp">G</div>
        </div>

        <div class="col">
          <div class="regra" style="border-right:none;">Regra 9</div>

          <div class="select-regra" style="border-right:none;">
            <p class="valor-tabela">{{ valores_tabela[16] }}</p>
          </div>

          <div class="select-regra" style="border-right:none;">
            <p class="valor-tabela">{{ valores_tabela[17] }}</p>
          </div>

          <div class="resp" style="border-right:none;">H</div>
        </div>
        <a href="#" class="consultar_especificacao" @click="open_modal">
          <img src="@/assets/img/respostas.png" alt="consultar especificação" />
        </a>
      </div>
      <p class="obs">* Obs: N/A = sem código retornado e X = qualquer código</p>
      <p class="obs2">* Clique <span class="link_modal" @click="openModal2()">aqui</span> para ver o significado das ações/saídas esperadas</p>
      </div>

      <div class="casos-teste">
        <h1>Criação dos casos de teste</h1>

        <div class="container-criacao-CT">
          <div class="entrada">
            <span>Entradas</span>

            <div class="input_entrada input1">
              <span>Cód. I. = </span>
              <select name="entrada-cod-i" v-model="entradaI">
                <option value="default" selected>--</option>
                <option
                    v-for="option in options_entradasI"
                    :key="option.value"
                    :value="option.value"
                  >
                {{ option.label }}
              </option>
              </select>
            </div>

            <div class="input_entrada input2">
              <span>Cód. T. = </span>
              <select name="entrada-cod-t" v-model="entradaT">
                <option value="default" selected>--</option>
                  <option
                    v-for="option in options_entradasT"
                    :key="option.value"
                    :value="option.value"
                  >
                {{ option.label }}
              </option>
              </select>
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
            <span>Entradas</span>
            <span>Saída esperada</span>
          </div>

          <div class="CTs">
            <div class="CT" v-for="(caso, index) in casosTeste" :key="index">
              <div class="entrada-saida">
                <p>Cód. I. = {{ caso.entradaI }} e Cód. T. = {{ caso.entradaT }}</p>
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
      title="Submódulo de detecção de falhas na energia"
      :paragrafos="paragrafos"
    />

    <ModalAcoes
      :isVisible="showModal2"
      @close="showModal2 = false"
      :paragrafos_modal="paragrafos_modal"
      :top="'1%'" 
      :left="'6%'"
    />
  </div>
</template>

<script>
import BarraSuperior from "@/components/niveis/BarraSuperior.vue";
import ModalEspecificacao from "@/components/niveis/ModalEspecificacao.vue";
import ModalAcoes from "@/components/niveis/ModalAcoes.vue";
import { store } from "@/store";

export default {
  name: "NivelQuatroFaseDois",
  components: {
    BarraSuperior,
    ModalEspecificacao,
    ModalAcoes
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
      missao: "4",
      fase: "2",
      currentLevel: 2,
      valores_tabela: [],
      showModal: false,
      showModal2: false,
      entradaI: "default",
      entradaT: "default",
      saida: "default",
      pontuacao: 0,
      casosTeste: [],
      options_entradasI: [
        { value: "0", label: "0" },
        { value: "X", label: "X" },
        { value: "N/A", label: "N/A" },
        { value: "2", label: "2" },
        { value: "1", label: "1" },
      ],
      options_entradasT: [
        { value: "2", label: "2" },
        { value: "1", label: "1" },
        { value: "N/A", label: "N/A" },
        { value: "0", label: "0" },
        { value: "X", label: "X" },
      ],
      options_saidas: [
        {
          value: "A. Mensagem 'Sem falhas na energia elétrica' exibida e nenhum alerta gerado",
          label: "A. Mensagem 'Sem falhas na energia elétrica' exibida e nenhum alerta gerado",
        },
        {
          value: "B. Alerta de falha de energia (alerta de id xxxx1) gerado e solicitação da senha para a ativação dos geradores",
          label: "B. Alerta de falha de energia (alerta de id xxxx1) gerado e solicitação da senha para a ativação dos geradores",
        },
        {
          value: "C. Alerta de alta tensão (alerta de id xxxx2) gerado",
          label: "C. Alerta de alta tensão (alerta de id xxxx2) gerado",
        },
        {
          value: "D. Alerta de instabilidade de energia (alerta de id xxxx3) gerado",
          label: "D. Alerta de instabilidade de energia (alerta de id xxxx3) gerado",
        },
        {
          value: "E. Alerta de instabilidade de energia e alta tensão (alerta de id xxxx2) gerado",
          label: "E. Alerta de instabilidade de energia e alta tensão (alerta de id xxxx2) gerado",
        },
        {
          value: "F. Mensagem 'Erro no submódulo de monitoramento de interrupções' exibida",
          label: "F. Mensagem 'Erro no submódulo de monitoramento de interrupções' exibida",
        },
        {
          value: "G. Mensagem 'Erro no submódulo de monitoramento de tensão' exibida",
          label: "G. Mensagem 'Erro no submódulo de monitoramento de tensão' exibida",
        },
        {
          value: "H. Mensagem 'Erro nos submódulos de monitoramento de interrupções e de tensão' exibida",
          label: "H. Mensagem 'Erro nos submódulos de monitoramento de interrupções e de tensão' exibida",
        },
      ],
    };
  },
  mounted() {
    this.valores_tabela = [...store.respostas_fase_um.tabela_missao_quatro];
    this.valores_tabela.forEach((item, index) => {
      if (item === 'default') {
       this.valores_tabela[index] = '-';
      }
    });
  },
  methods: {
    open_modal(event) {
      event.preventDefault();
      this.showModal = true;
    },
    openModal2() {
      this.showModal2 = true;
    },
    addCasoTeste(event) {
      event.preventDefault();
      if (this.entradaI !== "default" && this.entradaT !== "default" && this.saida !== "default") {
        const novoCasoTeste = {
          entradaI: this.entradaI,
          entradaT: this.entradaT,
          saida: this.saida,
        };

        const casoRepetido = this.casosTeste.some(
          (caso) =>
            caso.entradaI === novoCasoTeste.entradaI &&
            caso.entradaT === novoCasoTeste.entradaT &&
            caso.saida === novoCasoTeste.saida
        );

        if (casoRepetido) {
          alert("Caso de teste repetido!");
        } else {
          this.casosTeste.push(novoCasoTeste);
        }

        this.entradaI = "default";
        this.entradaT = "default";
        this.saida = "default";
      } else {
        alert("Selecione as entradas e a saída esperadas!");
      }
    },
    removeCasoTeste(index) {
      this.casosTeste.splice(index, 1);
    },
    validarRespostas(event) {
      event.preventDefault();
      this.pontuacao = 0;

      this.casosTeste.forEach((caso) => {
        if((caso.entradaI == '0' && caso.entradaT == '0' && caso.saida == "A. Mensagem 'Sem falhas na energia elétrica' exibida e nenhum alerta gerado") || (caso.entradaI == '0' && caso.entradaT == '1' && caso.saida == "B. Alerta de falha de energia (alerta de id xxxx1) gerado e solicitação da senha para a ativação dos geradores") ||  (caso.entradaI == '0' && caso.entradaT == '2' && caso.saida == "C. Alerta de alta tensão (alerta de id xxxx2) gerado") || (caso.entradaI == '1' && caso.entradaT == '0' && caso.saida == "D. Alerta de instabilidade de energia (alerta de id xxxx3) gerado") || (caso.entradaI == '1' && caso.entradaT == '1' && caso.saida == "B. Alerta de falha de energia (alerta de id xxxx1) gerado e solicitação da senha para a ativação dos geradores") || (caso.entradaI == '1' && caso.entradaT == '2' && caso.saida == "E. Alerta de instabilidade de energia e alta tensão (alerta de id xxxx2) gerado") || (caso.entradaI == 'N/A' && caso.entradaT == 'X' && caso.saida == "F. Mensagem 'Erro no submódulo de monitoramento de interrupções' exibida") || (caso.entradaI == 'X' && caso.entradaT == 'N/A' && caso.saida == "G. Mensagem 'Erro no submódulo de monitoramento de tensão' exibida") || (caso.entradaI == 'N/A' && caso.entradaT == 'N/A' && caso.saida == "H. Mensagem 'Erro nos submódulos de monitoramento de interrupções e de tensão' exibida")) {
          this.pontuacao += 5;
          store.respostas_fase_dois.correcao_missao_quatro.push(true);
        }
        else {
           this.pontuacao -= 5;
           store.respostas_fase_dois.correcao_missao_quatro.push(false);
        }
      });

      store.respostas_fase_dois.cts_missao_quatro = [...this.casosTeste];
      store.pontuacaoJogador.pont_fases_niveis[3][1] = this.pontuacao;

      this.$router.push("/nivel-quatro-fase-tres");
      
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
  align-items: first baseline;
  gap: 30px;
  font-family: "Bai Jamjuree", sans-serif;
  margin-top: 32px;
}

.entrada span,
.saida-esperada span {
  margin-bottom: 8px;
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
  align-self: center;
}

.add-CT:hover {
  background-color: #030620;
}

.entradas-select,
.saidas-select {
  padding: 0.8rem;
  border-radius: 0.25rem;
  outline: none;
  font-size: 0.85rem;
  color: #0d2041;
  background-color: rgb(227, 229, 239);
  font-family: "Bai Jamjuree", sans-serif;
  width: 220px;
  border: 1.3px solid rgb(13, 33, 65);
}

.saidas-select option{
  text-align: center;
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
  margin-top: 13px;
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

.artefato .ex-tabela {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.artefato .texto-destaque {
  font-weight: 600;
}

.artefato .col div {
  font-family: "Bai Jamjuree", sans-serif;
  color: #1a345f;
  font-size: 14px;
  padding: 6px;
}

.artefato .col .regra, .artefato .col .resp, .artefato .col .cod {
  text-align: center;
  font-weight: 500;
}

.artefato .col .valor-tabela {
  text-align: center;
  font-weight: 500;
  font-size: 13px;
}

.artefato .col .condicoes {
  height: 48.8px;
  line-height: 30px;
  padding-left: 2px;
}

.artefato .col .acoes {
  padding-bottom: 5.47px;
}

.artefato .col .cod {
  padding-bottom: 5.5px;
  text-align: left;
}

.artefato .col:not(:last-child) div {
  border-right: 0.125rem solid #1a345f;
}

.artefato .col > div:not(:last-child) {
  border-bottom: 0.125rem solid #1a345f;
}

.artefato .link_modal {
  text-decoration: underline;
  cursor: pointer;
  color: #4670ba;
  font-weight: 600;
}

.level__content .artefato .obs {
  font-size: 14px;
  color: #0e254b;
  margin-top: 30px;
  margin-left: 10px;
  font-family: "Bai Jamjuree", sans-serif;
  font-weight: 500;
}

.level__content .artefato .obs2 {
  font-size: 14px;
  color: #0e254b;
  margin-top: 6px;
  margin-left: 10px;
  font-family: "Bai Jamjuree", sans-serif;
  font-weight: 500;
}

.input_entrada {
  display: flex;
  margin-top: 3px;
  align-items: center;
}

.input1 {
  gap: 6.2px;
}

.input2 {
  gap: 3.9px;
  margin-top: 8px;
}


.entrada .input_entrada span {
  font-size: 15px;
  color: #16305a;
  font-weight: 500;
  font-family: "Bai Jamjuree", sans-serif;
}

.entrada .input_entrada select {
  padding: 6px;
  border-radius: 0.25rem;
  outline: none;
  font-size: 14px;
  color: #0d2041;
  background-color: rgb(227, 229, 239);
  font-family: "Bai Jamjuree", sans-serif;
  width: 60px;
  border: 1.3px solid rgb(13, 33, 65);
}
</style>
