import { Module, ActionContext } from 'vuex';
import { UserInfoDetail } from '@/types/Login.Interface';

declare interface State {
  userInfo: unknown;
}

const user: Module<any, any> = {
  namespaced: true,
  state: {
    userInfo: {}
  },
  getters: {},
  mutations: {
    setUserInfo(state: State, data) {
      state.userInfo = data;
    }
  },
  actions: {
    getUserInfo({ commit }: ActionContext<any, any>, params: UserInfoDetail) {
      commit('setUserInfo', params);
    }
  }
};

export default user;
