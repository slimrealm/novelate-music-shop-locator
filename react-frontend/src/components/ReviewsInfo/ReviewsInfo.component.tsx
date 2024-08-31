import ResizableHeaderText from '../ResizableHeaderText/ResizableHeaderText.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ReviewLine, ReviewsInfoContainer } from './ReviewsInfo.styles';

interface ReviewsInfoProps {
  reviewsString: string;
}

const ReviewsInfo: React.FC<ReviewsInfoProps> = ({ reviewsString }) => {
  return (
    <ReviewsInfoContainer>
      <FontAwesomeIcon icon={faStar} className='' />
      <ReviewLine>{reviewsString}</ReviewLine>
    </ReviewsInfoContainer>
  );
};

export default ReviewsInfo;
