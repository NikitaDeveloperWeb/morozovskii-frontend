/* eslint-disable import/no-cycle */
import axios from 'axios';
import { VacancyProps } from '../../components/forms/VacancyAdd';
import { VacancysState } from '../../store/ducks/vacancy/contracts/state';

import { HOST } from './authAPI';

// eslint-disable-next-line import/extensions

// eslint-disable-next-line import/prefer-default-export
export const VacancysAPI = {
  async fetchVacancy(): Promise<VacancysState['data']> {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    const { data } = await axios.get(`${HOST}/Vacancies`, config);
    return data;
  },
  async addVacancy(datas: VacancyProps) {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    const { data } = await axios.post(`${HOST}/Vacancies`, datas, config);
    return data;
  },
  async editVacancy(datas: VacancyProps) {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    const { data } = await axios.put(
      `${HOST}/Vacancies/${datas.id}`,
      {
        title: datas.title,
        sallary: datas.sallary,
        claim: datas.claim,
      },
      config,
    );
    return data;
  },
  async deleteVacancy(id?: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await axios.delete(`${HOST}/Vacancies/${id}`);
  },
};
