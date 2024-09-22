<template>
  <div class="container-background">
    <div class="container_treinamento">
      <h1 class="titulo_treinamento">Treinamento especial</h1>
      <p class="texto_treinamento">
        Seja bem-vindo(a) ao treinamento especial de testes de software da
        academia CodeGuardians!
      </p>
      <p class="texto_treinamento">
        Aqui você aprenderá conceitos e técnicas fundamentais para a sua
        jornada, como:
      </p>
      <ul class="lista_principal">
        <li>Casos de teste</li>
        <li>Técnica funcional de testes</li>
        <li>Critérios da técnica funcional</li>
        <ul class="lista_secundaria">
          <li>Particionamento de Equivalência</li>
          <li>Análise do Valor Limite</li>
          <li>Tabela de Decisão</li>
        </ul>
        <li>Níveis de teste</li>
      </ul>
      <router-link to="/testes" class="avancar-botao-treinamento">
        <span>Vamos lá!</span>
        <img src="@/assets/img/seta-vamos-la.svg" alt="seta direita" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BemVindo",
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

.container_treinamento {
  background: rgba(0, 0, 0, 0.6);
  padding: 1.25rem 2.5rem;
  animation: fadeIn 2s;
  width: 100vw;
  height: 100vh;
}

.titulo_treinamento {
  margin-bottom: 2.18rem;
  animation: slideInY 1.5s;
  font-family: "Orbitron", monospace;
  color: #c6d7eb;
  font-size: 2.938rem;
  font-weight: 400;
  letter-spacing: 0.144rem;
  text-align: center;
}

.texto_treinamento {
  margin-bottom: 0.25rem;
  animation: slideInY 2s forwards;
  animation-delay: 0.6s;
  opacity: 0;
  font-family: "Bai Jamjuree", sans-serif;
  padding-left: 7%;
  padding-right: 7%;
  font-weight: 400;
  font-size: 1.375rem;
  line-height: 2.25rem;
  color: #e8edf5;
  text-align: center;
}

ul {
  list-style-type: none;
  animation: fadeIn 2.5s;
  font-family: "Bai Jamjuree", sans-serif;
  font-size: 1.375rem;
}

.lista_principal {
  margin-top: 1.75rem;
  margin-left: 35%;
}

.lista_secundaria {
  margin-left: 10%;
}

li {
  margin-top: 0.875rem;
  animation: slideInX 0.5s forwards;
  opacity: 0;
  color: #e8edf5;
}

li::before {
  content: "";
  display: inline-block;
  width: 1.188rem;
  height: 1.188rem;
  background: url("/src/assets/img/seta-dupla.png") no-repeat center center;
  background-size: contain;
  margin-right: 0.625rem;
  margin-bottom: -0.281rem;
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
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideInX {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.lista_principal li:nth-child(1) {
  animation-delay: 1.3s;
}
.lista_principal li:nth-child(2) {
  animation-delay: 1.7s;
}
.lista_principal li:nth-child(3) {
  animation-delay: 2.1s;
}
.lista_secundaria li:nth-child(1) {
  animation-delay: 2.4s;
}
.lista_secundaria li:nth-child(2) {
  animation-delay: 2.8s;
}
.lista_secundaria li:nth-child(3) {
  animation-delay: 3.2s;
}
.lista_principal li:nth-child(5) {
  animation-delay: 3.6s;
}

.avancar-botao-treinamento {
  position: absolute;
  bottom: 6%;
  right: 4%;
  display: inline-flex;
  background-color: #bdcce4;
  padding: 0.875rem 2.75rem;
  border-radius: 5px;
  gap: 15px;
  text-decoration: none;
  transition: box-shadow 0.3s;
  align-items: center;
  animation: slideInX 0.5s forwards;
  opacity: 0;
  animation-delay: 4s;
}

.avancar-botao-treinamento:hover {
  box-shadow: 0 0 5px 2px rgba(238, 239, 242, 0.5);
}

.avancar-botao-treinamento img {
  width: 1.375rem;
  margin-top: 0.125rem;
  transition: transform 0.8s ease;
}

.avancar-botao-treinamento:hover img {
  animation-delay: 0.2s;
  animation: moveArrow 0.7s forwards;
}

.avancar-botao-treinamento span {
  color: #091829;
  font-family: "Chakra Petch", sans-serif;
  font-size: 1.313rem;
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
</style>
