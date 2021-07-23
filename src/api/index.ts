import request from '@/utils/request';
import { PhoneLogin } from '@/types/Login.Interface';
import {
  Banner,
  GetPlayListDetailParams,
  PageParams
} from '@/types/Api.interface';

enum Api {
  phoneLogin = '/login/cellphone',
  getUserStatus = '/login/status',
  getBanner = '/banner',
  getHomePageBall = '/homepage/dragon/ball',
  getHomeResource = '/recommend/resource',
  getHomeRecommondSongs = '/recommend/songs',
  getHomeMV = '/personalized/mv',
  getHomeProgram = '/program/recommend',
  getHomeDj = '/personalized/djprogram',
  getPersonalized = '/personalized',
  getNewSong = '/personalized/newsong',
  getTopList = '/toplist',
  getPlayListDetail = '/playlist/detail',
  getTopic = '/hot/topic'
}

// 手机号登录
export function phoneLogin(params: PhoneLogin): unknown {
  return request({
    url: Api.phoneLogin,
    method: 'GET',
    params
  });
}

// 获取用户状态
export function getUserStatus(): unknown {
  return request({
    url: Api.getUserStatus,
    method: 'GET'
  });
}

// 获取banner
export function getBanner(params: Banner): unknown {
  return request({
    url: Api.getBanner,
    method: 'GET',
    params
  });
}

// 首页-发现-圆形图标入口列表
export function getHomePageBall(): unknown {
  return request({
    url: Api.getHomePageBall,
    method: 'GET'
  });
}

// 获取每日推荐歌单
export function getHomeResource(): unknown {
  return request({
    url: Api.getHomeResource,
    method: 'GET'
  });
}

// 获取每日推荐歌曲
export function getHomeRecommondSongs(): unknown {
  return request({
    url: Api.getHomeRecommondSongs,
    method: 'GET'
  });
}

// 获取推荐MV
export function getHomeMV(): unknown {
  return request({
    url: Api.getHomeMV,
    method: 'GET'
  });
}

// 推荐节目
export function getHomeProgram(): unknown {
  return request({
    url: Api.getHomeProgram,
    method: 'GET'
  });
}

// 推荐电台
export function getHomeDj(): unknown {
  return request({
    url: Api.getHomeDj,
    method: 'GET'
  });
}

// 推荐歌单
export function getPersonalized(params: unknown): unknown {
  return request({
    url: Api.getPersonalized,
    method: 'get',
    params
  });
}

// 推荐新音乐
export function getNewSong(params: unknown): unknown {
  return request({
    url: Api.getNewSong,
    method: 'get',
    params
  });
}

// 获取所有榜单
export function getTopList(): unknown {
  return request({
    url: Api.getTopList,
    method: 'get'
  });
}

// 获取歌单详情
export function getPlayListDetail(params: GetPlayListDetailParams): any {
  return request({
    url: Api.getPlayListDetail,
    method: 'get',
    params
  });
}

// 获取话题
export function getTopic(params: PageParams) {
  return request({
    url: Api.getTopic,
    method: 'get',
    params
  });
}
