import produce, { Draft } from 'immer';
import { LoadingState } from '../../types';
// eslint-disable-next-line import/no-cycle
import { UserActions } from './actionCreators';
// eslint-disable-next-line import/no-cycle
import { UserActionType } from './contracts/actionTypes';
import { UserState } from './contracts/state';

const initialUserState: UserState = {
  data: undefined,
  status: LoadingState.NEVER,
};

// eslint-disable-next-line import/prefer-default-export
export const userReducer = produce(
  (draft: Draft<UserState>, action: UserActions) => {
    switch (action.type) {
      case UserActionType.SET_USER_DATA:
        draft.data = action.payload;
        draft.status = LoadingState.SUCCESS;
        break;

      case UserActionType.SET_LOADING_STATE:
        draft.status = action.payload;
        break;

      default:
        break;
    }
  },
  initialUserState
);
