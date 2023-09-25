import React, { useState } from "react";
import { logo } from "../assets/images";
import { Link } from "react-router-dom";
import {
  AccountCircleOutlinedIcon,
  ArrowDropDownIcon,
  SearchRoundedIcon,
  ShoppingCartOutlinedIcon,
} from "../assets/icons";

const Header = () => {
  const [drop, setDrop] = useState(false);

  return (
    <section className="bg-orange-100">
      <header className="max-container px-4 py-4 flex items-center justify-between">
      <Link to={"/"}>
        <img src={logo} alt="" className="w-24 object-cover" />
      </Link>
      <div className="w-[30%] flex bg-white rounded-md shadow-sm">
        <div className="relative items-center ">
          <div
            onClick={() => setDrop(!drop)}
            className="cursor-pointer rounded-tl-md rounded-bl-md bg-orange-200 hover:bg-orange-300 p-2 flex items-center justify-center "
          >
            <span className="text-xs"> All </span>
            <ArrowDropDownIcon />
          </div>
          {drop ? (
            <ul className="z-10 absolute h-60 overflow-y-auto w-60 bg-white p-1 top-11 left-0 border-2 border-black">
              <li className="hover:bg-blue-500 cursor-pointer">
                Amazon Datalink
              </li>
              <li className="hover:bg-blue-500 cursor-pointer">
                Amazon Datalink
              </li>
              <li className="hover:bg-blue-500 cursor-pointer">
                Amazon Datalink
              </li>
              <li className="hover:bg-blue-500 cursor-pointer">
                Amazon Datalink
              </li>
              <li className="hover:bg-blue-500 cursor-pointer">
                Amazon Datalink
              </li>
              <li className="hover:bg-blue-500 cursor-pointer">
                Amazon Datalink
              </li>
              <li className="hover:bg-blue-500 cursor-pointer">
                Amazon Datalink
              </li>
              <li className="hover:bg-blue-500 cursor-pointer">
                Amazon Datalink
              </li>
              <li className="hover:bg-blue-500 cursor-pointer">
                Amazon Datalink
              </li>
              <li className="hover:bg-blue-500 cursor-pointer">
                Amazon Datalink
              </li>
              <li className="hover:bg-blue-500 cursor-pointer">
                Amazon Datalink
              </li>
              <li className="hover:bg-blue-500 cursor-pointer">
                Amazon Datalink
              </li>
              <li className="hover:bg-blue-500 cursor-pointer">
                Amazon Datalink
              </li>
              <li className="hover:bg-blue-500 cursor-pointer">
                Amazon Datalink
              </li>
            </ul>
          ) : null}
        </div>

        <input type="text" className="block w-full outline-none px-2" />
        <div className="rounded-tr-md rounded-br-md w-16 flex items-center justify-center bg-orange-500 cursor-pointer">
          <SearchRoundedIcon className="text-white" />
        </div>
      </div>
      <nav className="flex gap-7 text-sm">
        <Link to={"/"} className="hover:underline hover:text-orange-500">
          HOME
        </Link>
        <Link to={"/"} className="hover:underline hover:text-orange-500">
          SHOP
        </Link>
        <Link to={"/"} className="hover:underline hover:text-orange-500">
          BLOG
        </Link>
        <Link to={"/"} className="hover:underline hover:text-orange-500">
          ABOUT
        </Link>
        <Link to={"/"} className="hover:underline hover:text-orange-500">
          CONTACT
        </Link>
      </nav>
      <div className="flex gap-6">
        <Link className="">
          <AccountCircleOutlinedIcon className="text-orange-500" />
        </Link>
        <Link className="relative">
          <ShoppingCartOutlinedIcon className="text-orange-500" />
          <b className="absolute right-[50%] transform translate-x-[50%] bottom-4 text-orange-700">0</b>
        </Link>
      </div>
    </header>
    </section>
  );
};

export default Header;
