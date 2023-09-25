import React from "react";

const Heading = ({ title,heading }) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="h-6 w-3 bg-orange-500 rounded-[3px]"></div>
        <p className="font-bold text-xs text-orange-500">{title}</p>
      </div>
      <h1 className="mt-2 font-semibold text-xl">{heading}</h1>
    </div>
  );
};

export default Heading;
