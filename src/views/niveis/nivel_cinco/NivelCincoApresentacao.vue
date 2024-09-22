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
  name: "NivelCincoApresentacao",
  components: {
    ApresentacaoNiveis,
  },
  data() {
    return {
      missao: '5',
      nome_missao: 'Submódulo de envio de alertas',
      modulo: 'Módulo de Redes de Comunicação',
      nivel_teste: 'Teste de unidade',
      criterio: 'Particionamento de Equivalência e Análise do valor limite',
      link_prox: '/nivel-cinco-fase-um'
    }
  }
};
</script>
