import React from 'react';
import Button from '../Button';
import Field from '../Field';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { VacancysAPI } from '../../services/API/vacancyApi';
import { useDispatch } from 'react-redux';
import { fetchVacancys } from '../../store/ducks/vacancy/actionCreators';

export interface VacancyProps {
  id?: string;
  title: string;
  claim: string;
  sallary: number;
}
const VacancyFormSchema = yup.object().shape({
  title: yup.string(),
  claim: yup.string(),
  sallary: yup.number(),
});
function VacancyAdd() {
  const { register, handleSubmit } = useForm<VacancyProps>({
    resolver: yupResolver(VacancyFormSchema),
  });
  const dispatch = useDispatch();
  const onSubmit = async (data: VacancyProps) => {
    try {
      await VacancysAPI.addVacancy(data);
      dispatch(fetchVacancys());
      alert('Вакансия успешно добавлена!');
    } catch (error) {}
  };
  return (
    <form className="form-main" onSubmit={handleSubmit(onSubmit)} method="POST">
      <label htmlFor="title">Название:</label>
      <Field type="text" name="title" className="field-main" fieldRef={register} />
      <label htmlFor="sallary">ЗП:</label>
      <Field type="text" name="sallary" className="field-main" fieldRef={register} />
      <label htmlFor="claim">Требования:</label>
      <textarea name="claim" ref={register}></textarea>
      <Button type="submit" value="Добавить" className="Button-primary" />
    </form>
  );
}

export default VacancyAdd;
