import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

function FreelancerCard({ freelancer }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
    >
      <div className="p-6 text-center">
        {/* Profile Image */}
        <div className="mb-4">
          <img
            src={freelancer.image}
            alt={freelancer.name}
            className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100"
          />
        </div>

        {/* Name & Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-1">
          {freelancer.name}
        </h3>
        <p className="text-blue-600 font-semibold mb-2">{freelancer.title}</p>

        {/* Rating */}
        <div className="flex items-center justify-center space-x-2 mb-3">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} size={14} />
            ))}
          </div>
          <span className="text-gray-600 text-sm">
            {freelancer.rating} ({freelancer.reviews} reviews)
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center text-gray-500 text-sm mb-3">
          <FaMapMarkerAlt size={14} className="mr-1" />
          {freelancer.location}
        </div>

        {/* Hourly Rate */}
        <div className="mb-4 pb-4 border-b">
          <p className="text-gray-500 text-sm">Hourly Rate</p>
          <p className="text-2xl font-bold text-green-600">${freelancer.hourlyRate}/hr</p>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <p className="text-gray-500 text-sm mb-2">Top Skills:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {freelancer.skills.slice(0, 3).map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects Completed */}
        <p className="text-gray-600 text-sm mb-4">
          <span className="font-bold text-gray-800">{freelancer.projectsCompleted}</span> Projects Completed
        </p>

        {/* View Profile Button */}
        <Link
          to={`/freelancers/${freelancer.id}`}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold"
        >
          View Profile
        </Link>
      </div>
    </motion.div>
  );
}

export default FreelancerCard;
