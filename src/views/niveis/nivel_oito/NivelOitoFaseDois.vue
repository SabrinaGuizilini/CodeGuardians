<template>
  <div class="main_container">
    <BarraSuperior :currentLevel="currentLevel" :missao="missao" :fase="fase" />

    <div class="level__content">
      <div class="artefato">
        <h1>Artefato da fase anterior</h1>
        <h2>Tabela de decisão</h2>
        <div class="exercicio">

        <div class="ex-tabela">

        <div class="col">
          <div class="texto-destaque condicoes">Entradas</div>
          <div class="cod">Cargo</div>
          <div class="cod">Tempo de serviço</div>
          <div class="texto-destaque acoes">Permissões</div>
        </div>

        <div class="col">
          <div class="regra">Regra 1</div>

          <div class="select-regra">
            <p class="campo-tabela">{{ tabela[0].cargo }}</p>
          </div>

          <div class="select-regra">
            <p class="campo-tabela">{{ tabela[0].tempo_servico }}</p>
          </div>

          <div class="select-regra">
            <p class="campo-tabela">{{ tabela[0].acao }}</p>
          </div>
        </div>

        <div class="col">
          <div class="regra">Regra 2</div>

           <div class="select-regra">
            <p class="campo-tabela">{{ tabela[1].cargo }}</p>
          </div>

          <div class="select-regra">
            <p class="campo-tabela">{{ tabela[1].tempo_servico }}</p>
          </div>

          <div class="select-regra">
            <p class="campo-tabela">{{ tabela[1].acao }}</p>
          </div>
        </div>

        <div class="col">
          <div class="regra">Regra 3</div>

          <div class="select-regra">
            <p class="campo-tabela">{{ tabela[2].cargo }}</p>
          </div>

          <div class="select-regra">
            <p class="campo-tabela">{{ tabela[2].tempo_servico }}</p>
          </div>

          <div class="select-regra">
            <p class="campo-tabela">{{ tabela[2].acao }}</p>
          </div>
        </div>

        <div class="col">
          <div class="regra">Regra 4</div>

          <div class="select-regra">
            <p class="campo-tabela">{{ tabela[3].cargo }}</p>
          </div>

          <div class="select-regra">
            <p class="campo-tabela">{{ tabela[3].tempo_servico }}</p>
          </div>

          <div class="select-regra">
            <p class="campo-tabela">{{ tabela[3].acao }}</p>
          </div>
        </div>

         <div class="col">
          <div class="regra">Regra 5</div>

          <div class="select-regra">
            <p class="campo-tabela">{{ tabela[4].cargo }}</p>
          </div>

          <div class="select-regra">
            <p class="campo-tabela">{{ tabela[4].tempo_servico }}</p>
          </div>

          <div class="select-regra">
            <p class="campo-tabela">{{ tabela[4].acao }}</p>
          </div>
        </div>

        <div class="col">
          <div class="regra">Regra 6</div>

           <div class="select-regra">
            <p class="campo-tabela">{{ tabela[5].cargo }}</p>
          </div>

          <div class="select-regra">
            <p class="campo-tabela">{{ tabela[5].tempo_servico }}</p>
          </div>

          <div class="select-regra">
            <p class="campo-tabela">{{ tabela[5].acao }}</p>
          </div>
        </div>

      </div>
      </div>
      <p class="obs2">* Clique <span class="link_modal" @click="openModal2()">aqui</span> para ver o significado das permissões (A, B, C, ...)</p>
        <a href="#" class="consultar_especificacao" @click="open_modal">
          <img src="@/assets/img/respostas.png" alt="consultar especificação" />
        </a>
      </div>

      <div class="casos-teste">
        <h1>Criação dos casos de teste</h1>

        <div class="container-criacao-CT">
          <div class="entrada">
            <span>Entrada</span>
            <select name="entradas" class="entradas-select" v-model="entrada">
              <option value="default" selected>Selecione uma opção</option>
              <option
                v-for="option in options_entradas"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>

          <div class="saida-esperada">
            <span>Saída esperada</span>
            <select name="saidas" class="saidas-select" v-model="saida" style="text-align:center;">
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
                <p>{{ caso.entrada }}</p>
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
      title="Uso habitual do sistema por tipo de usuário e tempo de serviço"
      :paragrafos="paragrafos"
    />

    <ModalAcoes
      :isVisible="showModal2"
      @close="showModal2 = false"
      :paragrafos_modal="paragrafos_modal"
      :bottom="'5%'" 
      :left="'4%'"
    />
  </div>
</template>

<script>
import BarraSuperior from "@/components/niveis/BarraSuperior.vue";
import ModalEspecificacao from "@/components/niveis/ModalEspecificacao.vue";
import ModalAcoes from "@/components/niveis/ModalAcoes.vue";
import { store } from "@/store";

export default {
  name: "NivelOitoFaseDois",
  components: {
    BarraSuperior,
    ModalEspecificacao,
    ModalAcoes
  },
  data() {
    return {
       paragrafos: [
        'Como já mencionado anteriormente, o sistema possui três tipos de usuário: Operador de Energia, Técnico em Comunicação e Administrador, cada um com acessos e permissões específicos.',
        'Operadores de energia têm acesso apenas aos submódulos de infraestrutura de energia (Submódulo de ativação de geradores, Submódulo de monitoramento de interrupções de corrente, Submódulo de monitoramento de tensão e Submódulo de detecção de falhas na energia) para monitorar interrupções, tensões e falhas, tendo a permissão de ativar geradores somente quando completam um ano de serviço. No cotidiano, operadores de energia podem monitorar interrupções, tensões e falhas, mas somente aqueles com tempo de serviço maior ou igual a um ano ativam os geradores conforme necessário, quando há falha de energia.',
        'Técnicos em comunicação têm acesso apenas aos submódulos da infraestrutura de redes de comunicação (Submódulo de envio de alertas) e têm permissão para enviar alertas somente quando completam um ano de serviço. No seu dia a dia, técnicos em comunicação com tempo de serviço maior ou igual a um ano rotineiramente enviam alertas.',
        'Administradores possuem acesso irrestrito (acessam todos os submódulos), mas apenas os que possuem tempo de serviço maior ou igual a um ano podem ativar geradores e enviar alertas. Administradores com menos de um ano de serviço podem, em suas atividades diárias, acessar todos os submódulos. Administradores com mais (ou igual) de um ano de serviço têm plenas funcionalidades no sistema, podendo inclusive, em suas rotinas, ativar geradores conforme necessário e enviar alertas gerados.',
        'Logins para o teste:',
        '- Operador de energia com menos de 1 ano de serviço - usuário: abc123; senha: 9989',
        '- Operador de energia com tempo de serviço maior ou igual a 1 ano - usuário: opkvb; senha: gh56',
        '- Técnico em comunicação com menos de 1 ano de serviço - usuário: lpo90; senha: sdfg',
        '- Técnico em comunicação com tempo de serviço maior ou igual a 1 ano - usuário: k53gh; senha: 0098',
        '- Administrador com menos de 1 ano de serviço - usuário: ffds3; senha: 124j',
        '- Administrador com tempo de serviço maior ou igual a 1 ano - usuário: vndfd; senha: tp67'
      ],
      paragrafos_modal : [
        'A. pode acessar somente submódulos de infraestrutura de energia, tendo permissão para monitorar interrupções, tensões e falhas de energia (ver alertas emitidos). Este usuário não pode conseguir ativar geradores;',
        'B. pode acessar somente submódulos de infraestrutura de energia, tendo permissão para monitorar interrupções, tensões e falhas de energia (ver alertas emitidos) e ativar geradores;',
        'C. pode acessar somente submódulos da infraestrutura de redes de comunicação e não pode conseguir enviar alertas;',
        'D. pode acessar somente submódulos da infraestrutura de redes de comunicação, tendo permissão para enviar alertas;',
        'E. pode acessar todos os submódulos do sistema, incluindo verificar a emissão de alerta no módulo de detecção de falhas de energia e a integração do alerta com o módulo de envio de alertas, mas não pode ativar geradores nem enviar alertas;',
        'F. pode acessar todos os submódulos do sistema, incluindo verificar emissão de alerta no módulo de detecção de falhas de energia, ativar geradores, verificar a integração do alerta com o módulo de envio de alertas e enviar o alerta.',
      ],
      missao: "8",
      fase: "2",
      currentLevel: 6,
      tabela: [],
      showModal: false,
      showModal2: false,
      entrada: "default",
      saida: "default",
      pontuacao: 0,
      casosTeste: [],
      options_entradas: [
        { value: "Login como Administrador com tempo de serviço < 1 ano", label: "Login como Administrador com tempo de serviço < 1 ano" },
        { value: "Login com usuário com tempo de serviço >= 1 ano", label: "Login com usuário com tempo de serviço >= 1 ano" },
        { value: "Login como Tec. em comunicação com tempo de serviço >= 1 ano", label: "Login como Tec. em comunicação com tempo de serviço >= 1 ano" },
        { value: "Login como Op. de energia com tempo de serviço < 1 ano", label: "Login como Op. de energia com tempo de serviço < 1 ano" },
        { value: "Login como Tec. em comunicação com tempo de serviço < 1 ano", label: "Login como Tec. em comunicação com tempo de serviço < 1 ano" },
        { value: "Login como Op. de energia com tempo de serviço >= 1 ano", label: "Login como Op. de energia com tempo de serviço >= 1 ano" },
        { value: "Login com usuário com tempo de serviço < 1 ano", label: "Login com usuário com tempo de serviço < 1 ano" },
        { value: "Login como Op. de energia", label: "Login como Op. de energia" },
        { value: "Login como Administrador", label: "Login como Administrador" },
        { value: "Login como Administrador com tempo de serviço >= 1 ano", label: "Login como Administrador com tempo de serviço >= 1 ano" },
        { value: "Login como Tec. em comunicação", label: "Login como Tec. em comunicação" },
      ],
      options_saidas: [
        {
          value: "A. pode acessar somente submódulos de infraestrutura de energia, tendo permissão para monitorar interrupções, tensões e falhas de energia (ver alertas emitidos). Este usuário não pode conseguir ativar geradores.",
          label: "A",
        },
        {
          value: "B. pode acessar somente submódulos de infraestrutura de energia, tendo permissão para monitorar interrupções, tensões e falhas de energia (ver alertas emitidos) e ativar geradores.",
          label: "B",
        },
        {
          value: "C. pode acessar somente submódulos da infraestrutura de redes de comunicação e não pode conseguir enviar alertas.",
          label: "C",
        },
        {
          value: "D. pode acessar somente submódulos da infraestrutura de redes de comunicação, tendo permissão para enviar alertas.",
          label: "D",
        },
        {
          value: "E. pode acessar todos os submódulos do sistema, incluindo verificar a emissão de alerta no módulo de detecção de falhas de energia e a integração do alerta com o módulo de envio de alertas, mas não pode ativar geradores nem enviar alertas.",
          label: "E",
        },
        {
          value: "F. pode acessar todos os submódulos do sistema, incluindo verificar emissão de alerta no módulo de detecção de falhas de energia, ativar geradores, verificar a integração do alerta com o módulo de envio de alertas e enviar o alerta.",
          label: "F",
        },
      ],
      gabarito: {
        "Login como Op. de energia com tempo de serviço < 1 ano": "A. pode acessar somente submódulos de infraestrutura de energia, tendo permissão para monitorar interrupções, tensões e falhas de energia (ver alertas emitidos). Este usuário não pode conseguir ativar geradores.",
        "Login como Op. de energia com tempo de serviço >= 1 ano": "B. pode acessar somente submódulos de infraestrutura de energia, tendo permissão para monitorar interrupções, tensões e falhas de energia (ver alertas emitidos) e ativar geradores.",
        "Login como Tec. em comunicação com tempo de serviço < 1 ano": "C. pode acessar somente submódulos da infraestrutura de redes de comunicação e não pode conseguir enviar alertas.",
        "Login como Tec. em comunicação com tempo de serviço >= 1 ano": "D. pode acessar somente submódulos da infraestrutura de redes de comunicação, tendo permissão para enviar alertas.",
        "Login como Administrador com tempo de serviço < 1 ano": "E. pode acessar todos os submódulos do sistema, incluindo verificar a emissão de alerta no módulo de detecção de falhas de energia e a integração do alerta com o módulo de envio de alertas, mas não pode ativar geradores nem enviar alertas.",
        "Login como Administrador com tempo de serviço >= 1 ano": "F. pode acessar todos os submódulos do sistema, incluindo verificar emissão de alerta no módulo de detecção de falhas de energia, ativar geradores, verificar a integração do alerta com o módulo de envio de alertas e enviar o alerta.",
      },
    };
  },
  beforeMount() {
   this.carregarDados();
  },
  methods: {
    open_modal(event) {
      event.preventDefault();
      this.showModal = true;
    },
    carregarDados() {
    if (store.respostas_fase_um.tabela_missao_oito && store.respostas_fase_um.tabela_missao_oito.length === 6) {
      this.tabela = JSON.parse(JSON.stringify(store.respostas_fase_um.tabela_missao_oito));
      this.tabela.forEach((item) => {
      if (item.cargo === 'default') {
        item.cargo = '-';
      }
      if (item.cargo === 'Op. de energia') {
        item.cargo = 'Op. ener.';
      }
      if (item.cargo === 'Tec. em comunicação') {
        item.cargo = 'Tec. com.';
      }
      if (item.cargo === 'Administrador') {
        item.cargo = 'Adm.';
      }
      if (item.tempo_servico === 'default') {
        item.tempo_servico = '-';
      }
      if (item.acao === 'default') {
        item.acao = '-';
      }
    });
    }
  },
    addCasoTeste(event) {
      event.preventDefault();
      if (this.entrada !== "default" && this.saida !== "default") {
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

        this.entrada = "default";
        this.saida = "default";
      } else {
        alert("Selecione a entrada e a saída esperadas!");
      }
    },
    removeCasoTeste(index) {
      this.casosTeste.splice(index, 1);
    },
    validarRespostas(event) {
      event.preventDefault();
      this.pontuacao = 0;

      this.casosTeste.forEach((caso) => {
        const saidaEsperada = this.gabarito[caso.entrada];
        if (caso.saida === saidaEsperada) {
          this.pontuacao += 15;
          store.respostas_fase_dois.correcao_missao_oito.push(true);
        } else {
          this.pontuacao -= 15;
          store.respostas_fase_dois.correcao_missao_oito.push(false);
        }

      });

      store.respostas_fase_dois.cts_missao_oito = [...this.casosTeste];
      store.pontuacaoJogador.pont_fases_niveis[7][1] = this.pontuacao;

      this.$router.push("/nivel-oito-fase-tres");

    },
     openModal2() {
      this.showModal2 = true;
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
  gap: 16px;
  font-family: "Bai Jamjuree", sans-serif;
  margin-top: 35px;
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

.exercicio{
  margin-top: 26px;
  margin-left: 5px;
  width: 98%;
  font-family: "Bai Jamjuree", sans-serif;
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
  font-size: 13px;
  padding: 6px;
}

.col .regra, .col .resp, .col .cod {
  text-align: center;
  font-weight: 500;
}

.ex-tabela .col .campo-tabela {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #07142b;
  text-align: center;
}

.col .acoes {
  padding-bottom: 5.47px;
}

.col .cod {
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
  color: #4069b0;
  font-weight: 600;
}

.level__content .artefato .obs {
  font-size: 14px;
  color: #112a53;
  margin-top: 20px;
  font-weight: 500;
}

.level__content .artefato .obs2 {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 13px;
  color: #112a53;
  margin-top: 32px;
  margin-left: 10px;
  font-weight: 500;
}

.acao {
  text-align: center;
}
</style>
