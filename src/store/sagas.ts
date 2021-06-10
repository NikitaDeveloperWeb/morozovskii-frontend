import { all } from 'redux-saga/effects';
import { FeedbacksSaga } from './ducks/feedbacks/saga';
import { ProductsSaga } from './ducks/products/saga';
// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line import/no-cycle
import { userSaga } from './ducks/user/saga';
import { UsersSaga } from './ducks/users/saga';
import { VacancysSaga } from './ducks/vacancy/saga';

export default function* rootSaga() {
  yield all([userSaga(), UsersSaga(), ProductsSaga(), VacancysSaga(), FeedbacksSaga()]);
}
