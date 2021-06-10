import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { ProductsState } from './contracts/state';

export const selectProducts = (state: RootState): ProductsState => state.products;

export const selectLoadingState = (state: RootState) => selectProducts(state).loadingState;

export const SelectProductItems = createSelector(selectProducts, (products) => products.data);
