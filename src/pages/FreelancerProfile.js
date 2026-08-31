import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaCalendar, FaTrophy, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

function FreelancerProfile() {
  const { id } = useParams();

  const freelancer = {
    id: id,
    name: 'Alex Johnson',
    title: 'Full Stack Developer',
    image: 'https://via.placeholder.com/150',
    location: 'San Francisco, USA',
    rating: 4.9,
    reviews: 127,
    hourlyRate: 85,
    bio: 'Experienced Full Stack Developer with 8+ years of expertise building scalable web applications. Specialized in React, Node.js, and AWS.',
    skills: ['React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL'],
    projectsCompleted: 89,
    totalEarnings: '$125,000+',
    memberSince: 'January 2018',
    portfolio: [
      { title: 'E-commerce Platform', description: 'Built a full-stack e-commerce platform with payment integration' },
      { title: 'Real-time Chat App', description: 'Developed a real-time chat application using Socket.io' },
      { title: 'Analytics Dashboard', description: 'Created an analytics dashboard with D3.js visualizations' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={freelancer.image}
                alt={freelancer.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-100"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-grow">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{freelancer.name}</h1>
              <p className="text-xl text-blue-600 font-semibold mb-2">{freelancer.title}</p>

              {/* Rating */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} size={16} />
                    ))}
                  </div>
                  <span className="text-gray-700 font-semibold">{freelancer.rating}</span>
                  <span className="text-gray-500">({freelancer.reviews} reviews)</span>
                </div>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-gray-500 text-sm">Hourly Rate</p>
                  <p className="text-2xl font-bold text-green-600">${freelancer.hourlyRate}/hr</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Projects Completed</p>
                  <p className="text-2xl font-bold text-blue-600">{freelancer.projectsCompleted}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Member Since</p>
                  <p className="text-lg font-semibold text-gray-800">{freelancer.memberSince}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Total Earnings</p>
                  <p className="text-2xl font-bold text-green-600">{freelancer.totalEarnings}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center text-gray-600 mb-6">
                <FaMapMarkerAlt size={16} className="mr-2" />
                {freelancer.location}
              </div>

              {/* Hire Button */}
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                Hire Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
          <p className="text-gray-600 leading-relaxed">{freelancer.bio}</p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {freelancer.skills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {freelancer.portfolio.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default FreelancerProfile;