import React from 'react';
import { ExternalLinkIcon } from 'lucide-react';
export function Projects() {
  const projects = [{
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    description: 'A scalable e-commerce solution with real-time inventory management.'
  }, {
    title: 'Healthcare App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    description: 'Patient management system with telemedicine capabilities.'
  }, {
    title: 'Analytics Dashboard',
    category: 'Data Engineering',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    description: 'Real-time business intelligence and reporting platform.'
  }, {
    title: 'IoT Platform',
    category: 'Cloud Solutions',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop',
    description: 'Connected device management and data processing system.'
  }, {
    title: 'Banking App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
    description: 'Secure mobile banking with biometric authentication.'
  }, {
    title: 'AI Chatbot',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
    description: 'Intelligent customer service automation solution.'
  }];
  return <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that have helped
            businesses achieve their goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-end p-4">
                  <ExternalLinkIcon className="text-white" size={24} />
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}