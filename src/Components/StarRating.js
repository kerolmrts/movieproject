import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "grey"} />
);

export default function StarRating({ voteAverage, totalStars = 10 }) {
  const starPercentage = (voteAverage / 10) * 100;


  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, i) => (
        <Star key={i} selected={i < starPercentage / (100 / totalStars)} />
      ))}
      <p className="ml-2 text-zinc-700">
        ({voteAverage} de 10 estrelas)
      </p>
    </div>
  );
}
