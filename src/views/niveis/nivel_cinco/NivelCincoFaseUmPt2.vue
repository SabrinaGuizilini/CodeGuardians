<template>
  <div class="main_container">
    <BarraSuperior
      :currentLevel="currentLevel"
      :missao="missao"
      :fase="fase"
    />

    <div class="level__content">
      <Especificacao
        :titulo_especificacao="titulo_especificacao"
        :paragrafos="paragrafos"
      />
      <div class="fase-criterio">
        <h1>Desafio de uso dos critérios da técnica funcional pt.2</h1>
        <p class="enunciado">De acordo com a especificação, selecione abaixo a condição de entrada/saída em que o critério de análise do valor limite se aplica, e, em seguida, preencha a reta numérica com os valores-limites da condição de entrada/saída selecionada:</p>
        <select class="select-condicao" v-model="cond_selecionada">
            <option value="default">Selecione uma condição de entrada/saída</option>
            <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
            <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
            <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
            <option value="DEP - Departamento">DEP - Departamento</option>
            <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
        </select>

         <div class="exercicio-avl">

          <div class="part01 invalida">
            <p>Classe inválida</p>
            <div class="linha01"></div>
          </div>

          <input type="number" class="valor-limite" v-model="respostas[0]" @input="validateInput(0)">
          <input type="number" class="valor-limite" v-model="respostas[1]" @input="validateInput(1)">

          <div class="part01 valida">
            <p>Classe válida</p>
            <div class="linha01"></div>
          </div>

          <input type="number" class="valor-limite" v-model="respostas[2]" @input="validateInput(2)">
          <input type="number" class="valor-limite" v-model="respostas[3]" @input="validateInput(3)">


          <div class="part01 invalida">
            <p>Classe inválida</p>
            <div class="linha01"></div>
          </div>

        </div>
      </div>
    </div>

    <a href="#" class="avancar-botao" @click="validarRespostas">
      <span>Finalizar & Avançar</span>
      <img src="@/assets/img/seta-avanca-nivel.png" alt="seta direita" />
    </a>

  </div>
</template>

<script>
import BarraSuperior from "@/components/niveis/BarraSuperior.vue";
import Especificacao from "@/components/niveis/Especificacao.vue";
import { store } from '@/store';

export default {
  name: 'NivelCincoFaseUmPt2',
  components: {
    BarraSuperior,
    Especificacao
  },
   data() {
    return {
      titulo_especificacao: 'Submódulo de envio de alertas',
      paragrafos: [
        'O submódulo de envio de alertas é responsável por processar e enviar alertas gerados por um usuário ou por outro submódulo do sistema. Cada alerta é composto por três elementos: um identificador (ID), uma mensagem e o departamento destinatário. Para que o alerta seja enviado corretamente, algumas regras de validação devem ser seguidas.',
        'Primeiramente, o ID deve conter exatamente cinco dígitos. Caso essa condição não seja respeitada, o sistema retornará a mensagem de erro "O ID deve conter 5 dígitos!". Além disso, o último dígito do ID deve ser 1, 2 ou 3, representando a prioridade do alerta. O número 1 indica prioridade máxima, o número 2 representa prioridade média e o número 3 corresponde à prioridade baixa. Se o último dígito for diferente desses valores, será retornada a mensagem "O último dígito do ID pode ser somente 1, 2 ou 3!".',
        'A mensagem do alerta também deve seguir um critério específico: ela deve ter entre 10 e 70 caracteres. Se a mensagem não atender a essa exigência, o sistema exibirá o erro "A mensagem deve conter entre 10 e 70 caracteres!". Além disso, o destinatário do alerta precisa ser um dos três departamentos disponíveis: Energia Elétrica, Trânsito ou Saúde. Caso não seja selecionado um departamento, o sistema retornará a mensagem "O departamento deve ser selecionado!".',
        'Os campos de ID e mensagem também são obrigatórios. Portanto, ao tentar enviar um alerta sem preencher um desses campos, a mensagem de erro correspondente será "O campo [xxx] deve ser preenchido!", onde [xxx] representa o nome do campo que está vazio.',
        'Se todas as validações forem cumpridas e o alerta for enviado com sucesso, o sistema exibirá a mensagem "Alerta enviado com sucesso para o departamento [selecionado]!". No entanto, se ocorrer algum problema durante o envio, será exibida a mensagem "Falha no envio do alerta!".',
        'Para testar o cenário de falha no envio, há um ID específico que pode ser utilizado: o ID 00000. Esse ID é valido e foi configurado apenas para simular falhas no envio. Assim, ao utilizar o ID 00000, o sistema deverá retornar a mensagem de falha no envio, permitindo a verificação desse comportamento.'
      ],
      missao: '5',
      fase: '1',
      currentLevel: 3,
      cond_selecionada: 'default',
      respostas: ['','','',''],
    };
  },
   methods: {
    validateInput(index) {
    if (this.respostas[index] < -1000 || this.respostas[index] > 1000) {
      this.respostas[index] = '';
    }
   },
    validarRespostas(event) {
      event.preventDefault();

      if(store.respostas_fase_um.missao_cinco_pt1_correta && this.cond_selecionada === 'NC-MSG - Número de caracteres da mensagem' && this.respostas[0] == '9' && this.respostas[1] == '10' && this.respostas[2] == '70' && this.respostas[3] == '71') {
        store.pontuacaoJogador.pont_fases_niveis[4][0] = 40;
      }
     
     store.respostas_fase_um.cond_selecionada_missao_cinco = this.cond_selecionada;
     store.respostas_fase_um.valores_limites_missao_cinco = [...this.respostas];

     this.$router.push("/nivel-cinco-fase-dois");

    }
  }
}
</script>

<style scoped>
  .main_container{
    width: 100vw;
    height: 100vh;
    background-color: #d4d9e5;
  }

  .level__content{
    height: 88%;
    display: flex;
  }

  .fase-criterio{
    width: 53%;
    padding: 12px;
    padding-right: 16px;
  }

  .fase-criterio h1{
    font-family: 'Iceland', sans-serif;
    color: #2e4778;
    text-align: center;
    font-size: 28px;
    margin-top: 8px;
  }

  .enunciado{
    font-family: "Bai Jamjuree", sans-serif;
    font-size: 16.5px;
    margin-top: 20px;
    margin-left: 18px;
    color: #375087;
    font-weight: 500;
    line-height: 25px;
  }

.avancar-botao {
  position: absolute;
  bottom: 2.7%;
  right: 2%;
  display: inline-flex;
  background-color: #1e215a;
  padding: 13px 18px;
  border-radius: 5px;
  gap: 12px;
  text-decoration: none;
  align-items: center;
  transition: 0.3s;
}

.avancar-botao:hover {
  background-color: #0f1444;
}

.avancar-botao img {
  width: 18px;
  height: 17px;
  margin-top: 0.125rem;
  transition: transform 0.8s ease;
}

.avancar-botao:hover img {
  animation-delay: 0.2s;
  animation: moveArrow 0.7s forwards;
}

.avancar-botao span {
  color: #dee5ed;
  font-family: "Chakra Petch", sans-serif;
  font-size: 17px;
}

@keyframes moveArrow {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(7px);
  }
}

.select-condicao {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 14px;
  color: #0f1444;
  font-weight: 500;
  outline: none;
  border-radius: 3px;
  padding: 3px;
  width: 360px;
  height: 42px;
  background-color: #eaecf3;
  text-align: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 46px;
}

.fase-criterio .exercicio-avl {
  display: flex;
  gap: 0.375rem;
  justify-content: center;
  align-items: last baseline;
  font-family: "Bai Jamjuree", sans-serif;
}

.fase-criterio .linha01 {
  width: 150px;
  height: 6px;
  color: #c6d7eb;
  background-color: #1b344d;
  border-radius: 1px;
}

.fase-criterio .part01 {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  justify-content: center;
  align-items: center;
}

.fase-criterio .part01 p {
  font-size: 1rem;
  font-weight: 500;
}

.fase-criterio .valida {
  color: #57af7b;
}

.fase-criterio .invalida {
  color: #9c443e;
}

.valor-limite{
  font-family: "Bai Jamjuree", sans-serif;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  background-color: #e4eaf0;
  outline: none;
  border: 1px solid rgb(9, 9, 58);
  padding: 4px;
  color: #060f18;
  text-align: center;
  font-weight: 500;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>