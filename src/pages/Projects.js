import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { FaFilter } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBudget, setSelectedBudget] = useState('All');

  // Mock data
  const projects = [
    {
      id: 1,
      title: 'Build a React Dashboard for Analytics',
      description: 'Need a responsive analytics dashboard built with React and Chart.js for a fintech startup.',
      category: 'Web Development',
      budget: 2500,
      timeline: '3 weeks',
      skills: ['React', 'JavaScript', 'Chart.js', 'Tailwind CSS'],
      clientName: 'John Smith',
      clientImage: 'https://via.placeholder.com/40',
      clientRating: 4.8,
    },
    {
      id: 2,
      title: 'Mobile App UI Design',
      description: 'Design beautiful UI for a fitness tracking mobile application. Must include mockups and prototypes.',
      category: 'Design',
      budget: 1800,
      timeline: '2 weeks',
      skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
      clientName: 'Sarah Johnson',
      clientImage: 'https://via.placeholder.com/40',
      clientRating: 5.0,
    },
    {
      id: 3,
      title: 'WordPress Website Customization',
      description: 'Customize an existing WordPress site with custom plugins and theme modifications.',
      category: 'Web Development',
      budget: 1200,
      timeline: '1 week',
      skills: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      clientName: 'Mike Brown',
      clientImage: 'https://via.placeholder.com/40',
      clientRating: 4.7,
    },
    {
      id: 4,
      title: 'Python Web Scraper Development',
      description: 'Build a web scraper to collect data from multiple e-commerce websites for price monitoring.',
      category: 'Programming',
      budget: 3000,
      timeline: '4 weeks',
      skills: ['Python', 'Web Scraping', 'BeautifulSoup', 'Django'],
      clientName: 'Emily Davis',
      clientImage: 'https://via.placeholder.com/40',
      clientRating: 4.9,
    },
    {
      id: 5,
      title: 'SEO Optimization for E-commerce Site',
      description: 'Improve SEO ranking for an online store. Includes keyword research, on-page and technical SEO.',
      category: 'Digital Marketing',
      budget: 1500,
      timeline: '6 weeks',
      skills: ['SEO', 'Google Analytics', 'Keyword Research', 'Technical SEO'],
      clientName: 'Robert Wilson',
      clientImage: 'https://via.placeholder.com/40',
      clientRating: 4.6,
    },
    {
      id: 6,
      title: 'Logo Design & Branding Package',
      description: 'Create a complete branding package including logo, color palette, and brand guidelines.',
      category: 'Design',
      budget: 800,
      timeline: '1 week',
      skills: ['Logo Design', 'Branding', 'Adobe Creative Suite', 'Design Theory'],
      clientName: 'Lisa Anderson',
      clientImage: 'https://via.placeholder.com/40',
      clientRating: 5.0,
    },
  ];

  const categories = ['All', 'Web Development', 'Design', 'Programming', 'Digital Marketing'];
  const budgetRanges = ['All', '$0-1000', '$1000-2500', '$2500-5000', '$5000+'];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const budgetMatch = selectedBudget === 'All' || checkBudgetRange(project.budget, selectedBudget);
    return categoryMatch && budgetMatch;
  });

  function checkBudgetRange(budget, range) {
    switch (range) {
      case '$0-1000':
        return budget < 1000;
      case '$1000-2500':
        return budget >= 1000 && budget < 2500;
      case '$2500-5000':
        return budget >= 2500 && budget < 5000;
      case '$5000+':
        return budget >= 5000;
      default:
        return true;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Browse Projects</h1>
          <p className="text-gray-600">
            Found <span className="font-bold text-blue-600">{filteredProjects.length}</span> projects matching your criteria
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-md p-6 sticky top-20"
            >
              <div className="flex items-center space-x-2 mb-6">
                <FaFilter className="text-blue-600" />
                <h2 className="text-xl font-bold text-gray-800">Filters</h2>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-gray-600 hover:text-gray-800">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Budget</h3>
                <div className="space-y-2">
                  {budgetRanges.map(range => (
                    <label key={range} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="budget"
                        value={range}
                        checked={selectedBudget === range}
                        onChange={(e) => setSelectedBudget(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-gray-600 hover:text-gray-800">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedBudget('All');
                }}
                className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition font-semibold"
              >
                Reset Filters
              </button>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-3">
            {filteredProjects.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-600 text-lg">No projects found matching your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedBudget('All');
                  }}
                  className="mt-4 text-blue-600 hover:underline font-semibold"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
