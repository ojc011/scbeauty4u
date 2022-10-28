import ReviewItem from "./review-item.component";

const ReviewMap = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewMap
