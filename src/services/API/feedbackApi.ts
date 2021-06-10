/* eslint-disable import/no-cycle */
import axios from 'axios';
import { FeedbackProps } from '../../components/forms/FeedbackForm';
import { FeedbacksState } from '../../store/ducks/feedbacks/contracts/state';

import { HOST } from './authAPI';

// eslint-disable-next-line import/extensions

// eslint-disable-next-line import/prefer-default-export
export const FeedbacksAPI = {
  async fetchFeedback(): Promise<FeedbacksState['data']> {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    const { data } = await axios.get(`${HOST}/Feedbacks`, config);
    return data;
  },
  async addFeedback(datas: FeedbackProps) {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    const { data } = await axios.post(`${HOST}/Feedbacks`, datas, config);
    return data;
  },
  async editFeedback(datas: FeedbackProps) {
    const config = {
      headers: {
        ContentType: `application/json`,
      },
    };
    const { data } = await axios.put(
      `${HOST}/Feedbacks/${datas.id}`,
      {
        name: datas.name,
        text: datas.text,
        phone: datas.phone,
        type: datas.type,
        date: datas.date,
      },
      config,
    );
    return data;
  },
  async deleteFeedback(id?: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await axios.delete(`${HOST}/Feedbacks/${id}`);
  },
};
