import Cookies from 'js-cookie';

const TokenKey = 'cloud-music-token';

export function getToken(): unknown {
  return Cookies.get(TokenKey);
}

export function setToken(token: string): unknown {
  return Cookies.set(TokenKey, token);
}

export function removeToken(): unknown {
  return Cookies.remove(TokenKey);
}
