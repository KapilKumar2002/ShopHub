import React from "react";


const ServiceCard = ({icon,title,desc}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-14 w-14 bg-orange-200 rounded-full flex justify-center items-center mb-2">
        <div className="h-10 w-10 flex justify-center items-center bg-orange-500 rounded-full">
          <img className="h-8 w-8 contain-fill" src={icon} alt="" />
        </div>
      </div>
      <h1 className="font-semibold text-sm max-md:text-center">{title}</h1>
      <p className="text-xs max-md:text-center">{desc}</p>
    </div>
  );
};

export default ServiceCard;
