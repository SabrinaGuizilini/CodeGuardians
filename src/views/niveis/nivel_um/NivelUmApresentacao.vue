<template>
  <ApresentacaoNiveis
    :missao="missao"
    :nome_missao="nome_missao"
    :modulo="modulo"
    :nivel_teste="nivel_teste"
    :criterio="criterio"
    :link_prox="link_prox"
  />
</template>

<script>
import ApresentacaoNiveis from "@/components/niveis/ApresentacaoNiveis.vue";

export default {
  name: "NivelUmApresentacao",
  components: {
    ApresentacaoNiveis,
  },
  data() {
    return {
      missao: '1',
      nome_missao: 'Submódulo de ativação de geradores',
      modulo: 'Módulo de Infraestrutura de Energia',
      nivel_teste: 'Teste de unidade',
      criterio: 'Particionamento de equivalência',
      link_prox: '/nivel-um-fase-um'
    }
  }
};
</script>
