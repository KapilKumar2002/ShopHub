import React from "react";
import { Link } from "react-router-dom";
import { arr1 } from "../assets/images/products";

const NewArrival = () => {
  return (
    <div className="relative max-sm:h-56 max-lg:h-52 h-80 bg-black max-auto">
      <img src={arr1} alt="" className="absolute h-full w-full object-fill" />
      <div className="absolute bottom-0 m-2">
        <h1 className="font-semibold text-white">
          Playstation 5
        </h1>
        <Link className="text-sm underline font-medium text-white">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default NewArrival;
