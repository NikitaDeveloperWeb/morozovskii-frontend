import { LoadingState } from '../../../types';

export interface Vacancys {
  _id: string;
  title: string;
  claim: string;
  sallary: string;
}

export interface VacancysState {
  data: Vacancys[];
  loadingState: LoadingState;
}
