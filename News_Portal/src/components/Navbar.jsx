import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center py-2 bg-gray-200 pr-32 relative">
      <Link to="/news/home" className="text-black no-underline"><h4 className=" hover:text-blue-700 text-base font-normal">Home</h4></Link>
      <Link to="/news/world" className="text-black no-underline"><h4 className=" hover:text-blue-700 text-base font-normal">World</h4></Link>
      <Link to="/news/india" className="text-black no-underline"><h4 className=" hover:text-blue-700 text-base font-normal">India</h4></Link>
      <Link to="/news/politics" className="text-black no-underline"><h4 className=" hover:text-blue-700 text-base font-normal">Politics</h4></Link>
      <Link to="/news/entertainment" className="text-black no-underline"><h4 className=" hover:text-blue-700 text-base font-normal">Entertainment</h4></Link>
      <Link to="/news/business" className="text-black no-underline"><h4 className=" hover:text-blue-700 text-base font-normal">Business</h4></Link>
      <Link to="/news/sports" className="text-black no-underline"><h4 className=" hover:text-blue-700 text-base font-normal">Sports</h4></Link>
      <Link to="/news/cities" className="text-black no-underline"><h4 className=" hover:text-blue-700 text-base font-normal">Cities</h4></Link>
      <Link to="/news/lifestyle" className="text-black no-underline"><h4 className=" hover:text-blue-700 text-base font-normal">Lifestyle</h4></Link>
      <Link to="/news/tech" className="text-black no-underline"><h4 className=" hover:text-blue-700 text-base font-normal">Tech</h4></Link>
      <Link to="/news/research" className="text-black no-underline"><h4 className=" hover:text-blue-700 text-base font-normal">Research</h4></Link>
      <Link to="/news/video" className="text-black no-underline"><h4 className=" hover:text-blue-700 text-base font-normal">Video</h4></Link>
    </div>
  );
};

export default Navbar;
