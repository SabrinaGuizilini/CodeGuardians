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
  name: "NivelTresApresentacao",
  components: {
    ApresentacaoNiveis,
  },
  data() {
    return {
      missao: '3',
      nome_missao: 'Submódulo de monitoramento de tensão',
      modulo: 'Módulo de Infraestrutura de Energia',
      nivel_teste: 'Teste de unidade',
      criterio: 'Particionamento de Equivalência e Análise do valor limite',
      link_prox: '/nivel-tres-fase-um'
    }
  }
};
</script>
