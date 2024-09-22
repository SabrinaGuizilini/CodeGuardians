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
  name: 'FalaUm',
  components: {
    Fog,
    Falas
  },
  data() {
      return {
        isNotFirst: false,
        link_prox: '/fala_dois',
        link_ant: '/',
        text1: 'No ano de 4100, após muitas décadas de guerras e desastres naturais, o mundo chegou à uma era pós-apocalíptica. A sociedade se encontra altamente dependente da tecnologia para sobreviver. Há um sistema muito importante que mantém toda a civilização em funcionamento - o Aura379.',
        text2: 'No entanto, uma ameaça surge quando uma gangue chamada ShadowHackers, que deseja dominar o mundo, tenta, a todo custo, desestabilizar esse sistema.'
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