<template>
   <div class="navigation-dots">
    <div
      v-for="(dot, index) in totalDots"
      :key="index"
      :class="['navigation-dot', { filled: index === currentDot }]"
    ></div>
  </div>

  <router-link :to="link_prox"
        ><img
          src="@/assets/img/controle-treinamento.png"
          alt="avançar"
          class="avanca-treinamento"
      /></router-link>
      <router-link :to="link_ant"
        ><img
          src="@/assets/img/controle-treinamento.png"
          alt="voltar"
          class="volta-treinamento"
      /></router-link>
</template>

<script>

export default {
  name: 'Controler',
  props: {
    currentDot: {
      type: Number,
      required: true
    },
    totalDots: {
      type: Number,
      default: 6
    },
    link_prox: String,
    link_ant: String,
  },
  
}
</script>

<style scoped>
.navigation-dots {
  display: flex;
  gap: 0.438rem;
  position: absolute;
  left: 47%;
  bottom: 5%;
}

.navigation-dot {
  width: 0.688rem;
  height: 0.688rem;
  border-radius: 100%;
  background-color: #dbdbeb;
}

.filled {
  background-color: #90a6cd;
}

.avanca-treinamento {
  width: 2.5rem;
  position: absolute;
  bottom: 4%;
  right: 5%;
  transition: filter 0.5s ease;
}

.volta-treinamento {
  width: 2.5rem;
  position: absolute;
  transform: rotate(180deg);
  bottom: 4%;
  left: 5%;
  transition: filter 0.5s ease;
}

.avanca-treinamento:hover, .volta-treinamento:hover{
  filter: drop-shadow(1px -1px 3px rgba(242, 242, 245, 0.5));
}
</style>
