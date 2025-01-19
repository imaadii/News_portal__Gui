import React, { useState, useEffect } from "react";
import axios from "axios";
// import "bootstrap-icons/font/bootstrap-icons.css";
import WeatherAndDate from "./WeatherAndDate";
// import { Link } from "react-router-dom";
// import { CiFacebook } from "react-icons/ci";
// import { FiInstagram } from "react-icons/fi";
// import { FiYoutube } from "react-icons/fi";
// import { FaSquareXTwitter } from "react-icons/fa6";\
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Topbar = () => {
  return (
    <>
      <div className="h-12 flex items-center justify-between border-b border-gray-300">
        <WeatherAndDate />
        <div className="flex items-center">
          {/* <button className="bg-blue-700 px-3 py-2 font-medium text-white rounded group hover:bg-white hover:text-blue-700 transition-colors duration-300">
            <span className="group-hover:text-blue-700">SUBSCRIBE</span>
          </button>
          <Link to="/login" className="text-black no-underline px-3 mt-2">
            <h4 className=" hover:text-blue-800 text-lg font-normal">Login</h4>
          </Link> */}

          <div className="flex justify-center items-center space-x-2 px-1">
            {/* Facebook Icon */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={22} color="#1877F2" />
            </a>

            {/* YouTube Icon */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={22} color="#FF0000" />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={22} color="#E1306C" />
            </a>

            {/* Twitter Icon */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={22} color="#1DA1F2" />
            </a>
          </div>
        </div>
      </div>
      {/* <hr className="border-gray-500 m-0" /> */}
    </>
  );
};

export default Topbar;
