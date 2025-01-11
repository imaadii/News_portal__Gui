import React from "react";
// import WeatherAndDate from "./WeatherAndDate";
import Topbar from "./Topbar";

const Header = () => {
  return (
    <>
    {/* <WeatherAndDate /> */}
    <Topbar />
      <div>
        <div className="logo flex justify-center py-2 mt-2">
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
