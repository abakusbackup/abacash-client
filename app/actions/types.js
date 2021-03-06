// @flow

export type Action = {
  type: string;
  payload: Object;
  meta?: Object;
  error?: Error;
};

export type ActionWithoutPayload = {
  type: string;
};

export type PromisedAction = {
  type: string;
  payload: Promise<*>;
};

type DispatchCall = (action: Dispatch) => Dispatch;
export type Thunk = (dispatch: (dispatch: Dispatch) => any, getState: () => Object)
 => ?DispatchCall | Promise<*>;
export type Dispatch = Action | Thunk | PromisedAction | ActionWithoutPayload;

export const RFID = {
  SET_DEVICE: 'RFID/SET_DEVICE',
  LIST_DEVICES: 'RFID/LIST_DEVICES',
  LIST_DEVICES_SUCCESS: 'RFID/LIST_DEVICES_SUCCESS',
};

export const SYSTEM = {
  FETCH_SYSTEM: 'SYSTEM/FETCH_SYSTEM',
  FETCH_SYSTEM_SUCCESS: 'SYSTEM/FETCH_SYSTEM_SUCCESS',
  SET_SELLER: 'SELLER/SET_SELLER',
  FETCH_SELLER: 'SELLER/FETCH_SELLER',
  FETCH_SELLER_SUCCESS: 'SELLER/FETCH_SELLER_SUCCESS',
  CLEAR_SELLER: 'CART/CLEAR_SELLER'
};

export const TRANSACTION = {
  CREATE_TRANSACTION: 'TRANSACTION/CREATE_TRANSACTION',
  CREATE_TRANSACTION_SUCCESS: 'TRANSACTION/CREATE_TRANSACTION_SUCCESS',
  CREATE_TRANSACTION_PENDING: 'TRANSACTION/CREATE_TRANSACTION_PENDING',
  CREATE_TRANSACTION_FAILURE: 'TRANSACTION/CREATE_TRANSACTION_FAILURE'
};

export const CUSTOMER = {
  CREATE_CUSTOMER: 'CUSTOMER/CREATE_CUSTOMER',
  UPDATE_CUSTOMER: 'CUSTOMER/UPDATE_CUSTOMER',
  FETCH_CUSTOMER: 'CUSTOMER/FETCH_CUSTOMER',
  FETCH_CUSTOMER_SUCCESS: 'CUSTOMER/FETCH_CUSTOMER_SUCCESS',
  FETCH_CUSTOMER_FAILURE: 'CUSTOMER/FETCH_CUSTOMER_FAILURE',
  FETCH_CUSTOMER_PENDING: 'CUSTOMER/FETCH_CUSTOMER_PENDING',
  CLEAR_CUSTOMER: 'CUSTOMER/CLEAR_CUSTOMER'
};

export const PRODUCT = {
  FETCH_GROUPS: 'PRODUCT/FETCH_GROUPS',
  FETCH_GROUPS_SUCCESS: 'PRODUCT/FETCH_GROUPS_SUCCESS',
  FETCH_PRODUCTS: 'PRODUCT/FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS: 'PRODUCT/FETCH_PRODUCTS_SUCCESS'
};

export const NERD = {
  FETCH_NERD: 'NERD/FETCH_NERD',
  QUERY_NERD: 'NERD/QUERY_NERD',
  QUERY_NERD_SUCCESS: 'NERD/QUERY_NERD_SUCCESS'
};

export const NOTIFICATION = {
  ADD_NOTIFICATION: 'NOTIFICATION/ADD_NOTIFICATION',
  CLEAR_NOTIFICATIONS: 'NOTIFICATION/CLEAR_NOTIFICATIONS'
};

export const CART = {
  ADD_PRODUCT: 'CART/ADD_PRODUCT',
  REMOVE_PRODUCT: 'CART/REMOVE_PRODUCT',
  CLEAR_CART: 'CART/CLEAR_CART'
};

export const CONFIG = {
  LOAD_CONFIG: 'CONFIG/LOAD_CONFIG',
  LOAD_CONFIG_SUCCESS: 'CONFIG/LOAD_CONFIG_SUCCESS',
  LOAD_CONFIG_FAILURE: 'CONFIG/LOAD_CONFIG_FAILURE',
  LOAD_CONFIG_PENDING: 'CONFIG/LOAD_CONFIG_PENDING',
};
