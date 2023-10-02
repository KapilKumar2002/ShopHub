import React from "react";
import { featured1 } from "../assets/images/products";
import { FavoriteBorderIcon, star } from "../assets/icons";
import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <Link to={'/products/id'}>
      <div className="border-slate-200 max-h-96 rounded-md max-md:p-1 p-2 border-[1px] mx-auto shadow-sm hover:ease-out hover:duration-700 hover:shadow-lg">
      <div className="w-full  object-cover relative bg-orange-100">
        <img src={featured1} className="max-h-56 p-1 " alt="" />
        <div className="absolute bottom-3  max-md:left-1 max-md:bottom-1 left-2  bg-yellow-50 opacity-75 max-sm:p-[2px] p-1  rounded-sm flex items-center max-lg:gap-[4px] gap-2 border-[0.5px] border-orange-500">
          <img src={star} alt="" className="max-lg:h-3 max-sm:h-2 h-4" />
          <h4 className="max-lg:text-xs max-sm:text-[10px] text-sm">4.7</h4>
        </div>
        <FavoriteBorderIcon
          className="absolute max-md:right-1 max-md:bottom-1 bottom-3 right-2 opacity-7 text-orange-400"
          fontSize="1px"
        />
      </div>
      <h1 className="text-lg font-semibold pt-5 max-md:pt-1 max-md:text-sm max-sm:text-[10px]">
        Controller
      </h1>
      <p className="text-sm max-md:text-xs max-sm:text-[8px]">
        Kids Teen Controller
      </p>
      <div className="flex items-center gap-1 max-md:text-[8px]">
        <p className="font-semibold">₹1,199</p>
        <p className="line-through ">₹1,399</p>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
