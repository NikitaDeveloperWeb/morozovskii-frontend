import * as Eff from 'redux-saga/effects'; // <-- new
import { FeedbacksAPI } from '../../../services/API/feedbackApi';

import { LoadingState } from '../../types';
import { FeedbackActionType, setFeedback, setFeedbackLoadingState } from './actionCreators';

const call: any = Eff.call;
const put: any = Eff.put;
const takeLatest = Eff.takeLatest;

export function* fetchFeedbackRequest(): any {
  try {
    const data = yield call(FeedbacksAPI.fetchFeedback);
    yield put(setFeedback(data));
  } catch (error) {
    yield put(setFeedbackLoadingState(LoadingState.ERROR));
  }
}

export function* FeedbacksSaga() {
  yield takeLatest(FeedbackActionType.FETCH_Feedback, fetchFeedbackRequest);
}
