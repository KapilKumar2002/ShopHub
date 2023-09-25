import React from "react";
import { acc1, acc2, acc3, acc4 } from "../assets/images/products";
import { Link } from "react-router-dom";

const AccessoryCard = () => {
  return (
    <div className="border-2 p-4 border-orange-50 flex flex-col gap-4">
      <h1 className="font-semibold">Computer Accessories</h1>
      <div className="gap-4 grid grid-cols-2">
        <div className="w-40 mx-auto flex flex-col items-center">
          <img src={acc1} alt="" className="object-cover" />
          <h1 className="font-medium">Headphones</h1>
        </div>
        <div className="w-40 mx-auto flex flex-col items-center">
          <img src={acc2} alt="" className="object-cover" />
          <h1 className="font-medium">Headphones</h1>
        </div>
        <div className="w-40 mx-auto flex flex-col items-center">
          <img src={acc3} alt="" className="object-cover" />
          <h1 className="font-medium">Headphones</h1>
        </div>
        <div className="w-40 mx-auto flex flex-col items-center justify-end">
          <img src={acc4} alt="" className="object-cover" />
          <h1 className="font-medium">Headphones</h1>
        </div>
      </div>
      <Link
        to={"/"}
        className="hover:text-orange-700 pl-4 text-orange-400 font-medium"
      >
        See all
      </Link>
    </div>
  );
};

export default AccessoryCard;
