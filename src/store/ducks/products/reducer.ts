import produce, { Draft } from 'immer';
import { LoadingState } from '../../types';
import { ProductActions, ProductActionType } from './actionCreators';
import { ProductsState } from './contracts/state';

const initialProductState: ProductsState = {
  data: [],
  loadingState: LoadingState.NEVER,
};

// eslint-disable-next-line import/prefer-default-export
export const ProductsReducer = produce((draft: Draft<ProductsState>, action: ProductActions) => {
  switch (action.type) {
    case ProductActionType.SET_ProductS:
      draft.data = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case ProductActionType.FETCH_Product:
      draft.data = [];
      draft.loadingState = LoadingState.LOADING;
      break;

    case ProductActionType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;
    default:
      break;
  }
}, initialProductState);
