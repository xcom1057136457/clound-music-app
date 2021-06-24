import axios from 'axios';
import { Toast } from 'vant';
import store from '@/store/index';

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  withCredentials: true,
  timeout: 10000
});

instance.interceptors.request.use(
  config => {
    store.dispatch('global/getLoading', true);
    return config;
  },
  err => {
    Promise.reject(err);
  }
);

instance.interceptors.response.use(
  response => {
    store.dispatch('global/getLoading', false);
    const res = response.data;
    if (res.code !== 200) {
      Toast.fail(res.message || '网络开小差了!');
      return Promise.reject('error');
    }
    return res;
  },
  err => {
    Toast.fail(err || '网络开小差了!');
    Promise.reject(err);
  }
);

export default instance;
