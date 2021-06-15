import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { VacancysAPI } from '../../services/API/vacancyApi';
import { SelectVacancyItems } from '../../store/ducks/vacancy/selectors';
import Button from '../Button';
import Field from '../Field';
import * as yup from 'yup';
import { VacancyProps } from './VacancyAdd';
import { fetchVacancys } from '../../store/ducks/vacancy/actionCreators';
interface VacancyEditProps {
  id: string;
}
const VacancyFormSchema = yup.object().shape({
  title: yup.string(),
  claim: yup.string(),
  sallary: yup.number(),
});
function VacancyEdit({ id }: VacancyEditProps) {
  const ID = id;
  const { register, handleSubmit } = useForm<VacancyProps>({
    resolver: yupResolver(VacancyFormSchema),
  });
  const dispatch = useDispatch();
  const onSubmit = async (data: VacancyProps) => {
    console.log(data);
    data.id = ID;
    try {
      await VacancysAPI.editVacancy(data);
      dispatch(fetchVacancys());
      alert('Продукт успешно изменён!');
    } catch (error) {}
  };

  const Vacancys = useSelector(SelectVacancyItems);
  let thisVacancy = {
    title: '',
    claim: '',
    sallary: '',
    id: ID,
  };
  // eslint-disable-next-line array-callback-return
  Vacancys.map((Vacancy) => {
    if (Vacancy._id === ID) {
      thisVacancy.title = Vacancy.title;
      thisVacancy.claim = Vacancy.claim;
      thisVacancy.sallary = Vacancy.sallary;
    }
  });

  return (
    <form className="form-main" onSubmit={handleSubmit(onSubmit)} method="POST">
      <label htmlFor="title">Новое название:</label>
      <Field
        type="text"
        name="title"
        className="field-main"
        fieldRef={register}
        defaultValue={thisVacancy.title}
      />
      <label htmlFor="sallary">Новая ЗП:</label>
      <Field
        type="text"
        name="sallary"
        className="field-main"
        fieldRef={register}
        defaultValue={thisVacancy.sallary}
      />
      <label htmlFor="claim">Новые требования:</label>
      <textarea name="claim" ref={register} defaultValue={thisVacancy.claim}></textarea>
      <Button type="submit" value="Редактировать" className="Button-primary" />
    </form>
  );
}

export default VacancyEdit;
