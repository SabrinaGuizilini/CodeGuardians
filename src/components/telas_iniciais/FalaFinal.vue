<template>
  <img src="@/assets/img/sr-clarke.png" alt="Sr Clarke" class="img-mentor">

  <div class="wrapper2">
    <div class="balao">
      <p id="p1"></p>
      <p id="p2"></p>
      <p id="p3"></p>
    </div>
  </div>

</template>

<script>
import { store } from '@/store';

export default {
  name: 'FalaFinal',
  mounted() {
    const textElement = document.getElementById('p1');
    const textElement2 = document.getElementById('p2');
    const textElement3 = document.getElementById('p3');

    var nomeJogador = store.nomeJogador.nomeJogador;
    var pont_final = store.pontuacaoJogador.pontuacao;
    var textContent = '';
    var textContent2 = '';
    var textContent3 = '';

    textElement.innerHTML = '';
    textElement2.innerHTML = '';
    textElement3.innerHTML = '';

    if (pont_final >= 550) {
      textContent = `Você conseguiu, ${nomeJogador}! O sistema passou no teste de aceitação com sucesso, graças à sua perspicácia e dedicação. Cada falha reportada e corrigida fez a diferença!`;
      textContent2 = `Sua pontuação final foi de: ${pont_final} pontos.`;
      textContent3 = `O futuro da humanidade, agora, está mais seguro por causa de você. Parabéns pela vitória!`;
    }
    else {
      textContent = `Não foi dessa vez, ${nomeJogador}. Apesar dos seus esforços, o sistema não passou no teste de aceitação. Mas não desanime – cada erro traz um aprendizado valioso.`;
      textContent2 = `Sua pontuação final foi de: ${pont_final} pontos.`;
      textContent3 = `A jornada de um verdadeiro CodeGuardian é cheia de desafios, mas também de oportunidades para aprender e se aprimorar cada vez mais. Estamos contando com você!`;
    }

    let index = 0;
    let index2 = 0;
    let index3 = 0;

    function typeText() {
      if (index < textContent.length) {
        textElement.innerHTML += textContent.charAt(index);
        index++;
        setTimeout(typeText, 52);
      } else if (index2 < textContent2.length) {
        textElement2.innerHTML += textContent2.charAt(index2);
        index2++;
        setTimeout(typeText, 52);
      } else if (index3 < textContent3.length) {
        textElement3.innerHTML += textContent3.charAt(index3);
        index3++;
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

#p1, #p2, #p3{
  font-family: "Ubuntu Mono", monospace;
  font-size: 1.563rem;
  color: #D5DCEC;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  line-height: 1.4;
}

#p1{
  margin-bottom: 30px;
}

#p2{
  margin-bottom: 30px;
}

@media (min-width: 1500px) {
  .balao {
    width: 64rem;
  }
  .balao::after {
    left: -7.5%;
  }
}

@media (min-width: 1600px) {
  .balao {
    width: 70rem;
  }
  .balao::after {
    left: -6.85%;
  }
}

@media (min-width: 1800px) {
  .balao {
    width: 80rem;
  }
  .balao::after {
    left: -5.99%;
  }
}

@media (min-width: 1900px) {
  .balao {
    width: 87rem;
  }
  .balao::after {
    left: -5.5%;
  }
}

@media (min-height: 700px) {
  .balao {
    height: 56vh;
  }
}

@media (min-height: 800px) {
  .balao {
    height: 50vh;
  }
}

</style>
