<template>
  <div :class="['container-texto_treinamento', customClass]" :style="{ animationDelay: delay }">
    <img src="@/assets/img/seta-dupla.png" alt="seta" />
    <p class="texto_treinamento" v-html="htmlContent"></p>
  </div>
</template>

<script>
export default {
  name: "ContainerTexto",
  props: {
    delay: {
      type: String,
      default: '0s'
    },
    htmlContent: {
      type: String,
      required: true
    },
    customClass: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.texto_treinamento {
  margin-bottom: 0.25rem;
  font-family: "Bai Jamjuree", sans-serif;
  font-weight: 400;
  font-size: 1.375rem;
  line-height: 2.25rem;
  color: #e8edf5;
  text-align: left;
}

.container-texto_treinamento {
  animation: slideInX 1s forwards;
  opacity: 0;
  display: flex;
  align-items: flex-start;
  padding-left: 7%;
  padding-right: 7%;
  gap: 0.625rem;
}

.container-texto_treinamento img {
  width: 1.5rem;
  margin-top: 0.563rem;
}

.container-texto_treinamento:not(:last-child) {
  margin-bottom: 1.063rem;
}

@keyframes slideInX {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

:deep(.destacado) {
  font-weight: 700;
  color: #d6e0eb;
}
</style>
