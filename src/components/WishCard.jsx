import React from 'react'
import { featured1 } from "../assets/images/products";
import { DeleteIcon, ShoppingCartOutlinedIcon } from "../assets/icons";
const WishCard = () => {
  return (
    <div className="max-h-80 border-[2px] rounded-md mx-auto">
          <div className="w-full  object-cover relative bg-orange-100">
            <img src={featured1} className="max-h-52 p-1 w-full" alt="" />
            <button className="absolute top-3  right-1">
              <DeleteIcon />
            </button>
            <button className="bg-orange-500 w-full text-white font-medium max-sm:py-1 px-1 py-2 max-sm:text-xs">
              <ShoppingCartOutlinedIcon className='text-md' fontSize=''/> Add to cart
            </button>
          </div>
          <div className="max-sm:p-[3px] p-2">
            <h1 className="text-sm max-sm:text-[10px] font-semibold">Gucii Printed T-shirt</h1>
            <div className="flex items-center text-xs gap-1 max-md:text-[8px]">
              <p className="font-semibold">₹1,199</p>
              <p className="line-through ">₹1,399</p>
            </div>
          </div>
        </div>
  )
}

export default WishCard