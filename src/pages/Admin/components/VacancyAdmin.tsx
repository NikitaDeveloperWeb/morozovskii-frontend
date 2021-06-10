import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VacancyAdd from '../../../components/forms/VacancyAdd';
import VacancyDelete from '../../../components/forms/VacancyDelete';
import VacancyEdit from '../../../components/forms/VacancyEdit';
import ModalAdm from '../../../components/ModalAdm';
import { fetchVacancys } from '../../../store/ducks/vacancy/actionCreators';
import { SelectVacancyItems } from '../../../store/ducks/vacancy/selectors';

function VacancyAdmin() {
  const dispatch = useDispatch();
  const vacancys = useSelector(SelectVacancyItems);
  React.useEffect(() => {
    dispatch(fetchVacancys());
  }, [dispatch]);
  return (
    <div className="adminContent">
      <h2>Вакансии</h2>
      <ModalAdm title="Добавить..." form={<VacancyAdd />} />
      <table>
        {vacancys.map((vacancy, index) => (
          <React.Fragment key={`${vacancy._id}`}>
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Название</th>
                <th>ЗП</th>
                <th>Требования</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td>{vacancy._id}</td> */}
                <td>{vacancy.title}</td>
                <td>{vacancy.sallary} руб.</td>
                <td>{vacancy.claim}</td>
                <td>
                  <ModalAdm title="Удалить..." form={<VacancyDelete id={vacancy._id} />} />
                  <ModalAdm title="Редактировать..." form={<VacancyEdit id={vacancy._id} />} />
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
}

export default VacancyAdmin;
