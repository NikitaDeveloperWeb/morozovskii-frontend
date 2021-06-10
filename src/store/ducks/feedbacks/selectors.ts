import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { FeedbacksState } from './contracts/state';

export const selectFeedback = (state: RootState): FeedbacksState => state.feedbacks;

export const selectLoadingState = (state: RootState) => selectFeedback(state).loadingState;

export const SelectFeedbackItems = createSelector(selectFeedback, (Feedback) => Feedback.data);
