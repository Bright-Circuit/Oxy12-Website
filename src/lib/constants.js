// Response codes
export const RESPONSE_CODES = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
};

// API endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  LOGIN_COOKIE: '/auth/login/cookie',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh-token',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  VERIFY_EMAIL: '/auth/verify-email',
  CURRENT_USER: '/auth/me',

  // Admin
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_USERS: '/admin/users',
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_PRODUCTS: '/admin/products',
  ADMIN_SETTINGS: '/admin/settings',

  // Customer
  CUSTOMER_DASHBOARD: '/customer/dashboard',
  CUSTOMER_ORDERS: '/customer/orders',
  CUSTOMER_PROFILE: '/customer/profile',
  CUSTOMER_WISHLIST: '/customer/wishlist',

  // Reseller
  RESELLER_DASHBOARD: '/reseller/dashboard',
  RESELLER_INVENTORY: '/reseller/inventory',
  RESELLER_SALES: '/reseller/sales',

  // Products
  PRODUCTS: '/products',
  PRODUCT_DETAILS: '/products',
  PRODUCT_SEARCH: '/products/search',
  PRODUCT_SEARCH_PUBLIC: '/products/public/search',
  PRODUCT_CATEGORIES: '/products/categories/all',
  GET_ALL_PRODUCTS: '/products/filter',
  SHOP_PRODUCTS_FILTER: '/products/shop/filter',

  // Orders
  ORDERS: '/orders',
  ORDER_DETAILS: '/orders',
  ORDER_CHECKOUT: '/orders/checkout',

  // Cart
  CART: '/cart',
  CART_ITEMS: '/cart/items',
  CART_ADD_ITEM: '/cart/items',
  CART_UPDATE_ITEM: '/cart/items',
  CART_REMOVE_ITEM: '/cart/items',
  CART_MERGE: '/cart/merge',

  // Customer Addresses
  CUSTOMER_ADDRESSES: '/customers/addresses',
  ADD_CUSTOMER_ADDRESS: '/customers/addresses',
  SET_DEFAULT_ADDRESS: '/customers/addresses',
  DELETE_ADDRESS: '/customers/addresses',

  // Delivery
  DELIVERY_COURIERS: '/couriers',

  // Payment
  PAYMENT_METHODS: '/payment-methods',

  // Checkout
  CHECKOUT_PREPARE: '/checkout/prepare',
};

// WebSocket topics
export const WS_TOPICS = {
  ORDER_UPDATES: '/topic/orders',
  PRODUCT_UPDATES: '/topic/products',
  USER_NOTIFICATIONS: '/user/queue/notifications',
};

// Local storage keys
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  USER_ROLE: 'userRole',
  USER_DATA: 'userData',
  GUEST_SESSION_TOKEN: 'guest_session_token',
};

// Cookie names
export const COOKIE_NAMES = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  USER_ROLE: 'role',
};

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
};

// Date formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  DISPLAY_WITH_TIME: 'MMM dd, yyyy HH:mm',
  API: 'yyyy-MM-dd',
  API_WITH_TIME: "yyyy-MM-dd'T'HH:mm:ss",
};

// Order statuses
export const ORDER_STATUS = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED',
};

// Product status
export const PRODUCT_STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  OUT_OF_STOCK: 'OUT_OF_STOCK',
  DISCONTINUED: 'DISCONTINUED',
};
