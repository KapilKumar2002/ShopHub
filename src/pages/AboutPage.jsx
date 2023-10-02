import React from "react";
import { aboutimg, store } from "../assets/images/banner";

function AboutPage() {
  return (
    <div className="max-container my-10 flex flex-col max-md:gap-5 gap-20 max-md:px-4 px-10">
      <div className="flex max-md:flex-col-reverse gap-14">
        <div className=" flex flex-col justify-center">
          <h4 className="font-medium text-4xl">Our Story</h4>
          <p className="mt-10 text-sm">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="pt-5 text-sm">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img className="w-[50%] max-md:w-full" src={aboutimg} alt="" />
      </div>
      <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-2">
        <div className="md:h-56  p-3 flex flex-col  rounded-sm justify-center items-center border-[0.5px] border-black">
          <img src={store} alt="" className="h-[80px]" />
          <h4 className="text-xl font-bold max-md:font-semibold max-md:text-lg">
            10.5k
          </h4>
          <p className="text-sm max-md:text-xs text-center">
            Sallers active our site
          </p>
        </div>
        <div className="md:h-56  p-3 flex flex-col  rounded-sm justify-center items-center border-[0.5px] border-black">
          <img src={store} alt="" className="h-[80px]" />
          <h4 className="text-xl font-bold max-md:font-semibold max-md:text-lg">
            10.5k
          </h4>
          <p className="text-sm max-md:text-xs text-center">
            Sallers active our site
          </p>
        </div>
        <div className="md:h-56  p-3 flex flex-col  rounded-sm justify-center items-center border-[0.5px] border-black">
          <img src={store} alt="" className="h-[80px]" />
          <h4 className="text-xl font-bold max-md:font-semibold max-md:text-lg">
            10.5k
          </h4>
          <p className="text-sm max-md:text-xs text-center">
            Sallers active our site
          </p>
        </div>
        <div className="md:h-56  p-3 flex flex-col  rounded-sm justify-center items-center border-[0.5px] border-black">
          <img src={store} alt="" className="h-[80px]" />
          <h4 className="text-xl font-bold max-md:font-semibold max-md:text-lg">
            10.5k
          </h4>
          <p className="text-sm max-md:text-xs text-center">
            Sallers active our site
          </p>
        </div>



      </div>
    </div>
  );
}

export default AboutPage;
