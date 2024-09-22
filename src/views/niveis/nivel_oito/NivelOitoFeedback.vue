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
              <div class="resolucao-esperada-container">
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
                      <p class="campo-tabela">Op. ener.</p>
                    </div>

                    <div class="select-regra">
                      <p class="campo-tabela">&lt; 1 ano</p>
                    </div>

                    <div class="select-regra">
                      <p class="campo-tabela">A</p>
                    </div>
                  </div>

                  <div class="col">
                    <div class="regra">Regra 2</div>

                    <div class="select-regra">
                      <p class="campo-tabela">Op. ener.</p>
                    </div>

                    <div class="select-regra">
                      <p class="campo-tabela">>= 1 ano</p>
                    </div>

                    <div class="select-regra">
                      <p class="campo-tabela">B</p>
                    </div>
                  </div>

                  <div class="col">
                    <div class="regra">Regra 3</div>

                    <div class="select-regra">
                      <p class="campo-tabela">Tec. com.</p>
                    </div>

                    <div class="select-regra">
                      <p class="campo-tabela">&lt; 1 ano</p>
                    </div>

                    <div class="select-regra">
                      <p class="campo-tabela">C</p>
                    </div>
                  </div>

                  <div class="col">
                    <div class="regra">Regra 4</div>

                    <div class="select-regra">
                      <p class="campo-tabela">Tec. com.</p>
                    </div>

                    <div class="select-regra">
                      <p class="campo-tabela">>= 1 ano</p>
                    </div>

                    <div class="select-regra">
                      <p class="campo-tabela">D</p>
                    </div>
                  </div>

                  <div class="col">
                    <div class="regra">Regra 5</div>

                    <div class="select-regra">
                      <p class="campo-tabela">Adm.</p>
                    </div>

                    <div class="select-regra">
                      <p class="campo-tabela">&lt; 1 ano</p>
                    </div>

                    <div class="select-regra">
                      <p class="campo-tabela">E</p>
                    </div>
                  </div>

                  <div class="col">
                    <div class="regra">Regra 6</div>

                    <div class="select-regra">
                      <p class="campo-tabela">Adm.</p>
                    </div>

                    <div class="select-regra">
                      <p class="campo-tabela">>= 1 ano</p>
                    </div>

                    <div class="select-regra">
                      <p class="campo-tabela">F</p>
                    </div>
                  </div>

                </div>

             </div>
            </div>

            <div class="sua-resolucao">
              <img class="correcao-img" v-if="acertou" src="@/assets/img/acerto.png" alt="acerto" />
              <img class="correcao-img" v-else src="@/assets/img/erro.png" alt="erro" />
              <h1>Sua resolução</h1>
               <div class="resolucao-esperada-container">
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
            </div>

          </div>
          <p class="regra-pont">* Clique <span class="link_modal" @click="openModal()">aqui</span> para ver o significado das permissões (A, B, C, ...)</p>
          <p class="regra-pont um"><b>*Regra da pontuação (missão 8):</b> +50 pontos se a resolução completa da fase de uso dos critérios da técnica funcional estiver correta.</p>
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
                          <p>Login como Op. de energia com tempo de serviço &lt; 1 ano</p>
                          <p>A. pode acessar somente submódulos de infraestrutura de energia, tendo permissão para monitorar interrupções, tensões e falhas de energia (ver alertas emitidos). Este usuário não pode conseguir ativar geradores.</p>
                        </div>
                      </div>

                      <div class="CT">
                        <div class="entrada-saida">
                          <p>Login como Op. de energia com tempo de serviço >= 1 ano</p>
                          <p>B. pode acessar somente submódulos de infraestrutura de energia, tendo permissão para monitorar interrupções, tensões e falhas de energia (ver alertas emitidos) e ativar geradores.</p>
                        </div>
                      </div>

                      <div class="CT">
                        <div class="entrada-saida">
                          <p>Login como Tec. em comunicação com tempo de serviço &lt; 1 ano</p>
                          <p>C. pode acessar somente submódulos da infraestrutura de redes de comunicação e não pode conseguir enviar alertas.</p>
                        </div>
                      </div>

                       <div class="CT">
                        <div class="entrada-saida">
                          <p>Login como Tec. em comunicação com tempo de serviço >= 1 ano</p>
                          <p>D. pode acessar somente submódulos da infraestrutura de redes de comunicação, tendo permissão para enviar alertas.</p>
                        </div>
                      </div>

                       <div class="CT">
                        <div class="entrada-saida">
                          <p>Login como Administrador com tempo de serviço &lt; 1 ano</p>
                          <p>E. pode acessar todos os submódulos do sistema, incluindo verificar a emissão de alerta no módulo de detecção de falhas de energia e a integração do alerta com o módulo de envio de alertas, mas não pode ativar geradores nem enviar alertas.</p>
                        </div>
                      </div>

                       <div class="CT">
                        <div class="entrada-saida">
                          <p>Login como Administrador com tempo de serviço >= 1 ano</p>
                          <p>F. pode acessar todos os submódulos do sistema, incluindo verificar emissão de alerta no módulo de detecção de falhas de energia, ativar geradores, verificar a integração do alerta com o módulo de envio de alertas e enviar o alerta.</p>
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
          <p class="regra-pont"><b>*Regra da pontuação (missão 8):</b> +15 pontos por caso de teste correto e -15 pontos por caso de teste incorreto ou excedente.</p>
        </div>

          <div class="correcao-fase" v-if="faseIndex === 2">
          <h1>Fase 3</h1>
          <p>Pontuação obtida: <b>{{ pont_fase_tres }}</b></p>
          <div class="respostas">
            <div class="resolucao-esperada">
              <h1>Falhas existentes</h1>
              <p class="falha">Administradores com menos de 1 ano de serviço podem ativar geradores.</p>
            </div>

            <div class="sua-resolucao">
              <h1>Falhas encontradas ({{qtd_falhas_encontradas}}/1)</h1>
               <p v-if="encontrou_falha" class="falha">Administradores com menos de 1 ano de serviço podem ativar geradores.</p>
            </div>

          </div>
           <p class="regra-pont"><b>*Regra da pontuação (missão 8):</b> +30 pontos por falha encontrada.</p>
        </div>

        <img class="seta" :class="{ disabled: faseIndex === 0 }" id="ant" @click="anterior" src="@/assets/img/next.png" alt="anterior">
        <img class="seta" :class="{ disabled: faseIndex === 2 }" id="prox" @click="proximo" src="@/assets/img/next.png" alt="proximo">
        
      </div>
      <router-link to='/final-um'><img src="@/assets/img/seta-2.svg" alt="proxima tela" id="proxima-tela"></router-link>
    </div>

    <ModalAcoes
      :isVisible="showModal"
      @close="showModal = false"
      :paragrafos_modal="paragrafos_modal"
      :top="'20%'" 
      :left="'27%'"
    />
  </div>
</template>

<script>
import ModalAcoes from "@/components/niveis/ModalAcoes.vue";
import { store } from '@/store';

export default {
  name: 'NivelOitoFeedback',
   components: {
    ModalAcoes
  },
  data() {
    var pontuacao = store.pontuacaoJogador.pont_fases_niveis[7][0] + store.pontuacaoJogador.pont_fases_niveis[7][1] + store.pontuacaoJogador.pont_fases_niveis[7][2];

    pontuacao = pontuacao < 0 ? 0 : pontuacao;

    const pont_fase_um = store.pontuacaoJogador.pont_fases_niveis[7][0];
    const pont_fase_dois = store.pontuacaoJogador.pont_fases_niveis[7][1];
    const pont_fase_tres = store.pontuacaoJogador.pont_fases_niveis[7][2];
    const acertou = store.pontuacaoJogador.pont_fases_niveis[7][0] != 0 ? true : false;

    const encontrou_falha = store.pontuacaoJogador.pont_fases_niveis[7][2] != 0 ? true : false;

    const qtd_falhas_encontradas = encontrou_falha === true ? '1' : '0';

    const mensagem_feedback = pontuacao >= 120
      ? 'Uau! Sua habilidade é impressionante!'
      : pontuacao >= 70
      ? 'Ótimo trabalho! Continue assim!'
      : 'Não desanime! A prática leva à perfeição.';
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
      showModal: false,
      encontrou_falha,
      qtd_falhas_encontradas,
      tabela: [],
      paragrafos_modal : [
        'A. pode acessar somente submódulos de infraestrutura de energia, tendo permissão para monitorar interrupções, tensões e falhas de energia (ver alertas emitidos). Este usuário não pode conseguir ativar geradores;',
        'B. pode acessar somente submódulos de infraestrutura de energia, tendo permissão para monitorar interrupções, tensões e falhas de energia (ver alertas emitidos) e ativar geradores;',
        'C. pode acessar somente submódulos da infraestrutura de redes de comunicação e não pode conseguir enviar alertas;',
        'D. pode acessar somente submódulos da infraestrutura de redes de comunicação, tendo permissão para enviar alertas;',
        'E. pode acessar todos os submódulos do sistema, incluindo verificar a emissão de alerta no módulo de detecção de falhas de energia e a integração do alerta com o módulo de envio de alertas, mas não pode ativar geradores nem enviar alertas;',
        'F. pode acessar todos os submódulos do sistema, incluindo verificar emissão de alerta no módulo de detecção de falhas de energia, ativar geradores, verificar a integração do alerta com o módulo de envio de alertas e enviar o alerta.',
      ],
    };
  },
  beforeMount() {
   this.carregarDados();
  },
  mounted() {
    this.casosTeste = [...store.respostas_fase_dois.cts_missao_oito];
    this.correcoes_cts = [...store.respostas_fase_dois.correcao_missao_oito];
    setTimeout(this.animarPontuacao, 1500);
  },
  methods: {
    proximo() {
      if (this.faseIndex < 2) this.faseIndex++;
    },
    anterior() {
      if (this.faseIndex > 0) this.faseIndex--;
    },
    openModal() {
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
  gap: 30px;
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
  left: 94%;
  top: 7%;
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

.div-column .ex-tabela {
  display: flex;
  justify-content: center;
}

.div-column .texto-destaque {
  font-weight: 600;
}

.div-column .col div {
  font-family: "Bai Jamjuree", sans-serif;
  color: #d8dfec;
  font-size: 13px;
  padding: 6px;
}

.div-column .col .regra, .div-column .col .resp, .div-column .col .cod {
  text-align: center;
  font-weight: 500;
}

.ex-tabela .col .campo-tabela {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #d8dfec;
  text-align: center;
}

.ex-tabela .col .acoes {
  padding-bottom: 5.47px;
}

.ex-tabela .col .cod {
  text-align: left;
}

.ex-tabela .col:not(:last-child) div {
  border-right: 0.125rem solid #d8dfec;
}

.ex-tabela .col > div:not(:last-child) {
  border-bottom: 0.125rem solid #d8dfec;
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

.link_modal {
  text-decoration: underline;
  cursor: pointer;
  color: #7f9bcb;
}

</style>