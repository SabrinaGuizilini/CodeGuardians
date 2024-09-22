<template>
  <img src="@/assets/img/sr-clarke.png" alt="Sr Clarke" class="img-mentor">

  <div class="wrapper2">
    <div class="balao">
      <p id="p1"></p>
      <p id="p2"></p>
    </div>
  </div>

  <router-link v-if="exibeBotaoAvancar" :to="link_prox" class="arrow-button" id="btn-proximo">
    <span>Próximo</span>
    <img src="@/assets/img/seta-direita.svg" alt="seta direita">
  </router-link>

  <router-link v-if="isNotFirst" :to="link_ant" class="arrow-button" id="btn-voltar">
    <img src="@/assets/img/seta-esquerda.svg" alt="seta esquerda">
    <span>Anterior</span>
  </router-link>
</template>

<script>
import { store } from '@/store';

export default {
  name: 'Falas',
  props: {
    isNotFirst: Boolean,
    link_prox: String,
    link_ant: String,
    text1: String,
    text2: String,
    exibeBotaoAvancar: {
     type: Boolean,
     default: true
  }
  },
  mounted() {
    const textElement = document.getElementById('p1');
    const textElement2 = document.getElementById('p2');

    textElement.innerText = '';
    textElement2.innerText = '';

    var textContent = this.text1;

    if (this.text1 === ''){
       const nomeJogador = store.nomeJogador.nomeJogador;
       const texto1 = `Você, ${nomeJogador}, é mais um(a) estudante prodígio que está sendo recrutado(a) para ser um(a) CodeGuardian! Sua missão é testar as partes afetadas do sistema, identificar e reportar as falhas encontradas, para que os desenvolvedores possam corrigi-las, antes que o mundo se torne um caos.`;
       textContent = texto1;
    }
    if (this.text1 === 'P'){
       const nomeJogador = store.nomeJogador.nomeJogador;
       const texto1 = `Parabéns, ${nomeJogador}! Você finalizou o treinamento especial sobre testes de software e agora está preparado(a) para enfrentar os desafios que virão pela frente.`;
       textContent = texto1;
    }
    if (this.text1 === 'L'){
       const nomeJogador = store.nomeJogador.nomeJogador;
       const texto1 = `Olá, ${nomeJogador}! Você chegou ao final da sua jornada. Antes de mais nada, quero parabenizá-lo(a) pelo esforço e dedicação que demonstrou ao longo do caminho. Você provou ser um(a) verdadeiro(a) CodeGuardian!`;
       textContent = texto1;
    }

    const textContent2 = this.text2;

    let index = 0;
    let index2 = 0;

    function typeText() {
      if (index < textContent.length) {
        textElement.innerText += textContent.charAt(index);
        index++;
        setTimeout(typeText, 52);
      } else if (index2 < textContent2.length) {
        textElement2.innerText += textContent2.charAt(index2);
        index2++;
        setTimeout(typeText, 52);
      }
    }

    typeText();
  }
}
</script>

<style scoped>
.img-mentor{
  position: absolute;
  z-index: 100;
  bottom: 0;
  left: 0;
  width: 25rem;
}

.wrapper2{
  width: 100vw;
  height: 100vh;
  padding-top: 1.6rem;
  padding-left: 26.25rem;
}

.balao{
  position: relative;
  background-color: rgba(29, 29, 44, 0.6);
  padding-left: 34px;
  padding-right: 20px;
  padding-top: 32px;
  padding-bottom:34px;
  border-radius: 5px;
  width: 52rem;
  color: #ffffff;
  z-index: 100;
  height: 71vh;
}

.balao::after {
  content: '';
  position: absolute;
  bottom: 53%;
  left: -9.3%;
  border-width: 0 80px 75px 0;
  border-style: solid;
  border-color: rgba(29, 29, 44, 0.6) transparent;
  display: block;
  transform: rotate(-90deg);
  border-top-left-radius: 8px;
  width: 0;
}

#p1, #p2{
  font-family: "Ubuntu Mono", monospace;
  font-size: 1.563rem;
  color: #D5DCEC;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  line-height: 1.4;
}

#p1{
  margin-bottom: 2.188rem;
}

#btn-proximo{
  position: absolute;
  bottom: 6%;
  right: 4%;
  z-index: 100;
}

#btn-voltar{
  position: absolute;
  bottom: 6%;
  right: 50%;
  z-index: 100;
}

.arrow-button{
  display: inline-flex;
  background-color: #27333F;
  z-index: 100;
  padding: 14px 44px;
  border-radius: 5px;
  gap: 15px;
  text-decoration: none;
  transition: 0.5s;
  margin-top: 9%;
  align-items: center;
}

.arrow-button:hover{
  background-color: #192733;
}

.arrow-button img {
  width: 22px;
  margin-top: 2px;
}

.arrow-button span {
  color: #DCE6F5;
  font-family: "Chakra Petch", sans-serif;
  font-size: 1.313rem;
}
</style>
