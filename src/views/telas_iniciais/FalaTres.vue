<template>

<div class="container-background">
 <Fog />
 <Falas
      :isNotFirst="isNotFirst"
      :link_prox="link_prox"
      :link_ant="link_ant"
      :text1="text1"
      :text2="text2"
    />
</div>
</template>

<script>
import Fog from '@/components/telas_iniciais/Fog.vue'
import Falas from '@/components/telas_iniciais/Falas.vue';

export default {
  name: 'FalaTres',
  components: {
    Fog,
    Falas
  },
  data() {
      return {
        isNotFirst: true,
        link_prox: '/treinamento',
        link_ant: '/fala_dois',
        text1: '',
        text2: 'Mas antes de tudo, você deverá passar por um treinamento especial sobre testes de software, para que tenha as habilidades necessárias para esta jornada.'
      }
    },
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

</style>