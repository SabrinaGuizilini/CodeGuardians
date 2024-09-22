<template>

<div class="container-background">
 <Fog />

  <div class="wrapper">
    <div class="container-name">
      <h3>Insira seu nome:</h3>
      <input type="text" id="name" name="name" v-model="nome">
      <a href="#" class="arrow-button" @click="validateAndNavigate">
        <span>Avançar</span>
        <img src="@/assets/img/seta-direita.svg" alt="seta direita">
      </a>
    </div>
  </div>

</div>
</template>

<script>
import Fog from '@/components/telas_iniciais/Fog.vue'
import { store } from '@/store';

export default {
  name: 'InputName',
  components: {
    Fog
  },
   data() {
      return {
        nome: ''
      }
    },
  methods: {
    validateAndNavigate(event) {
      event.preventDefault();
      var letrasApenas = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

      if (this.nome.trim() === "") {
        alert("O nome não pode ser vazio ou conter apenas espaços em branco.");
        return;
      }
      else if (this.nome.length > 30) {
        alert('O nome deve ter no máximo 30 caracteres.');
        return;
      } 
      else if (!letrasApenas.test(this.nome)) {
        alert("O nome deve conter apenas letras.");
        return;
      }
      else {
        store.nomeJogador.nomeJogador = this.nome;
        this.$router.push('/fala_um');
      }
    }
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

.wrapper{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 6.25rem;
}

.container-name{
  position: relative;
  width: 37.5rem;
  height: 20.625rem;
  background-color: rgba(29, 29, 44, 0.45);
  z-index: 100;
  border-radius: 5px;
  text-align: center;
}

.container-name h3{
  text-align: center;
  margin-top: 9%;
  font-family: "Chakra Petch", sans-serif;
  font-size: 1.5rem;
  color: #D5DCEC;
  font-weight: 400;
}

.container-name input{
  display: block;
  margin: auto;
  margin-top: 4.5%;
  width: 60%;
  height: 3.438rem;
  background-color: #EAEBF5;
  border-radius: 5px;
  border-color: #071429;
  border-width: 1px;
  font-family: "Armata", sans-serif;
  font-weight: 400;
  font-size: 1.063rem;
  text-align: center;
}

.container-name input:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(17, 41, 87, 0.8);
  border-color: #112957; 
}
</style>