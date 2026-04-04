import { COOKIE_NAMES } from './constants';

/**
 * Set a cookie
 */
export function setCookie(name, value, days = 7) {
  if (typeof window === 'undefined') return;

  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
}

/**
 * Get a cookie value
 */
export function getCookie(name) {
  if (typeof window === 'undefined') return null;

  const nameEQ = name + '=';
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  
  return null;
}

/**
 * Delete a cookie
 */
export function deleteCookie(name) {
  if (typeof window === 'undefined') return;
  
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

/**
 * Clear all auth cookies
 */
export function clearAuthCookies() {
  deleteCookie(COOKIE_NAMES.ACCESS_TOKEN);
  deleteCookie(COOKIE_NAMES.REFRESH_TOKEN);
  deleteCookie(COOKIE_NAMES.USER_ROLE);
}

/**
 * Set auth cookies
 */
export function setAuthCookies(accessToken, refreshToken, role) {
  setCookie(COOKIE_NAMES.ACCESS_TOKEN, accessToken, 7);
  setCookie(COOKIE_NAMES.REFRESH_TOKEN, refreshToken, 30);
  if (role) {
    setCookie(COOKIE_NAMES.USER_ROLE, role, 30);
  }
}

/**
 * Get auth tokens from cookies
 */
export function getAuthTokens() {
  return {
    accessToken: getCookie(COOKIE_NAMES.ACCESS_TOKEN),
    refreshToken: getCookie(COOKIE_NAMES.REFRESH_TOKEN),
    role: getCookie(COOKIE_NAMES.USER_ROLE),
  };
}
