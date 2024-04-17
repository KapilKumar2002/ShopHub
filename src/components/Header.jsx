import React, { useContext, useEffect, useState } from "react";
import { logo } from "../assets/images/banner";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";

import {
  AccountCircleOutlinedIcon,
  ArrowDropDownIcon,
  FavoriteBorderIcon,
  MenuIcon,
  SearchRoundedIcon,
  ShoppingCartOutlinedIcon,
} from "../assets/icons";
import { UserContext } from "./UserContext";

const Header = () => {
  const [drop, setDrop] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [text] = useTypewriter({
    words: ["men's Shoes", "t-shirts", "sport kit", "trending clothes"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const myDrawer = () => setDrawer(!drawer);

  return (
    <section className="bg-orange-100">
      <header className="max-container max-md:px-2 px-4 py-4 flex items-center justify-between">
        <button className="w-12 md:hidden" onClick={myDrawer}>
          <MenuIcon />
        </button>
        <Link to={"/"} className="max-md:hidden">
          <img src={logo} alt="" className="w-24 object-cover" />
        </Link>
        <div className="max-md:w-full w-[30%] flex bg-white rounded-md shadow-sm">
          <div className="relative items-center ">
            <div
              onClick={() => setDrop(!drop)}
              className="cursor-pointer rounded-tl-md rounded-bl-md bg-orange-200 hover:bg-orange-300  max-sm:px-1 p-2 flex items-center justify-center "
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

          <input
            type="text"
            className="placeholder:text-sm  block w-full outline-none max-sm:px-1 px-2"
            placeholder={`Search ${text}`}
          />
          <div className="rounded-tr-md rounded-br-md  max-sm:w-12 w-16 flex items-center justify-center bg-orange-500 cursor-pointer">
            <SearchRoundedIcon className="text-white" />
          </div>
        </div>
        <nav
          className={`max-md:bg-orange-200 max-md:w-full max-md:p-4 max-md:items-center max-md:absolute z-10 flex max-md:flex-col ${
            drawer ? "top-20" : "-top-64"
          } ease-out duration-700  left-0  gap-7 text-sm`}
        >
          <Link
            onClick={myDrawer}
            to={"/"}
            className="hover:underline hover:text-orange-500"
          >
            HOME
          </Link>
          <Link
            onClick={myDrawer}
            to={"/about"}
            className="hover:underline hover:text-orange-500"
          >
            ABOUT
          </Link>
          <Link
            onClick={myDrawer}
            to={"/contact-us"}
            className="hover:underline hover:text-orange-500"
          >
            CONTACT
          </Link>

          <Link
            to={"/seller"}
            className="hover:underline hover:text-orange-500"
          >
            SELLER
          </Link>
        </nav>
        <div className="max-md:ml-2 flex max-md:gap-2 gap-6">
          <Link className="relative" to={"/wishlist"}>
            <FavoriteBorderIcon className="text-orange-500" />

            <b className="absolute right-[50%] transform translate-x-[50%] bottom-4 text-orange-700">
              0
            </b>
          </Link>
          <Link to={"/auth/login"}>
            <AccountCircleOutlinedIcon className="text-orange-500" />
          </Link>
          <Link className="relative" to={"/cart"}>
            <ShoppingCartOutlinedIcon className="text-orange-500" />
            <b className="absolute right-[50%] transform translate-x-[50%] bottom-4 text-orange-700">
              0
            </b>
          </Link>
        </div>
      </header>
    </section>
  );
};

export default Header;
