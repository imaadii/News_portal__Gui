import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const AdminNavbar = () => {
  return (
    <div className="flex gap-4 justify-around items-center py-2 bg-gray-300 pr-32 relative">
      <Link to="/newsGrid"><h4 className="hover:text-blue-700 text-lg">Home</h4></Link>
      <Link to="/categoryForm"><h4 className="hover:text-blue-700 text-lg">Custom Form</h4></Link>

      <Link to="/Signup"><h4 className="hover:text-blue-800 text-lg">SignUp</h4></Link>

      <Link to="/login"><h4 className="hover:text-blue-800 text-lg">Logout</h4></Link>
      <button className="bg-blue-700 px-3 py-2 font-medium text-white rounded absolute right-2 top-1 group hover:bg-white hover:text-blue-700 transition-colors duration-300">
        <span className="group-hover:text-blue-700">SUBSCRIBE</span>
      </button>

      
    </div>
  );
};

export default AdminNavbar;
