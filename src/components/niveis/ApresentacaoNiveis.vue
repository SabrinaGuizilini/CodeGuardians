<template>
  <div class="container-background">
    <div class="container_conteudo">
      <h1>Missão {{missao}}</h1>
      <h2>{{nome_missao}}</h2>
      <p>{{modulo}} <span class="colorido">•</span>  {{nivel_teste}} <span class="colorido">•</span>  {{criterio}}</p>

       <router-link :to="link_prox" class="avancar-botao-treinamento">
        <span>Iniciar</span>
        <img src="@/assets/img/seta3.svg" alt="seta direita" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApresentacaoNiveis",
  props: {
    missao: String,
    nome_missao: String,
    modulo: String,
    nivel_teste: String,
    criterio: String,
    link_prox: String,
  }
};
</script>

<style scoped>

.container-background {
  background-image: url("/src/assets/img/background-melhorado.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  background-position: 20% 30%;
}

.container_conteudo {
  background: rgba(0, 0, 0, 0.6);
  animation: fadeIn 2s;
  width: 100vw;
  height: 100vh;
}

h1, p, h2{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

h1{
  font-family: "Orbitron", sans-serif;
  color: #b7c8d8;
  font-size: 48px;
  padding-top: 8%;
  letter-spacing: 1px;
  text-shadow: 0 0 7px rgb(102, 123, 164), 0 0 7px rgb(45, 52, 102), 0 0 7px rgba(164, 164, 194, 0.808);
  animation: slideInY 1.6s;
}

h2{
  font-family: "Orbitron", sans-serif;
  color: #b7c8d8;
  font-size: 40px;
  padding-top: 50px;
  text-shadow: 0 0 4px rgb(129, 139, 177);
  letter-spacing: 1px;
  animation: slideInY 1.6s;
  animation-delay: 0.8s;
  animation-fill-mode: both;
  padding-left: 10px;
  padding-right: 10px;
}

p{
  color: #b1bfcf;
  padding-top: 50px;
  font-family: "Chakra Petch", sans-serif;
  font-size: 19px;
  font-weight: 500;
  animation: slideInY 1.6s;
  animation-delay: 1.5s;
  animation-fill-mode: both;
}

.colorido{
  color: #8ea5c1;
  margin-left: 3px;
  margin-right: 3px;
  text-shadow: 0 0 4px rgb(61, 68, 114);
  font-size: 22px;
}

.avancar-botao-treinamento {
  position: absolute;
  bottom: 6%;
  right: 4%;
  display: inline-flex;
  background-color: #152b51;
  padding: 0.875rem 2.75rem;
  border-radius: 5px;
  gap: 15px;
  text-decoration: none;
  align-items: center;
  animation: slideInX 0.8s forwards;
  animation-delay: 2.2s;
  opacity: 0;
  transition: 0.3s;
}

.avancar-botao-treinamento:hover {
  background-color: #132950;
}

.avancar-botao-treinamento img {
  width: 1.39rem;
  margin-top: 0.125rem;
  transition: transform 0.8s ease;
}

.avancar-botao-treinamento:hover img {
  animation-delay: 0.2s;
  animation: moveArrow 0.7s forwards;
}

.avancar-botao-treinamento span {
  color: #b6c7da;
  font-family: "Chakra Petch", sans-serif;
  font-size: 1.313rem;
  letter-spacing: 0.2px;
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideInY {
  from {
    transform: translateY(-25px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideInX {
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
