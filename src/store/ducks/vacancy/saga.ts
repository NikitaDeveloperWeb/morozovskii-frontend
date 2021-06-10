import * as Eff from 'redux-saga/effects'; // <-- new
import { VacancysAPI } from '../../../services/API/vacancyApi';

import { LoadingState } from '../../types';
import { VacancyActionType, setVacancy, setVacancyLoadingState } from './actionCreators';

const call: any = Eff.call;
const put: any = Eff.put;
const takeLatest = Eff.takeLatest;

export function* fetchVacancyRequest(): any {
  try {
    const data = yield call(VacancysAPI.fetchVacancy);
    yield put(setVacancy(data));
  } catch (error) {
    yield put(setVacancyLoadingState(LoadingState.ERROR));
  }
}

export function* VacancysSaga() {
  yield takeLatest(VacancyActionType.FETCH_Vacancy, fetchVacancyRequest);
}
