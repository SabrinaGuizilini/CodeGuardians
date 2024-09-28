<template>
  <Transition>
  <div class="modal-overlay" v-if="isVisible" v-clica-fora="closeModal">
    <div class="modal-header">
      <h3>{{ title }}</h3>
      <span @click="closeModal">X</span>
    </div>
    <div class="modal-body">
      <p v-for="(paragrafo, index) in paragrafos" :key="index">{{paragrafo}}</p>
    </div>
  </div>
  </Transition>
</template>

<script>

export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      required: true
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    paragrafos: {
      type: Array,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -63%);
  width: 70%;
  max-height: 70%;
  background-color: rgb(203, 210, 230);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-y: auto;
  padding: 14px;
  padding-bottom: 30px;
  border-radius: 3px;
  z-index: 1000;
  border: 2px solid rgb(30, 40, 103);
  font-family: "Bai Jamjuree", sans-serif;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.modal-header span{
  display: inline-block;
  font-weight: 700;
  padding: 5px;
  cursor: pointer;
  font-size: 20px;
  color: rgb(134, 56, 50);
  position: absolute;
  top: 3px;
  right: 8px;
}

.modal-header h3 {
  color: #2e4778;
  text-align: center;
  font-size: 18px;
  margin-top: 10px;
  letter-spacing: 0.5px;
  align-self: center;
}

.modal-body {
  margin-top: 15px;
  padding-left: 14px;
}

.modal-body p{
  font-size: 16px;
  margin-top: 14px;
  color: #233865;
  font-weight: 500;
  line-height: 25px;
}

.modal-overlay::-webkit-scrollbar {
  width: 9px;
}

.modal-overlay::-webkit-scrollbar-thumb {
  background-color: #4f6391e7;
  border-radius: 8px;
}

.modal-overlay::-webkit-scrollbar-track {
  background: rgba(177, 182, 212, 0.861);
  border-radius: 3px;
}

.modal-overlay::-webkit-scrollbar-thumb:hover {
  background: #4f6391;
}
</style>
