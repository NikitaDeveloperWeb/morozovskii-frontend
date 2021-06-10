import React from 'react';
import Button from '../Button';
import Field from '../Field';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { FeedbackProps } from './FeedbackForm';
import { FeedbackAddSchema } from './FeedbackForm';
import { FeedbacksAPI } from '../../services/API/feedbackApi';
import { fetchFeedbacks } from '../../store/ducks/feedbacks/actionCreators';

function ContactUsForm() {
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
      data.type = 'Сотрудничество';
      await FeedbacksAPI.addFeedback(data);
      dispatch(fetchFeedbacks());
      alert('Ваше сообщение успешно доставлено!');
    } catch (error) {}
  };
  return (
    <form className="form-main" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Ваше имя:</label>
      <Field type="text" name="name" className="field-main" fieldRef={register} />
      <label htmlFor="phone">Ваш номер телефона:</label>
      <Field type="text" name="phone" className="field-main" fieldRef={register} />
      <label htmlFor="name">Ваше обращение:</label>
      <textarea name="text" ref={register}></textarea>
      <Button type="submit" value="Отправить" className="Button-primary" />
    </form>
  );
}

export default ContactUsForm;
