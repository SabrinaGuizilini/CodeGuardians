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
          <div class="respostas respostas_fase1">
            <div class="resolucao-esperada">
              <h1>Resolução esperada</h1>
              <div class="resolucao-esperada-container">
                <div class="validas-container">
                  <span>Classes válidas</span>
                  <div class="opcoes">
                    <p>Alerta emitido</p>
                  </div>
                </div>

                <div class="invalidas-container">
                  <span>Classes inválidas</span>
                  <div class="opcoes">
                    <p>Alerta não emitido</p>
                  </div>
                </div>

             </div>
            </div>

            <div class="sua-resolucao">
              <img class="correcao-img" v-if="acertou" src="@/assets/img/acerto.png" alt="acerto" />
              <img class="correcao-img" v-else src="@/assets/img/erro.png" alt="erro" />
              <h1>Sua resolução</h1>
               <div class="resolucao-esperada-container">
                <div class="validas-container">
                  <span>Classes válidas</span>
                  <div class="opcoes">
                    <p v-for="(resp, index) in validas" :key="index">{{ resp }}</p>
                  </div>
                </div>

                <div class="invalidas-container">
                  <span>Classes inválidas</span>
                  <div class="opcoes">
                    <p v-for="(resp, index) in invalidas" :key="index">{{ resp }}</p>
                  </div>
                </div>

             </div>
            </div>

          </div>
          <p class="diretriz-utilizada"><b>Diretriz utilizada:</b> Se a condição de entrada (ou saída) especifica uma situação do tipo “deve ser de tal forma” ou é booleana, são definidas uma classe válida e uma inválida.</p>

          <p class="regra-pont"><b>*Regra da pontuação (missões de 5 a 7):</b> +40 pontos se a resolução completa da fase de uso dos critérios da técnica funcional estiver correta.</p>
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
                          <p>Alerta 98012: Alta tensão - risco de problemas no sistema elétrico. OU Alerta 65323: Instabilidade no fornecimento de energia devido a várias interrupções. OU Alerta 12341: Falha de energia.</p>
                          <p>Informações do alerta recebidas corretamente pelo submódulo de envio de alertas e alerta enviado com sucesso para o departamento de energia elétrica</p>
                        </div>
                      </div>

                      <div class="CT">
                        <div class="entrada-saida">
                          <p>Alerta não emitido (sem alerta)</p>
                          <p>Os campos do submódulo de envio de alertas permanecem em branco e nenhum alerta é enviado</p>
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
                        <img class="correcao-img-ct" v-else src="@/assets/img/erro.png" alt="erro" />
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
          <div class="respostas respostas_fase3">
            <div class="resolucao-esperada">
              <h1>Falhas existentes</h1>
              <p>O departamento para o qual o alertas são enviados é o de trânsito</p>
            </div>

            <div class="sua-resolucao">
              <h1>Falhas encontradas ({{qtd_falhas_encontradas}}/1)</h1>
               <p v-if="encontrou_falha">O departamento para o qual o alertas são enviados é o de trânsito</p>
            </div>

          </div>
           <p class="regra-pont"><b>*Regra da pontuação (missões de 5 a 7):</b> +20 pontos por falha encontrada.</p>
        </div>

        <img class="seta" :class="{ disabled: faseIndex === 0 }" id="ant" @click="anterior" src="@/assets/img/next.png" alt="anterior">
        <img class="seta" :class="{ disabled: faseIndex === 2 }" id="prox" @click="proximo" src="@/assets/img/next.png" alt="proximo">
        
      </div>
      <router-link to='/nivel-sete-apresentacao'><img src="@/assets/img/seta-2.svg" alt="proxima tela" id="proxima-tela"></router-link>
    </div>
  </div>
</template>

<script>
import { store } from '@/store';

export default {
  name: 'NivelSeisFeedback',
  data() {
    var pontuacao = store.pontuacaoJogador.pont_fases_niveis[5][0] + store.pontuacaoJogador.pont_fases_niveis[5][1] + store.pontuacaoJogador.pont_fases_niveis[5][2];

    pontuacao = pontuacao < 0 ? 0 : pontuacao;

    const pont_fase_um = store.pontuacaoJogador.pont_fases_niveis[5][0];
    const pont_fase_dois = store.pontuacaoJogador.pont_fases_niveis[5][1];
    const pont_fase_tres = store.pontuacaoJogador.pont_fases_niveis[5][2];
    const acertou = store.pontuacaoJogador.pont_fases_niveis[5][0] != 0 ? true : false;
    const encontrou_falha = store.pontuacaoJogador.pont_fases_niveis[5][2] != 0 ? true : false;

    const qtd_falhas_encontradas = encontrou_falha === true ? '1' : '0';

    const mensagem_feedback = pontuacao >= 80
      ? 'Você foi incrível! Mantenha esse ritmo!'
      : pontuacao >= 30
      ? 'Ótimo esforço! Você está no caminho certo!'
      : 'Você tem tudo para melhorar!';
    return {
      pontuacao,
      displayedPontuacao: 0,
      mensagem_feedback,
      pont_fase_um,
      pont_fase_dois,
      pont_fase_tres,
      validas: [],
      invalidas: [],
      acertou,
      faseIndex: 0,
      casosTeste: [],
      correcoes_cts: [],
      encontrou_falha,
      qtd_falhas_encontradas
    };
  },
  mounted() {
    this.validas = [...store.respostas_fase_um.validas_missao_seis],
    this.invalidas = [...store.respostas_fase_um.invalidas_missao_seis];
    this.casosTeste = [...store.respostas_fase_dois.cts_missao_seis];
    this.correcoes_cts = [...store.respostas_fase_dois.correcao_missao_seis];
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
  gap: 15%;
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
  align-items: first baseline;
  font-family: "Bai Jamjuree", sans-serif;
}

.validas-container span {
  text-align: center;
  font-size: 17px;
  color: #2c814e;
  font-weight: 500;
}

.invalidas-container span {
  text-align: center;
  font-size: 17px;
  color: #812c2c;
  font-weight: 500;
}

.opcoes {
  margin-top: 18px;
  color: #4e5a7f;
  font-weight: 500;
}

.opcoes p {
  margin-bottom: 18px;
  font-size: 16px;
  text-align: left;
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
  left: 85%;
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

.correcao-fase  .respostas_fase1 {
  gap: 4%;
}

.correcao-fase  .respostas_fase3 {
  gap: 3%;
}
</style>