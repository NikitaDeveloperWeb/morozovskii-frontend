import produce, { Draft } from 'immer';
import { LoadingState } from '../../types';
import { FeedbackActions, FeedbackActionType } from './actionCreators';
import { FeedbacksState } from './contracts/state';

const initialFeedbackState: FeedbacksState = {
  data: [],
  loadingState: LoadingState.NEVER,
};

// eslint-disable-next-line import/prefer-default-export
export const FeedbacksReducer = produce((draft: Draft<FeedbacksState>, action: FeedbackActions) => {
  switch (action.type) {
    case FeedbackActionType.SET_FeedbackS:
      draft.data = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case FeedbackActionType.FETCH_Feedback:
      draft.data = [];
      draft.loadingState = LoadingState.LOADING;
      break;

    case FeedbackActionType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;
    default:
      break;
  }
}, initialFeedbackState);
