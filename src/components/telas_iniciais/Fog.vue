<template>
  <div class="fog-container">
    <div class="fog-img fog-img-first"></div>
    <div class="fog-img fog-img-second"></div>
  </div>
</template>

<script>
export default {
  name: 'Fog',
}
</script>

<style scoped>
.fog-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 50;
}

.fog-img {
  position: absolute;
  height: 100vh;
  width: 300vw;
  z-index: 60;
}

.fog-img-first {
  background: url("/src/assets/img/fog-1.png");
  background-repeat: repeat-x;
  background-size: contain;
  background-position: center;
  animation: marquee 60s linear infinite;
}

.fog-img-second {
  background: url("/src/assets/img/fog-2.png");
  background-repeat: repeat-x;
  background-size: contain;
  background-position: center;
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-200vw, 0, 0);
  }
}
</style>

