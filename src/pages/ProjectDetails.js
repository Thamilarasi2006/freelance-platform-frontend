import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaCheckCircle, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

function ProjectDetails() {
  const { id } = useParams();
  const [bidAmount, setBidAmount] = useState('');
  const [bidMessage, setBidMessage] = useState('');
  const [bidSubmitted, setBidSubmitted] = useState(false);

  const project = {
    id: id,
    title: 'Build a React Dashboard for Analytics',
    category: 'Web Development',
    description: 'We need a responsive analytics dashboard built with React and Chart.js for our fintech startup. The dashboard should display real-time data visualizations, user metrics, and transaction history.',
    budget: 2500,
    timeline: '3 weeks',
    level: 'Intermediate',
    skills: ['React', 'JavaScript', 'Chart.js', 'Tailwind CSS', 'API Integration'],
    clientName: 'John Smith',
    clientImage: 'https://via.placeholder.com/60',
    clientRating: 4.8,
    clientReviews: 45,
    clientMemberSince: 'January 2022',
    fullDescription: `We are looking for an experienced React developer to build a comprehensive analytics dashboard for our fintech platform.

Requirements:
- Build responsive UI using React and Tailwind CSS
- Integrate Chart.js for data visualization
- Connect to REST API endpoints
- Implement user authentication
- Add real-time data updates
- Mobile-friendly design
- Cross-browser compatibility

Deliverables:
- Well-documented source code
- Deployment-ready build
- Documentation for future maintenance
- 2 weeks of free support`,
    bidsReceived: 12,
    applicants: 8,
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    if (bidAmount && bidMessage) {
      setBidSubmitted(true);
      setTimeout(() => {
        setBidAmount('');
        setBidMessage('');
        setBidSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="mb-6">
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {project.category}
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{project.title}</h1>
              </div>

              {/* Project Meta */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 pb-8 border-b">
                <div>
                  <p className="text-gray-500 text-sm">Budget</p>
                  <p className="text-2xl font-bold text-green-600">${project.budget}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Timeline</p>
                  <p className="text-2xl font-bold text-gray-800">{project.timeline}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Level</p>
                  <p className="text-2xl font-bold text-gray-800">{project.level}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Bids</p>
                  <p className="text-2xl font-bold text-blue-600">{project.bidsReceived}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Applicants</p>
                  <p className="text-2xl font-bold text-blue-600">{project.applicants}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About this project</h2>
                <p className="text-gray-600 whitespace-pre-line">{project.fullDescription}</p>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills Required</h2>
                <div className="flex flex-wrap gap-3">
                  {project.skills.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Client Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 mt-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">About the Client</h2>
              <div className="flex items-center space-x-4 mb-6">
                <img src={project.clientImage} alt={project.clientName} className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{project.clientName}</h3>
                  <div className="flex items-center space-x-2 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                    <span className="text-gray-600 text-sm ml-2">({project.clientReviews} reviews)</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">Member since {project.clientMemberSince}</p>
            </motion.div>
          </div>

          {/* Sidebar - Bid Form */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-lg p-6 sticky top-20"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Submit Your Bid</h3>
              
              {bidSubmitted ? (
                <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-600 text-xl" />
                    <div>
                      <p className="font-bold text-green-800">Bid submitted successfully!</p>
                      <p className="text-green-700 text-sm">The client will review your bid shortly.</p>
                    </div>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleBidSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Bid Amount</label>
                  <div className="flex">
                    <span className="bg-gray-100 px-4 py-2 text-gray-600 font-bold">$</span>
                    <input
                      type="number"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-r focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Cover Letter</label>
                  <textarea
                    value={bidMessage}
                    onChange={(e) => setBidMessage(e.target.value)}
                    placeholder="Tell the client why you're the best fit for this project..."
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition"
                >
                  Submit Bid
                </button>
              </form>

              <div className="mt-6 pt-6 border-t">
                <p className="text-gray-600 text-sm">
                  By submitting a bid, you accept our Terms of Service and agree to our dispute resolution process.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;