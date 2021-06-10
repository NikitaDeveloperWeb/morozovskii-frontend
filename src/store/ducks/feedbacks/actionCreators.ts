import { Action } from 'redux';
import { LoadingState } from '../../types';
import { FeedbacksState } from './contracts/state';

export enum FeedbackActionType {
  SET_FeedbackS = 'Feedbacks/SET_FeedbackS',
  FETCH_Feedback = 'Feedbacks/FETCH_Feedback',
  SET_LOADING_STATE = 'Feedbacks/SET_LOADING_STATE',
}

export interface SetFeedbackActionInterface extends Action<FeedbackActionType> {
  type: FeedbackActionType.SET_FeedbackS;
  payload: FeedbacksState['data'];
}

export interface FetchFeedbackActionInterface extends Action<FeedbackActionType> {
  type: FeedbackActionType.FETCH_Feedback;
}
export interface SetFeedbackLoadinStateActionInterface extends Action<FeedbackActionType> {
  type: FeedbackActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setFeedback = (payload: FeedbacksState['data']): SetFeedbackActionInterface => ({
  type: FeedbackActionType.SET_FeedbackS,
  payload,
});

export const setFeedbackLoadingState = (
  payload: LoadingState,
): SetFeedbackLoadinStateActionInterface => ({
  type: FeedbackActionType.SET_LOADING_STATE,
  payload,
});

export const fetchFeedbacks = (): FetchFeedbackActionInterface => ({
  type: FeedbackActionType.FETCH_Feedback,
});

export type FeedbackActions =
  | SetFeedbackActionInterface
  | FetchFeedbackActionInterface
  | SetFeedbackLoadinStateActionInterface;
