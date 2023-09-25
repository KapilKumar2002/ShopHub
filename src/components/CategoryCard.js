import React from "react";

const CategoryCard = ({title}) => {
  return (
    <div className="w-24 border-2 border-orange-300 flex flex-col items-center gap-2 justify-center py-3">
      <div className="h-14 w-14 bg-orange-500"></div>
      <h1 className="text-xs font-semibold">{title}</h1>
    </div>
  );
};

export default CategoryCard;
