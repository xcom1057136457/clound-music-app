import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'normalize.css/normalize.css';
import "./permission"
import "./styles/index.scss"
import * as vant from "./plugins/vant"
import 'vant/lib/index.css';

const app = createApp(App);

Object.keys(vant.default).forEach((key: any) => {
  app.use(vant.default[key])
})

app.use(store).use(router).mount("#app");
