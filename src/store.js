// store.js
import { reactive } from 'vue';

export const store = reactive({
  nomeJogador: {
    nomeJogador: ''
  },
  pontuacaoJogador: {
    pontuacao: 0,
    atualizarPontuacao(nivel) {
      this.pontuacao = Math.max(0, this.pontuacao + this.pont_fases_niveis[nivel][0] + this.pont_fases_niveis[nivel][1] + this.pont_fases_niveis[nivel][2]);
    },
    pont_fases_niveis: [
      [0, 0, 0], // Nível 1
      [0, 0, 0], // Nível 2
      [0, 0, 0], // Nível 3
      [0, 0, 0], // Nível 4
      [0, 0, 0], // Nível 5
      [0, 0, 0], // Nível 6
      [0, 0, 0], // Nível 7
      [0, 0, 0]  // Nível 8
    ]
  },
  dicas: {
    dicas: 3
  },
  respostas_fase_um: {
    validas_missao_um: [],
    invalidas_missao_um: [],
    valores_limites_missao_dois: [],
    valores_limites_missao_tres: [],
    tabela_missao_quatro: [],
    missao_cinco_pt1_correta: false,
    missao_cinco_validas: [],
    missao_cinco_invalidas: [],
    cond_selecionada_missao_cinco: '',
    valores_limites_missao_cinco: [],
    validas_missao_seis: [],
    invalidas_missao_seis: [],
    missao_sete_validas: [],
    missao_sete_invalidas: [],
    tabela_missao_oito: [],
  },
  respostas_fase_dois: {
    cts_missao_um: [],
    correcao_missao_um: [],
    cts_missao_dois: [],
    correcao_missao_dois: [],
    cts_missao_tres: [],
    correcao_missao_tres: [],
    cts_missao_quatro: [],
    correcao_missao_quatro: [],
    cts_missao_cinco: [],
    correcao_missao_cinco: [],
    cts_missao_seis: [],
    correcao_missao_seis: [],
    cts_missao_sete: [],
    correcao_missao_sete: [],
    cts_missao_oito: [],
    correcao_missao_oito: [],
  },
  respostas_fase_tres: {
    falhas_encontradas_missao_tres: [false, false],
    falhas_encontradas_missao_quatro: [false, false],
    falhas_encontradas_missao_cinco: [false, false, false],
    falhas_encontradas_missao_seis: [],
    falhas_encontradas_missao_sete: [false, false]
  }
});
