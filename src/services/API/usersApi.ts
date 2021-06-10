/* eslint-disable import/no-cycle */
import axios from 'axios';

import { RegisterProps } from '../../components/forms/UserAdd';
import { EditProps } from '../../components/forms/UserEdit';

import { UsersState } from '../../store/ducks/users/contracts/state';
import { HOST } from './authAPI';

// eslint-disable-next-line import/extensions

// eslint-disable-next-line import/prefer-default-export
export const usersAPI = {
  async fetchUser(): Promise<UsersState['data']> {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    const { data } = await axios.get(`${HOST}/users`, config);
    return data;
  },
  async addUser(datas: RegisterProps) {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    const { data } = await axios.post(`${HOST}/users`, datas, config);
    return data;
  },
  async editUser(datas: EditProps) {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    const { data } = await axios.put(
      `${HOST}/users/${datas.id}`,
      { username: datas.usernameNew, password: datas.passwordNew, password2: datas.password2New },
      config,
    );
    return data;
  },
  async deleteWorker(id?: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await axios.delete(`${HOST}/users/${id}`);
  },
};
