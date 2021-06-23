import request from "@/utils/request"
import { PhoneLogin } from "@/types/Login.Interface"
import { Banner } from "@/types/Api.interface"

// 手机号登录
export function phoneLogin(params: PhoneLogin) {
  return request({
    url: '/login/cellphone',
    method: 'GET',
    params
  })
}

// 获取用户状态
export function getUserStatus() {
  return request({
    url: '/login/status',
    method: 'GET'
  })
}

// 获取banner
export function getBanner(params: Banner) {
  return request({
    url: '/banner',
    method: 'GET',
    params
  }) 
}

// 首页-发现-圆形图标入口列表
export function getHomePageBall() {
  return request({
    url: '/homepage/dragon/ball',
    method: 'GET'
  })
}

// 获取每日推荐歌单
export function getHomeResource() {
  return request({
    url: '/recommend/resource',
    method: 'GET'
  })
}

// 获取每日推荐歌曲
export function getHomeRecommondSongs() {
  return request({
    url: '/recommend/songs',
    method: "GET"
  })
}

// 获取推荐MV
export function getHomeMV() {
  return request({
    url: '/personalized/mv',
    method: 'GET'
  })
}

// 推荐节目
export function getHomeProgram() {
  return request({
    url: '/program/recommend',
    method: 'GET'
  })
}

// 推荐电台
export function getHomeDj() {
  return request({
    url: '/personalized/djprogram',
    method: 'GET'
  })
}