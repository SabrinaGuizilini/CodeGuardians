<template>
  <div class="main_container">
    <BarraSuperior :currentLevel="currentLevel" :missao="missao" :fase="fase" />

    <div class="level__content">
      <div class="artefato">
        <h1>Artefato da fase anterior</h1>
        <h2>Valores-Limite</h2>
       <div class="exercicio-avl">

          <div class="part01 invalida">
            <p>Classe inválida</p>
            <div class="linha01"></div>
          </div>

          <span class="valor-limite">{{ valores_limite[0] }}</span>
          <span class="valor-limite">{{ valores_limite[1] }}</span>

          <div class="part01 valida">
            <p>Classe válida</p>
            <div class="linha01"></div>
          </div>

          <span class="valor-limite">{{ valores_limite[2] }}</span>
          <span class="valor-limite">{{ valores_limite[3] }}</span>

          <div class="part01 invalida">
            <p>Classe inválida</p>
            <div class="linha01"></div>
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
  name: "NivelDoisFaseDois",
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
      fase: "2",
      currentLevel: 0,
      valores_limite: [],
      showModal: false,
      entrada: "default",
      saida: "default",
      pontuacao: 0,
      casosTeste: [],
      options_entradas: [
        { value: "Qtd. de interrupções = -18", label: "Qtd. de interrupções = -18" },
        { value: "Qtd. de interrupções = 3", label: "Qtd. de interrupções = 3" },
        { value: "Qtd. de interrupções = 1", label: "Qtd. de interrupções = 1" },
        { value: "Qtd. de interrupções = 0", label: "Qtd. de interrupções = 0" },
        { value: "Qtd. de interrupções = 4", label: "Qtd. de interrupções = 4" },
        { value: "Qtd. de interrupções = 15", label: "Qtd. de interrupções = 15" },
        { value: "Qtd. de interrupções = 2", label: "Qtd. de interrupções = 2" },
        { value: "Qtd. de interrupções = -1", label: "Qtd. de interrupções = -1" },
        { value: "Qtd. de interrupções = -10", label: "Qtd. de interrupções = -10" },
      ],
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
          value: "Mensagem 'Sensor quebrado!'",
          label: "Mensagem 'Sensor quebrado!'",
        },
      ],
      gabarito: {
        "Qtd. de interrupções = -18": "Mensagem 'Sensor quebrado!'",
        "Qtd. de interrupções = -1": "Mensagem 'Sensor quebrado!'",
        "Qtd. de interrupções = -10": "Mensagem 'Sensor quebrado!'",
        "Qtd. de interrupções = 0": "Código 0",
        "Qtd. de interrupções = 1": "Código 0",
        "Qtd. de interrupções = 2": "Código 0",
        "Qtd. de interrupções = 3": "Código 0",
        "Qtd. de interrupções = 4": "Código 1",
        "Qtd. de interrupções = 15": "Código 1",
      },
    };
  },
  mounted() {
    this.valores_limite = [...store.respostas_fase_um.valores_limites_missao_dois];
    this.valores_limite.forEach((item, index) => {
      if (item === '') {
       this.valores_limite[index] = '-';
      }
    });
  },
  methods: {
    open_modal(event) {
      event.preventDefault();
      this.showModal = true;
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

      var cts_anteriores = [];

      this.casosTeste.forEach((caso) => {
        const saidaEsperada = this.gabarito[caso.entrada];
        if (caso.saida === saidaEsperada) {
          if ((caso.entrada === "Qtd. de interrupções = -18" || caso.entrada === "Qtd. de interrupções = -10") &&caso.saida === "Mensagem 'Sensor quebrado!'") {
            if (cts_anteriores.some(
                (c) =>
                  (c.entrada === "Qtd. de interrupções = -18" ||
                    c.entrada === "Qtd. de interrupções = -10") &&
                  c.saida ===
                    "Mensagem 'Sensor quebrado!'"
              )) {
              this.pontuacao -= 5;
              store.respostas_fase_dois.correcao_missao_dois.push(false);
              store.respostas_fase_dois.cts_excedentes_missao_dois.push(true);
            } else {
              this.pontuacao += 5;
              store.respostas_fase_dois.correcao_missao_dois.push(true);
              store.respostas_fase_dois.cts_excedentes_missao_dois.push(false);
            }
          }

          else if ((caso.entrada === "Qtd. de interrupções = 1" || caso.entrada === "Qtd. de interrupções = 2") &&caso.saida === "Código 0") {
            if (cts_anteriores.some(
                (c) =>
                  (c.entrada === "Qtd. de interrupções = 1" ||
                    c.entrada === "Qtd. de interrupções = 2") &&
                  c.saida ===
                    "Código 0"
              )) {
              this.pontuacao -= 5;
              store.respostas_fase_dois.correcao_missao_dois.push(false);
              store.respostas_fase_dois.cts_excedentes_missao_dois.push(true);
            } else {
              this.pontuacao += 5;
              store.respostas_fase_dois.correcao_missao_dois.push(true);
              store.respostas_fase_dois.cts_excedentes_missao_dois.push(false);
            }
          }
          
          else {
            this.pontuacao += 5;
            store.respostas_fase_dois.correcao_missao_dois.push(true);
            store.respostas_fase_dois.cts_excedentes_missao_dois.push(false);
          }

        } else {
          this.pontuacao -= 5;
          store.respostas_fase_dois.correcao_missao_dois.push(false);
          store.respostas_fase_dois.cts_excedentes_missao_dois.push(false);
        }

        cts_anteriores.push(caso);
      });

      store.respostas_fase_dois.cts_missao_dois = [...this.casosTeste];
      store.pontuacaoJogador.pont_fases_niveis[1][1] = this.pontuacao;

      this.$router.push("/nivel-dois-fase-tres");

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

.artefato .exercicio-avl {
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
}

.artefato .valida {
  color: #57af7b;
}

.artefato .invalida {
  color: #9c443e;
}

.artefato .valor-limite {
  font-size: 18px;
  color:#030620;
  font-weight: 500;
  padding: 6px;
  border-radius: 3px;
  border: 1.4px solid #090e35;
}

</style>
