<template>
  <Transition>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal-header">
      <h3>Ativação de geradores</h3>
      <span @click="closeModal">X</span>
    </div>
    <div class="modal-body">
      <div class="senha">
        <span>Digite a senha para ativar os geradores:</span>
        <input type="password" class="input-senha" v-model="senha" :disabled="isDivVisible">
        <a href="#" class="ativa-btn" :class="{ disabled: isDivVisible }" @click="ativar_geradores">Ativar</a>
      </div>

      <div class="alert-box" v-if="isDivVisible">
          {{ texto_alerta }}
          <div class="progress-bar" :style="{ width: progressBarWidth + '%' }"></div>
      </div>
    </div>
  </div>
  </Transition>
</template>

<script>
import { store } from "@/store";

export default {
  name: 'ModalGeradores',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
  },
  mounted() {
    if(store.pontuacaoJogador.pont_fases_niveis[0][2] !== 0) {
      this.ativar_geradores = this.ativar_geradores_sem_falha;
    }
    else {
      this.ativar_geradores = this.ativar_geradores_com_falha;
    }
  },
  data() {
    return {
      senha: '',
      texto_alerta: '',
      isDivVisible: false,
      progressBarWidth: 100,
      ativar_geradores: null
    }
  },
  methods: {
    closeModal() {
      this.senha = '';
      this.$emit('close');
    },
     showDiv() {
      this.isDivVisible = true;
      this.progressBarWidth = 100;
      this.startProgressBar();

      setTimeout(() => {
        this.isDivVisible = false;
      }, 5000);
    },
    startProgressBar() {
      let duration = 5000;
      let interval = 100;
      let decrement = 100 / (duration / interval);

      let progressInterval = setInterval(() => {
        if (this.progressBarWidth > 0) {
          this.progressBarWidth -= decrement;
        } else {
          clearInterval(progressInterval);
        }
      }, interval);
    },
    ativar_geradores_com_falha(event) {
      event.preventDefault();

      if(this.senha.trim() === '') {
        this.texto_alerta = "Você deve inserir uma senha para ativar os geradores!";
        this.showDiv();
        return;
      } else {
        this.texto_alerta = "Geradores ativados com sucesso!";
      }

      this.showDiv();
      setTimeout(() => {
        this.closeModal();
        this.senha = '';
      }, 5000);
    },
    ativar_geradores_sem_falha(event) {
      event.preventDefault();

      if(this.senha.trim() === '') {
        this.texto_alerta = "Você deve inserir uma senha para ativar os geradores!";
        this.showDiv();
        return;
      } 
      if(this.senha !== 'ger995') {
        this.texto_alerta = "Senha incorreta!";
        this.showDiv();
        return;
      }

      this.texto_alerta = "Geradores ativados com sucesso!";
      this.showDiv();
      setTimeout(() => {
        this.closeModal();
        this.senha = '';
      }, 5000);
    },
  }
}
</script>

<style scoped>
.modal-overlay {
  position: absolute;
  top: 5%;
  left: 12%;
  width: 70%;
  height: 82%;
  background-color: rgb(203, 210, 230);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-y: auto;
  padding: 14px;
  border-radius: 3px;
  z-index: 10000;
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

.modal-body span{
  font-size: 16px;
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

.senha{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:10px;
}

.input-senha{
  border-radius: 3px;
  outline: none;
  border: 1.2px solid rgb(16, 16, 61);
  padding: 2px;
}

.ativa-btn{
  /* display: inline-block; */
  background-color: #1f325c;
  text-decoration: none;
  padding: 6px 10px;
  color: #cfd2e4;
  border-radius: 3px;
  font-family: 'Roboto', 'sans-serif';
  font-size: 15px;
  letter-spacing: 0.2px;
  margin-top: 10px;
  transition: 0.3s;
}

.ativa-btn:hover{
  background-color: #101f41;
}

.alert-box{
  position: relative;
  overflow: hidden;
  margin-top: 14px;
  width: fit-content;
  height: 35px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  background-color: #535c84;
  color:#d8d8ea;
  font-family: 'Roboto', 'sans-serif';
  font-size: 13px;
  padding: 7px 11px 7px 11px;
}

.progress-bar {
  height: 5px;
  background-color: #051324;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: width 0.1s linear;
}

.disabled {
  pointer-events: none;
  cursor: not-allowed;
  background-color: #8a9fb9;
}
</style>