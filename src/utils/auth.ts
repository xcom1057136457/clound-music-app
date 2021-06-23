import Cookies from 'js-cookie'

const TokenKey = 'cloud-music-token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: String) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
