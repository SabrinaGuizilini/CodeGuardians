<template>
  <Transition>
  <div class="modal-overlay" v-if="isVisible" v-clica-fora="closeModal">
    <div class="modal-header">
      <h3>Deseja mesmo abrir a dica?</h3>
      <span @click="closeModal">X</span>
    </div>
    <div class="modal-body">
      <div class="botoes">
        <span @click="confirmar">Sim</span>
        <span @click="closeModal">Não</span>
      </div>
    </div>
  </div>
  </Transition>
</template>

<script>

export default {
  name: 'ModalConfirmaDica',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    confirmar() {
      this.$emit('confirmar');
    },
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 550px;
  background-color: rgb(203, 210, 230);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-y: auto;
  padding: 14px;
  padding-bottom: 35px;
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
}

.botoes {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.botoes span {
  display: inline-block;
  padding: 8px 10px;
  border-radius: 3px;
  background-color: #2e4778;
  font-size: 16px;
  font-weight: 500;
  color:#c6cede;
  cursor: pointer;
}

</style>