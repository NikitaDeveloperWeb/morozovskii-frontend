import { Action } from 'redux';
import { LoadingState } from '../../types';
import { ProductsState } from './contracts/state';

export enum ProductActionType {
  SET_ProductS = 'Products/SET_ProductS',
  FETCH_Product = 'Products/FETCH_Product',
  SET_LOADING_STATE = 'Products/SET_LOADING_STATE',
}

export interface SetProductActionInterface extends Action<ProductActionType> {
  type: ProductActionType.SET_ProductS;
  payload: ProductsState['data'];
}

export interface FetchProductActionInterface extends Action<ProductActionType> {
  type: ProductActionType.FETCH_Product;
}
export interface SetProductLoadinStateActionInterface extends Action<ProductActionType> {
  type: ProductActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setProduct = (payload: ProductsState['data']): SetProductActionInterface => ({
  type: ProductActionType.SET_ProductS,
  payload,
});

export const setProductLoadingState = (
  payload: LoadingState,
): SetProductLoadinStateActionInterface => ({
  type: ProductActionType.SET_LOADING_STATE,
  payload,
});

export const fetchProducts = (): FetchProductActionInterface => ({
  type: ProductActionType.FETCH_Product,
});

export type ProductActions =
  | SetProductActionInterface
  | FetchProductActionInterface
  | SetProductLoadinStateActionInterface;
