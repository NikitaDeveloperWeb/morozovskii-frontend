import { LoadingState } from '../../../types';

export interface User {
  _id: string;
  firstname: string;
  username: string;
  lastname: string;
  phone: string;
  avatar: string;
  mail: string;
}

export interface UserState {
  data: User | undefined;
  status: LoadingState;
}
