import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Slider from "react-slick";
import CategoryCard from "../components/CategoryCard";
import {
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
import ServiceCard from "../components/ServiceCard";
import {
  ArrowBackRoundedIcon,
  ArrowForwardRoundedIcon,
  apple,
  cc,
  fd,
  secure,
} from "../assets/icons";
import ExclusiveOffer from "../components/ExclusiveOffer";
import NewArrival from "../components/NewArrival";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow -right-5" onClick={onClick}>
      <ArrowForwardRoundedIcon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow -left-5" onClick={onClick}>
      <ArrowBackRoundedIcon />
    </div>
  );
}

const Homepage = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="max-container ">
      <Banner />
      <div className="p-10 max-lg:p-7 max-md:p-5 max-sm:p-3 flex flex-col gap-10">
        <div className="product-catalog">
          <Heading
            title={"Categories"}
            heading={"Browse By Category"}
            btn={false}
          />
          <Slider {...settings}>
            <CategoryCard title={"Clothes"} image={apple} />
            <CategoryCard title={"Clothes"} image={apple} />
            <CategoryCard title={"Clothes"} image={apple} />
            <CategoryCard title={"Clothes"} image={apple} />
            <CategoryCard title={"Clothes"} image={apple} />
            <CategoryCard title={"Clothes"} image={apple} />
            <CategoryCard title={"Clothes"} image={apple} />
            <CategoryCard title={"Clothes"} image={apple} />
            <CategoryCard title={"Clothes"} image={apple} />
            <CategoryCard title={"Clothes"} image={apple} />
            <CategoryCard title={"Clothes"} image={apple} />
            <CategoryCard title={"Clothes"} image={apple} />
            <CategoryCard title={"Clothes"} image={apple} />
            <CategoryCard title={"Clothes"} image={apple} />
            <CategoryCard title={"Clothes"} image={apple} />
            <CategoryCard title={"Clothes"} image={apple} />
          </Slider>
        </div>

        <div className="product-catalog">
          <Heading
            title={"Featured Products"}
            heading={"Our Featured Products"}
          />
          <div className="grid max-md:grid-cols-3 max-lg:grid-cols-4 grid-cols-5 gap-4 max-md:gap-2">
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
        <ExclusiveOffer />
        <div className="product-catalog">
          <Heading title={"Fashion"} heading={"Trending Fashion"} />
          <div className="grid grid-cols-6 max-sm:gap-2 gap-5">
            <FashionCard image={fa1} />
            <FashionCard image={fa2} />
            <FashionCard image={fa3} />
            <FashionCard image={fa4} />
            <FashionCard image={fa5} />
            <FashionCard image={fa6} />
          </div>
        </div>
        <div className="product-catalog">
          <Heading title={"This month"} heading={"New Arrivals"} />
          <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-5 max-sm:gap-2">
            <NewArrival />
            <NewArrival />
            <NewArrival />
            <NewArrival />
          </div>
        </div>
        <div className="product-catalog">
          <Heading title={"Accessories"} heading={"Electronics Accessories"} />
          <div className="grid grid-cols-3 max-[800px]:grid-cols-1 max-lg:gap-2 gap-10">
            <AccessoryCard />
            <AccessoryCard />
            <AccessoryCard />
          </div>
        </div>
        <div className="flex justify-evenly gap-2 max-sm:flex-col max-sm:gap-10 max-sm:mb-10">
          <ServiceCard
            icon={fd}
            title={"FREE & FAST DELIVERY"}
            desc={`Free delivery for all orders over Rs 799`}
          />
          <ServiceCard
            icon={cc}
            title={"24/7 CUSTOMER SERVICE"}
            desc={`Friendly 24/7 customer support`}
          />
          <ServiceCard
            icon={secure}
            title={"MONEY BACK GUARANTEE"}
            desc={`We return money within 10 days`}
          />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
