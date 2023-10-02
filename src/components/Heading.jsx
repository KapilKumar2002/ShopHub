import React from "react";

const Heading = ({ title, heading,btn=true }) => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="flex items-center gap-2">
          <div className="h-6 w-3 bg-orange-500 rounded-[3px]"></div>
          <p className="font-bold text-xs text-orange-500">{title}</p>
        </div>
        <h1 className="mt-2 font-semibold max-md:text-lg text-xl">{heading}</h1>
      </div>
      {btn ? <div>
        <button className="bg-orange-500 py-3 px-6 max-md:py-2 max-md:px-3 max-md:text-xs rounded-lg text-sm  font-semibold text-white">VIEW ALL</button>
      </div> : null}
    </div>
  );
};

export default Heading;
