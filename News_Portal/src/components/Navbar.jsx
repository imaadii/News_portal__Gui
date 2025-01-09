import React from "react";

const Navbar = () => {
  return (
    <div className="flex gap-4 justify-around items-center py-2 bg-gray-300 pr-32 relative">
      <h4 className="hover:text-blue-700 text-lg">Home</h4>
      <h4 className="hover:text-blue-700 text-lg">World</h4>
      <h4 className="hover:text-blue-700 text-lg">India</h4>
      <h4 className="hover:text-blue-700 text-lg">Politics</h4>
      <h4 className="hover:text-blue-700 text-lg">Entertainment</h4>
      <h4 className="hover:text-blue-700 text-lg">Business</h4>
      <h4 className="hover:text-blue-700 text-lg">Sports</h4>
      <h4 className="hover:text-blue-700 text-lg">Cities</h4>
      <h4 className="hover:text-blue-700 text-lg">Lifestyle</h4>
      <h4 className="hover:text-blue-700 text-lg">Tech</h4>
      <h4 className="hover:text-blue-700 text-lg">Research</h4>
      <h4 className="hover:text-blue-700 text-lg">Video</h4>
      <a href="/login"><h4 className="hover:text-blue-800 text-lg">Login</h4></a>
      <button className="bg-blue-700 px-3 py-2 font-medium text-white rounded absolute right-2 top-1 group hover:bg-white hover:text-blue-700 transition-colors duration-300">
        <span className="group-hover:text-blue-700">SUBSCRIBE</span>
      </button>
    </div>
  );
};

export default Navbar;
