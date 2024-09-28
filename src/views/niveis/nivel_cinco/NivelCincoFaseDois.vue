<template>
  <div class="main_container">
    <BarraSuperior :currentLevel="currentLevel" :missao="missao" :fase="fase" />

    <div class="level__content">
      <div class="artefato">
        <h1>Artefato da fase anterior</h1>
        <h2>Classes de equivalência e valores-limite</h2>
        <div class="container-artefatos">
          <p class="p0">Classes de equivalência das condições de entrada/saída:</p>
          <div class="container-condicoes1">
            <div class="container-condicao">
              <span class="titulo-cond">ND-ID - Número de dígitos do ID</span>
              <div class="validas-e-invalidas">
                <div class="container-validas">
                  <span>Classes válidas</span>
                  <p v-for="(valida, index) in classes_validas.filter((_, i) => validas[i] === 'ND-ID - Número de dígitos do ID')" :key="index">
                     ND-ID {{valida}}
                  </p>
                </div>
                <div class="container-invalidas">
                  <span>Classes inválidas</span>
                  <p v-for="(invalida, index) in classes_invalidas.filter((_, i) => invalidas[i] === 'ND-ID - Número de dígitos do ID')" :key="index">
                     ND-ID {{invalida}}
                  </p>
                </div>
              </div>
            </div>

            <div class="container-condicao">
              <span class="titulo-cond">DF-ID - Dígito final do ID</span>
              <div class="validas-e-invalidas">
                <div class="container-validas">
                  <span>Classes válidas</span>
                   <p v-for="(valida, index) in classes_validas.filter((_, i) => validas[i] === 'DF-ID - Dígito final do ID')" :key="index">
                     DF-ID {{valida}}
                  </p>
                </div>
                <div class="container-invalidas">
                  <span>Classes inválidas</span>
                   <p v-for="(invalida, index) in classes_invalidas.filter((_, i) => invalidas[i] === 'DF-ID - Dígito final do ID')" :key="index">
                     DF-ID {{invalida}}
                  </p>
                </div>
              </div>
            </div>
           </div>


           <div class="container-condicoes1">
            <div class="container-condicao">
              <span class="titulo-cond">NC-MSG - Número de caracteres da mensagem</span>
              <div class="validas-e-invalidas">
                <div class="container-validas">
                  <span>Classes válidas</span>
                  <p v-for="(valida, index) in classes_validas.filter((_, i) => validas[i] === 'NC-MSG - Número de caracteres da mensagem')" :key="index">
                     NC-MSG {{valida}}
                  </p>
                </div>
                <div class="container-invalidas">
                  <span>Classes inválidas</span>
                  <p v-for="(invalida, index) in classes_invalidas.filter((_, i) => invalidas[i] === 'NC-MSG - Número de caracteres da mensagem')" :key="index">
                     NC-MSG {{invalida}}
                  </p>
                </div>
              </div>
            </div>

            <div class="container-condicao">
              <span class="titulo-cond">DEP - Departamento</span>
              <div class="validas-e-invalidas" style="margin-top:26px;">
                <div class="container-validas">
                  <span>Classes válidas</span>
                   <p v-for="(valida, index) in classes_validas.filter((_, i) => validas[i] === 'DEP - Departamento')" :key="index">
                     DEP {{valida}}
                  </p>
                </div>
                <div class="container-invalidas">
                  <span>Classes inválidas</span>
                   <p v-for="(invalida, index) in classes_invalidas.filter((_, i) => invalidas[i] === 'DEP - Departamento')" :key="index">
                     DEP {{invalida}}
                  </p>
                </div>
              </div>
            </div>
           </div>


           <div class="container-condicoes1">
            <div class="container-condicao">
              <span class="titulo-cond">MSG-RET - Mensagem de retorno do envio do alerta</span>
              <div class="validas-e-invalidas cond-center">
                <div class="container-validas">
                  <span>Classes válidas</span>
                  <p v-for="(valida, index) in classes_validas.filter((_, i) => validas[i] === 'MSG-RET - Mensagem de retorno do envio do alerta')" :key="index">
                     MSG-RET {{valida}}
                  </p>
                </div>
                <div class="container-invalidas">
                  <span>Classes inválidas</span>
                  <p v-for="(invalida, index) in classes_invalidas.filter((_, i) => invalidas[i] === 'MSG-RET - Mensagem de retorno do envio do alerta')" :key="index">
                     MSG-RET {{invalida}}
                  </p>
                </div>
              </div>
            </div>
           </div>

           <p class="p1">Condição de entrada/saída que possui valores-limite:</p>
           <p id="p2">{{ cond_valor_limite }}</p>

           <p class="p1">Valores-limite:</p>

           <div class="exercicio-avl">

              <div class="part01 invalida">
                <p>Classe inválida</p>
                <div class="linha01"></div>
              </div>

              <span class="valor-limite">{{ valores_limite[0] }}</span>
              <span class="valor-limite">{{ valores_limite[1] }}</span>

              <div class="part01 valida">
                <p>Classe válida</p>
                <div class="linha01"></div>
              </div>

              <span class="valor-limite">{{ valores_limite[2] }}</span>
              <span class="valor-limite">{{ valores_limite[3] }}</span>

              <div class="part01 invalida">
                <p>Classe inválida</p>
                <div class="linha01"></div>
              </div>

            </div>

          </div> 
       
        <a href="#" class="consultar_especificacao" @click="open_modal">
          <img src="@/assets/img/respostas.png" alt="consultar especificação" />
        </a>
      </div>

      <div class="casos-teste">
        <h1>Criação dos casos de teste</h1>

        <div class="container-criacao-CT">
          <div class="entrada">
            <span>Entrada</span>
            <select name="entradas" class="entradas-select" v-model="entrada">
              <option value="default" selected>Selecione uma opção</option>
              <option
                v-for="option in options_entradas"
                :key="option.value"
                :value="option.value"
                :title="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>

          <div class="saida-esperada">
            <span>Saída esperada</span>
            <select name="saidas" class="saidas-select" v-model="saida">
              <option value="default" selected>Selecione uma opção</option>
              <option
                v-for="option in options_saidas"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>

          <a href="#" class="add-CT" @click="addCasoTeste">+</a>
        </div>

        <h2>Casos de teste gerados</h2>
        <div class="CTs-gerados">
          <div class="cabecalho">
            <span>Entrada</span>
            <span>Saída esperada</span>
          </div>

          <div class="CTs">
            <div class="CT" v-for="(caso, index) in casosTeste" :key="index">
              <div class="entrada-saida">
                <p>{{ caso.entrada }}</p>
                <p>{{ caso.saida }}</p>
              </div>
              <a href="#" class="tira-CT" @click="removeCasoTeste(index)">-</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a href="#" class="avancar-botao" @click="validarRespostas">
      <span>Finalizar & Avançar</span>
      <img src="@/assets/img/seta-avanca-nivel.png" alt="seta direita" />
    </a>

    <ModalEspecificacao
      :isVisible="showModal"
      @close="showModal = false"
      title="Submódulo de envio de alertas"
      :paragrafos="paragrafos"
    />
  </div>
</template>

<script>
import BarraSuperior from "@/components/niveis/BarraSuperior.vue";
import ModalEspecificacao from "@/components/niveis/ModalEspecificacao.vue";
import { store } from "@/store";

export default {
  name: "NivelCincoFaseDois",
  components: {
    BarraSuperior,
    ModalEspecificacao,
  },
  data() {
    return {
      paragrafos: [
        'O submódulo de envio de alertas é responsável por processar e enviar alertas gerados por um usuário ou por outro submódulo do sistema. Cada alerta é composto por três elementos: um identificador (ID), uma mensagem e o departamento destinatário. Para que o alerta seja enviado corretamente, algumas regras de validação devem ser seguidas.',
        'Primeiramente, o ID deve conter exatamente cinco dígitos. Caso essa condição não seja respeitada, o sistema retornará a mensagem de erro "O ID deve conter 5 dígitos!". Além disso, o último dígito do ID deve ser 1, 2 ou 3, representando a prioridade do alerta. O número 1 indica prioridade máxima, o número 2 representa prioridade média e o número 3 corresponde à prioridade baixa. Se o último dígito for diferente desses valores, será retornada a mensagem "O último dígito do ID pode ser somente 1, 2 ou 3!".',
        'A mensagem do alerta também deve seguir um critério específico: ela deve ter entre 10 e 70 caracteres. Se a mensagem não atender a essa exigência, o sistema exibirá o erro "A mensagem deve conter entre 10 e 70 caracteres!". Além disso, o destinatário do alerta precisa ser um dos três departamentos disponíveis: Energia Elétrica, Trânsito ou Saúde. Caso não seja selecionado um departamento, o sistema retornará a mensagem "O departamento deve ser selecionado!".',
        'Os campos de ID e mensagem também são obrigatórios. Portanto, ao tentar enviar um alerta sem preencher um desses campos, a mensagem de erro correspondente será "O campo [xxx] deve ser preenchido!", onde [xxx] representa o nome do campo que está vazio.',
        'Se todas as validações forem cumpridas e o alerta for enviado com sucesso, o sistema exibirá a mensagem "Alerta enviado com sucesso para o departamento [selecionado]!". No entanto, se ocorrer algum problema durante o envio, será exibida a mensagem "Falha no envio do alerta!".',
        'Para testar o cenário de falha no envio, há um ID específico que pode ser utilizado: o ID 00000. Esse ID é valido e foi configurado apenas para simular falhas no envio. Assim, ao utilizar o ID 00000, o sistema deverá retornar a mensagem de falha no envio, permitindo a verificação desse comportamento.'
      ],
      missao: "5",
      fase: "2",
      currentLevel: 3,
      valores_limite: [],
      cond_valor_limite: '',
      showModal: false,
      entrada: "default",
      saida: "default",
      pontuacao: 0,
      casosTeste: [],
      validas: [],
      invalidas: [],
      options_entradas: [
        { value: "ID = 17891, Mensagem = '1234567890' (10 caracteres) e Departamento = Trânsito", label: "ID = 17891, Mensagem = '1234567890' (10 caracteres) e Departamento = Trânsito" },
        { value: "ID = 17899, Mensagem = '123456' (6 caracteres) e Departamento = Saúde", label: "ID = 17899, Mensagem = '123456' (6 caracteres) e Departamento = Saúde" }, // *
        { value: "ID em branco, Mensagem = 'testando alerta' e Departamento = Trânsito", label: "ID em branco, Mensagem = 'testando alerta' e Departamento = Trânsito" },
        { value: "ID = 19897, Mensagem = 'testando alerta' e Departamento = Trânsito", label: "ID = 19897, Mensagem = 'testando alerta' e Departamento = Trânsito" },
        { value: "ID = 17891, Mensagem = '1234' (4 caracteres) e Departamento = Trânsito", label: "ID = 17891, Mensagem = '1234' (4 caracteres) e Departamento = Trânsito" },
        { value: "ID = 00000, Mensagem = 'testando alerta' e Departamento = Saúde", label: "ID = 00000, Mensagem = 'testando alerta' e Departamento = Saúde" },
        { value: "ID = 17892, Mensagem = 'testando alerta' e Departamento = Energia elétrica", label: "ID = 17892, Mensagem = 'testando alerta' e Departamento = Energia elétrica" },
        { value: "ID = 17891111, Mensagem = 'testando alerta' e Departamento = Trânsito", label: "ID = 17891111, Mensagem = 'testando alerta' e Departamento = Trânsito" },
        { value: "ID = 17891, Mensagem = 'teste mensagem alerta teste mensagem alerta teste mensagem alerta teste' (71 caracteres) e Departamento = Trânsito", label: "ID = 17891, Mensagem = 'teste mensagem alerta teste mensagem alerta teste mensagem alerta teste' (71 caracteres) e Departamento = Trânsito" },
        { value: "ID = 17891, Mensagem = 'testando alerta' e Departamento não selecionado", label: "ID = 17891, Mensagem = 'testando alerta' e Departamento não selecionado" },
        { value: "ID = 98323, Mensagem = 'teste envio mensagem' e Departamento = Saúde", label: "ID = 98323, Mensagem = 'teste envio mensagem' e Departamento = Saúde" }, // *
        { value: "ID = 17891, Mensagem = 'teste mensagem alerta teste mensagem alerta teste mensagem alerta teste mensagem' (80 caracteres) e Departamento = Trânsito", label: "ID = 17891, Mensagem = 'teste mensagem alerta teste mensagem alerta teste mensagem alerta teste mensagem' (80 caracteres) e Departamento = Trânsito" },
        { value: "ID = 122, Mensagem = 'testando alerta' e Departamento = Energia Elétrica", label: "ID = 122, Mensagem = 'testando alerta' e Departamento = Energia Elétrica" }, // *
        { value: "ID = 17891, Mensagem em branco e Departamento = Trânsito", label: "ID = 17891, Mensagem em branco e Departamento = Trânsito" },
        { value: "ID = 17891, Mensagem = 'teste mensagem alerta tes' (25 caracteres) e Departamento = Trânsito", label: "ID = 17891, Mensagem = 'teste mensagem alerta tes' (25 caracteres) e Departamento = Trânsito" },
        { value: "ID = 17891, Mensagem = 'teste mensagem alerta teste mensagem alerta teste mensagem alerta test' (70 caracteres) e Departamento = Trânsito", label: "ID = 17891, Mensagem = 'teste mensagem alerta teste mensagem alerta teste mensagem alerta test' (70 caracteres) e Departamento = Trânsito" },
        { value: "ID = 17893, Mensagem = 'testando alerta' e Departamento = Saúde", label: "ID = 17893, Mensagem = 'testando alerta' e Departamento = Saúde" },
        { value: "ID em branco, Mensagem em branco e Departamento não selecionado", label: "ID em branco, Mensagem em branco e Departamento não selecionado" }, // *
        { value: "ID = 17891, Mensagem = '123456789' (9 caracteres) e Departamento = Trânsito", label: "ID = 17891, Mensagem = '123456789' (9 caracteres) e Departamento = Trânsito" },
        { value: "ID = 17891, Mensagem = 'teste mensagem alerta teste mensagem ale' (40 caracteres) e Departamento = Trânsito", label: "ID = 17891, Mensagem = 'teste mensagem alerta teste mensagem ale' (40 caracteres) e Departamento = Trânsito" }, // *
      ],
      options_saidas: [
        {
          value: "Alerta não enviado e mensagem 'O ID deve conter 5 dígitos!'",
          label: "Alerta não enviado e mensagem 'O ID deve conter 5 dígitos!'",
        },
        {
          value: "Alerta não enviado e mensagem 'O último dígito do ID pode ser somente 1, 2 ou 3!'",
          label: "Alerta não enviado e mensagem 'O último dígito do ID pode ser somente 1, 2 ou 3!'",
        },
        {
          value: "Alerta não enviado e mensagem 'O campo de ID deve ser preenchido!'",
          label: "Alerta não enviado e mensagem 'O campo de ID deve ser preenchido!'",
        },
        {
          value: "Alerta não enviado e mensagem 'O campo de mensagem deve ser preenchido!'",
          label: "Alerta não enviado e mensagem 'O campo de mensagem deve ser preenchido!'",
        },
        {
          value: "Alerta não enviado e mensagem 'A mensagem deve conter entre 10 e 70 caracteres!'",
          label: "Alerta não enviado e mensagem 'A mensagem deve conter entre 10 e 70 caracteres!'",
        },
        {
          value: "Alerta não enviado e mensagem 'O departamento deve ser selecionado!'",
          label: "Alerta não enviado e mensagem 'O departamento deve ser selecionado!'",
        },
        {
          value: "Falha no envio do alerta e mensagem 'Falha no envio do alerta!'",
          label: "Falha no envio do alerta e mensagem 'Falha no envio do alerta!'",
        },
        {
          value: "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de saúde!'",
          label: "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de saúde!'",
        },
        {
          value: "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de trânsito!'",
          label: "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de trânsito!'",
        },
        {
          value: "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de energia elétrica!'",
          label: "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de energia elétrica!'",
        },
      ],
      gabarito: {
        "ID = 17891, Mensagem = '1234567890' (10 caracteres) e Departamento = Trânsito": "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de trânsito!'",
        "ID em branco, Mensagem = 'testando alerta' e Departamento = Trânsito": "Alerta não enviado e mensagem 'O campo de ID deve ser preenchido!'",
        "ID = 19897, Mensagem = 'testando alerta' e Departamento = Trânsito": "Alerta não enviado e mensagem 'O último dígito do ID pode ser somente 1, 2 ou 3!'",
        "ID = 17891, Mensagem = '1234' (4 caracteres) e Departamento = Trânsito": "Alerta não enviado e mensagem 'A mensagem deve conter entre 10 e 70 caracteres!'",
        "ID = 00000, Mensagem = 'testando alerta' e Departamento = Saúde": "Falha no envio do alerta e mensagem 'Falha no envio do alerta!'",
        "ID = 17892, Mensagem = 'testando alerta' e Departamento = Energia elétrica": "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de energia elétrica!'",
        "ID = 17891111, Mensagem = 'testando alerta' e Departamento = Trânsito": "Alerta não enviado e mensagem 'O ID deve conter 5 dígitos!'",
        "ID = 17891, Mensagem = 'teste mensagem alerta teste mensagem alerta teste mensagem alerta teste' (71 caracteres) e Departamento = Trânsito": "Alerta não enviado e mensagem 'A mensagem deve conter entre 10 e 70 caracteres!'",
        "ID = 17891, Mensagem = 'testando alerta' e Departamento não selecionado": "Alerta não enviado e mensagem 'O departamento deve ser selecionado!'",
        "ID = 17891, Mensagem = 'teste mensagem alerta teste mensagem alerta teste mensagem alerta teste mensagem' (80 caracteres) e Departamento = Trânsito": "Alerta não enviado e mensagem 'A mensagem deve conter entre 10 e 70 caracteres!'",
        "ID = 17891, Mensagem em branco e Departamento = Trânsito": "Alerta não enviado e mensagem 'O campo de mensagem deve ser preenchido!'",
        "ID = 17891, Mensagem = 'teste mensagem alerta tes' (25 caracteres) e Departamento = Trânsito": "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de trânsito!'",
        "ID = 17891, Mensagem = 'teste mensagem alerta teste mensagem alerta teste mensagem alerta test' (70 caracteres) e Departamento = Trânsito": "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de trânsito!'",
        "ID = 17893, Mensagem = 'testando alerta' e Departamento = Saúde": "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de saúde!'",
        "ID = 17891, Mensagem = '123456789' (9 caracteres) e Departamento = Trânsito": "Alerta não enviado e mensagem 'A mensagem deve conter entre 10 e 70 caracteres!'",
        "ID = 122, Mensagem = 'testando alerta' e Departamento = Energia Elétrica": "Alerta não enviado e mensagem 'O ID deve conter 5 dígitos!'",
        "ID = 17891, Mensagem = 'teste mensagem alerta teste mensagem ale' (40 caracteres) e Departamento = Trânsito": "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de trânsito!'",
        "ID = 98323, Mensagem = 'teste envio mensagem' e Departamento = Saúde": "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de saúde!'"
      },
      classes_validas: ['= 3', '= sucesso no envio', '= 5', '= Saúde', '= 1', '>= 10 e <= 70', '!= 0', 'selecionado', '!= 0', '= Energia elétrica', '= 2', '= Trânsito'],
      classes_invalidas: ['< 10', 'não selecionado', '!= 5', '!= 1, 2 ou 3', '= 0', '> 70', '= 0', '= falha no envio'],
    };
  },
  mounted() {
    this.validas = [...store.respostas_fase_um.missao_cinco_validas];
    this.invalidas = [...store.respostas_fase_um.missao_cinco_invalidas];

    if(store.respostas_fase_um.cond_selecionada_missao_cinco !== 'default') {
      this.cond_valor_limite = store.respostas_fase_um.cond_selecionada_missao_cinco;
    }

    this.valores_limite = [...store.respostas_fase_um.valores_limites_missao_cinco];
    this.valores_limite.forEach((item, index) => {
      if (item === '') {
       this.valores_limite[index] = '-';
      }
    });
  },
  methods: {
    open_modal(event) {
      event.preventDefault();
      this.showModal = true;
    },
    addCasoTeste(event) {
      event.preventDefault();
      if (this.entrada !== "default" && this.saida !== "default") {
        const novoCasoTeste = {
          entrada: this.entrada,
          saida: this.saida,
        };

        const casoRepetido = this.casosTeste.some(
          (caso) =>
            caso.entrada === novoCasoTeste.entrada &&
            caso.saida === novoCasoTeste.saida
        );

        if (casoRepetido) {
          alert("Caso de teste repetido!");
        } else {
          this.casosTeste.push(novoCasoTeste);
        }

        this.entrada = "default";
        this.saida = "default";
      } else {
        alert("Selecione a entrada e a saída esperadas!");
      }
    },
    removeCasoTeste(index) {
      this.casosTeste.splice(index, 1);
    },
    validarRespostas(event) {
      event.preventDefault();
      this.pontuacao = 0;

      var cts_anteriores = [];

      this.casosTeste.forEach((caso) => {
        const saidaEsperada = this.gabarito[caso.entrada];
        if (caso.saida === saidaEsperada) {
          if ((caso.entrada === "ID = 122, Mensagem = 'testando alerta' e Departamento = Energia Elétrica" || caso.entrada === "ID = 17891111, Mensagem = 'testando alerta' e Departamento = Trânsito") && caso.saida === "Alerta não enviado e mensagem 'O ID deve conter 5 dígitos!'") {
            if (cts_anteriores.some(
                (c) =>
                  (c.entrada === "ID = 122, Mensagem = 'testando alerta' e Departamento = Energia Elétrica" ||
                    c.entrada === "ID = 17891111, Mensagem = 'testando alerta' e Departamento = Trânsito") &&
                  c.saida ===
                    "Alerta não enviado e mensagem 'O ID deve conter 5 dígitos!'"
              )) {
              this.pontuacao -= 10;
              store.respostas_fase_dois.correcao_missao_cinco.push(false);
              store.respostas_fase_dois.cts_excedentes_missao_cinco.push(true);
            } else {
              this.pontuacao += 10;
              store.respostas_fase_dois.correcao_missao_cinco.push(true);
              store.respostas_fase_dois.cts_excedentes_missao_cinco.push(false);
            }
          }

          else if ((caso.entrada === "ID = 17891, Mensagem = 'teste mensagem alerta tes' (25 caracteres) e Departamento = Trânsito" || caso.entrada === "ID = 17891, Mensagem = 'teste mensagem alerta teste mensagem ale' (40 caracteres) e Departamento = Trânsito") && caso.saida === "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de trânsito!'") {
            if (cts_anteriores.some(
                (c) =>
                  (c.entrada === "ID = 17891, Mensagem = 'teste mensagem alerta tes' (25 caracteres) e Departamento = Trânsito" ||
                    c.entrada === "ID = 17891, Mensagem = 'teste mensagem alerta teste mensagem ale' (40 caracteres) e Departamento = Trânsito") &&
                  c.saida ===
                    "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de trânsito!'"
              )) {
              this.pontuacao -= 10;
              store.respostas_fase_dois.correcao_missao_cinco.push(false);
              store.respostas_fase_dois.cts_excedentes_missao_cinco.push(true);
            } else {
              this.pontuacao += 10;
              store.respostas_fase_dois.correcao_missao_cinco.push(true);
              store.respostas_fase_dois.cts_excedentes_missao_cinco.push(false);
            }
          }

          else if ((caso.entrada === "ID = 98323, Mensagem = 'teste envio mensagem' e Departamento = Saúde" || caso.entrada === "ID = 17893, Mensagem = 'testando alerta' e Departamento = Saúde") && caso.saida === "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de saúde!'") {
            if (cts_anteriores.some(
                (c) =>
                  (c.entrada === "ID = 98323, Mensagem = 'teste envio mensagem' e Departamento = Saúde" ||
                    c.entrada === "ID = 17893, Mensagem = 'testando alerta' e Departamento = Saúde") &&
                  c.saida ===
                    "Alerta enviado e mensagem 'Alerta enviado com sucesso para o departamento de saúde!'"
              )) {
              this.pontuacao -= 10;
              store.respostas_fase_dois.correcao_missao_cinco.push(false);
              store.respostas_fase_dois.cts_excedentes_missao_cinco.push(true);
            } else {
              this.pontuacao += 10;
              store.respostas_fase_dois.correcao_missao_cinco.push(true);
              store.respostas_fase_dois.cts_excedentes_missao_cinco.push(false);
            }
          }
          
          else {
            this.pontuacao += 10;
            store.respostas_fase_dois.correcao_missao_cinco.push(true);
            store.respostas_fase_dois.cts_excedentes_missao_cinco.push(false);
          }

        } else {
          this.pontuacao -= 10;
          store.respostas_fase_dois.correcao_missao_cinco.push(false);
          store.respostas_fase_dois.cts_excedentes_missao_cinco.push(false);
        }

        cts_anteriores.push(caso);
      });

      store.respostas_fase_dois.cts_missao_cinco = [...this.casosTeste];
      store.pontuacaoJogador.pont_fases_niveis[4][1] = this.pontuacao;

      this.$router.push("/nivel-cinco-fase-tres");

    },
  },
};
</script>

<style scoped>
.main_container {
  width: 100vw;
  height: 100vh;
  background-color: #d4d9e5;
}

.level__content {
  height: calc(100% - 70px);
  display: flex;
}

.casos-teste {
  width: 53%;
  padding: 12px;
}

.casos-teste h1 {
  font-family: "Iceland", sans-serif;
  color: #2e4778;
  text-align: center;
  font-size: 28px;
  margin-top: 8px;
}

.casos-teste p {
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 16.5px;
  margin-top: 24px;
  margin-left: 18px;
  color: #375087;
  font-weight: 500;
  line-height: 25px;
}

.container-criacao-CT {
  display: flex;
  justify-content: center;
  align-items: last baseline;
  gap: 16px;
  font-family: "Bai Jamjuree", sans-serif;
  margin-top: 35px;
}

.entrada span,
.saida-esperada span {
  margin-bottom: 8px;
  display: block;
  text-align: center;
  color: #1e3057;
  font-size: 17px;
  font-weight: 500;
}

.add-CT {
  text-decoration: none;
  display: block;
  border-radius: 100%;
  padding: 4px 13px 6px 13px;
  background-color: #14183d;
  color: #cdcfe4;
  font-size: 25px;
  font-weight: 500;
  margin-left: 20px;
  transition: 0.3s;
}

.add-CT:hover {
  background-color: #030620;
}

.entradas-select,
.saidas-select {
  padding: 0.8rem;
  border-radius: 0.25rem;
  outline: none;
  font-size: 12px;
  color: #0d2041;
  background-color: rgb(227, 229, 239);
  font-family: "Bai Jamjuree", sans-serif;
  width: 220px;
  border: 1.3px solid rgb(13, 33, 65);
}

.CTs-gerados, .container-artefatos {
  margin-top: 10px;
  background-color: #c2cbdc;
  border-radius: 3px;
  width: 84%;
  height: 40%;
  margin-left: auto;
  margin-right: auto;
  overflow-y: auto;
  padding: 15px 20px;
}

.container-artefatos {
  width: 98%;
  height: 270px;
  padding: 14px 18px;
  margin-top: 14px;
  background-color: #c2ccdd;
}

*::-webkit-scrollbar {
  width: 9px;
}

*::-webkit-scrollbar-thumb {
  background-color: #4f6391e7;
  border-radius: 8px;
}

*::-webkit-scrollbar-track {
  background: rgba(177, 182, 212, 0.861);
  border-radius: 3px;
}

*::-webkit-scrollbar-thumb:hover {
  background: #4f6391;
}

.cabecalho {
  display: flex;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 15px;
  color: #253052;
  font-weight: 500;
  margin-bottom: 10px;
}

.cabecalho span {
  width: 40%;
  margin-right: 6px;
}

.artefato {
  position: relative;
  width: 47%;
  border-right: 3px solid rgba(59, 93, 131, 0.57);
  padding: 12px;
  padding-right: 16px;
}

.artefato h1 {
  font-family: "Iceland", sans-serif;
  color: #2e4778;
  text-align: center;
  font-size: 28px;
  margin-top: 8px;
}

.artefato h2,
.casos-teste h2 {
  font-family: "Bai Jamjuree", sans-serif;
  color: #2e4778;
  text-align: center;
  font-size: 19px;
  margin-top: 35px;
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

.consultar_especificacao {
  position: absolute;
  bottom: 3%;
  right: 4%;
  display: inline-flex;
  background-color: #1e215a;
  padding: 15px;
  border-radius: 100%;
  text-decoration: none;
  align-items: center;
  transition: 0.3s;
}

.consultar_especificacao img {
  width: 22px;
}

.consultar_especificacao::before {
  content: "Consultar especificação";
  position: absolute;
  left: -168px;
  bottom: 50%;
  transform: translateY(50%);
  white-space: nowrap;
  background-color: #434f70;
  color: #e5e6f2;
  padding: 6px 10px;
  border-radius: 5px;
  font-size: 14px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 13px;
}

.consultar_especificacao:hover::before {
  opacity: 1;
  visibility: visible;
}

.casos-teste h2 {
  margin-top: 26px;
}

.CT {
  display: flex;
  align-items: first baseline;
  justify-content: space-between;
  margin-bottom: 6px;
}

.casos-teste .CTs-gerados .CTs .entrada-saida {
  display: flex;
  width: 100%;
}

.casos-teste .CTs-gerados .CTs .entrada-saida p {
  font-size: 14px;
  margin: 0;
  width: 40%;
  margin-right: 15px;
  word-wrap: break-word;
  /* word-break: break-all; */
  line-height: 1.2;
}

.tira-CT {
  text-decoration: none;
  display: block;
  border-radius: 100%;
  padding: 0.5px 9px 4px 9px;
  background-color: #263457;
  color: #cdcfe4;
  font-size: 21px;
  font-weight: 600;
  transition: 0.3s;
  line-height: 1;
}

.tira-CT:hover {
  background-color: #0b1631;
}

.avancar-botao:hover,
.consultar_especificacao:hover {
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

.container-condicoes1 {
  display: flex;
  justify-content: center;
  align-items: first baseline;
  gap: 9%;
  font-family: "Bai Jamjuree", sans-serif;
  margin-bottom: 24px;
}

.titulo-cond {
  font-size: 15px;
  font-weight: 500;
  color: #090e35;
  display: block;
  text-align: center;
}

.validas-e-invalidas {
  display: flex;
  margin-top: 8px;
  gap: 20px;
  align-items: first baseline;
}

.cond-center {
  justify-content: center;
}

.validas-e-invalidas span {
  display: block;
  font-size: 13px;
  text-align: center;
  font-weight: 500;
}

.container-validas, .container-invalidas {
  width: 105px;
}

.container-validas span {
  color: #2c9b2e;
}

.container-invalidas span {
  color: #9c3030;
}

.validas-e-invalidas .container-validas p, .validas-e-invalidas .container-invalidas p {
  font-size: 13px;
  font-weight: 500;
  word-wrap: break-word;
  margin-top: 8px;
}

.p1, #p2 {
  font-family: "Bai Jamjuree", sans-serif;
  color:#0b1631;
  font-size: 16px;
  margin-top: 30px;
  font-weight: 600;
  text-align: center;
}

.p0 {
  font-family: "Bai Jamjuree", sans-serif;
  color:#0b1631;
  font-size: 16px;
  margin-top: 2px;
  margin-bottom: 20px;
  font-weight: 600;
  text-align: center;
}

#p2 {
  margin-top: 6px;
  font-size: 14px;
  font-weight: 500;
}

.artefato .exercicio-avl {
  margin-top: 30px;
  margin-bottom: 8px;
  display: flex;
  gap: 0.375rem;
  justify-content: center;
  align-items: last baseline;
  font-family: "Bai Jamjuree", sans-serif;
}

.artefato .linha01 {
  width: 90px;
  height: 6px;
  color: #c6d7eb;
  background-color: #1b344d;
  border-radius: 1px;
}

.artefato .part01 {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  justify-content: center;
  align-items: center;
}

.artefato .part01 p {
  font-size: 14px;
  font-weight: 500;
}

.artefato .valida {
  color: #57af7b;
}

.artefato .invalida {
  color: #9c443e;
}

.artefato .valor-limite {
  font-size: 14px;
  color:#030620;
  font-weight: 500;
  padding: 6px;
  border-radius: 3px;
  border: 1.4px solid #090e35;
}

@media (min-height: 700px) {
  .container-artefatos {
    height: 370px;
  }
}

@media (min-height: 800px) {
  .container-artefatos {
    height: 450px;
  }
}

</style>
