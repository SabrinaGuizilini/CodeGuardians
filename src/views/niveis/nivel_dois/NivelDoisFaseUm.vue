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
        <p class="enunciado">De acordo com a especificação e as diretrizes do critério de análise do valor limite, complete a reta numérica abaixo com os valores-limites corretos, de modo a dividi-la nas classes de equivalência também corretas:</p>
        <div class="exercicio-avl">

          <div class="part01 invalida">
            <p>Classe inválida</p>
            <div class="linha01"></div>
          </div>

          <input type="number" class="valor-limite" v-model="respostas[0]" @input="validateInput(0)">
          <input type="number" class="valor-limite" v-model="respostas[1]" @input="validateInput(1)">

          <div class="part01 valida">
            <p>Classe válida</p>
            <div class="linha01"></div>
          </div>

          <input type="number" class="valor-limite" v-model="respostas[2]" @input="validateInput(2)">
          <input type="number" class="valor-limite" v-model="respostas[3]" @input="validateInput(3)">


          <div class="part01 invalida">
            <p>Classe inválida</p>
            <div class="linha01"></div>
          </div>

        </div>
      </div>
    </div>

    <a href="#" class="avancar-botao" @click="validarRespostas">
      <span>Finalizar & Avançar</span>
      <img src="@/assets/img/seta-avanca-nivel.png" alt="seta direita" />
    </a>

  </div>
</template>

<script>
import BarraSuperior from "@/components/niveis/BarraSuperior.vue";
import Especificacao from "@/components/niveis/Especificacao.vue";
import { store } from '@/store';

export default {
  name: 'NivelDoisFaseUm',
  components: {
    BarraSuperior,
    Especificacao
  },
   data() {
    return {
      titulo_especificacao: ' Submódulo de monitoramento de interrupções de corrente',
      paragrafos: [
        'Existe um sensor que monitora a quantidade de interrupções de corrente que ocorrem nas cidades a cada intervalo de 5 minutos. De acordo com a quantidade de interrupções registrada pelo sensor, o sistema retorna um código de aviso que será usado para identificar falhas de energia.',
        'Se a quantidade de interrupções nos últimos 5 minutos for maior ou igual a 0 e menor ou igual a 3, significa que a quantidade de interrupções está em um limite aceitável, e o sistema deve retornar o código 0.',
        'Se a quantidade de interrupções for maior que 3, isso indica que a quantidade de interrupções excedeu o limite, caracterizando uma situação anormal, e o sistema deve retornar o código 1.',
        'Já, se o sensor retornar uma quantidade menor que zero, isso indica que está quebrado. Neste caso, deve ser exibida a mensagem “Sensor quebrado!” e nenhum código deve ser retornado.',
        'Obs: o sensor nunca retorna valores vazios ou que não sejam números inteiros.'
      ],
      missao: '2',
      fase: '1',
      currentLevel: 0,
      respostas: ['','','',''],
    };
  },
   methods: {
    validateInput(index) {
    if (this.respostas[index] < -100 || this.respostas[index] > 100) {
      this.respostas[index] = '';
    }
  },
    validarRespostas(event) {
      event.preventDefault();

      if((this.respostas[0] === -1 && this.respostas[1] === 0 && this.respostas[2] === 3 && this.respostas[3] === 4) || (this.respostas[0] === 4 && this.respostas[1] === 3 && this.respostas[2] === 0 && this.respostas[3] === -1)) {
        store.pontuacaoJogador.pont_fases_niveis[1][0] = 30;
      }

      store.respostas_fase_um.valores_limites_missao_dois = [...this.respostas];
      this.$router.push('/nivel-dois-fase-dois');
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
    height: calc(100% - 70px);
    display: flex;
  }

  .fase-criterio{
    width: 53%;
    padding: 12px;
    padding-right: 16px;
  }

  .fase-criterio h1{
    font-family: 'Iceland', sans-serif;
    color: #2e4778;
    text-align: center;
    font-size: 28px;
    margin-top: 8px;
  }

  .enunciado{
    font-family: "Bai Jamjuree", sans-serif;
    font-size: 16.5px;
    margin-top: 24px;
    margin-left: 18px;
    color: #375087;
    font-weight: 500;
    line-height: 25px;
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

.fase-criterio .exercicio-avl {
  margin-top: 50px;
  display: flex;
  gap: 0.375rem;
  justify-content: center;
  align-items: last baseline;
  font-family: "Bai Jamjuree", sans-serif;
}

.fase-criterio .linha01 {
  width: 150px;
  height: 6px;
  color: #c6d7eb;
  background-color: #1b344d;
  border-radius: 1px;
}

.fase-criterio .part01 {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  justify-content: center;
  align-items: center;
}

.fase-criterio .part01 p {
  font-size: 1rem;
  font-weight: 500;
}

.fase-criterio .valida {
  color: #57af7b;
}

.fase-criterio .invalida {
  color: #9c443e;
}

.valor-limite{
  font-family: "Bai Jamjuree", sans-serif;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  background-color: #e4eaf0;
  outline: none;
  border: 1px solid rgb(9, 9, 58);
  padding: 4px;
  color: #060f18;
  text-align: center;
  font-weight: 500;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>