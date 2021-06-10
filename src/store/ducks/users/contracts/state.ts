import { LoadingState } from '../../../types';

export interface Users {
  _id: string;
  firstname: string;
  username: string;
  password: string;
  lastname: string;
  phone: string;
  mail: string;
  avatar: string;
}

export interface UsersState {
  data: Users[];
  loadingState: LoadingState;
}
