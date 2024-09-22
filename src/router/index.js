import { createRouter, createWebHistory } from 'vue-router'
import Inicial from '../views/telas_iniciais/Inicial.vue'
import InputName from '../views/telas_iniciais/InputName.vue'
import FalaUm from '../views/telas_iniciais/FalaUm.vue'
import FalaDois from '../views/telas_iniciais/FalaDois.vue'
import FalaTres from '../views/telas_iniciais/FalaTres.vue'
import BemVindo from '../views/treinamento/BemVindo.vue'
import Testes from '../views/treinamento/Testes.vue'
import TecnicaFuncional from '../views/treinamento/TecnicaFuncional.vue'
import Particionamento from '../views/treinamento/Particionamento.vue'
import DiretrizUm from '../views/treinamento/DiretrizUm.vue'
import DiretrizDois from '../views/treinamento/DiretrizDois.vue'
import DiretrizTres from '../views/treinamento/DiretrizTres.vue'
import DiretrizQuatro from '../views/treinamento/DiretrizQuatro.vue'
import ParticionamentoDois from '../views/treinamento/ParticionamentoDois.vue'
import AnaliseValorLimite from '../views/treinamento/AnaliseValorLimite.vue'
import AVLExUm from '../views/treinamento/AVLExUm.vue'
import AVLExDois from '../views/treinamento/AVLExDois.vue'
import TabelaDecisao from '../views/treinamento/TabelaDecisao.vue'
import ExTabela from '../views/treinamento/ExTabela.vue'
import NiveisTeste from '../views/treinamento/NiveisTeste.vue'
import NiveisTesteDois from '../views/treinamento/NiveisTesteDois.vue'
import Fala from '../views/regras/Fala.vue'
import RegraUm from '../views/regras/RegraUm.vue'
import RegraDois from '../views/regras/RegraDois.vue'
import RegraTres from '../views/regras/RegraTres.vue'
import RegraQuatro from '../views/regras/RegraQuatro.vue'
import RegraCinco from '../views/regras/RegraCinco.vue'
import RegraSeis from '../views/regras/RegraSeis.vue'
import RegraSete from '../views/regras/RegraSete.vue'
import NivelUmFaseUm from '../views/niveis/nivel_um/NivelUmFaseUm.vue'
import NivelUmApresentacao from '../views/niveis/nivel_um/NivelUmApresentacao.vue'
import NivelUmFaseDois from '../views/niveis/nivel_um/NivelUmFaseDois.vue'
import NivelUmFaseTres from '../views/niveis/nivel_um/NivelUmFaseTres.vue'
import NivelUmFeedback from '../views/niveis/nivel_um/NivelUmFeedback.vue'
import NivelDoisApresentacao from '../views/niveis/nivel_dois/NivelDoisApresentacao.vue'
import NivelDoisFaseUm from '../views/niveis/nivel_dois/NivelDoisFaseUm.vue'
import NivelDoisFaseDois from '../views/niveis/nivel_dois/NivelDoisFaseDois.vue'
import NivelDoisFaseTres from '../views/niveis/nivel_dois/NivelDoisFaseTres.vue'
import NivelDoisFeedback from '../views/niveis/nivel_dois/NivelDoisFeedback.vue'
import NivelTresApresentacao from '../views/niveis/nivel_tres/NivelTresApresentacao.vue'
import NivelTresFaseUm from '../views/niveis/nivel_tres/NivelTresFaseUm.vue'
import NivelTresFaseDois from '../views/niveis/nivel_tres/NivelTresFaseDois.vue'
import NivelTresFaseTres from '../views/niveis/nivel_tres/NivelTresFaseTres.vue'
import NivelTresFeedback from '../views/niveis/nivel_tres/NivelTresFeedback.vue'
import NivelQuatroApresentacao from '../views/niveis/nivel_quatro/NivelQuatroApresentacao.vue'
import NivelQuatroFaseUm from '../views/niveis/nivel_quatro/NivelQuatroFaseUm.vue'
import NivelQuatroFaseDois from '../views/niveis/nivel_quatro/NivelQuatroFaseDois.vue'
import NivelQuatroFaseTres from '../views/niveis/nivel_quatro/NivelQuatroFaseTres.vue'
import NivelQuatroFeedback from '../views/niveis/nivel_quatro/NivelQuatroFeedback.vue'
import NivelCincoApresentacao from '../views/niveis/nivel_cinco/NivelCincoApresentacao.vue'
import NivelCincoFaseUm from '../views/niveis/nivel_cinco/NivelCincoFaseUm.vue'
import NivelCincoFaseUmPt2 from '../views/niveis/nivel_cinco/NivelCincoFaseUmPt2.vue'
import NivelCincoFaseDois from '../views/niveis/nivel_cinco/NivelCincoFaseDois.vue'
import NivelCincoFaseTres from '../views/niveis/nivel_cinco/NivelCincoFaseTres.vue'
import NivelCincoFeedback from '../views/niveis/nivel_cinco/NivelCincoFeedback.vue'
import NivelSeisApresentacao from '../views/niveis/nivel_seis/NivelSeisApresentacao.vue'
import NivelSeisFaseUm from '../views/niveis/nivel_seis/NivelSeisFaseUm.vue'
import NivelSeisFaseDois from '../views/niveis/nivel_seis/NivelSeisFaseDois.vue'
import NivelSeisFaseTres from '../views/niveis/nivel_seis/NivelSeisFaseTres.vue'
import NivelSeisFeedback from '../views/niveis/nivel_seis/NivelSeisFeedback.vue'
import NivelSeteApresentacao from '../views/niveis/nivel_sete/NivelSeteApresentacao.vue'
import NivelSeteFaseUm from '../views/niveis/nivel_sete/NivelSeteFaseUm.vue'
import NivelSeteFaseDois from '../views/niveis/nivel_sete/NivelSeteFaseDois.vue'
import NivelSeteFaseTres from '../views/niveis/nivel_sete/NivelSeteFaseTres.vue'
import NivelSeteFeedback from '../views/niveis/nivel_sete/NivelSeteFeedback.vue'
import NivelOitoApresentacao from '../views/niveis/nivel_oito/NivelOitoApresentacao.vue'
import NivelOitoFaseUm from '../views/niveis/nivel_oito/NivelOitoFaseUm.vue'
import NivelOitoFaseDois from '../views/niveis/nivel_oito/NivelOitoFaseDois.vue'
import NivelOitoFaseTres from '../views/niveis/nivel_oito/NivelOitoFaseTres.vue'
import NivelOitoFeedback from '../views/niveis/nivel_oito/NivelOitoFeedback.vue'
import FinalUm from '../views/final/FinalUm.vue'
import FinalDois from '../views/final/FinalDois.vue'

const routes = [
  {
    path: '/',
    name: 'inicial',
    component: Inicial
  },
  {
    path: '/input_name',
    name: 'input_name',
    component: InputName
  },
  {
    path: '/fala_um',
    name: 'fala_um',
    component: FalaUm
  },
  {
    path: '/fala_dois',
    name: 'fala_dois',
    component: FalaDois
  },
  {
    path: '/fala_tres',
    name: 'fala_tres',
    component: FalaTres
  },
  {
    path: '/treinamento',
    name: 'treinamento',
    component: BemVindo
  },
  {
    path: '/testes',
    name: 'testes',
    component: Testes
  },
  {
    path: '/tecnica-funcional',
    name: 'tecnica-funcional',
    component: TecnicaFuncional
  },
  {
    path: '/particionamento',
    name: 'particionamento',
    component: Particionamento
  },
  {
    path: '/diretriz-um',
    name: 'diretriz-um',
    component: DiretrizUm
  },
  {
    path: '/diretriz-dois',
    name: 'diretriz-dois',
    component: DiretrizDois
  },
  {
    path: '/diretriz-tres',
    name: 'diretriz-tres',
    component: DiretrizTres
  },
  {
    path: '/diretriz-quatro',
    name: 'diretriz-quatro',
    component: DiretrizQuatro
  },
  {
    path: '/particionamento-dois',
    name: 'particionamento-dois',
    component: ParticionamentoDois
  },
  {
    path: '/analise-valor-limite',
    name: 'analise-valor-limite',
    component: AnaliseValorLimite
  },
  {
    path: '/avl-ex-um',
    name: 'avl-ex-um',
    component: AVLExUm
  },
  {
    path: '/avl-ex-dois',
    name: 'avl-ex-dois',
    component: AVLExDois
  },
  {
    path: '/tabela-decisao',
    name: 'tabela-decisao',
    component: TabelaDecisao
  },
  {
    path: '/ex-tabela',
    name: 'ex-tabela',
    component: ExTabela
  },
  {
    path: '/niveis-teste',
    name: 'niveis-teste',
    component: NiveisTeste
  },
  {
    path: '/niveis-teste-dois',
    name: 'niveis-teste-dois',
    component: NiveisTesteDois
  },
  {
    path: '/fala',
    name: 'fala',
    component: Fala
  },
  {
    path: '/regra-um',
    name: 'regra-um',
    component: RegraUm
  },
  {
    path: '/regra-dois',
    name: 'regra-dois',
    component: RegraDois
  },
  {
    path: '/regra-tres',
    name: 'regra-tres',
    component: RegraTres
  },
  {
    path: '/regra-quatro',
    name: 'regra-quatro',
    component: RegraQuatro
  },
  {
    path: '/regra-cinco',
    name: 'regra-cinco',
    component: RegraCinco
  },
  {
    path: '/regra-seis',
    name: 'regra-seis',
    component: RegraSeis
  },
  {
    path: '/nivel-um-fase-um',
    name: 'nivel-um-fase-um',
    component: NivelUmFaseUm
  },
  {
    path: '/nivel-um-fase-dois',
    name: 'nivel-um-fase-dois',
    component: NivelUmFaseDois
  },
  {
    path: '/nivel-um-fase-tres',
    name: 'nivel-um-fase-tres',
    component: NivelUmFaseTres
  },
  {
    path: '/regra-sete',
    name: 'regra-sete',
    component: RegraSete
  },
  {
    path: '/nivel-um-apresentacao',
    name: 'nivel-um-apresentacao',
    component: NivelUmApresentacao
  },
  {
    path: '/nivel-um-feedback',
    name: 'nivel-um-feedback',
    component: NivelUmFeedback
  },
  {
    path: '/nivel-dois-apresentacao',
    name: 'nivel-dois-apresentacao',
    component: NivelDoisApresentacao
  },
  {
    path: '/nivel-dois-fase-um',
    name: 'nivel-dois-fase-um',
    component: NivelDoisFaseUm
  },
  {
    path: '/nivel-dois-fase-dois',
    name: 'nivel-dois-fase-dois',
    component: NivelDoisFaseDois
  },
  {
    path: '/nivel-dois-fase-tres',
    name: 'nivel-dois-fase-tres',
    component: NivelDoisFaseTres
  },
  {
    path: '/nivel-dois-feedback',
    name: 'nivel-dois-feedback',
    component: NivelDoisFeedback
  },
  {
    path: '/nivel-tres-apresentacao',
    name: 'nivel-tres-apresentacao',
    component: NivelTresApresentacao
  },
  {
    path: '/nivel-tres-fase-um',
    name: 'nivel-tres-fase-um',
    component: NivelTresFaseUm
  },
  {
    path: '/nivel-tres-fase-dois',
    name: 'nivel-tres-fase-dois',
    component: NivelTresFaseDois
  },
  {
    path: '/nivel-tres-fase-tres',
    name: 'nivel-tres-fase-tres',
    component: NivelTresFaseTres
  },
  {
    path: '/nivel-tres-feedback',
    name: 'nivel-tres-feedback',
    component: NivelTresFeedback
  },
  {
    path: '/nivel-quatro-apresentacao',
    name: 'nivel-quatro-apresentacao',
    component: NivelQuatroApresentacao
  },
  {
    path: '/nivel-quatro-fase-um',
    name: 'nivel-quatro-fase-um',
    component: NivelQuatroFaseUm
  },
  {
    path: '/nivel-quatro-fase-dois',
    name: 'nivel-quatro-fase-dois',
    component: NivelQuatroFaseDois
  },
  {
    path: '/nivel-quatro-fase-tres',
    name: 'nivel-quatro-fase-tres',
    component: NivelQuatroFaseTres
  },
  {
    path: '/nivel-quatro-feedback',
    name: 'nivel-quatro-feedback',
    component: NivelQuatroFeedback
  },
  {
    path: '/nivel-cinco-apresentacao',
    name: 'nivel-cinco-apresentacao',
    component: NivelCincoApresentacao
  },
  {
    path: '/nivel-cinco-fase-um',
    name: 'nivel-cinco-fase-um',
    component: NivelCincoFaseUm
  },
  {
    path: '/nivel-cinco-fase-um-pt2',
    name: 'nivel-cinco-fase-um-pt2',
    component: NivelCincoFaseUmPt2
  },
  {
    path: '/nivel-cinco-fase-dois',
    name: 'nivel-cinco-fase-dois',
    component: NivelCincoFaseDois
  },
  {
    path: '/nivel-cinco-fase-tres',
    name: 'nivel-cinco-fase-tres',
    component: NivelCincoFaseTres
  },
  {
    path: '/nivel-cinco-feedback',
    name: 'nivel-cinco-feedback',
    component: NivelCincoFeedback
  },
  {
    path: '/nivel-seis-apresentacao',
    name: 'nivel-seis-apresentacao',
    component: NivelSeisApresentacao
  },
  {
    path: '/nivel-seis-fase-um',
    name: 'nivel-seis-fase-um',
    component: NivelSeisFaseUm
  },
  {
    path: '/nivel-seis-fase-dois',
    name: 'nivel-seis-fase-dois',
    component: NivelSeisFaseDois
  },
  {
    path: '/nivel-seis-fase-tres',
    name: 'nivel-seis-fase-tres',
    component: NivelSeisFaseTres
  },
  {
    path: '/nivel-seis-feedback',
    name: 'nivel-seis-feedback',
    component: NivelSeisFeedback
  },
  {
    path: '/nivel-sete-apresentacao',
    name: 'nivel-sete-apresentacao',
    component: NivelSeteApresentacao
  },
  {
    path: '/nivel-sete-fase-um',
    name: 'nivel-sete-fase-um',
    component: NivelSeteFaseUm
  },
  {
    path: '/nivel-sete-fase-dois',
    name: 'nivel-sete-fase-dois',
    component: NivelSeteFaseDois
  },
  {
    path: '/nivel-sete-fase-tres',
    name: 'nivel-sete-fase-tres',
    component: NivelSeteFaseTres
  },
  {
    path: '/nivel-sete-feedback',
    name: 'nivel-sete-feedback',
    component: NivelSeteFeedback
  },
  {
    path: '/nivel-oito-apresentacao',
    name: 'nivel-oito-apresentacao',
    component: NivelOitoApresentacao
  },
  {
    path: '/nivel-oito-fase-um',
    name: 'nivel-oito-fase-um',
    component: NivelOitoFaseUm
  },
  {
    path: '/nivel-oito-fase-dois',
    name: 'nivel-oito-fase-dois',
    component: NivelOitoFaseDois
  },
  {
    path: '/nivel-oito-fase-tres',
    name: 'nivel-oito-fase-tres',
    component: NivelOitoFaseTres
  },
  {
    path: '/nivel-oito-feedback',
    name: 'nivel-oito-feedback',
    component: NivelOitoFeedback
  },
  {
    path: '/final-um',
    name: 'final-um',
    component: FinalUm
  },
  {
    path: '/final-dois',
    name: 'final-dois',
    component: FinalDois
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Guardião de Rota Global
router.beforeEach((to, from, next) => {
  
  if (from.name === 'nivel-um-fase-dois' && to.name === 'nivel-um-fase-um') {
    next(false);
  } 
  
  else if (from.name === 'nivel-um-fase-tres' && to.name === 'nivel-um-fase-dois') {
    next(false);
  } 

  else if (from.name === 'nivel-um-feedback' && to.name === 'nivel-um-fase-tres') {
    next(false);
  } 

  else if (from.name === 'nivel-dois-fase-dois' && to.name === 'nivel-dois-fase-um') {
    next(false);
  } 

  else if (from.name === 'nivel-dois-fase-tres' && to.name === 'nivel-dois-fase-dois') {
    next(false);
  } 

  else if (from.name === 'nivel-dois-feedback' && to.name === 'nivel-dois-fase-tres') {
    next(false);
  } 

  else if (from.name === 'nivel-tres-fase-dois' && to.name === 'nivel-tres-fase-um') {
    next(false);
  } 

  else if (from.name === 'nivel-tres-fase-tres' && to.name === 'nivel-tres-fase-dois') {
    next(false);
  } 

  else if (from.name === 'nivel-tres-feedback' && to.name === 'nivel-tres-fase-tres') {
    next(false);
  } 

  else if (from.name === 'nivel-quatro-fase-dois' && to.name === 'nivel-quatro-fase-um') {
    next(false);
  } 

  else if (from.name === 'nivel-quatro-fase-tres' && to.name === 'nivel-quatro-fase-dois') {
    next(false);
  } 

  else if (from.name === 'nivel-quatro-feedback' && to.name === 'nivel-quatro-fase-tres') {
    next(false);
  } 

  else if (from.name === 'nivel-cinco-fase-dois' && to.name === 'nivel-cinco-fase-um') {
    next(false);
  } 

  else if (from.name === 'nivel-cinco-fase-tres' && to.name === 'nivel-cinco-fase-dois') {
    next(false);
  } 

  else if (from.name === 'nivel-cinco-feedback' && to.name === 'nivel-cinco-fase-tres') {
    next(false);
  } 

  else if (from.name === 'nivel-seis-fase-dois' && to.name === 'nivel-seis-fase-um') {
    next(false);
  } 

  else if (from.name === 'nivel-seis-fase-tres' && to.name === 'nivel-seis-fase-dois') {
    next(false);
  } 

  else if (from.name === 'nivel-seis-feedback' && to.name === 'nivel-seis-fase-tres') {
    next(false);
  }

  else if (from.name === 'nivel-sete-fase-dois' && to.name === 'nivel-sete-fase-um') {
    next(false);
  } 

  else if (from.name === 'nivel-sete-fase-tres' && to.name === 'nivel-sete-fase-dois') {
    next(false);
  } 

  else if (from.name === 'nivel-sete-feedback' && to.name === 'nivel-sete-fase-tres') {
    next(false);
  }
  
  else if (from.name === 'nivel-oito-fase-dois' && to.name === 'nivel-oito-fase-um') {
    next(false);
  } 

  else if (from.name === 'nivel-oito-fase-tres' && to.name === 'nivel-oito-fase-dois') {
    next(false);
  } 

  else if (from.name === 'nivel-oito-feedback' && to.name === 'nivel-oito-fase-tres') {
    next(false);
  } 
  
  else {
    next();
  }
});

export default router
