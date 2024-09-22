<template>
    <div class="background">
      <div class="content">
        <h1>Missão {{missao}} - Fase {{fase}}</h1>
        <div class="player-informations">
          <div class="progress-bar__container">
            <span>Seu progresso</span>
            <div class="progress-bar">
              <div
                v-for="(level, index) in totalLevels"
                :key="index"
                :class="[{ filled: index <= currentLevel }, { border_radius_zero: index < currentLevel }]"
             ></div>
            </div>
          </div>
          <div>
            <span>Sua pontuação</span>
            <span class="destaque"><b>{{pontuacao}}</b></span>
          </div>
          <div>
            <span>Dicas restantes</span>
            <span class="destaque"><b>{{dicas}}</b></span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { store } from '@/store';

export default {
  name: 'BarraSuperior',
  data() {
    return {
      pontuacao: store.pontuacaoJogador.pontuacao
    }
  },
  computed: {
    dicas() {
      return store.dicas.dicas;
    },
  },
  props: {
    currentLevel: {
      type: Number,
      required: true
    },
    totalLevels: {
      type: Number,
      default: 8
    },
    missao: String,
    fase: String
  },
}
</script>

<style scoped>
  .background{
    width: 100%;
    height: 12%;
    background-color: rgba(22, 52, 96, 0.797);
    padding: 12px 16px 12px 16px;
  }

  .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Iceland', sans-serif;
    color: #e0e6f2;
    font-weight: 400;
  }

  .content h1{
    font-size: 28px;
    color: #e2e6ef;
    letter-spacing: 1px;
  }

  .player-informations span{
    font-size: 16px;
  }

  .player-informations .destaque{
    font-size: 22px;
  }

  .player-informations{
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 18px;
  }

  .player-informations > div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .progress-bar {
    width: 150px;
    height: 18px;
    background-color: #e1e3ee;
    border-radius: 4px;
    display: flex;
    overflow: hidden;
    margin-top: 3px;
  }

  .progress-bar div {
    flex: 1;
    height: 100%;
    background-color: #e1e3ee;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius:0;
    border-top-left-radius:0;
  }

  .progress-bar .filled {
    background-color: #232D50;
  }

  .progress-bar .border_radius_zero{
    border-radius: 0;
  }
</style>