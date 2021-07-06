import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css/normalize.css';
import './permission';
import './styles/index.scss';
import * as vant from './plugins/vant';
import 'vant/lib/index.css';
import mitt from 'mitt';

const app = createApp(App);

const $bus = mitt();
app.config.globalProperties.$bus = $bus;

Object.keys(vant.default).forEach((key: string) => {
  app.use(vant.default[key]);
});

app.use(store).use(router).mount('#app');
