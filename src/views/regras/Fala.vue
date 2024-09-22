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
  name: 'Fala',
  components: {
    Fog,
    Falas
  },
   data() {
      return {
        isNotFirst: false,
        link_prox: '/regra-um',
        link_ant: '/',
        text1: 'P',
        text2: 'A seguir, o funcionamento e regras gerais da sua jornada serão apresentados à você. Leia tudo com muita calma e atenção para que não fiquem dúvidas.'
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