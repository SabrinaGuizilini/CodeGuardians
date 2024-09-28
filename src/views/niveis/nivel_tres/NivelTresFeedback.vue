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
          <div class="respostas-fase1">
            <div class="resolucao-esperada">
              <h1>Resolução esperada</h1>
              <div class="resolucao-esperada-container">
              <div class="serpara-exs">

              <div class="exercicio-avl">

                <p class="valida_posicionada" style="font-size: 15px;">Classe válida</p>

                <p class="invalida_posicionada">Classe inválida</p>
                <p class="valida_posicionada2">Classe válida</p>
                <p class="invalida_posicionada2">Classe inválida</p>

                <div class="part01 invalida">
                  <p>Classe inválida</p>
                  <div class="linha01 linha_curta"></div>
                </div>

                <span class="valor-limite">-1</span>
                <span class="valor-limite">0</span>

                <div class="linha01 linha_mais_curta_ainda"></div>
                <span class="valor-limite">99</span>
                <span class="valor-limite">100</span>

                <div class="linha01 linha_mais_curta"></div>

                <span class="valor-limite">240</span>
                <span class="valor-limite">241</span>

                <div class="linha01 linha_mais_longa"></div>

                <span class="valor-limite">10000</span>
                <span class="valor-limite">10001</span>


                <div class="part01 invalida">
                  <p>Classe inválida</p>
                  <div class="linha01 linha_curta"></div>
                </div>

             </div>

             <p class="ou">OU</p>


             <div class="exercicio-avl">

                <p class="valida_posicionada" style="font-size: 15px;">Classe válida</p>

                <p class="invalida_posicionada" style="left: 27%">Classe inválida</p>
                <p class="valida_posicionada2" style="left: 47%">Classe válida</p>
                <p class="invalida_posicionada2" style="left: 66%">Classe inválida</p>

                <div class="part01 invalida">
                  <p>Classe inválida</p>
                  <div class="linha01 linha_curta"></div>
                </div>

                <span class="valor-limite">10001</span>
                <span class="valor-limite">10000</span>

                <div class="linha01 linha_mais_curta_ainda"></div>
                <span class="valor-limite">241</span>
                <span class="valor-limite">240</span>

                <div class="linha01 linha_mais_curta"></div>

                <span class="valor-limite">100</span>
                <span class="valor-limite">99</span>

                <div class="linha01 linha_mais_longa"></div>

                <span class="valor-limite">0</span>
                <span class="valor-limite">-1</span>


                <div class="part01 invalida">
                  <p>Classe inválida</p>
                  <div class="linha01 linha_curta"></div>
                </div>

             </div>


             </div>

             </div>
            </div>

            <div class="sua-resolucao com-margem">
              <img class="correcao-img" v-if="acertou" src="@/assets/img/acerto.png" alt="acerto" />
              <img class="correcao-img" v-else src="@/assets/img/erro.png" alt="erro" />
              <h1>Sua resolução</h1>
               <div class="resolucao-esperada-container">
                <div class="exercicio-avl" id="ex-avl">
                  
                  <p class="valida_posicionada" style="font-size: 15px;">Classe válida</p>

                  <p class="invalida_posicionada">Classe inválida</p>
                  <p class="valida_posicionada2">Classe válida</p>
                  <p class="invalida_posicionada2">Classe inválida</p>

                  <div class="part01 invalida">
                    <p>Classe inválida</p>
                    <div class="linha01 linha_curta"></div>
                  </div>

                  <span class="valor-limite">{{ valores_limite[0] }}</span>
                  <span class="valor-limite">{{ valores_limite[1] }}</span>

                  <div class="linha01 linha_mais_curta_ainda"></div>
                  <span class="valor-limite">{{ valores_limite[2] }}</span>
                  <span class="valor-limite">{{ valores_limite[3] }}</span>

                  <div class="linha01 linha_mais_curta"></div>

                  <span class="valor-limite">{{ valores_limite[4] }}</span>
                  <span class="valor-limite">{{ valores_limite[5] }}</span>

                  <div class="linha01 linha_mais_longa"></div>

                  <span class="valor-limite">{{ valores_limite[6] }}</span>
                  <span class="valor-limite">{{ valores_limite[7] }}</span>


                  <div class="part01 invalida">
                    <p>Classe inválida</p>
                    <div class="linha01 linha_curta"></div>
                  </div>

               </div>

             </div>
            </div>

          </div>
          <p class="diretriz-utilizada um primeira"><b>Diretrizes utilizadas:</b> Particionamento de Equivalência: se uma condição de entrada (ou saída) especifica um intervalo de valores, são definidas uma classe válida e duas inválidas. || Análise do Valor Limite: se uma condição de entrada especifica um intervalo de valores, devem ser definidos casos de teste para: o valor mínimo no intervalo válido, o valor máximo no intervalo válido, o valor logo abaixo do mínimo e o valor logo acima do máximo.</p>

          <p class="regra-pont um"><b>*Regra da pontuação (missões de 1 a 4):</b> +30 pontos se a resolução completa da fase de uso dos critérios da técnica funcional estiver correta.</p>
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
                          <p>Tensão &lt; -1V</p>
                          <p>Mensagem 'Sensor quebrado!'</p>
                        </div>
                      </div>

                      <div class="CT">
                        <div class="entrada-saida">
                          <p>Tensão = -1V</p>
                          <p>Mensagem 'Sensor quebrado!'</p>
                        </div>
                      </div>

                      <div class="CT">
                        <div class="entrada-saida">
                          <p>Tensão = 0V</p>
                          <p>Código 1</p>
                        </div>
                      </div>

                       <div class="CT">
                        <div class="entrada-saida">
                          <p>Tensão > 0V E Tensão &lt; 99V</p>
                          <p>Código 1</p>
                        </div>
                      </div>

                       <div class="CT">
                        <div class="entrada-saida">
                          <p>Tensão = 99V</p>
                          <p>Código 1</p>
                        </div>
                      </div>

                       <div class="CT">
                        <div class="entrada-saida">
                          <p>Tensão = 100V</p>
                          <p>Código 0</p>
                        </div>
                      </div>

                       <div class="CT">
                        <div class="entrada-saida">
                          <p>Tensão > 100V E Tensão &lt; 240V</p>
                          <p>Código 0</p>
                        </div>
                      </div>

                      <div class="CT">
                        <div class="entrada-saida">
                          <p>Tensão = 240V</p>
                          <p>Código 0</p>
                        </div>
                      </div>

                      <div class="CT">
                        <div class="entrada-saida">
                          <p>Tensão = 241V</p>
                          <p>Código 2</p>
                        </div>
                      </div>

                      <div class="CT">
                        <div class="entrada-saida">
                          <p>Tensão > 241V E Tensão &lt; 10000V</p>
                          <p>Código 2</p>
                        </div>
                      </div>

                      <div class="CT">
                        <div class="entrada-saida">
                          <p>Tensão = 10000V</p>
                          <p>Código 2</p>
                        </div>
                      </div>

                      <div class="CT">
                        <div class="entrada-saida">
                          <p>Tensão = 10001V</p>
                          <p>Mensagem 'Sensor quebrado!'</p>
                        </div>
                      </div>

                      <div class="CT">
                        <div class="entrada-saida">
                          <p>Tensão > 10001V</p>
                          <p>Mensagem 'Sensor quebrado!'</p>
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
          <p class="regra-pont"><b>*Regra da pontuação (missões de 1 a 4):</b> +5 pontos por caso de teste correto e -5 pontos por caso de teste incorreto ou excedente.</p>
        </div>

          <div class="correcao-fase" v-if="faseIndex === 2">
          <h1>Fase 3</h1>
          <p>Pontuação obtida: <b>{{ pont_fase_tres }}</b></p>
          <div class="respostas">
            <div class="resolucao-esperada">
              <h1>Falhas existentes</h1>
              <p>Quando a tensão é igual a 100V é retornado código 1</p>
              <p class="falha_texto">Quando a tensão é igual a 10001V é retornado código 2</p>
            </div>

            <div class="sua-resolucao">
              <h1>Falhas encontradas ({{qtd_falhas_encontradas}}/2)</h1>
               <p v-if="encontrou_falha1">Quando a tensão é igual a 100V é retornado código 1</p>
               <p v-if="encontrou_falha2" class="falha_texto">Quando a tensão é igual a 10001V é retornado código 2</p>
            </div>

          </div>
           <p class="regra-pont"><b>*Regra da pontuação (missões de 1 a 4):</b> +15 pontos por falha encontrada.</p>
        </div>
        <img class="seta" :class="{ disabled: faseIndex === 0 }" id="ant" @click="anterior" src="@/assets/img/next.png" alt="anterior">
        <img class="seta" :class="{ disabled: faseIndex === 2 }" id="prox" @click="proximo" src="@/assets/img/next.png" alt="proximo">
        
      </div>
      <router-link to='/nivel-quatro-apresentacao'><img src="@/assets/img/seta-2.svg" alt="proxima tela" id="proxima-tela"></router-link>
    </div>
  </div>
</template>

<script>
import { store } from '@/store';

export default {
  name: 'NivelTresFeedback',
  data() {
    var pontuacao = store.pontuacaoJogador.pont_fases_niveis[2][0] + store.pontuacaoJogador.pont_fases_niveis[2][1] + store.pontuacaoJogador.pont_fases_niveis[2][2];

    pontuacao = pontuacao < 0 ? 0 : pontuacao;

    const pont_fase_um = store.pontuacaoJogador.pont_fases_niveis[2][0];
    const pont_fase_dois = store.pontuacaoJogador.pont_fases_niveis[2][1];
    const pont_fase_tres = store.pontuacaoJogador.pont_fases_niveis[2][2];
    const acertou = store.pontuacaoJogador.pont_fases_niveis[2][0] != 0 ? true : false;

    const encontrou_falha1 = store.respostas_fase_tres.falhas_encontradas_missao_tres[0];
    const encontrou_falha2 = store.respostas_fase_tres.falhas_encontradas_missao_tres[1];

    const qtd_falhas_encontradas = (encontrou_falha1 ? 1 : 0) + (encontrou_falha2 ? 1 : 0);

    const mensagem_feedback = pontuacao >= 100
      ? 'Excelente! Você se saiu muito bem!'
      : pontuacao >= 40
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
      valores_limite: [],
      cts_excedentes: []
    };
  },
  mounted() {
    this.valores_limite = [...store.respostas_fase_um.valores_limites_missao_tres];
      this.valores_limite.forEach((item, index) => {
      if (item === '') {
       this.valores_limite[index] = '-';
      }
    });
    this.casosTeste = [...store.respostas_fase_dois.cts_missao_tres];
    this.correcoes_cts = [...store.respostas_fase_dois.correcao_missao_tres];
    this.cts_excedentes = [...store.respostas_fase_dois.cts_excedentes_missao_tres];
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
  overflow-x: auto;
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

.correcao-fase  .respostas, .correcao-fase  .respostas-fase1{
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 9%;
}

.correcao-fase  .respostas-fase1{
  flex-direction: column;
  align-items: center;
  justify-content:initial;
  gap:80%;
}

.correcao-fase  .respostas h1, .correcao-fase  .respostas-fase1 h1{
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
  left: 92%;
  top: 11%;
}

.seta{
  position: absolute;
  width: 32px;
  cursor: pointer;
  top: 40%;
  transition: 0.3s;
}

.seta_posicionada {
  left: 46%;
  top: -80%;
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

.resolucao-esperada-container .exercicio-avl {
  position: relative;
  margin-top: 14px;
  display: flex;
  gap: 0.37rem;
  justify-content: center;
  align-items: last baseline;
  font-family: "Bai Jamjuree", sans-serif;
}

.resolucao-esperada-container .linha01 {
  width: 80px;
  height: 6px;
  color: #c6d7eb;
  background-color: #597a9b;
  border-radius: 1px;
}

.resolucao-esperada-container .part01 {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  justify-content: center;
  align-items: center;
}

.resolucao-esperada-container .part01 p {
  font-size: 15px;
  font-weight: 500;
}

.resolucao-esperada-container .valida p {
  color: #57af7b;
}

.resolucao-esperada-container .invalida p {
  color: #9c443e;
}

.resolucao-esperada-container .valor-limite {
  font-size: 14px;
  color:#9eb9d5;
  font-weight: 500;
  padding: 4px;
  border-radius: 3px;
  border: 1.4px solid #597a9b;
}

.exercicio-avl .valida_posicionada{
  position: absolute;
  left: 41%;
  bottom: 76%;
  color:#5ea47b;
  font-weight: 500;
}

.exercicio-avl .invalida_posicionada {
  position: absolute;
  left: 16%;
  bottom: -50%;
  font-size: 15px;
  font-weight: 500;
  color: #9c443e;
}

.exercicio-avl .valida_posicionada2 {
  position: absolute;
  left: 38%;
  bottom: -50%;
  font-size: 15px;
  font-weight: 500;
  color:#5ea47b;
}

.exercicio-avl .invalida_posicionada2 {
  position: absolute;
  left: 60%;
  bottom: -50%;
  font-size: 15px;
  font-weight: 500;
  color: #9c443e;
}

.exercicio-avl .linha_curta {
  width: 44px;
}

.exercicio-avl .linha_mais_curta {
   width: 50px;
}

.exercicio-avl .linha_mais_longa {
   width: 56px;
}

.exercicio-avl .linha_mais_curta_ainda {
  width: 30px;
}

.correcao-fase .um{
  margin-left: 18px;
}

.correcao-fase .primeira{
  margin-top: 80px;
}

.falha_texto {
  margin-top: 6px;
}

.com-margem{
  margin-top: 80px;
}

.serpara-exs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.serpara-exs .ou {
  font-family: "Bai Jamjuree", sans-serif;
  color: #c6d7eb;
  font-size: 15px;
  font-weight: 500;
  margin-top: 43px;
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