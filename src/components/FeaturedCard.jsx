import React from "react";
import { Link } from "react-router-dom";

const FeaturedCard = ({ featured, title, start }) => {
  return (
    <Link to={"/products"}>
      <div className="hover:border-2 border-slate-200 ease-out duration-700 m-auto  hover:shadow-xl rounded-lg">
      <div className=" flex flex-col items-center">
        <img src={featured} alt="" />
      </div>
      <div className="p-2 flex flex-col items-center">
        <h1 className="max-sm:text-xs max-md:text-sm font-semibold text-center">{title}</h1>
        <h1 className=" max-md:text-xs font-medium text-sm">{start}</h1>
      </div>
    </div>
    </Link>
  );
};

export default FeaturedCard;
