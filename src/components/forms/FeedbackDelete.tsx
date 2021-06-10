import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { FeedbacksAPI } from '../../services/API/feedbackApi';
import { fetchFeedbacks } from '../../store/ducks/feedbacks/actionCreators';
import Button from '../Button';
import { FeedbackProps } from './FeedbackForm';
import * as yup from 'yup';
interface FeedbackDeleteProps {
  id: string;
}
const FeedbackDeleteSchema = yup.object().shape({});
function FeedbackDelete({ id }: FeedbackDeleteProps) {
  const ID = id;
  const dispatch = useDispatch();
  const { handleSubmit } = useForm<FeedbackProps>({
    resolver: yupResolver(FeedbackDeleteSchema),
  });
  const onSubmit = async (data: FeedbackProps) => {
    dispatch(fetchFeedbacks());
    alert('Продукт успешно удален!');

    try {
      await FeedbacksAPI.deleteFeedback(ID);
    } catch (error) {}
  };
  return (
    <form className="form-main" onSubmit={handleSubmit(onSubmit)}>
      <h2>Хотите удалить обращение?</h2>
      <Button type="submit" value="Удалить" className="Button-primary" />
    </form>
  );
}

export default FeedbackDelete;
