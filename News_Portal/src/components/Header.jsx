import React from "react";
import WeatherAndDate from "./WeatherAndDate";

const Header = () => {
  return (
    <>
    <WeatherAndDate />
      <div>
        {/* <div className="flex gap-3 justify-center py-2">
          <h6 className="text-red-600">English</h6>
          <h6 className="text-green-700">Hindi</h6>
          <h6 className="text-yellow-600">Gujrati</h6>
          <h6 className="text-blue-700">Marathi</h6>
          <h6 className="text-emerald-700">Punjabi</h6>
        </div> */}
        <div className="logo flex justify-center py-2">
          <h1 className="md:text-4xl lg:text-6xl">
            The Gl<div className="inline-block globe animate-spin"></div>bal{' '}
            <span className="font-semibold text-blue-800 font-serif">WITNESS</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
