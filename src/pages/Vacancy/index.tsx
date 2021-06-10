import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVacancys } from '../../store/ducks/vacancy/actionCreators';
import { SelectVacancyItems } from '../../store/ducks/vacancy/selectors';
import VacancyItem from './components/VacancyItem';

function VacancyPage() {
  const dispatch = useDispatch();
  const Vacancys = useSelector(SelectVacancyItems);
  React.useEffect(() => {
    dispatch(fetchVacancys());
  }, [dispatch]);

  return (
    <div className="vacancyPage">
      <h1>Вакансии</h1>
      <ul className="vacancyPage__content">
        {Vacancys &&
          Vacancys.map((vacancy, index) => (
            <li key={`${vacancy._id} + ${vacancy.title}`}>
              <VacancyItem
                _id={vacancy._id}
                requirements={vacancy.claim}
                title={vacancy.title}
                sallary={vacancy.sallary}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default VacancyPage;
