import React from "react";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { DeleteIcon } from "../assets/icons";
import { featured1 } from "../assets/images/products";
import ProductCard from "../components/ProductCard";
import Heading from "../components/Heading";

function CartPage() {
  const [checked, setChecked] = React.useState(false);
  function handleChange(e) {
    setChecked(e.target.checked);
  }

  return (
    <section className="my-10 max-container max-lg:mx-10">
      <div className="flex max-lg:flex-col gap-8">
        <div className="max-lg:w-full w-[60%] bg-orange-200 p-4 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div>
              <h5 className="font-semibold">Items in Cart</h5>
              <div className="flex items-center">
                <input
                  className="h-5 w-7"
                  type="checkbox"
                  onChange={handleChange}
                />
                <br></br>
                {checked ? <div></div> : <div></div>}1 of 1items selected
              </div>
            </div>
            <div className="rounded-lg flex justify-center items-center p-1 w-[60px">
              <DeleteIcon />
            </div>
          </div>
          <div className="h-[0.5px] bg-black"></div>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className="bg-orange-100 relative w-40 p-2 border-[1px] border-black flex items-center h-44">
                <img className="" src={featured1} alt="" />
              </div>
              <input
                className="h-5 w-7 absolute mt-1"
                type="checkbox"
                onChange={handleChange}
              />
              <br></br>
              {checked ? <div></div> : <div></div>}
              <div>
                <h3 className="font-semibold">KALENJI</h3>
                <h2 className="font-medium text-sm">
                  Men Running Shoes Run 100 - Grey
                </h2>
                <h1 className="font-light text-xs">Ref: 8351755</h1>
                <div className="flex items-center gap-2">
                  <p className="font-semibold">₹1,199</p>
                  <p className="line-through text-xs">₹1,399</p>
                </div>
                <select name="" id=""></select>
                <p className="text-sm font-semibold">
                  Delivery by 01st Oct 2023
                </p>
                <div className="flex items-center">
                  {/* <TimerOutlined className="text-orange-400"></TimerOutlined> */}
                  <p className="text-sm font-bold">In 13491 cart(s) now</p>
                </div>
              </div>
            </div>
            <DeleteIcon></DeleteIcon>
          </div>
        </div>

        <div className="max-lg:w-auto w-[40%] flex flex-col gap-2 h-full bg-orange-300 rounded-md p-5">
          <h4>Order Summary</h4>
          <div className="flex justify-between">
            <p>Total price (Inc GST)</p>
            <p>₹1,199</p>
          </div>
          <div className="flex justify-between">
            <p>Discount</p>
            <p>-₹300</p>
          </div>
          <div className="flex justify-between">
            <p>Estimated Delivery Fee</p>
            <p>
              ₹49
              <span className="line-through">₹129</span>
            </p>
          </div>
          <div className="h-[0.5px] bg-black"></div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>₹948</p>
          </div>
          <div className="h-12 bg-orange-500 text-center flex items-center justify-center rounded-md text-white font-medium">
            You save ₹380 in this order
          </div>
          <button className="bg-orange-200 flex justify-center items-center w-full h-12 rounded-md text-white font-semibold">
            <ShoppingCartOutlined></ShoppingCartOutlined>
            PROCEED TO CHECKOUT
          </button>
          <div className="grid grid-cols-3 h-32 gap-3">
            <div className="bg-orange-100 flex justify-center text-xs text-center flex-col items-center rounded-md">
              {/* <img src={Easy} className="h-10 pb-1" alt="" /> */}
              Easy returns
            </div>
            <div className="bg-orange-100 flex justify-center text-xs text-center flex-col items-center rounded-md">
              {/* <img src={Truck} className="h-10 pb-1" alt="" /> */}
              Home Delivery at Your Doorstep
            </div>
            <div className="bg-orange-100 flex justify-center text-xs text-center flex-col items-center rounded-md">
              {/* <img src={Warrenty} className="h-10 pb-1" alt="" /> */}
              Minimum 2 years warranty
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

        </div>
      </div>
    </section>
  );
}

export default CartPage;
