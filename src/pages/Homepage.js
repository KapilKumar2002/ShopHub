import React from "react";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import CategoryCard from "../components/CategoryCard";
import {
  arr1,
  arr2,
  arr4,
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  featured1,
} from "../assets/images/products";
import FeaturedCard from "../components/FeaturedCard";
import AccessoryCard from "../components/AccessoryCard";
import FashionCard from "../components/FashionCard";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <section className="max-container px-5">
      <Banner />
      <div className="py-10 flex flex-col gap-10">
        <div className="product-catalog">
          <Heading title={"Categories"} heading={"Browse By Category"} />
          <div className="flex justify-between">
            <CategoryCard title={"Title"} />
            <CategoryCard title={"Title"} />
            <CategoryCard title={"Title"} />
            <CategoryCard title={"Title"} />
            <CategoryCard title={"Title"} />
            <CategoryCard title={"Title"} />
            <CategoryCard title={"Title"} />
            <CategoryCard title={"Title"} />
            <CategoryCard title={"Title"} />
          </div>
        </div>
        <div className="product-catalog">
          <Heading
            title={"Featured Products"}
            heading={"Our Featured Products"}
          />
          <div className="grid grid-cols-5 gap-4">
            <FeaturedCard
              featured={featured1}
              title={"Slim Fit Dress Shirt"}
              start={"From 799"}
            />
            <FeaturedCard
              featured={featured1}
              title={"Slim Fit Dress Shirt"}
              start={"From 799"}
            />
            <FeaturedCard
              featured={featured1}
              title={"Slim Fit Dress Shirt"}
              start={"From 799"}
            />
            <FeaturedCard
              featured={featured1}
              title={"Slim Fit Dress Shirt"}
              start={"From 799"}
            />
            <FeaturedCard
              featured={featured1}
              title={"Slim Fit Dress Shirt"}
              start={"From 799"}
            />
            <FeaturedCard
              featured={featured1}
              title={"Slim Fit Dress Shirt"}
              start={"From 799"}
            />
            <FeaturedCard
              featured={featured1}
              title={"Slim Fit Dress Shirt"}
              start={"From 799"}
            />
            <FeaturedCard
              featured={featured1}
              title={"Slim Fit Dress Shirt"}
              start={"From 799"}
            />
            <FeaturedCard
              featured={featured1}
              title={"Slim Fit Dress Shirt"}
              start={"From 799"}
            />
            <FeaturedCard
              featured={featured1}
              title={"Slim Fit Dress Shirt"}
              start={"From 799"}
            />
          </div>
        </div>
        <div className="product-catalog">
          <Heading title={"Fashion"} heading={"Trending Fashion"} />
          <div className="grid grid-cols-8 gap-10">
            <FashionCard image={fa1} />
            <FashionCard image={fa2} />
            <FashionCard image={fa3} />
            <FashionCard image={fa4} />
            <FashionCard image={fa5} />
            <FashionCard image={fa6} />
            <FashionCard image={fa4} />
            <FashionCard image={fa5} />
          </div>
        </div>
        <div className="product-catalog">
          <Heading title={"This month"} heading={"New Arrivals"} />
          <div className="grid grid-cols-3 gap-2">
            <div className="relative  bg-black">
              <img
                src={arr1}
                alt=""
                className="object-fill absolute bottom-0"
              />
              <div className="absolute bottom-0 m-4">
                <h1 className="text-white font-semibold text-lg">
                  Playstation 5
                </h1>
                <p className="text-xs text-white">
                  Black and white version of PS5
                </p>
                <Link className="text-white underline">Shop Now</Link>
              </div>
            </div>
            <div className=" grid grid-rows-2">
              <div className="relative w-full h-full">
                <img src={arr4} className="absolute" alt="" />
                <div className="m-4 absolute bottom-0">
                  <h1 className="font-semibold">Family Dressing</h1>
                  <p className="text-sm font-medium">Designed clothes for family</p>
                  <Link className="underline">Buy Now</Link>
                </div>
              </div>
              <Link>
                <img src={arr2} alt="" />
              </Link>
            </div>
            <div className="relative bg-black">
              <img
                src={arr1}
                alt=""
                className="object-fill absolute bottom-0"
              />
              <div className="absolute bottom-0 m-4">
                <h1 className="text-white font-semibold text-lg">
                  Playstation 5
                </h1>
                <p className="text-xs text-white">
                  Black and white version of PS5
                </p>
                <Link className="text-white underline">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="product-catalog">
          <Heading title={"Accessories"} heading={"Electronics Accessories"} />
          <div className="grid grid-cols-3 gap-10">
            <AccessoryCard />
            <AccessoryCard />
            <AccessoryCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
