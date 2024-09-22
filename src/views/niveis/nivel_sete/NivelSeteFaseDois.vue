<template>
  <div class="main_container">
    <BarraSuperior :currentLevel="currentLevel" :missao="missao" :fase="fase" />

    <div class="level__content">
      <div class="artefato">
        <h1>Artefato da fase anterior</h1>
        <h2>Classes de equivalência</h2>
        <div class="container-artefatos">
          <p class="p0">Classes de equivalência das condições de entrada:</p>
          <div class="container-condicoes1">
            <div class="container-condicao">
              <span class="titulo-cond">Usuário</span>
              <div class="validas-e-invalidas">
                <div class="container-validas">
                  <span>Classes válidas</span>
                  <p v-for="(valida, index) in classes_validas.filter((_, i) => validas[i] === 'Usuário')" :key="index">
                     Usuário {{valida}}
                  </p>
                </div>
                <div class="container-invalidas">
                  <span>Classes inválidas</span>
                  <p v-for="(invalida, index) in classes_invalidas.filter((_, i) => invalidas[i] === 'Usuário')" :key="index">
                     Usuário {{invalida}}
                  </p>
                </div>
              </div>
            </div>

            <div class="container-condicao">
              <span class="titulo-cond">Senha</span>
              <div class="validas-e-invalidas">
                <div class="container-validas">
                  <span>Classes válidas</span>
                   <p v-for="(valida, index) in classes_validas.filter((_, i) => validas[i] === 'Senha')" :key="index">
                     Senha {{valida}}
                  </p>
                </div>
                <div class="container-invalidas">
                  <span>Classes inválidas</span>
                   <p v-for="(invalida, index) in classes_invalidas.filter((_, i) => invalidas[i] === 'Senha')" :key="index">
                     Senha {{invalida}}
                  </p>
                </div>
              </div>
            </div>
           </div>


           <div class="container-condicoes1">
            <div class="container-condicao">
              <span class="titulo-cond">Tipo de usuário</span>
              <div class="validas-e-invalidas">
                <div class="container-validas">
                  <span>Classes válidas</span>
                  <p v-for="(valida, index) in classes_validas.filter((_, i) => validas[i] === 'Tipo de usuário')" :key="index">
                     Tipo de usuário {{valida}}
                  </p>
                </div>
                <div class="container-invalidas">
                  <span>Classes inválidas</span>
                  <p v-for="(invalida, index) in classes_invalidas.filter((_, i) => invalidas[i] === 'Tipo de usuário')" :key="index">
                     Tipo de usuário {{invalida}}
                  </p>
                </div>
              </div>
            </div>

            <div class="container-condicao">
              <span class="titulo-cond">Correspondência do tipo de usuário com usuário e senha (corretos)</span>
              <div class="validas-e-invalidas" style="margin-top:26px;">
                <div class="container-validas">
                  <span>Classes válidas</span>
                   <p v-for="(valida, index) in classes_validas.filter((_, i) => validas[i] === 'Correspondência do tipo de usuário com usuário e senha (corretos)')" :key="index">
                    {{valida}}
                  </p>
                </div>
                <div class="container-invalidas">
                  <span>Classes inválidas</span>
                   <p v-for="(invalida, index) in classes_invalidas.filter((_, i) => invalidas[i] === 'Correspondência do tipo de usuário com usuário e senha (corretos)')" :key="index">
                    {{invalida}}
                  </p>
                </div>
              </div>
            </div>
           </div>

          </div> 
       <span class="obs2">* Clique <span class="link_modal" @click="openModalDados()">aqui</span> para ver os dados necessários para os casos de teste.</span>
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
                :title="option.value"
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

    <ModalDados
      :isVisible="show_modalDados"
      @close="show_modalDados = false"
      :conteudos="listaConteudos"
      :top="'2%'" 
      :left="'3%'"
    />
    <ModalEspecificacao
      :isVisible="showModal"
      @close="showModal = false"
      title="Submódulo de autenticação"
      :paragrafos="paragrafos"
    />
  </div>
</template>

<script>
import BarraSuperior from "@/components/niveis/BarraSuperior.vue";
import ModalEspecificacao from "@/components/niveis/ModalEspecificacao.vue";
import ModalDados from "@/components/niveis/ModalDados.vue";
import { store } from "@/store";

export default {
  name: "NivelSeteFaseDois",
  components: {
    BarraSuperior,
    ModalEspecificacao,
    ModalDados,
  },
  data() {
    return {
     paragrafos: [
        'Para acessar o sistema, o usuário deve realizar autenticação com seu usuário, senha e tipo de usuário. Há 3 tipos de usuário no sistema: Operador de Energia, Técnico em Comunicação e Administrador.',
        'Se todos os dados estiverem corretos e preenchidos, o login será feito com sucesso e o usuário será redirecionado para uma tela inicial onde será exibida uma mensagem de boas-vindas, a informação de seu tipo de usuário e um menu. Um tipo de usuário deve apenas conseguir logar no sistema como seu tipo de usuário, ou seja, se inserir usuário e senha corretos mas selecionar um tipo de usuário que não seja o seu, não poderá entrar no sistema. Além disso, se algum dos dados estiver incorreto ou em branco será exibida mensagem de erro e o login não será realizado.',
        'Alguns usuários cadastrados e suas respectivas senhas e tipos de usuário para teste:',
        '- usuário: def345, senha: 7809, tipo: operador de energia;',
        '- usuário: aasbn5, senha: pol$444, tipo: técnico em comunicação;',
        '- usuário: 234xxx, senha: oo344, tipo: administrador.',
      ],
      listaConteudos: [
        {
          titulo: 'Alguns usuários cadastrados e suas respectivas senhas e tipos de usuário para teste:',
          paragrafos: [
            ' - usuário: def345, senha: 7809, tipo: operador de energia;',
            ' - usuário: aasbn5, senha: pol$444, tipo: técnico em comunicação;',
            ' - usuário: 234xxx, senha: oo344, tipo: administrador.',
          ],
        },
      ],
      missao: "7",
      fase: "2",
      currentLevel: 5,
      showModal: false,
      entrada: "default",
      saida: "default",
      pontuacao: 0,
      show_modalDados: false,
      casosTeste: [],
      validas: [],
      invalidas: [],
      options_entradas: [
        { value: "Usuário = def345, senha = 123 e tipo = operador de energia", label: "Usuário = def345, senha = 123 e tipo = operador de energia" },
        { value: "Usuário = def345, senha em branco e tipo = operador de energia", label: "Usuário = def345, senha em branco e tipo = operador de energia" },
        { value: "Usuário = 234xxx, senha = oo344 e tipo = administrador", label: "Usuário = 234xxx, senha = oo344 e tipo = administrador" },
        { value: "Usuário em branco, senha em branco e tipo não selecionado", label: "Usuário em branco, senha em branco e tipo não selecionado" }, // -
        { value: "Usuário = 123, senha = 7809 e tipo = operador de energia", label: "Usuário = 123, senha = 7809 e tipo = operador de energia" },
        { value: "Usuário = aasbn5, senha = 9999 e tipo = técnico em comunicação", label: "Usuário = aasbn5, senha = 9999 e tipo = técnico em comunicação" }, // *
        { value: "Usuário em branco, senha = 7809 e tipo = operador de energia", label: "Usuário em branco, senha = 7809 e tipo = operador de energia" },
        { value: "Usuário = 234xxx, senha = oo344 e tipo = técnico em comunicação", label: "Usuário = 234xxx, senha = oo344 e tipo = técnico em comunicação" }, // *
        { value: "Usuário = def345, senha = 7809 e tipo = administrador", label: "Usuário = def345, senha = 7809 e tipo = administrador" },
        { value: "Usuário = aasbn5, senha = pol$444 e tipo = técnico em comunicação", label: "Usuário = aasbn5, senha = pol$444 e tipo = técnico em comunicação" },
        { value: "Usuário = 123, senha = oo344 e tipo = administrador", label: "Usuário = 123, senha = oo344 e tipo = administrador" }, // *
        { value: "Usuário = def345, senha = 7809 e tipo não selecionado", label: "Usuário = def345, senha = 7809 e tipo não selecionado" },
        { value: "Usuário = def345, senha = 123 e tipo = operador de máquinas", label: "Usuário = def345, senha = 123 e tipo = operador de máquinas" }, // -
        { value: "Usuário = def345, senha = 7809 e tipo = operador de energia", label: "Usuário = def345, senha = 7809 e tipo = operador de energia" },
        { value: "Usuário = 456, senha = 123 e tipo = técnico em comunicação", label: "Usuário = 456, senha = 123 e tipo = técnico em comunicação" }, // -
        { value: "Usuário = aasbn5, senha = pol$444 e tipo = operador de energia", label: "Usuário = aasbn5, senha = pol$444 e tipo = operador de energia" }, // *
      ],
      options_saidas: [
        {
          value: "Usuário do tipo operador de energia logado com sucesso",
          label: "Usuário do tipo operador de energia logado com sucesso",
        },
        {
          value: "Usuário do tipo administrador logado com sucesso",
          label: "Usuário do tipo administrador logado com sucesso",
        },
        {
          value: "Usuário do tipo técnico em comunicação logado com sucesso",
          label: "Usuário do tipo técnico em comunicação logado com sucesso",
        },
        {
          value: "Login não realizado e mensagem 'Senha inválida!'",
          label: "Login não realizado e mensagem 'Senha inválida!'",
        },
        {
          value: "Login não realizado e mensagem 'Usuário inválido!'",
          label: "Login não realizado e mensagem 'Usuário inválido!'",
        },
        {
          value: "Login não realizado e mensagem 'Preencha o campo de senha!'",
          label: "Login não realizado e mensagem 'Preencha o campo de senha!'",
        },
        {
          value: "Login não realizado e mensagem 'Preencha o campo de usuário!'",
          label: "Login não realizado e mensagem 'Preencha o campo de usuário!'",
        },
        {
          value: "Login não realizado e mensagem 'Escolha um tipo de usuário!'",
          label: "Login não realizado e mensagem 'Escolha um tipo de usuário!'",
        },
        {
          value: "Login não realizado e mensagem 'O tipo de usuário não corresponde ao usuário e senha inseridos!'",
          label: "Login não realizado e mensagem 'O tipo de usuário não corresponde ao usuário e senha inseridos!'",
        },
      ],
      gabarito: {
        "Usuário = def345, senha = 123 e tipo = operador de energia": "Login não realizado e mensagem 'Senha inválida!'",
        "Usuário = def345, senha em branco e tipo = operador de energia": "Login não realizado e mensagem 'Preencha o campo de senha!'",
        "Usuário = 234xxx, senha = oo344 e tipo = administrador": "Usuário do tipo administrador logado com sucesso",
        "Usuário = 123, senha = 7809 e tipo = operador de energia": "Login não realizado e mensagem 'Usuário inválido!'",
        "Usuário = aasbn5, senha = 9999 e tipo = técnico em comunicação": "Login não realizado e mensagem 'Senha inválida!'",
        "Usuário em branco, senha = 7809 e tipo = operador de energia": "Login não realizado e mensagem 'Preencha o campo de usuário!'",
        "Usuário = 234xxx, senha = oo344 e tipo = técnico em comunicação": "Login não realizado e mensagem 'O tipo de usuário não corresponde ao usuário e senha inseridos!'",
        "Usuário = def345, senha = 7809 e tipo = administrador": "Login não realizado e mensagem 'O tipo de usuário não corresponde ao usuário e senha inseridos!'",
        "Usuário = aasbn5, senha = pol$444 e tipo = técnico em comunicação": "Usuário do tipo técnico em comunicação logado com sucesso",
        "Usuário = 123, senha = oo344 e tipo = administrador": "Login não realizado e mensagem 'Usuário inválido!'",
        "Usuário = def345, senha = 7809 e tipo não selecionado": "Login não realizado e mensagem 'Escolha um tipo de usuário!'",
        "Usuário = def345, senha = 7809 e tipo = operador de energia": "Usuário do tipo operador de energia logado com sucesso",
        "Usuário = aasbn5, senha = pol$444 e tipo = operador de energia": "Login não realizado e mensagem 'O tipo de usuário não corresponde ao usuário e senha inseridos!'",
      },
      classes_validas: ['válido (a)', '= administrador', '= 7809', '= op. de energia', '= 234xxx', '= tec. em comunicação', 'válido (a)', 'selecionado', 'preenchido(a)', 'OK', 'preenchido(a)', '= oo344'],
      classes_invalidas: ['em branco', 'não selecionado', 'inválido (a)', 'não OK', 'inválido (a)', 'em branco', 'op. de máquinas', '= 1234'],
    };
  },
  mounted() {
    this.validas = [...store.respostas_fase_um.missao_sete_validas];
    this.invalidas = [...store.respostas_fase_um.missao_sete_invalidas];
  },
  methods: {
    open_modal(event) {
      event.preventDefault();
      this.showModal = true;
    },
    openModalDados() {
      this.show_modalDados = true;
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
          if ((caso.entrada === "Usuário = def345, senha = 123 e tipo = operador de energia" || caso.entrada === "Usuário = aasbn5, senha = 9999 e tipo = técnico em comunicação") && caso.saida === "Login não realizado e mensagem 'Senha inválida!'") {
            if (cts_anteriores.some(
                (c) =>
                  (c.entrada === "Usuário = def345, senha = 123 e tipo = operador de energia" ||
                    c.entrada === "Usuário = aasbn5, senha = 9999 e tipo = técnico em comunicação") &&
                  c.saida ===
                    "Login não realizado e mensagem 'Senha inválida!'"
              )) {
              this.pontuacao -= 10;
              store.respostas_fase_dois.correcao_missao_sete.push(false);
            } else {
              this.pontuacao += 10;
              store.respostas_fase_dois.correcao_missao_sete.push(true);
            }
          }

          else if ((caso.entrada === "Usuário = 123, senha = 7809 e tipo = operador de energia" || caso.entrada === "Usuário = 123, senha = oo344 e tipo = administrador") && caso.saida === "Login não realizado e mensagem 'Usuário inválido!'") {
            if (cts_anteriores.some(
                (c) =>
                  (c.entrada === "Usuário = 123, senha = 7809 e tipo = operador de energia" ||
                    c.entrada === "Usuário = 123, senha = oo344 e tipo = administrador") &&
                  c.saida ===
                    "Login não realizado e mensagem 'Usuário inválido!'"
              )) {
              this.pontuacao -= 10;
              store.respostas_fase_dois.correcao_missao_sete.push(false);
            } else {
              this.pontuacao += 10;
              store.respostas_fase_dois.correcao_missao_sete.push(true);
            }
          }

          else if ((caso.entrada === "Usuário = 234xxx, senha = oo344 e tipo = técnico em comunicação" || caso.entrada === "Usuário = def345, senha = 7809 e tipo = administrador" || caso.entrada === "Usuário = aasbn5, senha = pol$444 e tipo = operador de energia") && caso.saida === "Login não realizado e mensagem 'O tipo de usuário não corresponde ao usuário e senha inseridos!'") {
            if (cts_anteriores.some(
                (c) =>
                  (c.entrada === "Usuário = 234xxx, senha = oo344 e tipo = técnico em comunicação" ||
                    c.entrada === "Usuário = def345, senha = 7809 e tipo = administrador" || c.entrada === "Usuário = aasbn5, senha = pol$444 e tipo = operador de energia") &&
                  c.saida ===
                    "Login não realizado e mensagem 'O tipo de usuário não corresponde ao usuário e senha inseridos!'"
              )) {
              this.pontuacao -= 10;
              store.respostas_fase_dois.correcao_missao_sete.push(false);
            } else {
              this.pontuacao += 10;
              store.respostas_fase_dois.correcao_missao_sete.push(true);
            }
          }
          
          else {
            this.pontuacao += 10;
            store.respostas_fase_dois.correcao_missao_sete.push(true);
          }

        } else {
          this.pontuacao -= 10;
          store.respostas_fase_dois.correcao_missao_sete.push(false);
        }

        cts_anteriores.push(caso);
      });

      store.respostas_fase_dois.cts_missao_sete = [...this.casosTeste];
      store.pontuacaoJogador.pont_fases_niveis[6][1] = this.pontuacao;

      this.$router.push("/nivel-sete-fase-tres");

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
  font-size: 13px;
  color: #0d2041;
  background-color: rgb(227, 229, 239);
  font-family: "Bai Jamjuree", sans-serif;
  width: 220px;
  border: 1.3px solid rgb(13, 33, 65);
}

.CTs-gerados, .container-artefatos {
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

.container-artefatos {
  width: 98%;
  height: 63%;
  padding: 14px 18px;
  margin-top: 14px;
  background-color: #c2ccdd;
}

*::-webkit-scrollbar {
  width: 9px;
}

*::-webkit-scrollbar-thumb {
  background-color: #4f6391e7;
  border-radius: 8px;
}

*::-webkit-scrollbar-track {
  background: rgba(177, 182, 212, 0.861);
  border-radius: 3px;
}

*::-webkit-scrollbar-thumb:hover {
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
  /* word-break: break-all; */
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

.container-condicoes1 {
  display: flex;
  justify-content: center;
  align-items: first baseline;
  gap: 9%;
  font-family: "Bai Jamjuree", sans-serif;
  margin-bottom: 24px;
}

.titulo-cond {
  font-size: 15px;
  font-weight: 500;
  color: #090e35;
  display: block;
  text-align: center;
}

.validas-e-invalidas {
  display: flex;
  margin-top: 8px;
  gap: 20px;
  align-items: first baseline;
}

.cond-center {
  justify-content: center;
}

.validas-e-invalidas span {
  display: block;
  font-size: 13px;
  text-align: center;
  font-weight: 500;
}

.container-validas, .container-invalidas {
  width: 105px;
}

.container-validas span {
  color: #2c9b2e;
}

.container-invalidas span {
  color: #9c3030;
}

.validas-e-invalidas .container-validas p, .validas-e-invalidas .container-invalidas p {
  font-size: 13px;
  font-weight: 500;
  word-wrap: break-word;
  margin-top: 8px;
}

.p1, #p2 {
  font-family: "Bai Jamjuree", sans-serif;
  color:#0b1631;
  font-size: 16px;
  margin-top: 30px;
  font-weight: 600;
  text-align: center;
}

.p0 {
  font-family: "Bai Jamjuree", sans-serif;
  color:#0b1631;
  font-size: 16px;
  margin-top: 2px;
  margin-bottom: 20px;
  font-weight: 600;
  text-align: center;
}

#p2 {
  margin-top: 6px;
  font-size: 14px;
  font-weight: 500;
}

.link_modal {
  text-decoration: underline;
  cursor: pointer;
  color: #3d67ae;
  font-weight: 600;
}

.obs2 {
  font-family: "Bai Jamjuree", sans-serif;
  display: inline-block;
  font-size: 13px;
  color: #112a53;
  margin-top: 10px;
  margin-left: 14px;
  font-weight: 500;
}
</style>
