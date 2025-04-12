import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    onLogout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <Link to="/browse-bikes" className="text-2xl font-bold text-blue-600">
        ZoomBike 🚴
      </Link>
      <div className="space-x-4 hidden md:flex">
        <Link to="/browse-bikes" className="text-gray-700 hover:text-blue-600">Browse</Link>
        <Link to="/list-bike" className="text-gray-700 hover:text-blue-600">List Your Bike</Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
        <button
          onClick={handleLogout}
          className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
        >
          Logout
        </button>
      </div>
      <div className="md:hidden">
        {/* Optional: Add mobile menu icon here */}
      </div>
    </nav>
  );
};

export default Navbar;
