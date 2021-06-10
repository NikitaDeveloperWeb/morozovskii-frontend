import React from 'react';
import Button from '../Button';
import Field from '../Field';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { FeedbacksAPI } from '../../services/API/feedbackApi';
import { fetchFeedbacks } from '../../store/ducks/feedbacks/actionCreators';
export interface FeedbackProps {
  id: string;
  name: string;
  phone: string;
  text: string;
  date: string;
  type: string;
}
export const FeedbackAddSchema = yup.object().shape({
  title: yup.string(),
  composition: yup.string(),
  image: yup.string(),
  type: yup.string(),
  price: yup.number(),
});

function FeedbackForm() {
  const dispatch = useDispatch();
  //referents
  const { register, handleSubmit } = useForm<FeedbackProps>({
    resolver: yupResolver(FeedbackAddSchema),
  });

  const onSubmit = async (data: FeedbackProps) => {
    try {
      let DATE = new Date();
      let Day = DATE.getDay().toString();
      let Month = DATE.getMonth().toString();
      let Year = DATE.getFullYear().toString();
      data.date = `${Day}/${Month}/${Year}`;
      await FeedbacksAPI.addFeedback(data);
      dispatch(fetchFeedbacks());
      alert(`Ваше сообщение успешно отправлено!`);
    } catch (error) {}
  };
  return (
    <form className="form-feedback" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Ваше имя:</label>
      <Field type="text" name="name" className="field-main" fieldRef={register} />
      <label htmlFor="phone">Ваш номер телефона:</label>
      <Field type="text" name="phone" className="field-main" fieldRef={register} />
      <label htmlFor="type">Тип обращения:</label>
      <select name="type" id="" ref={register}>
        <option value="Отзыв">Отзыв</option>
        <option value="Жалоба">Жалоба</option>
        <option value="Сотрудничество">Сотрудничество</option>
      </select>
      <label htmlFor="text">Ваше обращение:</label>
      <textarea name="text" ref={register}></textarea>
      <Button type="submit" value="Отправить" className="Button-primary" />
    </form>
  );
}

export default FeedbackForm;
