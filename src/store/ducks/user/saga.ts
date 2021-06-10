/* eslint-disable import/no-cycle */
import * as Eff from 'redux-saga/effects'; // <-- new
import { AuthApi } from '../../../services/API/authAPI';

// eslint-disable-next-line import/no-cycle

import { LoadingState } from '../../types';
import { setUserData, setUserLoadingStatus } from './actionCreators';
import { FetchSignInActionInterface, UserActionType } from './contracts/actionTypes';

const call: any = Eff.call;
const put: any = Eff.put;
const takeLatest = Eff.takeLatest;

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface) {
  try {
    const { data } = yield call(AuthApi.signIn, payload);
    yield Eff.put(setUserData(data));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingState.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionType.FETCH_SIGN_IN, fetchSignInRequest);
}
