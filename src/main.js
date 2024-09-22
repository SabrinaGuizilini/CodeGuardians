import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ClicaFora from './directives/v-clica-fora';

const app = createApp(App);

app.directive('clica-fora', ClicaFora);

app.use(router).mount('#app');


