import { Module , ActionContext } from "vuex";

declare interface State {
  isLoading: Boolean
}

const global: Module<any, any> = {
  namespaced: true,
  state: {
    isLoading: false
  },
  getters: {},
  mutations: {
    setLoading(state: State, data: Boolean) {
      state.isLoading = data
    }
  },
  actions: {
    getLoading({ commit }: ActionContext<any, any>, params: Boolean) {
      commit("setLoading", params)
    }
  }
};

export default global;
