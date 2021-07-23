import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const modulesFiles = require.context('./modules', true, /\.ts$/);

const modules = modulesFiles.keys().reduce((modules: any, modulePath: any) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
});
