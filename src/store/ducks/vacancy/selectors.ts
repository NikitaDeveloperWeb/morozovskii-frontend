import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { VacancysState } from './contracts/state';

export const selectVacancys = (state: RootState): VacancysState => state.vacancy;

export const selectLoadingState = (state: RootState) => selectVacancys(state).loadingState;

export const SelectVacancyItems = createSelector(selectVacancys, (vacancys) => vacancys.data);
