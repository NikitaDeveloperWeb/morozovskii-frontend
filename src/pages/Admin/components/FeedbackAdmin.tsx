import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FeedbackDelete from '../../../components/forms/FeedbackDelete';
import ModalAdm from '../../../components/ModalAdm';
import { fetchFeedbacks } from '../../../store/ducks/feedbacks/actionCreators';
import { SelectFeedbackItems } from '../../../store/ducks/feedbacks/selectors';

function FeedbackAdmin() {
  const dispatch = useDispatch();
  const feedbacks = useSelector(SelectFeedbackItems);
  React.useEffect(() => {
    dispatch(fetchFeedbacks());
  }, [dispatch]);
  return (
    <div className="adminContent">
      <h2>Обращения</h2>
      <table>
        {feedbacks.map((feedback, index) => (
          <React.Fragment key={`${feedback._id}`}>
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>ФИО</th>
                <th>Тип</th>
                <th>Обращение</th>
                <th>Дата</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td>{feedback._id}</td> */}
                <td>{feedback.name}</td>
                <td>{feedback.type}</td>
                <td>{feedback.date}</td>
                <td>{feedback.text}</td>

                <td>
                  <ModalAdm title="Удалить..." form={<FeedbackDelete id={feedback._id} />} />
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
}
export default FeedbackAdmin;
