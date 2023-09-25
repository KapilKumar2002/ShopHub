import React from "react";

const FeaturedCard = ({ featured, title, start }) => {
  return (
    <div className="hover:border-2 border-white m-auto w-60 hover:shadow-xl rounded-lg">
      <div className="max-h-60 flex flex-col items-center">
        <img src={featured} alt="" />
      </div>
      <div className="p-2 flex flex-col items-center">
        <h1 className="font-semibold">{title}</h1>
        <h1 className="font-medium text-sm">{start}</h1>
      </div>
    </div>
  );
};

export default FeaturedCard;
