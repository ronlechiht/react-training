/* Import types */
import { Feedback } from '../../types/Feedback';
import Rating from '../Rating/Rating';
/* Import contants */
import { COMPONENT_SIZES, TEXT_VARIANTS } from '../../constants/constants';
/* Import components */
import Text from '../Text/Text';
import ThreeDotsBtn from '../ThreeDotsBtn/ThreeDotsBtn';
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
        <Text variant={TEXT_VARIANTS.name} content={feedback.customerName} />
        <img src="images/components/FeedbackCard/verified.png" alt="verified icon" />
      </div>
      <Text
        variant={TEXT_VARIANTS.default}
        className="customer-comment"
        content={feedback.customerComment}
      />
      <Text
        variant={TEXT_VARIANTS.default}
        className="feedback-date"
        content={`Posted on ${feedback.date}`}
      />
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
    <ul className="list-feedback-card">
      {feedbacks.map((feedback) => (
        <li key={feedback.customerId}>
          <FeedbackCard {...feedback} />
        </li>
      ))}
    </ul>
  );
};

export default ListFeedback;
