<template>
  <Transition>
  <div class="modal-overlay" v-if="isVisible" :style="{ bottom: bottomPosition, left: leftPosition }">
    <div class="modal-header">
      <h3>Dados para o teste</h3>
      <span @click="closeModal">X</span>
    </div>
    <div class="modal-body">
      <div v-if="menu">
          <h3>Menu</h3>
          <div>
             <p><span class="link" @click="troca_menu('usuario_e_senha')">• Usuários e senhas para teste</span></p>
             <p><span class="link" @click="troca_menu('interrupcoes')">• Entradas e códigos - Submódulo de monitoramento de interrupções de corrente</span></p>
             <p><span class="link" @click="troca_menu('tensao')">• Entradas e códigos - Submódulo de monitoramento de tensão</span></p>
             <p><span class="link" @click="troca_menu('deteccao')">• Códigos e alertas - Submódulo de detecção de falhas na energia</span></p>
             <p><span class="link" @click="troca_menu('senha_geradores')">• Senha para ativação dos geradores</span></p>
             <p><span class="link" @click="troca_menu('alertas')">• Regras para alerta ser enviado - Submódulo de envio de alertas</span></p>
          </div>
      </div>

      <div v-if="usuario_e_senha">
          <h3>Usuários e senhas para teste</h3>
          <div>
             <p>- Operador de energia com menos de 1 ano de serviço - usuário: abc123; senha: 9989</p>
             <p>- Operador de energia com tempo de serviço maior ou igual a 1 ano - usuário: opkvb; senha: gh56</p>
             <p>- Técnico em comunicação com menos de 1 ano de serviço - usuário: lpo90; senha: sdfg</p>
             <p>- Técnico em comunicação com tempo de serviço maior ou igual a 1 ano - usuário: k53gh; senha: 0098</p>
             <p>- Administrador com menos de 1 ano de serviço - usuário: ffds3; senha: 124j</p>
             <p>- Administrador com tempo de serviço maior ou igual a 1 ano - usuário: vndfd; senha: tp67</p>
          </div>
          <span class="volta" @click="volta_menu('usuario_e_senha')">Voltar ao menu</span>
      </div>

      <div v-if="interrupcoes">
          <h3>Entradas e códigos - Submódulo de monitoramento de interrupções de corrente</h3>
          <div>
             <p>- Qtd. Interrupções &lt; 0 -> nenhum código deve ser retornado;</p>
             <p>- Qtd. Interrupções >= 0 e &lt;= 3 -> código 0 deve ser retornado;</p>
             <p>- Qtd. Interrupções > 3 -> código 1 deve ser retornado.</p>
          </div>
          <span class="volta" @click="volta_menu('interrupcoes')">Voltar ao menu</span>
      </div>

      <div v-if="tensao">
          <h3>Entradas e códigos - Submódulo de monitoramento de tensão</h3>
          <div>
             <p>- Tensão &lt; 0V ou > 10000V -> nenhum código deve ser retornado;</p>
             <p>- Tensão >= 0V e &lt; 100V -> código 1 deve ser retornado;</p>
             <p>- Tensão >= 100V e &lt;= 240V -> código 0 deve ser retornado;</p>
             <p>- Tensão > 240V e &lt;= 10000V -> código 2 deve ser retornado.</p>
          </div>
          <span class="volta" @click="volta_menu('tensao')">Voltar ao menu</span>
      </div>

      <div v-if="deteccao">
          <h3>Códigos e alertas - Submódulo de detecção de falhas na energia</h3>
          <div>
            <p>- Cód. I. = 0 e Cód. T. = 0 -> nenhum alerta deve ser gerado;</p>
            <p>- Cód. I. = 0 e Cód. T. = 1 OU Cód. I. = 1 e Cód. T. = 1 -> alerta "12341: Falha de energia." deve ser gerado e senha para ativar geradores solicitada;</p>
            <p>- Cód. I. = 0 e Cód. T. = 2 -> alerta "98012: Alta tensão - risco de problemas no sistema elétrico." deve ser gerado;</p>
            <p>- Cód. I. = 1 e Cód. T. = 0 -> alerta "65323: Instabilidade no fornecimento de energia devido a várias interrupções." deve ser gerado.</p>
            <p>- Cód. I. = 1 e Cód. T. = 2 -> alerta "37892: Instabilidade no fornecimento de energia e alta tensão." deve ser gerado.</p>
          </div>
          <span class="volta" @click="volta_menu('deteccao')">Voltar ao menu</span>
      </div>

      <div v-if="senha_geradores">
          <h3>Senha para ativação dos geradores</h3>
          <div>
            <p>- Senha = ger995 deve ativar os geradores.</p>
          </div>
          <span class="volta" @click="volta_menu('senha_geradores')">Voltar ao menu</span>
      </div>

      <div v-if="alertas">
          <h3>Regras para alerta ser enviado - Submódulo de envio de alertas</h3>
          <div>
            <p>- ID com 5 dígitos;</p>
            <p>- Último dígito do ID ser 1, 2 ou 3;</p>
            <p>- Mensagem contendo entre 10 e 70 caracteres;</p>
            <p>- Todos os campos preenchidos/selecionados.</p>
          </div>
          <span class="volta" @click="volta_menu('alertas')">Voltar ao menu</span>
      </div>
    </div>
  </div>
  </Transition>
</template>

<script>

export default {
  name: 'ModalTodosDados',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: String,
    },
    left: {
      type: String,
    }
  },
   computed: {
    bottomPosition() {
      return this.bottom;
    },
    leftPosition() {
      return this.left;
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    troca_menu(tela) {
      this[tela] = true;
      this.menu = false;
    },
    volta_menu(tela) {
      this[tela] = false;
      this.menu = true;
    }
  },
  data() {
    return {
      menu: true,
      usuario_e_senha: false,
      interrupcoes: false,
      tensao: false,
      deteccao: false,
      senha_geradores: false,
      alertas: false,
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  width: 550px;
  height: 250px;
  background-color: rgb(203, 210, 230);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-y: auto;
  padding: 14px;
  border-radius: 3px;
  z-index: 2000;
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
  font-size: 14px;
  margin-top: 11px;
  color: #233865;
  font-weight: 500;
  line-height: 25px;
  text-align: left;
}

.modal-body h3{
  font-size: 16px;
  margin-top: 11px;
  margin-bottom: 20px;
  color: #233865;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
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

.modal-overlay .modal-body .link {
  text-decoration: underline;
  cursor: pointer;
  color: #112246;
  font-weight: 500;
  text-align: left;
}

.modal-overlay .modal-body .volta {
  display: block;
  font-size: 13px;
  margin-top: 15px;
  text-align: right;
  text-decoration: underline;
  cursor: pointer;
  color: #112246;
  font-weight: 500;
  text-align: right;
}
</style>
