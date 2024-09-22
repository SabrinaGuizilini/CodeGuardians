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
        <p>De acordo com a especificação e o critério de tabela de decisão, complete a tabela abaixo selecionando as entradas e suas respectivas permissões em cada coluna (sem repetições):</p>
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
            <select name="select-regra1" v-model="selects[0].cargo">
              <option value="default" selected>--</option>
              <option value="Op. de energia">Op. de energia</option>
              <option value="Tec. em comunicação">Tec. em comunicação</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra2" v-model="selects[0].tempo_servico">
              <option value="default" selected>--</option>
              <option value="< 1 ano">&lt; 1 ano</option>
              <option value=">= 1 ano">>= 1 ano</option>
            </select>
          </div>

          <div class="select-regra">
            <select class="acao" name="select-regra2" v-model="selects[0].acao">
              <option value="default" selected>--</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>

        <div class="col">
          <div class="regra">Regra 2</div>

          <div class="select-regra">
            <select name="select-regra1" v-model="selects[1].cargo">
              <option value="default" selected>--</option>
              <option value="Op. de energia">Op. de energia</option>
              <option value="Tec. em comunicação">Tec. em comunicação</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra2" v-model="selects[1].tempo_servico">
              <option value="default" selected>--</option>
              <option value="< 1 ano">&lt; 1 ano</option>
              <option value=">= 1 ano">>= 1 ano</option>
            </select>
          </div>

          <div class="select-regra">
            <select class="acao" name="select-regra2" v-model="selects[1].acao">
              <option value="default" selected>--</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>

        <div class="col">
          <div class="regra">Regra 3</div>

          <div class="select-regra">
            <select name="select-regra1" v-model="selects[2].cargo">
              <option value="default" selected>--</option>
              <option value="Op. de energia">Op. de energia</option>
              <option value="Tec. em comunicação">Tec. em comunicação</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra2" v-model="selects[2].tempo_servico">
              <option value="default" selected>--</option>
              <option value="< 1 ano">&lt; 1 ano</option>
              <option value=">= 1 ano">>= 1 ano</option>
            </select>
          </div>

          <div class="select-regra">
            <select class="acao" name="select-regra2" v-model="selects[2].acao">
              <option value="default" selected>--</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>

        <div class="col">
          <div class="regra">Regra 4</div>

         <div class="select-regra">
            <select name="select-regra1" v-model="selects[3].cargo">
              <option value="default" selected>--</option>
              <option value="Op. de energia">Op. de energia</option>
              <option value="Tec. em comunicação">Tec. em comunicação</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra2" v-model="selects[3].tempo_servico">
              <option value="default" selected>--</option>
              <option value="< 1 ano">&lt; 1 ano</option>
              <option value=">= 1 ano">>= 1 ano</option>
            </select>
          </div>

          <div class="select-regra">
            <select class="acao" name="select-regra2" v-model="selects[3].acao">
              <option value="default" selected>--</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>

         <div class="col">
          <div class="regra">Regra 5</div>

         <div class="select-regra">
            <select name="select-regra1" v-model="selects[4].cargo">
              <option value="default" selected>--</option>
              <option value="Op. de energia">Op. de energia</option>
              <option value="Tec. em comunicação">Tec. em comunicação</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra2" v-model="selects[4].tempo_servico">
              <option value="default" selected>--</option>
              <option value="< 1 ano">&lt; 1 ano</option>
              <option value=">= 1 ano">>= 1 ano</option>
            </select>
          </div>

          <div class="select-regra">
            <select class="acao" name="select-regra2" v-model="selects[4].acao">
              <option value="default" selected>--</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>

        <div class="col">
          <div class="regra">Regra 6</div>

          <div class="select-regra">
            <select name="select-regra1" v-model="selects[5].cargo">
              <option value="default" selected>--</option>
              <option value="Op. de energia">Op. de energia</option>
              <option value="Tec. em comunicação">Tec. em comunicação</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>

          <div class="select-regra">
            <select name="select-regra2" v-model="selects[5].tempo_servico">
              <option value="default" selected>--</option>
              <option value="< 1 ano">&lt; 1 ano</option>
              <option value=">= 1 ano">>= 1 ano</option>
            </select>
          </div>

          <div class="select-regra">
            <select class="acao" name="select-regra2" v-model="selects[5].acao">
              <option value="default" selected>--</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
          </div>
        </div>

      </div>
      <p class="obs2">* Clique <span class="link_modal" @click="openModal()">aqui</span> para ver o significado das permissões (A, B, C, ...)</p>
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
  name: 'NivelOitoFaseUm',
  components: {
    BarraSuperior,
    Especificacao,
    ModalAcoes
  },
   data() {
    const selects = Array(6).fill().map(() => ({
      cargo: "default",
      tempo_servico: "default",
      acao: "default"
    }));
    return {
      titulo_especificacao: 'Uso habitual do sistema por tipo de usuário e tempo de serviço',
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
      showModal: false,
      missao: '8',
      fase: '1',
      currentLevel: 6,
      selects,
      gabarito: [
        {
          cargo: "Op. de energia",
          tempo_servico: "< 1 ano",
          acao: "A"
        },
        {
          cargo: "Op. de energia",
          tempo_servico: ">= 1 ano",
          acao: "B"
        },
        {
          cargo: "Tec. em comunicação",
          tempo_servico: "< 1 ano",
          acao: "C"
        },
        {
          cargo: "Tec. em comunicação",
          tempo_servico: ">= 1 ano",
          acao: "D"
        },
        {
          cargo: "Administrador",
          tempo_servico: "< 1 ano",
          acao: "E"
        },
        {
          cargo: "Administrador",
          tempo_servico: ">= 1 ano",
          acao: "F"
        },
      ],
      errou: false
    };
  },
   methods: {
    validarRespostas(event) {
      event.preventDefault();

      let respostasConferidas = [];
      this.errou = false;

      this.selects.forEach((resposta, index) => {
        const correspondeAoGabarito = this.gabarito.some(item => 
          item.cargo === resposta.cargo &&
          item.tempo_servico === resposta.tempo_servico &&
          item.acao === resposta.acao
        );

        if (!correspondeAoGabarito) {
          if (!this.errou) {
            this.errou = true;
          }
        }

        else {
            const respostaJaConferida = respostasConferidas.some(item =>
              item.cargo === resposta.cargo &&
              item.tempo_servico === resposta.tempo_servico &&
              item.acao === resposta.acao
          );

          if (respostaJaConferida) {
            if (!this.errou) {
              this.errou = true;
            }
          } 
        }

        respostasConferidas.push(resposta);
      });

      if (this.errou === false) {
        store.pontuacaoJogador.pont_fases_niveis[7][0] = 50;
      }

      store.respostas_fase_um.tabela_missao_oito = JSON.parse(JSON.stringify(this.selects));
      this.$router.push('/nivel-oito-fase-dois');
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
  width: 70px;
}

.col .condicoes {
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
  color: #436cb4;
  font-weight: 600;
}

.level__content .fase-criterio .obs {
  font-size: 14px;
  color: #112a53;
  margin-top: 20px;
  font-weight: 500;
}

.level__content .fase-criterio .obs2 {
  font-size: 14px;
  color: #112a53;
  margin-top: 32px;
  font-weight: 500;
}

.acao {
  text-align: center;
}
</style>