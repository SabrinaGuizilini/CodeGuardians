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
  name: "NivelSeisApresentacao",
  components: {
    ApresentacaoNiveis,
  },
  data() {
    return {
      missao: '6',
      nome_missao: 'Integração do submódulo de detecção de falhas na energia com o submódulo de envio de alertas',
      modulo: 'Módulos de Infraestrutura de Energia e de Redes de Comunicação',
      nivel_teste: 'Teste de integração',
      criterio: 'Particionamento de equivalência',
      link_prox: '/nivel-seis-fase-um'
    }
  }
};
</script>
