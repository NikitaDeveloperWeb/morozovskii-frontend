import React from 'react';
import bg from '../../../assets/images/feedback-bg.jpg';
import FeedbackItem from '../../../components/FeedbackItem';
import arrow from '../../../assets/images/arrow.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeedbacks } from '../../../store/ducks/feedbacks/actionCreators';
import { SelectFeedbackItems } from '../../../store/ducks/feedbacks/selectors';

function Feedback() {
  const dispatch = useDispatch();
  const FeedbackItems = useSelector(SelectFeedbackItems);
  React.useEffect(() => {
    dispatch(fetchFeedbacks());
  }, [dispatch]);
  const feedbacksFilter = FeedbackItems.filter(
    (feedback: { type: string }) => feedback.type === 'Отзыв',
  );

  const [active, setActive] = React.useState(0);
  const handlerActiveItemIncrement = () => {
    if (active < feedbacksFilter.length - 1) {
      setActive(active + 1);
    } else {
      setActive(0);
    }
  };
  const handlerActiveItemDecrement = () => {
    if (active > 0) {
      setActive(active - 1);
    } else {
      setActive(feedbacksFilter.length - 1);
    }
  };
  return (
    <div
      className="home-block"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="home-block__filter">
        <h2>Отзывы</h2>
        <div className="home-block__filter__content">
          <img
            src={arrow}
            alt="влево"
            style={{ width: 60, height: 35, transform: 'rotate(180deg)', cursor: 'pointer' }}
            onClick={() => handlerActiveItemDecrement()}
          />

          {feedbacksFilter.length !== 0 && (
            <FeedbackItem text={feedbacksFilter[active].text} name={feedbacksFilter[active].name} />
          )}
          <img
            src={arrow}
            alt="вправо"
            style={{ width: 60, height: 35, cursor: 'pointer' }}
            onClick={() => handlerActiveItemIncrement()}
          />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
