import request from '@/utils/request';
import { PhoneLogin } from '@/types/Login.Interface';
import { Banner, GetPlayListDetailParams, PageParams } from '@/types/Api.interface';

// 手机号登录
export function phoneLogin(params: PhoneLogin): unknown {
  return request({
    url: '/login/cellphone',
    method: 'GET',
    params
  });
}

// 获取用户状态
export function getUserStatus(): unknown {
  return request({
    url: '/login/status',
    method: 'GET'
  });
}

// 获取banner
export function getBanner(params: Banner): unknown {
  return request({
    url: '/banner',
    method: 'GET',
    params
  });
}

// 首页-发现-圆形图标入口列表
export function getHomePageBall(): unknown {
  return request({
    url: '/homepage/dragon/ball',
    method: 'GET'
  });
}

// 获取每日推荐歌单
export function getHomeResource(): unknown {
  return request({
    url: '/recommend/resource',
    method: 'GET'
  });
}

// 获取每日推荐歌曲
export function getHomeRecommondSongs(): unknown {
  return request({
    url: '/recommend/songs',
    method: 'GET'
  });
}

// 获取推荐MV
export function getHomeMV(): unknown {
  return request({
    url: '/personalized/mv',
    method: 'GET'
  });
}

// 推荐节目
export function getHomeProgram(): unknown {
  return request({
    url: '/program/recommend',
    method: 'GET'
  });
}

// 推荐电台
export function getHomeDj(): unknown {
  return request({
    url: '/personalized/djprogram',
    method: 'GET'
  });
}

// 推荐歌单
export function getPersonalized(params: unknown): unknown {
  return request({
    url: '/personalized',
    method: 'get',
    params
  });
}

// 推荐新音乐
export function getNewSong(params: unknown): unknown {
  return request({
    url: '/personalized/newsong',
    method: 'get',
    params
  });
}

// 获取所有榜单
export function getTopList(): unknown {
  return request({
    url: '/toplist',
    method: 'get'
  });
}

// 获取歌单详情
export function getPlayListDetail(params: GetPlayListDetailParams): any {
  return request({
    url: '/playlist/detail',
    method: 'get',
    params
  });
}

// 获取话题
export function getTopic(params: PageParams) {
  return request({
    url: '/hot/topic',
    method: 'get',
    params
  })
}
