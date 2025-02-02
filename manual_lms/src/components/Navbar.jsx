import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8 h-8" /> 
          <span className="text-2xl font-bold text-blue-600">EduLearn</span>
        </div>

        <div className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/courses" className="text-gray-700 hover:text-blue-600">Courses</Link>
          <a href="#why-choose" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>

        <div className="flex space-x-4">
          <Link to="/sign-up" className="bg-transparent border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white">
            Sign up
          </Link>
          <Link to="/login" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
