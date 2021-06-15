import { LoginProps } from '../../components/forms/LoginForm';
import { axios } from '../../utils/axios';
// eslint-disable-next-line import/no-cycle

export interface ResponseApi {
  access_token: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}
export const HOST = 'https://morozov-server.herokuapp.com';
// eslint-disable-next-line import/prefer-default-export
export const AuthApi = {
  async signIn(postData: LoginProps): Promise<ResponseApi> {
    const config = {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post<ResponseApi>(
      `https://morozov-server.herokuapp.com/auth/login`,
      {
        username: postData.username,
        password: postData.password,
      },
      config,
    );
    localStorage.setItem('token', data.access_token.toString());
    localStorage.setItem('data', JSON.stringify(data.data).toString());
    return data;
  },

  async getMe(): Promise<ResponseApi> {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.get<ResponseApi>(`${HOST}/profile`, config);
    return data;
  },
};
