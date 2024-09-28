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
        <p>De acordo com a especificação e as diretrizes do critério de particionamento de equivalência, marque as opções corretas para as classes válidas e inválidas:</p>
        <div class="exercicio">
          <div class="validas-container">
            <span>Classes válidas</span>
            <div class="opcoes">
              <div>
                  <label class="custom-checkbox">Senha em branco
                  <input type="checkbox" v-model="respostas.validas" value="Senha em branco">
                  <span class="checkmark"></span>
                 </label>
              </div>

              <div>
                  <label class="custom-checkbox">Senha correta (ger995)
                  <input type="checkbox" v-model="respostas.validas" value="Senha correta (ger995)">
                  <span class="checkmark"></span>
                 </label>
              </div>

              <div>
                   <label class="custom-checkbox">Senha com 1 caractere
                  <input type="checkbox" v-model="respostas.validas" value="Senha com 1 caractere">
                  <span class="checkmark"></span>
                 </label>
              </div>

              <div>
                  <label class="custom-checkbox">Senha com mais de 10 caracteres
                  <input type="checkbox" v-model="respostas.validas" value="Senha com mais de 10 caracteres">
                  <span class="checkmark"></span>
                 </label>
              </div>

              
              <div>
                  <label class="custom-checkbox">Senha preenchida
                  <input type="checkbox" v-model="respostas.validas" value="Senha preenchida">
                  <span class="checkmark"></span>
                 </label>
              </div>

              <div>
                  <label class="custom-checkbox">Senha incorreta
                  <input type="checkbox" v-model="respostas.validas" value="Senha incorreta">
                  <span class="checkmark"></span>
                 </label>
              </div>

            </div>
          </div>
          <div class="invalidas-container">
            <span>Classes inválidas</span>
             <div class="opcoes">

              <div>
                  <label class="custom-checkbox">Senha preenchida
                  <input type="checkbox" v-model="respostas.invalidas" value="Senha preenchida">
                  <span class="checkmark"></span>
                 </label>
              </div>

               <div>
                  <label class="custom-checkbox">Senha correta (ger995)
                  <input type="checkbox" v-model="respostas.invalidas" value="Senha correta (ger995)">
                  <span class="checkmark"></span>
                 </label>
              </div>

              <div>
                  <label class="custom-checkbox">Senha com 1 caractere
                  <input type="checkbox" v-model="respostas.invalidas" value="Senha com 1 caractere">
                  <span class="checkmark"></span>
                 </label>
              </div>

               <div>
                  <label class="custom-checkbox">Senha incorreta
                  <input type="checkbox" v-model="respostas.invalidas" value="Senha incorreta">
                  <span class="checkmark"></span>
                 </label>
               </div>

                <div>
                  <label class="custom-checkbox">Senha em branco
                  <input type="checkbox" v-model="respostas.invalidas" value="Senha em branco">
                  <span class="checkmark"></span>
                 </label>
              </div>

              <div>
                  <label class="custom-checkbox">Senha com mais de 10 caracteres
                  <input type="checkbox" v-model="respostas.invalidas" value="Senha com mais de 10 caracteres">
                  <span class="checkmark"></span>
                 </label>
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
  name: 'NivelUmFaseUm',
  components: {
    BarraSuperior,
    Especificacao
  },
   data() {
    return {
      titulo_especificacao: 'Submódulo de ativação de geradores',
      paragrafos: [
        'Quando ocorre uma falha grave de energia, os geradores das cidades precisam ser ativados. Para isso, é necessário inserir uma senha.',
        'A senha esperada é "ger995". Se a senha inserida estiver correta, os geradores serão ativados e a mensagem "Geradores ativados com sucesso!" será exibida. Caso a senha esteja incorreta, os geradores não serão ativados e a mensagem "Senha incorreta!" será retornada.',
        'Se não for inserida nenhuma senha (senha em branco), os geradores também não serão ativados e a mensagem "Você deve inserir uma senha para ativar os geradores!" será exibida.'
      ],
      missao: '1',
      fase: '1',
      currentLevel: -1,
      respostas: {
        validas: [],
        invalidas: []
      },
      gabarito: {
        validas: ['Senha correta (ger995)', 'Senha preenchida'],
        invalidas: ['Senha incorreta', 'Senha em branco']
      }
    };
  },
   methods: {
    validarRespostas(event) {
      event.preventDefault();

      const respostasValidasCorretas = this.gabarito.validas.every(item => this.respostas.validas.includes(item));
      const respostasInvalidasCorretas = this.gabarito.invalidas.every(item => this.respostas.invalidas.includes(item));
      const respostasValidasSomenteCorretas = this.respostas.validas.every(item => this.gabarito.validas.includes(item));
      const respostasInvalidasSomenteCorretas = this.respostas.invalidas.every(item => this.gabarito.invalidas.includes(item));

      if (respostasValidasCorretas && respostasInvalidasCorretas && respostasValidasSomenteCorretas && respostasInvalidasSomenteCorretas) {
        store.pontuacaoJogador.pont_fases_niveis[0][0] = 30;
      }

      store.respostas_fase_um.validas_missao_um = [...this.respostas.validas];
      store.respostas_fase_um.invalidas_missao_um = [...this.respostas.invalidas];

      this.$router.push('/nivel-um-fase-dois');
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
  }

  .fase-criterio h1{
    font-family: 'Iceland', sans-serif;
    color: #2e4778;
    text-align: center;
    font-size: 28px;
    margin-top: 8px;
  }

  .fase-criterio p{
    font-family: "Bai Jamjuree", sans-serif;
    font-size: 16.5px;
    margin-top: 24px;
    margin-left: 18px;
    color: #375087;
    font-weight: 500;
    line-height: 25px;
  }

  .exercicio{
    margin-top: 26px;
    width: 98%;
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    font-family: "Bai Jamjuree", sans-serif;
  }

  .validas-container span{
    text-align: center;
    font-size: 17px;
    color: #2c814e;
    font-weight: 500;
  }

  .invalidas-container span{
    text-align: center;
    font-size: 17px;
    color: #812c2c;
    font-weight: 500;
  }

  .opcoes{
    margin-top: 16px;
    color: #4e5a7f;
    font-weight: 500;
  }

  .opcoes div{
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 18px;
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

 .custom-checkbox {
    display: inline-block;
    position: relative;
    font-size: 16px;
    user-select: none;
    padding-left: 24px;
    line-height: 16px;
  }

  .custom-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fbfbfc;
    border: 1.4px solid rgb(109, 109, 122);
    border-radius: 3px;
  }

  .custom-checkbox:hover input ~ .checkmark {
    border: 1.4px solid rgb(3, 3, 33);
  }

  .custom-checkbox input:checked ~ .checkmark {
    background-color: #1e2359;
    border-color:#1e2359;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .custom-checkbox input:checked ~ .checkmark:after {
    display: block;
  }

  .custom-checkbox .checkmark:after {
    left: 4.3px;
    top: 2px;
    width: 2px;
    height: 6px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

</style>