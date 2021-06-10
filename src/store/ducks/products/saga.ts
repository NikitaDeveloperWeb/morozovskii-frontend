import * as Eff from 'redux-saga/effects'; // <-- new
import { ProductsAPI } from '../../../services/productApi';

import { LoadingState } from '../../types';
import { ProductActionType, setProduct, setProductLoadingState } from './actionCreators';

const call: any = Eff.call;
const put: any = Eff.put;
const takeLatest = Eff.takeLatest;

export function* fetchProductRequest(): any {
  try {
    const data = yield call(ProductsAPI.fetchProduct);
    yield put(setProduct(data));
  } catch (error) {
    yield put(setProductLoadingState(LoadingState.ERROR));
  }
}

export function* ProductsSaga() {
  yield takeLatest(ProductActionType.FETCH_Product, fetchProductRequest);
}
