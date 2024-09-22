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
  name: "NivelDoisApresentacao",
  components: {
    ApresentacaoNiveis,
  },
  data() {
    return {
      missao: '2',
      nome_missao: 'Submódulo de monitoramento de interrupções de corrente',
      modulo: 'Módulo de Infraestrutura de Energia',
      nivel_teste: 'Teste de unidade',
      criterio: 'Particionamento de Equivalência e Análise do valor limite',
      link_prox: '/nivel-dois-fase-um'
    }
  }
};
</script>
