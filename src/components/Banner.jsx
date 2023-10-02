import React from "react";
import { banner } from "../assets/images/banner";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome to ShopHub",
      "Trade in offers",
      "Trending products on best prices",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section className="relative max-container max-md:h-96 h-[80vh]">
      <img
        className="absolute h-full  w-full object-center"
        src={banner}
        alt=""
      />
      <div className="flex flex-col max-md:gap-1 gap-3 items-start absolute left-[5%] top-[10%]">
        <h2 className="max-md:text-2xl max-sm:text-xl text-4xl font-bold text-white">
          <span className="text-orange-500">{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="orange" />
        </h2>
        <h1 className="font-bold max-md:text-2xl max-sm:text-xl text-4xl text-orange-400">
          Super Value Deals
        </h1>
        <p className="font-medium text-2xl  max-md:text-lg">On all Products</p>
        <p className="font-medium text-xs">Buy more & save more</p>
        <button className="max-md:px-3 max-md:py-2 px-5 py-3 bg-orange-500 text-white max-md:font-medium font-semibold rounded-lg max-md:text-xs">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Banner;
