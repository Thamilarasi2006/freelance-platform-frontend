import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCheckCircle, FaUsers, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hire the Best Freelancers for Your Projects
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Connect with talented professionals and get your work done by the best in the industry
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex bg-white rounded-lg overflow-hidden shadow-lg">
                <input
                  type="text"
                  placeholder="Search for projects, skills, or freelancers..."
                  className="flex-1 px-6 py-3 text-gray-800 outline-none"
                />
                <button className="bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-700 transition">
                  <FaSearch className="inline mr-2" />
                  Search
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/projects"
                className="bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-gray-100 transition"
              >
                Browse Projects
              </Link>
              <Link
                to="/freelancers"
                className="bg-blue-500 text-white px-8 py-3 rounded font-bold hover:bg-blue-600 transition"
              >
                Find Freelancers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose FreelanceHub?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6"
            >
              <FaCheckCircle className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Talent</h3>
              <p className="text-gray-600">
                Access a diverse pool of verified professionals with proven expertise in various fields.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6"
            >
              <FaUsers className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Easy Collaboration</h3>
              <p className="text-gray-600">
                Communicate seamlessly with freelancers through our integrated messaging and project management tools.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6"
            >
              <FaTrophy className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Your projects and payments are protected with our secure escrow system and dispute resolution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0 }}
            >
              <p className="text-4xl font-bold text-blue-400">50K+</p>
              <p className="text-gray-300">Active Freelancers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-4xl font-bold text-blue-400">100K+</p>
              <p className="text-gray-300">Projects Posted</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-4xl font-bold text-blue-400">$50M+</p>
              <p className="text-gray-300">Total Payouts</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-4xl font-bold text-blue-400">95%</p>
              <p className="text-gray-300">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Join thousands of satisfied clients and freelancers on FreelanceHub today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-8 py-3 rounded font-bold hover:bg-blue-700 transition"
            >
              Sign Up Now
            </Link>
            <Link
              to="/projects"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded font-bold hover:bg-blue-50 transition"
            >
              Browse Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
