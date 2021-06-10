import { LoadingState } from '../../../types';

export interface Feedback {
  _id: string;
  text: string;
  phone: string;
  name: string;
  type: string;
  date: string;
}

export interface FeedbacksState {
  data: Feedback[];
  loadingState: LoadingState;
}
