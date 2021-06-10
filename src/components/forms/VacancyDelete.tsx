import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { VacancysAPI } from '../../services/API/vacancyApi';
import Button from '../Button';
import { VacancyProps } from './VacancyAdd';
import * as yup from 'yup';
import { fetchVacancys } from '../../store/ducks/vacancy/actionCreators';
import { useDispatch } from 'react-redux';
interface VacancyDeleteProps {
  id: string;
}
const VacancyDeleteSchema = yup.object().shape({});
function VacancyDelete({ id }: VacancyDeleteProps) {
  const ID = id;
  const dispatch = useDispatch();
  const { handleSubmit } = useForm<VacancyProps>({
    resolver: yupResolver(VacancyDeleteSchema),
  });
  const onSubmit = async (data: VacancyProps) => {
    try {
      await VacancysAPI.deleteVacancy(ID);
      // eslint-disable-next-line react-hooks/rules-of-hooks

      dispatch(fetchVacancys());

      alert('Продукт успешно удален!');
    } catch (error) {}
  };
  return (
    <form className="form-main" onSubmit={handleSubmit(onSubmit)} method="POST">
      <h2>Хотите удалить вакансию?</h2>
      <Button type="submit" value="Удалить" className="Button-primary" />
    </form>
  );
}

export default VacancyDelete;
