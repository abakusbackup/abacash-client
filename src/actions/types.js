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


export const AUTH = {
  LOGIN: 'AUTH/LOGIN',
  LOGOUT: 'AUTH/LOGOUT'
};

export const RFID = {
  SET_DEVICE: 'RFID/SET_DEVICE',
};

export const SYSTEM = {
  FETCH_SYSTEM: 'SYSTEM/FETCH_SYSTEM',
  FETCH_SYSTEM_SUCCESS: 'SYSTEM/FETCH_SYSTEM_SUCCESS'
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
  CLEAR_CUSTOMER: 'CUSTOMER/CLEAR_CUSTOMER'
};

export const PRODUCT = {
  FETCH_PRODUCTS: 'PRODUCT/FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS: 'PRODUCT/FETCH_PRODUCTS_SUCCESS'
};

export const NERD = {
  FETCH_NERD: 'NERD/FETCH_NERD',
  QUERY_NERD: 'NERD/QUERY_NERD',
  QUERY_NERD_SUCCESS: 'NERD/QUERY_NERD_SUCCESS'
};

export const NOTIFICATION = {
  ADD_NOTIFICATION: 'NOTIFICATION/ADD_NOTIFICATION'
};

export const CART = {
  ADD_PRODUCT: 'CART/ADD_PRODUCT',
  REMOVE_PRODUCT: 'CART/REMOVE_PRODUCT',
  CLEAR_CART: 'CART/CLEAR_CART'
};
