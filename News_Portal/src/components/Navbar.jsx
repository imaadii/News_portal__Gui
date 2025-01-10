import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div className="flex gap-4 justify-around items-center py-2 bg-gray-300 pr-32 relative">
      <Link to="/news/home"><h4 className="hover:text-blue-700 text-lg">Home</h4></Link>
      <Link to="/news/world"><h4 className="hover:text-blue-700 text-lg">World</h4></Link>
      <Link to="/news/india"><h4 className="hover:text-blue-700 text-lg">India</h4></Link>
      <Link to="/news/politics"><h4 className="hover:text-blue-700 text-lg">Politics</h4></Link>
      <Link to="/news/entertainment"><h4 className="hover:text-blue-700 text-lg">Entertainment</h4></Link>
      <Link to="/news/business"><h4 className="hover:text-blue-700 text-lg">Business</h4></Link>
      <Link to="/news/sports"><h4 className="hover:text-blue-700 text-lg">Sports</h4></Link>
      <Link to="/news/cities"><h4 className="hover:text-blue-700 text-lg">Cities</h4></Link>
      <Link to="/news/lifestyle"><h4 className="hover:text-blue-700 text-lg">Lifestyle</h4></Link>
      <Link to="/news/tech"><h4 className="hover:text-blue-700 text-lg">Tech</h4></Link>
      <Link to="/news/research"><h4 className="hover:text-blue-700 text-lg">Research</h4></Link>
      <Link to="/news/video"><h4 className="hover:text-blue-700 text-lg">Video</h4></Link>
      <Link to="/login"><h4 className="hover:text-blue-800 text-lg">Login</h4></Link>
      <button className="bg-blue-700 px-3 py-2 font-medium text-white rounded absolute right-2 top-1 group hover:bg-white hover:text-blue-700 transition-colors duration-300">
        <span className="group-hover:text-blue-700">SUBSCRIBE</span>
      </button>
    </div>
  );
};

export default Navbar;
