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
        <h1>Desafio de uso dos critérios da técnica funcional</h1>
        <p class="enunciado">De acordo com a especificação e as diretrizes do critério de particionamento de equivalência, associe às classes válidas e inválidas as suas condições de entrada correspondentes:</p>
        <p class="titulo-ex">Classes de equivalência</p>
        <div class="container-classes">
          <div class="container-classe classes-validas">
            <p>Classes válidas</p>
            <div class="junta-classes">
            <div class="classe">
              <select v-model="classes_validas[0]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> válido (a)</span>
            </div>

              <div class="classe" style="margin-left:0.6px;">
              <select v-model="classes_validas[1]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
                </select>
              <span> = administrador</span>
            </div>

            </div>

            <div class="junta-classes">
            <div class="classe">
              <select v-model="classes_validas[2]">
               <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
                </select>
              <span> = 7809</span>
            </div>

            <div class="classe" style="margin-left: 14px;">
              <select v-model="classes_validas[3]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
                </select>
              <span> = op. de energia</span>
            </div>

            </div>

            <div class="junta-classes">
            <div class="classe">
              <select v-model="classes_validas[4]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> = 234xxx</span>
            </div>

           <div class="classe" style="margin-left: 2px;">
              <select v-model="classes_validas[10]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> preenchido(a)</span>
            </div>

            </div>

            <div class="junta-classes">
            <div class="classe">
              <select v-model="classes_validas[6]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> válido (a)</span>
            </div>

            <div class="classe">
              <select v-model="classes_validas[7]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> selecionado</span>
            </div>

            </div>

            <div class="junta-classes">

              
           <div class="classe">
              <select v-model="classes_validas[11]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> = oo344</span>
            </div>

            <div class="classe" style="margin-left: 5.6px;">
              <select v-model="classes_validas[8]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> preenchido(a)</span>
            </div>


            </div>

          <div class="junta-classes">
                  

             <div class="classe">
              <select v-model="classes_validas[9]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> OK</span>
            </div>

              <div class="classe" style="margin-left: 36px;">
              <select v-model="classes_validas[5]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> = tec. em comunicações</span>
            </div>

           

      
          </div>
          </div>

          <div class="container-classe classes-invalidas">
            <p>Classes inválidas</p>
             <div class="junta-classes">
            <div class="classe">
              <select v-model="classes_invalidas[0]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> em branco</span>
            </div>

              <div class="classe">
              <select v-model="classes_invalidas[1]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> não selecionado</span>
            </div>

            </div>

            <div class="junta-classes">

              
            <div class="classe">
              <select v-model="classes_invalidas[3]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> não OK</span>
            </div>

            <div class="classe" style="margin-left:20px;">
              <select v-model="classes_invalidas[2]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> inválido (a)</span>
            </div>


            </div>

            <div class="junta-classes">
                 <div class="classe">
              <select v-model="classes_invalidas[5]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> em branco</span>
            </div>

            <div class="classe">
              <select v-model="classes_invalidas[4]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> inválido (a)</span>
            </div>

            </div>

            <div class="junta-classes">

              <div class="classe">
              <select v-model="classes_invalidas[7]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> = 1234</span>
            </div>

            <div class="classe" style="margin-left:25px;">
              <select v-model="classes_invalidas[6]">
                <option value="default">--</option>
                <option value="Nenhuma condição de entrada corresponde">Nenhuma condição de entrada corresponde</option>
                <option value="Usuário">Usuário</option>
                <option value="Senha">Senha</option>
                <option value="Tipo de usuário">Tipo de usuário</option>
                <option value="Correspondência do tipo de usuário com usuário e senha (corretos)">Correspondência do tipo de usuário com usuário e senha (corretos)</option>
              </select>
              <span> op. de máquinas</span>
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
  name: 'NivelSeteFaseUm',
  components: {
    BarraSuperior,
    Especificacao
  },
   data() {
    return {
      titulo_especificacao: 'Submódulo de autenticação',
      paragrafos: [
        'Para acessar o sistema, o usuário deve realizar autenticação com seu usuário, senha e tipo de usuário. Há 3 tipos de usuário no sistema: Operador de Energia, Técnico em Comunicação e Administrador.',
        'Se todos os dados estiverem corretos e preenchidos, o login será feito com sucesso e o usuário será redirecionado para uma tela inicial onde será exibida uma mensagem de boas-vindas, a informação de seu tipo de usuário e um menu. Um tipo de usuário deve apenas conseguir logar no sistema como seu tipo de usuário, ou seja, se inserir usuário e senha corretos mas selecionar um tipo de usuário que não seja o seu, não poderá entrar no sistema. Além disso, se algum dos dados estiver incorreto ou em branco será exibida mensagem de erro e o login não será realizado.',
        'Alguns usuários cadastrados e suas respectivas senhas e tipos de usuário para teste:',
        '- usuário: def345, senha: 7809, tipo: operador de energia;',
        '- usuário: aasbn5, senha: pol$444, tipo: técnico em comunicação;',
        '- usuário: 234xxx, senha: oo344, tipo: administrador.',
      ],
      missao: '7',
      fase: '1',
      currentLevel: 5,
      classes_validas: Array(12).fill("default"),
      classes_invalidas: Array(8).fill("default"),
    };
  },
   methods: {
    validarRespostas(event) {
      event.preventDefault();

      if (((this.classes_validas[0] === 'Usuário' || this.classes_validas[0] === 'Senha') && this.classes_validas[0] !== this.classes_validas[6]) && this.classes_validas[1] === 'Tipo de usuário' && this.classes_validas[2] === 'Nenhuma condição de entrada corresponde' && this.classes_validas[3] === 'Tipo de usuário' && this.classes_validas[4] === 'Nenhuma condição de entrada corresponde' && this.classes_validas[5] === 'Tipo de usuário' && ((this.classes_validas[6] === 'Usuário' || this.classes_validas[6] === 'Senha') && this.classes_validas[6] !== this.classes_validas[0]) && this.classes_validas[7] === 'Tipo de usuário' && ((this.classes_validas[8] === 'Usuário' || this.classes_validas[8] === 'Senha') && this.classes_validas[8] !== this.classes_validas[10]) && this.classes_validas[9] === 'Correspondência do tipo de usuário com usuário e senha (corretos)' && ((this.classes_validas[10] === 'Usuário' || this.classes_validas[10] === 'Senha') && this.classes_validas[10] !== this.classes_validas[8]) && this.classes_validas[11] === 'Nenhuma condição de entrada corresponde' && ((this.classes_invalidas[0] === 'Usuário' || this.classes_invalidas[0] === 'Senha') && this.classes_invalidas[0] !== this.classes_invalidas[5]) && this.classes_invalidas[1] === 'Tipo de usuário' && ((this.classes_invalidas[2] === 'Usuário' || this.classes_invalidas[2] === 'Senha') && this.classes_invalidas[2] !== this.classes_invalidas[4]) && this.classes_invalidas[3] === 'Correspondência do tipo de usuário com usuário e senha (corretos)' && ((this.classes_invalidas[4] === 'Usuário' || this.classes_invalidas[4] === 'Senha') && this.classes_invalidas[4] !== this.classes_invalidas[2]) && ((this.classes_invalidas[5] === 'Usuário' || this.classes_invalidas[5] === 'Senha') && this.classes_invalidas[5] !== this.classes_invalidas[0]) && this.classes_invalidas[6] === 'Nenhuma condição de entrada corresponde' && this.classes_invalidas[7] === 'Nenhuma condição de entrada corresponde') {
        store.pontuacaoJogador.pont_fases_niveis[6][0] = 40;
      }

      store.respostas_fase_um.missao_sete_validas = [...this.classes_validas];
      store.respostas_fase_um.missao_sete_invalidas = [...this.classes_invalidas];

      this.$router.push("/nivel-sete-fase-dois");
     
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
  gap: 3%;
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
  gap: 8px;
  justify-content: start;
}

@media (min-width: 1450px) {
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