import React from "react";
import ProductCard from "../components/ProductCard";

const ListPage = () => {
  return (
    <div className="flex my-10 max-md:flex-col mx-5 max-md:mx-2 max-sm:mx-1">
      <div className=" w-[20%]"></div>
      <div className="max-container w-full">
        <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:gap-1 gap-3">
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
    </div>
  );
};

export default ListPage;
