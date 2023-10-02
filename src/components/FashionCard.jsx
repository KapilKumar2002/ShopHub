import React from "react";
import { Link } from "react-router-dom";

const FashionCard = ({ image }) => {
  return (
    <Link>
      <div className="relative w-36 max-lg:w-24 max-lg:h-24 max-md:h-20 max-md:w-20 max-sm:w-12 max-sm:h-12 h-36 mx-auto bg-orange-500 flex justify-center rounded-full mt-8 max-lg:mt-4">
        <img
          className="absolute object-contain max-lg:h-32 max-md:h-28 max-sm:h-20 h-48 bottom-1"
          src={image}
          alt=""
        />
      </div>
    </Link>
  );
};

export default FashionCard;
