import './Rating.css'

export const Rating = ({ value }) => {
  const numStars = 5;
  const filledStars = Math.round(value * numStars) / numStars;

  return (
    <div className="rating">
      {[...Array(numStars)].map((_, i) => (
        <p key={i}>
          <i className={i < filledStars ? "star" : "far-star"}></i>
        </p>
      ))}
    </div>
  );
};
