<template>

<div class="container-background">
   <Fog />

  <div class="main-container">
    <h1 class="main-container__titulo">CodeGuardians</h1>
    <h2 class="main-container__subtitulo">Uma jornada no mundo pós-apocalíptico</h2>
    <router-link to="/input_name" class="main-container-botao">
      <img src="@/assets/img/play.svg" alt="play">
      <span>Iniciar Jornada</span>
    </router-link>
  </div>

  </div>
</template>

<script>
import Fog from '@/components/telas_iniciais/Fog.vue'

export default {
  name: 'Inicial',
  components: {
    Fog
  }
}
</script>

<style scoped>
.container-background{
  background-image: url('/src/assets/img/background-melhorado.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  background-position: 20% 30%;
  position: relative;
}

.container-background::before {
  content: '';
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.12); 
  z-index: 1;
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

.main-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8.5%;
  z-index: 100;
}

.main-container__titulo{
  font-family: "Orbitron", sans-serif;
  color: #090808;
  font-weight: 600;
  font-size: 4.9rem;
  margin-bottom: 2.6%;
  z-index: 100;
}

.main-container__subtitulo{
  font-family: "Iceland", sans-serif;
  font-weight: 400;
  color: #000;
  font-size: 2.125rem;
  margin-bottom: 7.5%;
  z-index: 100;
}

.main-container-botao{
  display: flex;
  background-color: #27333F;
  z-index: 100;
  padding: 19px 33px;
  align-items: center;
  border-radius: 5px;
  gap: 18px;
  text-decoration: none;
  transition: 0.5s;
}

.main-container-botao:hover{
  background-color: #192733;
}

.main-container-botao img {
  width: 25px;
}

.main-container-botao span {
  color: #DCE6F5;
  font-family: "Chakra Petch", sans-serif;
  font-size: 1.313rem;
}
</style>