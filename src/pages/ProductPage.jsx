import React from "react";

import { featured1 } from "../assets/images/products";
import { star } from "../assets/icons";
import ProductCard from "../components/ProductCard";
import Heading from "../components/Heading";

function ProductPage() {
  return (
    <section className="max-container my-12">
      <div className="flex gap-10">
        <div className="grid grid-rows-4 gap-5 w-40 h-30">
          <div className="bg-slate-200 rounded-md p-4">
            <img src={featured1} alt="" />
          </div>
          <div className="bg-slate-200 rounded-md p-4">
            <img src={featured1} alt="" />
          </div>
          <div className="bg-slate-200 rounded-md p-4">
            <img src={featured1} alt="" />
          </div>
          <div className="bg-slate-200 rounded-md p-4">
            <img src={featured1} alt="" />
          </div>
        </div>
        <div className="bg-slate-200 rounded-md p-6 flex justify-center items-center">
          <img src={featured1} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <h5>Havic HV G-92 Gamepad</h5>
          <div className="flex gap-2 items-center">
            <div className="h-4 flex gap-1">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
            <div>(150 Reviews)</div>
            <div>|</div>
            <div className="text-orange-300">In Stock</div>
          </div>
          <h5>$192.00</h5>
          <p>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <div className="h-[1px] bg-black w-full"></div>
          <div className="flex items-center gap-2">
            Colours:
            <div className="bg-slate-400 rounded-full h-4 w-4"></div>
            <div className="bg-slate-600 rounded-full h-4 w-4"></div>
          </div>
          <div className="flex items-center gap-3 ">
            Size:
            <div className=" ml-3 h-8 w-8 rounded-md p-1 border-2 border-cyan-500 text-center">
              <p className="text-sm font-medium">XS</p>
            </div>
            <div className="h-8 w-8 rounded-md p-1 border-2 border-cyan-500 text-center">
              <p className="text-sm font-medium">S</p>
            </div>
            <div className="h-8 w-8 rounded-md p-1 border-2 border-cyan-500 text-center">
              <p className="text-sm font-medium">M</p>
            </div>
            <div className="h-8 w-8 rounded-md p-1 border-2 border-cyan-500 text-center">
              <p className="text-sm font-medium">L</p>
            </div>
            <div className="h-8 w-8 rounded-md p-1 border-2 border-cyan-500 text-center">
              <p className="text-sm font-medium">XL</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-8 w-28  flex  border-[1px] border-black rounded-sm">
              <div className="h-full w-[27%] p-1 flex justify-center  border-r-[1px] border-black">
                {/* <img src={Minus} alt="" className="flex items-center" /> */}
              </div>
              <div className="h-full flex justify-center w-[55%] ">2</div>
              <div className="h-full w-[27%] bg-slate-600 p-2 flex justify-center items-center border-l-[1px] border-black">
                {/* <img src={Plus} alt="" /> */}
              </div>
            </div>
            <button className="bg-orange-400 px-10 py-1 rounded-sm">
              Buy Now
            </button>
            <div className="h-8 w-8 rounded-md p-0.5 border-2 border-cyan-500 text-center">
              {/* <img src={Heart} alt="" /> */}
            </div>
          </div>
          <div className="h-44 w-full border-[1px] border-black rounded-sm">
            <div className="flex items-center gap-5 h-[50%] p-7">
              {/* <img className="h-10 w-10" src={Delivery} alt="" /> */}
              <div>
                <h4 className="text-sm font-medium pb-2">Free Delivery</h4>
                <p className="text-xs">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="h-[0.5px] w-full bg-black "></div>
            <div className="flex items-center gap-5 h-[50%] p-5">
              {/* <img className="h-10 w-10" src={Return} alt="" /> */}
              <div>
                <h4 className="text-sm font-medium pb-2 ">Return Delivery</h4>
                <p className="text-xs">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <Heading title={"Just for you"} heading={"Similar products"}/>
        <div className="grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:gap-1 max-sm:p-1 gap-4 p-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
