import React, { useState } from 'react';
import { FaBriefcase, FaUsers, FaDollarSign, FaStar, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Active Projects', value: '5', icon: FaBriefcase, color: 'bg-blue-100 text-blue-600' },
    { label: 'Total Earnings', value: '$12,500', icon: FaDollarSign, color: 'bg-green-100 text-green-600' },
    { label: 'Clients', value: '23', icon: FaUsers, color: 'bg-purple-100 text-purple-600' },
    { label: 'Average Rating', value: '4.8', icon: FaStar, color: 'bg-yellow-100 text-yellow-600' },
  ];

  const recentProjects = [
    { id: 1, name: 'E-commerce Platform', client: 'TechCorp', status: 'In Progress', budget: '$3,500' },
    { id: 2, name: 'Mobile App UI', client: 'StartupXYZ', status: 'Completed', budget: '$2,000' },
    { id: 3, name: 'Website Redesign', client: 'RetailCo', status: 'In Progress', budget: '$1,800' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome back, Alex!</h1>
          <p className="text-gray-600">Here's your freelance dashboard</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-semibold mb-2">{stat.label}</p>
                    <p className="text-4xl font-bold text-gray-800">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-4 rounded-lg`}>
                    <Icon size={24} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
          <div className="flex border-b">
            {['overview', 'projects', 'messages', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 px-6 font-semibold capitalize transition ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Projects</h2>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
                          <p className="text-gray-600 text-sm">Client: {project.client}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-800">{project.budget}</p>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            project.status === 'Completed'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'projects' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">All Projects</h2>
                <p className="text-gray-600">Manage and track all your freelance projects here.</p>
              </motion.div>
            )}

            {activeTab === 'messages' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Messages</h2>
                <p className="text-gray-600">Chat with your clients and collaborate effectively.</p>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
                <p className="text-gray-600">Manage your account preferences and profile.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;