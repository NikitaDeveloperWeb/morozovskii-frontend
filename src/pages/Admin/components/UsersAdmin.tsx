/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserAdd from '../../../components/forms/UserAdd';
import UserDelete from '../../../components/forms/UserDelete';
import UserEdit from '../../../components/forms/UserEdit';
import ModalAdm from '../../../components/ModalAdm';
import { fetchUsers } from '../../../store/ducks/users/actionCreators';
import { SelectUserItems } from '../../../store/ducks/users/selectors';

// eslint-disable-next-line react-hooks/rules-of-hooks

function UsersAdmin() {
  const dispatch = useDispatch();
  const users = useSelector(SelectUserItems);
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="adminContent">
      <h2>Пользователи</h2>
      <ModalAdm title="Добавить..." form={<UserAdd />} />
      <table>
        {users.map((user, index) => (
          <React.Fragment key={`${user._id}+index`}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Логин</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>
                  <ModalAdm title="Удалить..." form={<UserDelete id={user._id} />} />
                  <ModalAdm title="Редактировать..." form={<UserEdit id={user._id} />} />
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
}

export default UsersAdmin;
