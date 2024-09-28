<template>
  <div class="container-background">
    <div class="container_conteudo">
      <h1 class="titulo_conteudo">{{ mensagem_feedback }}</h1>
      <h2 class="text-pont-total">Pontuação total da missão:</h2>
      <p class="pont-total">{{ displayedPontuacao }}</p>
      <div class="correcoes">

        <div class="correcao-fase" v-if="faseIndex === 0">
          <h1>Fase 1</h1>
          <p>Pontuação obtida: <b>{{ pont_fase_um }}</b></p>
          <div class="respostas div-column">
            <div class="resolucao-esperada">
              <h1>Resolução esperada</h1>
              <div class="resolucao-esperada-container resolucao-esperada-sem-flex">
              <p class="p0">Classes de equivalência das condições de entrada:</p>
              <div class="container-condicoes1">

              <div class="container-condicao">
              <span class="titulo-cond">Usuário</span>
              <div class="validas-e-invalidas">
                <div class="container-validas">
                  <span>Classes válidas</span>
                  <p>
                    Usuário válido
                  </p>
                  <p>
                    Usuário preenchido
                  </p>
                </div>
                <div class="container-invalidas">
                  <span>Classes inválidas</span>
                  <p>
                    Usuário inválido
                  </p>
                  <p>
                    Usuário em branco
                  </p>
                </div>
              </div>
            </div>

            <div class="container-condicao">
              <span class="titulo-cond">Senha</span>
              <div class="validas-e-invalidas">
                <div class="container-validas">
                  <span>Classes válidas</span>
                   <p>
                    Senha válida
                  </p>
                  <p>
                    Senha preenchida
                  </p>
                </div>
                <div class="container-invalidas">
                  <span>Classes inválidas</span>
                  <p>
                    Senha inválida
                  </p>
                  <p>
                    Senha em branco
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
                   <p>
                    Tipo de usuário selecionado
                  </p>
                  <p>
                    Tipo de usuário = op. de energia
                  </p>
                  <p>
                    Tipo de usuário = tec. em comunicação
                  </p>
                  <p>
                    Tipo de usuário = administrador
                  </p>
                </div>
                <div class="container-invalidas">
                  <span>Classes inválidas</span>
                  <p>
                    Tipo de usuário não selecionado
                  </p>
                </div>
              </div>
            </div>

            <div class="container-condicao">
              <span class="titulo-cond">Correspondência do tipo de usuário com usuário e senha (corretos)</span>
              <div class="validas-e-invalidas" style="margin-top:26px;">
                <div class="container-validas">
                  <span>Classes válidas</span>
                   <p>
                     OK
                  </p>
                </div>
                <div class="container-invalidas">
                  <span>Classes inválidas</span>
                   <p>
                     não OK
                  </p>
                </div>
              </div>
            </div>
           </div>

             </div>
            </div>

            <div class="sua-resolucao">
              <img class="correcao-img" v-if="acertou" src="@/assets/img/acerto.png" alt="acerto" />
              <img class="correcao-img" v-else src="@/assets/img/erro.png" alt="erro" />
              <h1>Sua resolução</h1>
              <div class="resolucao-esperada-container resolucao-esperada-sem-flex">
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
            </div>

          </div>
          <p class="regra-pont um"><b>Diretrizes utilizadas:</b> Particionamento de equivalência: se a condição de entrada (ou saída) especifica um conjunto de valores determinados e o programa pode manipulá-los de forma diferente , é definida uma classe válida para cada um desses valores e uma classe inválida com outro valor qualquer; se a condição de entrada (ou saída) especifica uma situação do tipo “deve ser de tal forma” ou é booleana, são definidas uma classe válida e uma inválida.</p>
          <p class="regra-pont um"><b>*Regra da pontuação (missões de 5 a 7):</b> +40 pontos se a resolução completa da fase de uso dos critérios da técnica funcional estiver correta.</p>
        </div>

          <div class="correcao-fase" v-if="faseIndex === 1">
          <h1>Fase 2</h1>
          <p>Pontuação obtida: <b>{{ pont_fase_dois }}</b></p>
          <div class="respostas">
            <div class="resolucao-esperada">
              <h1>Casos de teste esperados</h1>
              <div class="resolucao-esperada-container-CT">
                   <div class="cabecalho">
                      <span>Entrada</span>
                      <span>Saída esperada</span>
                    </div>

                    <div class="CTs">
                      <div class="CT">
                        <div class="entrada-saida">
                          <p>Usuário = def345, senha = 123 e tipo = operador de energia OU Usuário = aasbn5, senha = 9999 e tipo = técnico em comunicação</p>
                          <p>Login não realizado e mensagem 'Senha inválida!'</p>
                        </div>
                      </div>

                      <div class="CT">
                        <div class="entrada-saida">
                          <p>Usuário = def345, senha em branco e tipo = operador de energia</p>
                          <p>Login não realizado e mensagem 'Preencha o campo de senha!'</p>
                        </div>
                      </div>

                      <div class="CT">
                        <div class="entrada-saida">
                          <p>Usuário = 234xxx, senha = oo344 e tipo = administrador</p>
                          <p>Usuário do tipo administrador logado com sucesso</p>
                        </div>
                      </div>

                       <div class="CT">
                        <div class="entrada-saida">
                          <p>Usuário = 123, senha = 7809 e tipo = operador de energia OU Usuário = 123, senha = oo344 e tipo = administrador</p>
                          <p>Login não realizado e mensagem 'Usuário inválido!'</p>
                        </div>
                      </div>

                       <div class="CT">
                        <div class="entrada-saida">
                          <p>Usuário em branco, senha = 7809 e tipo = operador de energia</p>
                          <p>Login não realizado e mensagem 'Preencha o campo de usuário!'</p>
                        </div>
                      </div>

                       <div class="CT">
                        <div class="entrada-saida">
                          <p>Usuário = 234xxx, senha = oo344 e tipo = técnico em comunicação OU Usuário = def345, senha = 7809 e tipo = administrador OU Usuário = aasbn5, senha = pol$444 e tipo = operador de energia</p>
                          <p>Login não realizado e mensagem 'O tipo de usuário não corresponde ao usuário e senha inseridos!'</p>
                        </div>
                      </div>

                       <div class="CT">
                        <div class="entrada-saida">
                          <p>Usuário = aasbn5, senha = pol$444 e tipo = técnico em comunicação</p>
                          <p>Usuário do tipo técnico em comunicação logado com sucesso</p>
                        </div>
                      </div>

                      <div class="CT">
                        <div class="entrada-saida">
                          <p>Usuário = def345, senha = 7809 e tipo não selecionado</p>
                          <p>Login não realizado e mensagem 'Escolha um tipo de usuário!'</p>
                        </div>
                      </div>

                       <div class="CT">
                        <div class="entrada-saida">
                          <p>Usuário = def345, senha = 7809 e tipo = operador de energia</p>
                          <p>Usuário do tipo operador de energia logado com sucesso</p>
                        </div>
                      </div>

                    </div>
              </div>
            </div>

            <div class="sua-resolucao">
              <h1>Seus casos de teste</h1>
               <div class="resolucao-esperada-container-CT">
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
                        <img class="correcao-img-ct" v-if="correcoes_cts[index]" src="@/assets/img/acerto.png" alt="acerto" />
                        <img class="correcao-img-ct" v-if="!correcoes_cts[index] && !cts_excedentes[index]" src="@/assets/img/erro.png" alt="erro" />
                        <div class="excedente" v-if="!correcoes_cts[index] && cts_excedentes[index]">
                          <img src="@/assets/img/warning.png" alt="excedente">
                          <p>(excedente)</p>
                        </div>
                      </div>
                    </div>
              </div>
            </div>

          </div>
          <p class="regra-pont"><b>*Regra da pontuação (missões de 5 a 7):</b> +10 pontos por caso de teste correto e -10 pontos por caso de teste incorreto ou excedente.</p>
        </div>

          <div class="correcao-fase" v-if="faseIndex === 2">
          <h1>Fase 3</h1>
          <p>Pontuação obtida: <b>{{ pont_fase_tres }}</b></p>
          <div class="respostas">
            <div class="resolucao-esperada">
              <h1>Falhas existentes</h1>
              <p class="falha">Usuário do tipo técnico em comunicação é logado como administrador.</p>
              <p class="falha">Quando o usuário e a senha estão corretos, mas o tipo de usuário não corresponde, o login é realizado.</p>
            </div>

            <div class="sua-resolucao">
              <h1>Falhas encontradas ({{qtd_falhas_encontradas}}/2)</h1>
               <p v-if="encontrou_falha1" class="falha">Usuário do tipo técnico em comunicação é logado como administrador.</p>
               <p v-if="encontrou_falha2" class="falha">Quando o usuário e a senha estão corretos, mas o tipo de usuário não corresponde, o login é realizado.</p>
            </div>

          </div>
           <p class="regra-pont"><b>*Regra da pontuação (missões de 5 a 7):</b> +20 pontos por falha encontrada.</p>
        </div>

        <img class="seta" :class="{ disabled: faseIndex === 0 }" id="ant" @click="anterior" src="@/assets/img/next.png" alt="anterior">
        <img class="seta" :class="{ disabled: faseIndex === 2 }" id="prox" @click="proximo" src="@/assets/img/next.png" alt="proximo">
        
      </div>
      <router-link to='/nivel-oito-apresentacao'><img src="@/assets/img/seta-2.svg" alt="proxima tela" id="proxima-tela"></router-link>
    </div>
  </div>
</template>

<script>
import { store } from '@/store';

export default {
  name: 'NivelSeteFeedback',
  data() {
    var pontuacao = store.pontuacaoJogador.pont_fases_niveis[6][0] + store.pontuacaoJogador.pont_fases_niveis[6][1] + store.pontuacaoJogador.pont_fases_niveis[6][2];

    pontuacao = pontuacao < 0 ? 0 : pontuacao;

    const pont_fase_um = store.pontuacaoJogador.pont_fases_niveis[6][0];
    const pont_fase_dois = store.pontuacaoJogador.pont_fases_niveis[6][1];
    const pont_fase_tres = store.pontuacaoJogador.pont_fases_niveis[6][2];
    const acertou = store.pontuacaoJogador.pont_fases_niveis[6][0] != 0 ? true : false;

    const encontrou_falha1 = store.respostas_fase_tres.falhas_encontradas_missao_sete[0];
    const encontrou_falha2 = store.respostas_fase_tres.falhas_encontradas_missao_sete[1];

    const qtd_falhas_encontradas = (encontrou_falha1 ? 1 : 0) + (encontrou_falha2 ? 1 : 0);

    const mensagem_feedback = pontuacao >= 100
      ? 'Excelente! Você se saiu muito bem!'
      : pontuacao >= 60
      ? 'Bom trabalho! Continue se esforçando'
      : 'Você pode melhorar. Continue praticando!';
    return {
      pontuacao,
      displayedPontuacao: 0,
      mensagem_feedback,
      pont_fase_um,
      pont_fase_dois,
      pont_fase_tres,
      acertou,
      faseIndex: 0,
      casosTeste: [],
      correcoes_cts: [],
      encontrou_falha1,
      encontrou_falha2,
      qtd_falhas_encontradas,
      classes_validas: ['válido (a)', '= administrador', '= 7809', '= op. de energia', '= 234xxx', '= tec. em comunicação', 'válido (a)', 'selecionado', 'preenchido(a)', 'OK', 'preenchido(a)', '= oo344'],
      classes_invalidas: ['em branco', 'não selecionado', 'inválido (a)', 'não OK', 'inválido (a)', 'em branco', 'op. de máquinas', '= 1234'],
      validas: [],
      invalidas: [],
      cts_excedentes: []
    };
  },
  mounted() {
    this.validas = [...store.respostas_fase_um.missao_sete_validas];
    this.invalidas = [...store.respostas_fase_um.missao_sete_invalidas];

    this.casosTeste = [...store.respostas_fase_dois.cts_missao_sete];
    this.correcoes_cts = [...store.respostas_fase_dois.correcao_missao_sete];
    this.cts_excedentes = [...store.respostas_fase_dois.cts_excedentes_missao_sete];
    setTimeout(this.animarPontuacao, 1500);
  },
  methods: {
    proximo() {
      if (this.faseIndex < 2) this.faseIndex++;
    },
    anterior() {
      if (this.faseIndex > 0) this.faseIndex--;
    },
    animarPontuacao() {
      const duration = 2000;
      const start = performance.now();
      const pontuacaoFinal = this.pontuacao;

      const animate = (timestamp) => {
        const elapsed = timestamp - start;
        if (elapsed < duration) {
          const progress = elapsed / duration;
          this.displayedPontuacao = Math.floor(progress * pontuacaoFinal);
          requestAnimationFrame(animate);
        } else {
          this.displayedPontuacao = pontuacaoFinal;
        }
      };

      requestAnimationFrame(animate);
    }
  }
}
</script>

<style scoped>
.container-background {
  background-image: url("/src/assets/img/background-melhorado.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  background-position: 20% 30%;
  font-family: "Bai Jamjuree", sans-serif;
}

.container_conteudo {
  background: rgba(0, 0, 0, 0.6);
  padding: 1.25rem 2.5rem;
  width: 100vw;
  height: 100vh;
  animation: fadeIn 2s;
}

.titulo_conteudo {
  margin-bottom: 2.6rem;
  font-family: "Orbitron", monospace;
  color: #c6d7eb;
  font-size: 42px;
  font-weight: 400;
  letter-spacing: 0.144rem;
  text-align: center;
  animation: slideInY 1.5s;
}

@keyframes slideInY {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.text-pont-total{
  color: #c6d7eb;
  text-align: center;
  font-family: "Iceland", sans-serif;
  font-size: 29px;
  font-weight: 500;
  animation: slideInY 1.5s forwards;
  animation-delay: 0.6s;
  opacity: 0;
}

.pont-total{
  color: #c6d7eb;
  text-align: center;
  font-family: "Chakra Petch", sans-serif;
  margin-top: 7px;
  font-size: 23px;
  font-weight: 700;
  animation: slideInY 1.5s forwards;
  animation-delay: 1.1s;
  opacity: 0;
}

.correcoes{
  margin-top: 26px;
  border-radius: 3px;
  background-color: rgba(1, 5, 12, 0.5);
  height: 55%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  overflow-y: auto;
  position: relative;
  opacity: 0;
  animation: slideInY 1.5s forwards;
  animation-delay: 1.5s;
}

@keyframes slideInX {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.correcoes::-webkit-scrollbar {
  width: 9px;
}

.correcoes::-webkit-scrollbar-thumb {
  background-color: #14254de7;
  border-radius: 3px;
}

.correcoes::-webkit-scrollbar-track {
  background: rgba(88, 95, 118, 0.861);
  border-radius: 3px;
}

.correcoes::-webkit-scrollbar-thumb:hover {
  background: #0c1c43e7;
}

.correcao-fase{
  padding: 14px;
  animation: fadeIn 2s;
}

.correcao-fase h1, .correcao-fase p{
  text-align: center;
  color: #cbd6e2;
}

.correcao-fase h1{
  font-family: "Orbitron", monospace;
  font-size: 25px;
  margin-bottom: 12px;
}

.correcao-fase p{
  font-size: 17px;
}

.correcao-fase  .respostas{
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 10%;
}

.correcao-fase .div-column {
  flex-direction: column;
  align-items: center;
}

.correcao-fase  .respostas h1{
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 19px;
  margin-top: 12px;
}

.resolucao-esperada-container {
  margin-top: 22px;
  display: flex;
  flex-direction: row;
  gap: 38px;
  justify-content: center;
  align-items: center;
  font-family: "Bai Jamjuree", sans-serif;
}

.resolucao-esperada-sem-flex {
  display: block;
}

.correcao-fase .diretriz-utilizada, .correcao-fase .regra-pont{
  text-align: left;
  margin-top: 20px;
  line-height: 25px;
  margin-left: 50px;
  margin-bottom: 8px;
}

.correcao-fase .regra-pont{
  margin-top: 30px;
}

.sua-resolucao{
  position: relative;
}

.correcao-img{
  position: absolute;
  width: 22px;
  left: 93%;
  top: 3%;
}

.seta{
  position: absolute;
  width: 32px;
  cursor: pointer;
  top: 40%;
  transition: 0.3s;
}

.seta:not(.disabled):hover{
  filter: drop-shadow(1px -1px 3px rgba(242, 242, 245, 0.5));
}

#prox{
  left: 95%;
}

#ant{
  left: 3%;
  transform: rotate(180deg);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.disabled{
  cursor: auto;
}

.CT {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
}

.CTs .entrada-saida {
  display: flex;
  align-items: first baseline;
}

.CTs .entrada-saida p {
  font-size: 14px;
  margin: 0;
  word-wrap: break-word;
  line-height: 1.2;
  color: #d2d8e6;
  text-align: left;
  margin-right: 20px;
  width: 130px;
}

.cabecalho {
  display: flex;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 15px;
  color: #c7cfe6;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 18px;
}

.cabecalho span {
  display: inline-block;
  margin-right: 20px;
  width: 130px;
}

.correcao-img-ct{
  position: absolute;
  width: 18px;
  left: 300px;
}

#proxima-tela{
  position: absolute;
  bottom: 3%;
  right: 3.5%;
  width: 37px;
  transition: 0.3s;
  opacity: 0;
  animation: slideInX 1.5s forwards;
  animation-delay: 2s;
}

#proxima-tela:hover{
   filter: drop-shadow(1px -1px 3px rgba(242, 242, 245, 0.5));
}

.correcao-fase .um{
  margin-left: 18px;
}

.correcao-fase .primeira{
  margin-top: 50px;
}

.respostas .falha {
  max-width: 350px;
  text-align: left;
  margin-bottom: 12px;
}

.container-condicoes1 {
  display: flex;
  justify-content: center;
  align-items: first baseline;
  gap: 9%;
  font-family: "Bai Jamjuree", sans-serif;
  margin-bottom: 32px;
}

.titulo-cond {
  font-size: 15px;
  font-weight: 500;
  color: #dbddeb;
  display: block;
  text-align: center;
}

.validas-e-invalidas {
  display: flex;
  justify-content: center;
  margin-top: 8px;
  gap: 24px;
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
  color:#e1e5f0;
  font-size: 16px;
  margin-top: 30px;
  font-weight: 600;
  text-align: center;
}

.p0 {
  font-family: "Bai Jamjuree", sans-serif;
  color:#ebeef5;
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

.correcao-fase .exercicio-avl {
  margin-top: 30px;
  margin-bottom: 8px;
  display: flex;
  gap: 0.375rem;
  justify-content: center;
  align-items: last baseline;
  font-family: "Bai Jamjuree", sans-serif;
}

.correcao-fase .linha01 {
  width: 90px;
  height: 6px;
  color: #c6d7eb;
  background-color: #c2c5e0;
  border-radius: 1px;
}

.correcao-fase .part01 {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  justify-content: center;
  align-items: center;
}

.correcao-fase .part01 p {
  font-size: 14px;
  font-weight: 500;
}

.correcao-fase .exercicio-avl .valida p {
  color: #57af7b;
}

.correcao-fase .exercicio-avl .invalida p {
  color: #9c443e;
}

.correcao-fase .valor-limite {
  font-size: 14px;
  color:#dfe0ec;
  font-weight: 500;
  padding: 6px;
  border-radius: 3px;
  border: 1.4px solid #b6bbe1;
}

.excedente {
  position: absolute;
  left: 300px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.excedente img {
  width: 18px;
}

.excedente p {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 13px;
  color: #c7cfe6;
}

</style>