import React from 'react';
import { TrophyIcon, UsersIcon, ZapIcon } from 'lucide-react';
export function About() {
  const stats = [{
    icon: TrophyIcon,
    value: '150+',
    label: 'Projects Completed'
  }, {
    icon: UsersIcon,
    value: '50+',
    label: 'Happy Clients'
  }, {
    icon: ZapIcon,
    value: '10+',
    label: 'Years Experience'
  }];
  return <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About TechCorp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate developers, designers, and innovators
            dedicated to creating cutting-edge technology solutions that drive
            business growth.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
          const Icon = stat.icon;
          return <div key={index} className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50">
                <Icon className="mx-auto mb-4 text-blue-600" size={48} />
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>;
        })}
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="Our team" className="rounded-2xl shadow-xl" />
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              At TechCorp, we believe in the power of technology to transform
              businesses and improve lives. Our mission is to deliver innovative
              solutions that exceed expectations and drive measurable results.
            </p>
            <p className="text-gray-600">
              With over a decade of experience, we have helped businesses of all
              sizes achieve their digital transformation goals through custom
              software development, cloud solutions, and strategic consulting.
            </p>
          </div>
        </div>
      </div>
    </section>;
}