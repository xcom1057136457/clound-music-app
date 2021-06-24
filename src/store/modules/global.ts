import { Module, ActionContext } from 'vuex';

declare interface State {
  isLoading: boolean;
}

const global: Module<any, any> = {
  namespaced: true,
  state: {
    isLoading: false
  },
  getters: {},
  mutations: {
    setLoading(state: State, data: boolean) {
      state.isLoading = data;
    }
  },
  actions: {
    getLoading({ commit }: ActionContext<any, any>, params: boolean) {
      commit('setLoading', params);
    }
  }
};

export default global;
