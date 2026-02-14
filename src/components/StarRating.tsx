import { FiStar } from "react-icons/fi";

export const StarRating = ({ rating, count }: { rating: number; count: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <FiStar key={`full-${i}`} className="text-yellow-400 fill-current" />
      ))}
      {hasHalfStar && (
        <div className="relative">
          <FiStar className="text-gray-300 fill-current" />
          <FiStar
            className="absolute top-0 left-0 text-yellow-400 fill-current"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <FiStar key={`empty-${i}`} className="text-gray-300 fill-current" />
      ))}
      <span className="text-sm text-gray-600 ml-1">
        {rating} ({count})
      </span>
    </div>
  );
};
