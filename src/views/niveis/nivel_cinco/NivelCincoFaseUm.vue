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
        <h1>Desafio de uso dos critérios da técnica funcional pt.1</h1>
        <p class="enunciado">De acordo com a especificação e as diretrizes do critério de particionamento de equivalência, associe às classes válidas e inválidas as suas condições de entrada/saída correspondentes:</p>
        <p class="titulo-ex">Classes de equivalência</p>
        <div class="container-classes">
          <div class="container-classe classes-validas">
            <p>Classes válidas</p>
            <div class="junta-classes">
            <div class="classe">
              <select v-model="classes_validas[0]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> = 3</span>
            </div>

              <div class="classe">
              <select v-model="classes_validas[1]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> = sucesso no envio</span>
            </div>

            </div>

            <div class="junta-classes">
            <div class="classe">
              <select v-model="classes_validas[2]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> = 5</span>
            </div>

            <div class="classe">
              <select v-model="classes_validas[3]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> = Saúde</span>
            </div>

            </div>

            <div class="junta-classes">
            <div class="classe">
              <select v-model="classes_validas[4]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> = 1</span>
            </div>

            <div class="classe" style="margin-left:3.4px;">
              <select v-model="classes_validas[5]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> >= 10 e &lt;= 70</span>
            </div>

            </div>

            <div class="junta-classes" style="gap: 0;">
            <div class="classe">
              <select v-model="classes_validas[6]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> != 0</span>
            </div>

            <div class="classe" style="margin-left: 10.8px;">
              <select v-model="classes_validas[7]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> selecionado</span>
            </div>

            </div>

            <div class="junta-classes" style="gap: 0;">
            <div class="classe">
              <select v-model="classes_validas[8]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> != 0</span>
            </div>

            <div class="classe" style="margin-left: 10.8px;">
              <select v-model="classes_validas[9]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> = Energia elétrica</span>
            </div>

            </div>

          <div class="junta-classes" style="gap: 0;">
            <div class="classe">
              <select v-model="classes_validas[10]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> = 2</span>
            </div>

            <div class="classe" style="margin-left:15px;">
              <select v-model="classes_validas[11]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> = Trânsito</span>
            </div>
          </div>
          </div>

          <div class="container-classe classes-invalidas">
            <p>Classes inválidas</p>
             <div class="junta-classes" style="gap: 0;">
            <div class="classe">
              <select v-model="classes_invalidas[0]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> &lt; 10</span>
            </div>

              <div class="classe" style="margin-left: 10.2px;">
              <select v-model="classes_invalidas[1]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> não selecionado</span>
            </div>

            </div>

            <div class="junta-classes" style="gap: 0;">
            <div class="classe">
              <select v-model="classes_invalidas[2]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> != 5</span>
            </div>

            <div class="classe" style="margin-left: 11.7px;">
              <select v-model="classes_invalidas[3]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> != 1, 2 ou 3</span>
            </div>

            </div>

            <div class="junta-classes">
            <div class="classe">
              <select v-model="classes_invalidas[4]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> = 0</span>
            </div>

            <div class="classe">
              <select v-model="classes_invalidas[5]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> > 70</span>
            </div>

            </div>

            <div class="junta-classes">
            <div class="classe">
              <select v-model="classes_invalidas[6]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> = 0</span>
            </div>

            <div class="classe">
              <select v-model="classes_invalidas[7]">
                <option value="default">--</option>
                <option value="ND-ID - Número de dígitos do ID">ND-ID - Número de dígitos do ID</option>
                <option value="DF-ID - Dígito final do ID">DF-ID - Dígito final do ID</option>
                <option value="NC-MSG - Número de caracteres da mensagem">NC-MSG - Número de caracteres da mensagem</option>
                <option value="DEP - Departamento">DEP - Departamento</option>
                <option value="MSG-RET - Mensagem de retorno do envio do alerta">MSG-RET - Mensagem de retorno do envio do alerta</option>
              </select>
              <span> = falha no envio</span>
            </div>

            </div>
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
  name: 'NivelCincoFaseUm',
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
      classes_validas: Array(12).fill("default"),
      classes_invalidas: Array(8).fill("default"),
    };
  },
   methods: {
    validarRespostas(event) {
      event.preventDefault();

      if (this.classes_validas[0] === 'DF-ID - Dígito final do ID' && this.classes_validas[1] === 'MSG-RET - Mensagem de retorno do envio do alerta' && this.classes_validas[2] === 'ND-ID - Número de dígitos do ID' && this.classes_validas[3] === 'DEP - Departamento' && this.classes_validas[4] === 'DF-ID - Dígito final do ID' && this.classes_validas[5] === 'NC-MSG - Número de caracteres da mensagem' && ((this.classes_validas[6] === 'ND-ID - Número de dígitos do ID' || this.classes_validas[6] === 'NC-MSG - Número de caracteres da mensagem') && this.classes_validas[6] !== this.classes_validas[8]) && this.classes_validas[7] === 'DEP - Departamento' && ((this.classes_validas[8] === 'ND-ID - Número de dígitos do ID' || this.classes_validas[8] === 'NC-MSG - Número de caracteres da mensagem') && this.classes_validas[8] !== this.classes_validas[6]) && this.classes_validas[9] === 'DEP - Departamento' && this.classes_validas[10] === 'DF-ID - Dígito final do ID' && this.classes_validas[11] === 'DEP - Departamento' && this.classes_invalidas[0] === 'NC-MSG - Número de caracteres da mensagem' && this.classes_invalidas[1] === 'DEP - Departamento' && this.classes_invalidas[2] === 'ND-ID - Número de dígitos do ID' && this.classes_invalidas[3] === 'DF-ID - Dígito final do ID' && ((this.classes_invalidas[4] === 'ND-ID - Número de dígitos do ID' || this.classes_invalidas[4] === 'NC-MSG - Número de caracteres da mensagem') && this.classes_invalidas[4] !== this.classes_invalidas[6]) && this.classes_invalidas[5] === 'NC-MSG - Número de caracteres da mensagem' && ((this.classes_invalidas[6] === 'ND-ID - Número de dígitos do ID' || this.classes_invalidas[6] === 'NC-MSG - Número de caracteres da mensagem') && this.classes_invalidas[6] !== this.classes_invalidas[4]) && this.classes_invalidas[7] === 'MSG-RET - Mensagem de retorno do envio do alerta') {
        store.respostas_fase_um.missao_cinco_pt1_correta = true;
      }

      store.respostas_fase_um.missao_cinco_validas = [...this.classes_validas];
      store.respostas_fase_um.missao_cinco_invalidas = [...this.classes_invalidas];

      this.$router.push("/nivel-cinco-fase-um-pt2");
     
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
    height: calc(100% - 70px);
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

  .titulo-ex {
    font-family: "Bai Jamjuree", sans-serif;
    font-size: 16px;
    margin-top: 12px;
    color: #263c6a;
    font-weight: 600;
    text-align: center;
  }

  .texto-ex{
    font-family: "Bai Jamjuree", sans-serif;
    font-size: 14px;
    margin-top: 6px;
    color: #263c6a;
    font-weight: 500;
    margin-left: 20px;
    line-height: 20px;
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

.container-classes {
  display: flex;
  gap: 7%;
  justify-content: center;
  margin-top: 14px;
}

.container-classes p {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
  text-align: center;
}

.classes-validas p {
  color: #309b43;
}

.classes-invalidas p {
  color: #9b3230;
}

.classe {
  margin-top: 8px;
}

.classe span {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 13px;
  color: #0f1444;
  font-weight: 500;
}

.classe select {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 13px;
  color: #0f1444;
  font-weight: 500;
  outline: none;
  border-radius: 3px;
  padding: 1px;
  width: 60px;
  background-color: #eaecf3;
}

.junta-classes {
  display: flex;
  gap: 15px;
  justify-content: start;
}

@media (min-width: 1400px) {
  .classe select {
    width: 80px;
  }
}

@media (min-width: 1600px) {
  .classe select {
    width: 100px;
  }
}

@media (min-width: 1700px) {
  .classe select {
    width: 110px;
  }
}

@media (min-width: 1800px) {
  .classe select {
    width: 120px;
  }
}

@media (min-width: 1900px) {
  .classe select {
    width: 140px;
  }
}
</style>