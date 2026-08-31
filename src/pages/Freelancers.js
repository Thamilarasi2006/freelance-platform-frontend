import React, { useState } from 'react';
import FreelancerCard from '../components/FreelancerCard';
import { FaFilter } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Freelancers() {
  const [selectedSkill, setSelectedSkill] = useState('All');
  const [selectedRate, setSelectedRate] = useState('All');

  const freelancers = [
    {
      id: 1,
      name: 'Alex Johnson',
      title: 'Full Stack Developer',
      image: 'https://via.placeholder.com/100',
      location: 'United States',
      rating: 4.9,
      reviews: 127,
      hourlyRate: 85,
      skills: ['React', 'Node.js', 'Python', 'MongoDB'],
      projectsCompleted: 89,
    },
    {
      id: 2,
      name: 'Sarah Chen',
      title: 'UI/UX Designer',
      image: 'https://via.placeholder.com/100',
      location: 'Canada',
      rating: 5.0,
      reviews: 95,
      hourlyRate: 75,
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'],
      projectsCompleted: 62,
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      title: 'WordPress Expert',
      image: 'https://via.placeholder.com/100',
      location: 'Spain',
      rating: 4.8,
      reviews: 156,
      hourlyRate: 55,
      skills: ['WordPress', 'PHP', 'JavaScript', 'WooCommerce'],
      projectsCompleted: 203,
    },
    {
      id: 4,
      name: 'Emma Wilson',
      title: 'Digital Marketer',
      image: 'https://via.placeholder.com/100',
      location: 'United Kingdom',
      rating: 4.7,
      reviews: 78,
      hourlyRate: 65,
      skills: ['SEO', 'Content Marketing', 'Analytics', 'Social Media'],
      projectsCompleted: 45,
    },
  ];

  const skills = ['All', 'React', 'Node.js', 'Python', 'Figma', 'WordPress', 'SEO'];
  const rateRanges = ['All', '$0-50', '$50-100', '$100+'];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Browse Freelancers</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-md p-6 sticky top-20"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-6">Filters</h2>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Skills</h3>
                <div className="space-y-2">
                  {skills.map(skill => (
                    <label key={skill} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="skill"
                        value={skill}
                        checked={selectedSkill === skill}
                        onChange={(e) => setSelectedSkill(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-gray-600">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Hourly Rate</h3>
                <div className="space-y-2">
                  {rateRanges.map(range => (
                    <label key={range} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="rate"
                        value={range}
                        checked={selectedRate === range}
                        onChange={(e) => setSelectedRate(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-gray-600">{range}/hr</span>
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Freelancers Grid */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {freelancers.map((freelancer, index) => (
                <motion.div
                  key={freelancer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FreelancerCard freelancer={freelancer} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Freelancers;