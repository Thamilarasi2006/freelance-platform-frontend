import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
    >
      <div className="p-6">
        {/* Category Badge */}
        <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
          {project.category}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Budget & Timeline */}
        <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b">
          <div>
            <p className="text-gray-500 text-sm">Budget</p>
            <p className="text-lg font-bold text-green-600">${project.budget}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Timeline</p>
            <p className="text-lg font-bold text-gray-800">{project.timeline}</p>
          </div>
        </div>

        {/* Skills Required */}
        <div className="mb-4">
          <p className="text-gray-500 text-sm mb-2">Skills Required:</p>
          <div className="flex flex-wrap gap-2">
            {project.skills.slice(0, 3).map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {skill}
              </span>
            ))}
            {project.skills.length > 3 && (
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                +{project.skills.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Client Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img
              src={project.clientImage}
              alt={project.clientName}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">{project.clientName}</p>
              <div className="flex items-center space-x-1 text-yellow-400 text-xs">
                <FaStar size={12} />
                <span className="text-gray-600">{project.clientRating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <Link
          to={`/projects/${project.id}`}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-center font-semibold"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
