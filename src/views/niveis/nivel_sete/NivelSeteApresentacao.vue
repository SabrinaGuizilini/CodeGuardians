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
  name: "NivelSeteApresentacao",
  components: {
    ApresentacaoNiveis,
  },
  data() {
    return {
      missao: '7',
      nome_missao: 'Submódulo de autenticação',
      modulo: 'Módulo de autenticação',
      nivel_teste: 'Teste de unidade',
      criterio: 'Particionamento de Equivalência',
      link_prox: '/nivel-sete-fase-um'
    }
  }
};
</script>
