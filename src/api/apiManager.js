import axios from 'axios';
import { RESPONSE_CODES, API_ENDPOINTS, COOKIE_NAMES } from '../lib/constants';
import { getCookie, setCookie, clearAuthCookies } from '../lib/cookies';
import { useStore } from '../store/useStore';

// Create axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8080/api/v1',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Enable sending cookies with requests
});

/**
 * Get tokens from cookies or store
 */
const getTokens = () => {
  // Try to get from cookies first (client-side)
  const accessToken = getCookie(COOKIE_NAMES.ACCESS_TOKEN);
  const refreshToken = getCookie(COOKIE_NAMES.REFRESH_TOKEN);

  // Fallback to Zustand store
  const storeState = useStore.getState();
  
  return {
    accessToken: accessToken || storeState.accessToken,
    refreshToken: refreshToken || storeState.refreshToken,
  };
};

/**
 * Logout helper
 */
const logout = () => {
  clearAuthCookies();
  
  // Clear Zustand store
  const { clearAuth } = useStore.getState();
  clearAuth();

  // Redirect to login
  if (typeof window !== 'undefined') {
    window.location.href = process.env.NEXT_PUBLIC_LOGIN_URL;
  }
};

/**
 * Request interceptor - attach token and customer UUID
 */
axiosInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = getTokens();
    
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    
    // Add X-Customer-UUID header if user is authenticated
    const storeState = useStore.getState();
    if (storeState.user && storeState.user.uuid) {
      config.headers['X-Customer-UUID'] = storeState.user.uuid;
    }
    
    config.headers.Accept = 'application/json';
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor - handle errors and token refresh
 */
axiosInstance.interceptors.response.use(
  (response) => {
    // Check for application-level errors
    if (response.data?.responseCode === RESPONSE_CODES.ERROR) {
      const error = new Error(response.data.message || 'An error occurred');
      error.responseCode = response.data.responseCode;
      error.data = response.data;
      throw error;
    }
    
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 - Unauthorized (token expired)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { refreshToken } = getTokens();
        
        if (!refreshToken) {
          logout();
          return Promise.reject(error);
        }

        // Request new access token
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8080'}${API_ENDPOINTS.REFRESH_TOKEN}`,
          { refreshToken },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.data?.success) {
          const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
            response.data.data;

          // Update tokens in cookies
          setCookie(COOKIE_NAMES.ACCESS_TOKEN, newAccessToken, 7);
          if (newRefreshToken) {
            setCookie(COOKIE_NAMES.REFRESH_TOKEN, newRefreshToken, 30);
          }

          // Update tokens in Zustand store
          const { setTokens } = useStore.getState();
          setTokens(newAccessToken, newRefreshToken);

          // Retry original request with new token
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } else {
          logout();
          return Promise.reject(error);
        }
      } catch (refreshError) {
        logout();
        return Promise.reject(refreshError);
      }
    }

    // Handle application-level errors in error response
    if (error.response?.data?.responseCode === RESPONSE_CODES.ERROR) {
      const customError = new Error(
        error.response.data.message || 'An error occurred'
      );
      customError.responseCode = error.response.data.responseCode;
      customError.data = error.response.data;
      return Promise.reject(customError);
    }

    return Promise.reject(error);
  }
);

/**
 * API helper methods
 */

export const apiGet = (url, config = {}) => {
  return axiosInstance.get(url, config);
};

export const apiPost = (url, data = {}, config = {}) => {
  return axiosInstance.post(url, data, config);
};

export const apiPut = (url, data = {}, config = {}) => {
  return axiosInstance.put(url, data, config);
};

export const apiPatch = (url, data = {}, config = {}) => {
  return axiosInstance.patch(url, data, config);
};

export const apiDelete = (url, config = {}) => {
  return axiosInstance.delete(url, config);
};

export const apiPostFormData = (url, formData, config = {}) => {
  const { accessToken } = getTokens();
  
  const formDataInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8080',
    timeout: 60000,
    headers: {
      'Content-Type': 'multipart/form-data',
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });

  return formDataInstance.post(url, formData, config);
};

export default axiosInstance;
