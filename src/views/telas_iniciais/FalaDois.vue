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
  name: 'FalaDois',
  components: {
    Fog,
    Falas
  },
   data() {
      return {
        isNotFirst: true,
        link_prox: '/fala_tres',
        link_ant: '/fala_um',
        text1: 'Recentemente, houve o relato de que um integrante dos ShadowHackers se disfarçou de programador, conseguindo assim se infiltrar na sede de desenvolvimento do sistema Aura379 e inserir bugs em diversas partes importantes do mesmo.',
        text2: 'Para manter a integridade do Aura379 e proteger a sociedade dos ShadowHackers, eu, Sr. Clarke, criei uma academia secreta conhecida como CodeGuardians.'
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