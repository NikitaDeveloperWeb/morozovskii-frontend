import produce, { Draft } from 'immer';
import { LoadingState } from '../../types';
import { VacancyActions, VacancyActionType } from './actionCreators';
import { VacancysState } from './contracts/state';

const initialVacancyState: VacancysState = {
  data: [],
  loadingState: LoadingState.NEVER,
};

// eslint-disable-next-line import/prefer-default-export
export const VacancysReducer = produce((draft: Draft<VacancysState>, action: VacancyActions) => {
  switch (action.type) {
    case VacancyActionType.SET_VacancyS:
      draft.data = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case VacancyActionType.FETCH_Vacancy:
      draft.data = [];
      draft.loadingState = LoadingState.LOADING;
      break;

    case VacancyActionType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;
    default:
      break;
  }
}, initialVacancyState);
