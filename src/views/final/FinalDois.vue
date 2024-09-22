<template>

<div class="container-background">

<div v-if="ganhou" class="firework" id="firework1">
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
</div>
<div v-if="ganhou" class="firework" id="firework2">
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
</div>
<div v-if="ganhou" class="firework" id="firework3">
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
</div>
<div v-if="ganhou" class="firework" id="firework4">
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
</div>
<div v-if="ganhou" class="firework" id="firework5">
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
</div>
<div v-if="ganhou" class="firework" id="firework6">
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
</div>
<div v-if="ganhou" class="firework" id="firework7">
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
</div>
<div v-if="ganhou" class="firework" id="firework8">
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
</div>
<div v-if="ganhou" class="firework" id="firework9">
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
	<div class="explosion"></div>
</div>

  <Fog />
  <FalaFinal />

</div>
</template> 

<script>
import Fog from '@/components/telas_iniciais/Fog.vue'
import FalaFinal from '@/components/telas_iniciais/FalaFinal.vue';
import { store } from '@/store';

export default {
  name: 'FinalDois',
  components: {
    Fog,
    FalaFinal
  },
  data() {
			const ganhou = store.pontuacaoJogador.pontuacao >= 550 ? true : false;

      return {
        ganhou,
      }
    },
}
</script>

<style scoped>

.container-background{
  background-image: url('/src/assets/img/background-melhorado.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  background-position: 20% 30%;
  position: relative;
}

.container-background::before {
  content: '';
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.12); 
  z-index: 1;
}

.firework {
	position: absolute;
  z-index: 100;
}
.explosion {
	position: absolute;
	left: -2px;
	bottom: 0;
	width: 4px;
	height: 80px;
	transform-origin: 50% 100%;
	overflow: hidden;
  z-index: 100;
}
.explosion:nth-child(1) {
	transform: rotate(0deg) translateY(-15px);
}
.explosion:nth-child(2) {
	transform: rotate(30deg) translateY(-15px);
}
.explosion:nth-child(3) {
	transform: rotate(60deg) translateY(-15px);
}
.explosion:nth-child(4) {
	transform: rotate(90deg) translateY(-15px);
}
.explosion:nth-child(5) {
	transform: rotate(120deg) translateY(-15px);
}
.explosion:nth-child(6) {
	transform: rotate(150deg) translateY(-15px);
}
.explosion:nth-child(7) {
	transform: rotate(180deg) translateY(-15px);
}
.explosion:nth-child(8) {
	transform: rotate(210deg) translateY(-15px);
}
.explosion:nth-child(9) {
	transform: rotate(240deg) translateY(-15px);
}
.explosion:nth-child(10) {
	transform: rotate(270deg) translateY(-15px);
}
.explosion:nth-child(11) {
	transform: rotate(300deg) translateY(-15px);
}
.explosion:nth-child(12) {
	transform: rotate(330deg) translateY(-15px);
}

.explosion::before {
	content: '';
	position: absolute;
	left: 0;
	right: 0;
	top: 100%;
	height: 40px;
	background-color: #e6c043;
   z-index: 100;
}
@keyframes explosion {
	0% {
		top: 100%;
	}
	33%, 100% {
		top: -50%;
	}
}

#firework1 {
	left: 50%;
	top: 50%;
	transform: scale(1);
}
#firework1 .explosion::before {
	animation: explosion 2s ease-in-out infinite;
}

#firework2 {
	left: 40%;
	top: 45%;
	transform: scale(.7);
}
#firework2 .explosion::before {
	animation: explosion 2s .6s ease-in-out infinite;
}

#firework3 {
	left: 60%;
	top: 65%;
	transform: scale(.4);
}
#firework3 .explosion::before {
	animation: explosion 2s .4s ease-in-out infinite;
}

#firework4 {
	left: 60%;
	top: 30%;
	transform: scale(1);
}
#firework4 .explosion::before {
	animation: explosion 2s ease-in-out infinite;
}

#firework5 {
	left: 70%;
	top: 35%;
	transform: scale(.7);
}
#firework5 .explosion::before {
	animation: explosion 2s .6s ease-in-out infinite;
}

#firework6 {
	left: 80%;
	top: 40%;
	transform: scale(.4);
}
#firework6 .explosion::before {
	animation: explosion 2s .4s ease-in-out infinite;
}

#firework7 {
	left: 10%;
	top: 15%;
	transform: scale(1);
}
#firework7 .explosion::before {
	animation: explosion 2s ease-in-out infinite;
}

#firework8 {
	left: 15%;
	top: 20%;
	transform: scale(.7);
}
#firework8 .explosion::before {
	animation: explosion 2s .6s ease-in-out infinite;
}

#firework9 {
	left: 23%;
	top: 25%;
	transform: scale(.4);
}
#firework9 .explosion::before {
	animation: explosion 2s .4s ease-in-out infinite;
}
</style>