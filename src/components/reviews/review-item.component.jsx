const ReviewItem = ({ review }) => {
  const { title, text } = review;

  return (
    <div>
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
    </div>
  );
};

export default ReviewItem;
