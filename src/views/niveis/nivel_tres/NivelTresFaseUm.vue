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

          <p class="valida_posicionada">Classe válida</p>

          <p class="invalida_posicionada">Classe inválida</p>
          <p class="valida_posicionada2">Classe válida</p>
          <p class="invalida_posicionada2">Classe inválida</p>

          <div class="part01 invalida">
            <p>Classe inválida</p>
            <div class="linha01 linha_curta"></div>
          </div>

          <input type="number" class="valor-limite" v-model="respostas[0]" @input="validateInput(0)">
          <input type="number" class="valor-limite" v-model="respostas[1]" @input="validateInput(1)">

          <div class="linha01 linha_mais_curta_ainda"></div>
          <input type="number" class="valor-limite" v-model="respostas[2]" @input="validateInput(2)">
          <input type="number" class="valor-limite" v-model="respostas[3]" @input="validateInput(3)">

          <div class="linha01 linha_mais_curta"></div>

          <input type="number" class="valor-limite" v-model="respostas[4]" @input="validateInput(4)">
          <input type="number" class="valor-limite" v-model="respostas[5]" @input="validateInput(5)">

          <div class="linha01 linha_mais_longa"></div>

          <input type="number" class="valor-limite" v-model="respostas[6]" @input="validateInput(6)">
          <input type="number" class="valor-limite" v-model="respostas[7]" @input="validateInput(7)">


          <div class="part01 invalida">
            <p>Classe inválida</p>
            <div class="linha01 linha_curta"></div>
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
  name: 'NivelTresFaseUm',
  components: {
    BarraSuperior,
    Especificacao
  },
   data() {
    return {
      titulo_especificacao: 'Submódulo de monitoramento de tensão',
      paragrafos: [
        'Assim como há um sensor que monitora a quantidade de interrupções de corrente, também existe um sensor que monitora a tensão. De acordo com a tensão em volts retornada por este sensor, o sistema gera um código de aviso que será utilizado para identificar falhas de energia.',
        'Inicialmente, o sistema verifica se o sensor está funcionando corretamente. Se a tensão retornada for menor que 0V ou maior que 10.000V, isso indica que o sensor está quebrado e deve ser exibida a mensagem “Sensor quebrado!”. Se a tensão for maior ou igual a 0V e menor ou igual a 10.000V, o sensor está funcionando corretamente.',
        'Com o sensor funcionando corretamente, diferentes códigos são retornados conforme a tensão:',
        ' - Se a tensão for maior ou igual a 100V e menor ou igual a 240V, a tensão está em uma faixa segura e deve ser retornado o código 0.',
        ' - Se a tensão for menor que 100V, ela está abaixo do limite inferior aceitável e deve ser retornado o código 1.',
        ' - Se a tensão for maior que 240V, ela está acima do limite superior aceitável e deve ser retornado o código 2',
        'Obs: o sensor nunca retorna valores vazios ou que não sejam números inteiros.'
      ],
      missao: '3',
      fase: '1',
      currentLevel: 1,
      respostas: ['','','','','','','',''],
    };
  },
   methods: {
    validateInput(index) {
    if (this.respostas[index] < -100000 || this.respostas[index] > 100000) {
      this.respostas[index] = '';
    }
  },
    validarRespostas(event) {
      event.preventDefault();

      if(this.respostas[0] === -1 && this.respostas[1] === 0 && this.respostas[2] === 99 && this.respostas[3] === 100 && this.respostas[4] === 240 && this.respostas[5] === 241 && this.respostas[6] === 10000 && this.respostas[7] === 10001) {
        store.pontuacaoJogador.pont_fases_niveis[2][0] = 30;
      }

      store.respostas_fase_um.valores_limites_missao_tres = [...this.respostas];
      this.$router.push('/nivel-tres-fase-dois');
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
  position: relative;
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

.fase-criterio .linha_curta {
  width: 76px;
}

.fase-criterio .linha_mais_curta {
   width: 50px;
}

.fase-criterio .linha_mais_longa {
   width: 90px;
}

.fase-criterio .linha_mais_curta_ainda {
  width: 40px;
}

.fase-criterio .part01 {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  justify-content: center;
  align-items: center;
}

.fase-criterio .part01 p {
  font-weight: 500;
  text-align: center;
}

.fase-criterio .valida {
  color: #57af7b;
}

.fase-criterio .invalida {
  color: #9c443e;
}

.valor-limite{
  font-family: "Bai Jamjuree", sans-serif;
  width: 32px;
  height: 34px;
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

.exercicio-avl .valida_posicionada{
  position: absolute;
  left: 41%;
  bottom: 76%;
  color:#5ea47b;
  font-weight: 500;
}

.exercicio-avl .invalida_posicionada {
  position: absolute;
  left: 20%;
  bottom: -50%;
  font-size: 15px;
  font-weight: 500;
  color: #9c443e;
}

.exercicio-avl .valida_posicionada2 {
  position: absolute;
  left: 42%;
  bottom: -50%;
  font-size: 15px;
  font-weight: 500;
  color:#5ea47b;
}

.exercicio-avl .invalida_posicionada2 {
  position: absolute;
  left: 62%;
  bottom: -50%;
  font-size: 15px;
  font-weight: 500;
  color: #9c443e;
}
</style>