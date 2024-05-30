/* Import types */
import { Feedback } from '../../types/Feedback';
import Rating from '../Rating/Rating';
/* Import contants */
import { COMPONENT_SIZES, TEXT_VARIANTS, EMPTY_MSG_LIST } from '../../constants';
/* Import components */
import Text from '../Text/Text';
import ThreeDotsBtn from '../ThreeDotsBtn/ThreeDotsBtn';
import { VerifiedIcon } from '../Icon';
/* Import CSS */
import './ListFeedback.css';

/**
 *
 * @param feedback A feedback of a customer for a product
 * @returns FeedbackCard component
 */
const FeedbackCard = (feedback: Feedback) => {
  return (
    <div className="feedback-card">
      <div className="feedback-card-header">
        <Rating rating={feedback.rating} size={COMPONENT_SIZES.large} />
        <ThreeDotsBtn />
      </div>
      <div className="customer-name">
        <Text variant={TEXT_VARIANTS.name}>{feedback.customerName}</Text>
        <VerifiedIcon />
      </div>
      <Text className="customer-comment">{feedback.customerComment}</Text>
      <Text className="feedback-date">{`Posted on ${feedback.date}`}</Text>
    </div>
  );
};

/**
 *
 * @param feedbacks array of feedback
 * @returns list feedback of a customer for a product
 */
const ListFeedback = ({ feedbacks }: { feedbacks: Feedback[] }) => {
  return (
    <>
      {feedbacks.length ? (
        <ul className="list-feedback-card">
          {feedbacks.map((feedback) => (
            <li key={feedback.customerId}>
              <FeedbackCard {...feedback} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-feedback-page flex-center-center">
          <Text className="empty-message">{EMPTY_MSG_LIST.feedback}</Text>
        </div>
      )}
    </>
  );
};

export default ListFeedback;
