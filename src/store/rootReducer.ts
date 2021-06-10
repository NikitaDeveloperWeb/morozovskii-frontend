import { combineReducers } from 'redux';
import { FeedbacksReducer } from './ducks/feedbacks/reducer';
import { ProductsReducer } from './ducks/products/reducer';

// eslint-disable-next-line import/no-cycle
import { userReducer } from './ducks/user/reducer';
import { UsersReducer } from './ducks/users/reducer';
import { VacancysReducer } from './ducks/vacancy/reducer';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  user: userReducer,
  users: UsersReducer,
  products: ProductsReducer,
  vacancy: VacancysReducer,
  feedbacks: FeedbacksReducer,
});
