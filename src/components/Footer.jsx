import React from "react";
import { apple, google } from "../assets/icons";

function Footer() {
  return (
    <footer>
      <div className="bg-orange-300 p-12  w-full flex flex-col justify-center items-center gap-5">
        <h4 className="text-center text-white font-medium text-2xl">
          Subscribe to our newsletter
        </h4>
        <p className="text-center text-white text-sm">
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
          libero et
          <br />
          cursus. Donec non quam urna. Quisque vitae porta ipsum.
        </p>
        <div className="w-[30%] bg-white h-12 flex justify-between p-1.5 rounded-sm mb-2">
          <input
            className="w-full outline-none pl-2"
            type="text"
            placeholder="Email address"
          />
          <button className="bg-orange-400 text-white px-4 rounded-sm text-sm">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="bg-orange-500 w-full">
        <div className=" text-white flex gap-14 justify-center p-10">
          <div>
            <h4 className="text-2xl font-semibold mb-3">ShopHub</h4>
            <p className="text-xs font-light">Customer Supports:</p>
            <span className="font-medium">(629) 555-0129</span>
            <p className="text-xs mt-2">
              4517 Washington Ave.
              <br></br>
              Manchester, Kentucky 39495
            </p>
            <p className="font-medium text-sm mt-2">info@kinbo.com</p>
          </div>
          <div>
            <h4>Top Category</h4>
            <p className="text-xs mt-2">Computer & Laptop</p>
            <span className="text-xs mt-2">SmartPhone</span>
            <p className="text-xs mt-2">Headphone</p>
            <p className="text-sm font-medium mt-2">Accessories</p>
            <p className="text-xs mt-2">Camera & Photo</p>
            <p className="text-xs mt-2">TV & Homes</p>
          </div>
          <div>
            <h4>Quick links</h4>
            <p className="text-xs mt-2">Shop Product</p>
            <span className="text-xs mt-2">Shoping Cart</span>
            <p className="text-xs mt-2">Wishlist</p>
            <p className="text-xs mt-2">Compare</p>
            <p className="text-xs mt-2">Track Order</p>
            <p className="text-xs mt-2">Customer Help</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4>Download APP</h4>
            <div className="flex bg-orange-700 px-5 py-3  rounded-sm justify-center gap-3">
              <img className="w-6 h-6" src={google} alt="" />
              <div>
                <p className="text-[9px] font-light">Get it now</p>
                <p className="text-xs">Google Play</p>
              </div>
            </div>
            <div className="flex bg-orange-700 px-5 py-3  rounded-sm justify-center gap-3">
              <img className="w-6 h-6" src={apple} alt="" />
              <div>
                <p className="text-[9px] font-light">Get it now</p>
                <p className="text-xs">App Store</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="pb-4">Popular Tag</h4>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                <button className="border-l-white border-[0.5px] px-3 py-1 text-xs ">
                  Game
                </button>
                <button className="border-l-white border-[0.5px] px-3 py-1 text-xs ">
                  iPhone
                </button>
                <button className="border-l-white border-[0.5px] px-3 py-1 text-xs ">
                  TV
                </button>
                <button className="border-l-white border-[0.5px] px-3 py-1 text-xs ">
                  Asus Laptops
                </button>
              </div>
              <div className="flex gap-1">
                <button className="border-l-white border-[0.5px] px-3 py-1 text-xs ">
                  Macbook
                </button>
                <button className="border-l-white border-[0.5px] px-3 py-1 text-xs ">
                  SSD
                </button>
                <button className="border-l-white border-[0.5px] px-3 py-1 text-xs ">
                  Graphics Card
                </button>
              </div>
              <div className="flex gap-1">
                <button className="border-l-white border-[0.5px] px-3 py-1 text-xs ">
                  Power Bank
                </button>
                <button className="border-l-white border-[0.5px] px-3 py-1 text-xs ">
                  Smart TV
                </button>
                <button className="border-l-white border-[0.5px] px-3 py-1 text-xs ">
                  Speaker
                </button>
              </div>
              <div className="flex gap-1">
                <button className="border-l-white border-[0.5px] px-3 py-1 text-xs ">
                  Tablet
                </button>
                <button className="border-l-white border-[0.5px] px-3 py-1 text-xs ">
                  Microwave
                </button>
                <button className="border-l-white border-[0.5px] px-3 py-1 text-xs ">
                  Samsung
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
