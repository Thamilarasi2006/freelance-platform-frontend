import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FaBriefcase className="text-blue-600 text-2xl" />
            <span className="text-2xl font-bold text-gray-800">FreelanceHub</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition">
              Projects
            </Link>
            <Link to="/freelancers" className="text-gray-700 hover:text-blue-600 transition">
              Freelancers
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition">
              Dashboard
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:border-blue-600 transition"
            >
              Login
            </Link>
            <Link 
              to="/login" 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/projects" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Projects
            </Link>
            <Link to="/freelancers" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Freelancers
            </Link>
            <Link to="/dashboard" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Dashboard
            </Link>
            <Link to="/login" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Login
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
