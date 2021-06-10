import React from 'react';
import Button from '../Button';
import Field from '../Field';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { usersAPI } from '../../services/API/usersApi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/ducks/users/actionCreators';
import { SelectUserItems } from '../../store/ducks/users/selectors';
export interface EditProps {
  id?: string;
  usernameNew?: string;
  password2New?: string;
  passwordNew?: string;
}
const EditFormSchema = yup.object().shape({
  usernameNew: yup.string(),
  passwordNew: yup.string(),
  password2New: yup.string(),
});

function UserEdit({ id }: EditProps) {
  const ID = id;
  const dispatch = useDispatch();
  //referents
  const { register, handleSubmit } = useForm<EditProps>({
    resolver: yupResolver(EditFormSchema),
  });

  const onSubmit = async (data: EditProps): Promise<void> => {
    data.id = ID;
    try {
      await usersAPI.editUser(data);
      dispatch(fetchUsers());
      alert('Пользователь успешно редактрован!');
    } catch (error) {
      console.log(`😱 Axios request failed: ${error}`);
    }
  };
  const users = useSelector(SelectUserItems);
  let thisuser = {
    username: '',
  };
  // eslint-disable-next-line array-callback-return
  users.map((user) => {
    if (user._id === ID) {
      thisuser.username = user.username;
    }
  });
  return (
    <form className="form-main" method="POST" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Новый логин:</label>
      <Field
        type="text"
        name="usernameNew"
        className="field-main"
        fieldRef={register}
        value={thisuser.username}
      />
      <label htmlFor="password">Новый пароль:</label>
      <Field type="password" name="passwordNew" className="field-main" fieldRef={register} />
      <label htmlFor="password2">Повторите новый пароль:</label>
      <Field type="password" name="password2New" className="field-main" fieldRef={register} />
      <Button type="submit" value="Редактировать" className="Button-primary" />
    </form>
  );
}

export default UserEdit;
