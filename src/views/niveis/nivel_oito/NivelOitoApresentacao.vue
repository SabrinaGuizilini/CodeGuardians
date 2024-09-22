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
  name: "NivelOitoApresentacao",
  components: {
    ApresentacaoNiveis,
  },
  data() {
    return {
      missao: '8',
      nome_missao: 'Uso habitual do sistema por tipo de usuário e tempo de serviço',
      modulo: 'Sistema como um todo',
      nivel_teste: 'Teste de sistema',
      criterio: 'Tabela de decisão',
      link_prox: '/nivel-oito-fase-um'
    }
  }
};
</script>
