import React from "react";
import { Link } from "react-router-dom";

const FashionCard = ({ image }) => {
  return (
    <Link>
      <div className="relative w-36 h-36 mx-auto bg-orange-500 flex justify-center rounded-full mt-8">
        <img
          className="absolute object-contain hover:h-56 h-48 bottom-1"
          src={image}
          alt=""
        />
      </div>
    </Link>
  );
};

export default FashionCard;
