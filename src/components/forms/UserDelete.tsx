import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
// import { useSelector } from 'react-redux';
import { usersAPI } from '../../services/API/usersApi';
// import { selectUserData } from '../../store/ducks/user/selectors';
import Button from '../Button';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../store/ducks/users/actionCreators';
interface UserDeleteProps {
  id: string | undefined;
}
const EditFormSchema = yup.object().shape({});

function UserDelete({ id }: UserDeleteProps) {
  const { handleSubmit } = useForm<UserDeleteProps>({
    resolver: yupResolver(EditFormSchema),
  });
  const dispatch = useDispatch();
  const ID = id;
  const onSubmit = async (data: UserDeleteProps): Promise<void> => {
    try {
      console.log(data);
      let id = ID;
      await usersAPI.deleteWorker(id);
      dispatch(fetchUsers());
      alert('Пользователь успешно удалён!');
    } catch (error) {
      console.log(`😱 Axios request failed: ${error}`);
    }
  };
  return (
    <form className="form-main" method="POST" onSubmit={handleSubmit(onSubmit)} id="formDeleteUser">
      <h2>Хотите удалить пользователя?</h2>
      <Button type="submit" value="Удалить" className="Button-primary" form="formDeleteUser" />
    </form>
  );
}

export default UserDelete;
