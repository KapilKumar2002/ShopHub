import React from "react";

const CategoryCard = ({ title, image }) => {
  return (
    <div className="max-lg:w-20 max-sm:w-16 w-24 border-2 border-orange-300 bg-orange-200 flex flex-col items-center max-lg:gap-2 gap-6 justify-center max-md:py-1 py-3 mx-auto">
      <img
        src={image}
        alt=""
        className="max-lg:w-12 max-sm:w-6 max-sm:h-6 max-lg:h-10 h-14 w-14 object-contain"
      />
      <h1 className="text-xs max-sm:font-medium text-gray-500 font-semibold">{title}</h1>
    </div>
  );
};

export default CategoryCard;
