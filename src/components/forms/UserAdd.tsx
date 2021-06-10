import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '../Button';
import Field from '../Field';
import * as yup from 'yup';
import { usersAPI } from '../../services/API/usersApi';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../store/ducks/users/actionCreators';
//схема валидации
const RegisterFormSchema = yup.object().shape({
  username: yup.string().required('Введите логин').min(5, 'Минимум пять символов'),
  password: yup.string().min(6, 'Минимум шесть символов').required(),
  password2: yup.string().required('Введите дату рождения').min(6, 'Минимум шесть символов'),
});

export interface RegisterProps {
  username: string;
  password2: string;
  password: string;
}

function UserAdd() {
  //referents
  const { register, handleSubmit } = useForm<RegisterProps>({
    resolver: yupResolver(RegisterFormSchema),
  });
  const dispatch = useDispatch();
  const onSubmit = async (data: RegisterProps) => {
    try {
      await usersAPI.addUser(data);
      dispatch(fetchUsers());
    } catch (error) {}
  };
  return (
    <form className="form-main" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Логин:</label>
      <Field type="text" name="username" className="field-main" fieldRef={register} />
      <label htmlFor="password">Пароль:</label>
      <Field type="password" name="password" className="field-main" fieldRef={register} />
      <label htmlFor="password2">Повторите пароль:</label>
      <Field type="password" name="password2" className="field-main" fieldRef={register} />
      <Button type="submit" value="Добавить" className="Button-primary" />
    </form>
  );
}

export default UserAdd;
