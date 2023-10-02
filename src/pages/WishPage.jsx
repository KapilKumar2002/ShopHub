import React from "react";
import Heading from "../components/Heading";
import WishCard from "../components/WishCard";
import ProductCard from "../components/ProductCard";

const WishPage = () => {
  return (
    <section className="max-container my-10 max-sm:p-[5px]  p-2 flex flex-col gap-10">
      <div>
        <Heading title={"Wishlist"} heading={"Wishlist (4)"} />
        <div className="grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:gap-1 max-sm:p-1 gap-4 p-4">
          <WishCard />
          <WishCard />
          <WishCard />
          <WishCard />
          <WishCard />
          <WishCard />
          <WishCard />
          <WishCard />
          <WishCard />
          <WishCard />
        </div>
      </div>
      <div>
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
};

export default WishPage;
