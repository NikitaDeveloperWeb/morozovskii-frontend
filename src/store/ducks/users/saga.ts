import * as Eff from 'redux-saga/effects'; // <-- new
import { usersAPI } from '../../../services/API/usersApi';
import { LoadingState } from '../../types';
import { UserActionType, setUser, setUserLoadingState } from './actionCreators';

const call: any = Eff.call;
const put: any = Eff.put;
const takeLatest = Eff.takeLatest;

export function* fetchUserRequest(): any {
  try {
    const data = yield call(usersAPI.fetchUser);
    yield put(setUser(data));
  } catch (error) {
    yield put(setUserLoadingState(LoadingState.ERROR));
  }
}

export function* UsersSaga() {
  yield takeLatest(UserActionType.FETCH_User, fetchUserRequest);
}
