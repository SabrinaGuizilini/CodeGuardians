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
  name: "NivelQuatroApresentacao",
  components: {
    ApresentacaoNiveis,
  },
  data() {
    return {
      missao: '4',
      nome_missao: 'Submódulo de detecção de falhas na energia',
      modulo: 'Módulo de Infraestrutura de Energia',
      nivel_teste: 'Teste de integração',
      criterio: 'Tabela de decisão',
      link_prox: '/nivel-quatro-fase-um'
    }
  }
};
</script>
