import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function Hero() {
  return <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Innovative Solutions for Modern Businesses
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We transform ideas into powerful digital experiences. Partner with
              us to build the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Start Your Project
                <ArrowRightIcon className="ml-2" size={20} />
              </a>
              <a href="#projects" className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                View Our Work
              </a>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop" alt="Team collaboration" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>;
}