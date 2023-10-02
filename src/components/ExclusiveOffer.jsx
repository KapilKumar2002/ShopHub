import React from "react";
import { girl } from "../assets/images/banner";

function ExclusiveOffer() {
  return (
    <div className="grid grid-cols-2 bg-orange-200 max-md:px-2 px-10">
      <div className="flex justify-center">
        <img src={girl} alt="" className="h-80" />
      </div>
      <div className="mt-12 flex items-start flex-col max-sm:gap-2 gap-3">
        <h1 className="font-bold text-2xl max-md:text-xl">Exclusive Offer</h1>
        <p className="max-md:text-xs text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
          consequatur rerum maiores culpa, iure repellendus explicabo, molestiae
        </p>
        <div className="lg:w-[50%] w-full grid grid-cols-3 max-sm:gap-2 gap-5">
          <div className="flex flex-col items-center bg-gray-200 py-2">
            <h1 className="font-bold text-xl max-md:text-sm">6</h1>
            <p className="max-md:text-sm max-sm:text-xs ">days</p>
          </div>

          <div className="flex flex-col items-center bg-gray-200 py-2">
            <h1 className="font-bold text-xl max-md:text-sm">6</h1>
            <p className="max-md:text-sm max-sm:text-xs ">days</p>
          </div>

          <div className="flex flex-col items-center bg-gray-200 py-2">
            <h1 className="font-bold text-xl max-md:text-sm">6</h1>
            <p className="max-md:text-sm max-sm:text-xs ">days</p>
          </div>
        </div>
        <button className="bg-orange-500 text-white max-sm:font-medium max-md:text-sm font-semibold  max-sm:px-2  py-2 px-3">
          Explore
        </button>
      </div>
    </div>
  );
}

export default ExclusiveOffer;
