import { Action } from 'redux';
import { LoadingState } from '../../types';
import { VacancysState } from './contracts/state';

export enum VacancyActionType {
  SET_VacancyS = 'Vacancys/SET_VacancyS',
  FETCH_Vacancy = 'Vacancys/FETCH_Vacancy',
  SET_LOADING_STATE = 'Vacancys/SET_LOADING_STATE',
}

export interface SetVacancyActionInterface extends Action<VacancyActionType> {
  type: VacancyActionType.SET_VacancyS;
  payload: VacancysState['data'];
}

export interface FetchVacancyActionInterface extends Action<VacancyActionType> {
  type: VacancyActionType.FETCH_Vacancy;
}
export interface SetVacancyLoadinStateActionInterface extends Action<VacancyActionType> {
  type: VacancyActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setVacancy = (payload: VacancysState['data']): SetVacancyActionInterface => ({
  type: VacancyActionType.SET_VacancyS,
  payload,
});

export const setVacancyLoadingState = (
  payload: LoadingState,
): SetVacancyLoadinStateActionInterface => ({
  type: VacancyActionType.SET_LOADING_STATE,
  payload,
});

export const fetchVacancys = (): FetchVacancyActionInterface => ({
  type: VacancyActionType.FETCH_Vacancy,
});

export type VacancyActions =
  | SetVacancyActionInterface
  | FetchVacancyActionInterface
  | SetVacancyLoadinStateActionInterface;
