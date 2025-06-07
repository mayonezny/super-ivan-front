import React, { useState } from 'react';

interface RatingStarsProps {
    maxStars?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ maxStars = 5 }) => {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleClick = (star: number) => setRating(star);
  const handleMouseEnter = (star: number) => setHoverRating(star);
  const handleMouseLeave = () => setHoverRating(0);
  const handleSos = () => {
    // TODO: Реализовать логику отправки
    console.log('Submitted rating:', rating);
    alert('Оценка выставлена!');
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex">
        {[...Array(maxStars)].map((_, index) => {
          const starNumber = index + 1;
          const filled = hoverRating >= starNumber || (!hoverRating && rating >= starNumber);
          return (
            <svg
              key={starNumber}
              onClick={() => handleClick(starNumber)}
              onMouseEnter={() => handleMouseEnter(starNumber)}
              onMouseLeave={handleMouseLeave}
              className={`w-6 h-6 cursor-pointer ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.177c.969 0 1.371 1.24.588 1.81l-3.385 2.462a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.54 1.118l-3.385-2.462a1 1 0 00-1.176 0l-3.385 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.973a1 1 0 00-.364-1.118L2.049 9.41c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
            </svg>
          );
        })}
      </div>
      {/* <button
        onClick={handleSos}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
                Отправить
      </button> */}
    </div>
  );
};

export default RatingStars;
