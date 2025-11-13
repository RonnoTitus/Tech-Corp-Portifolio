import React from 'react';
import { CodeIcon, SmartphoneIcon, CloudIcon, DatabaseIcon, ShieldIcon, BarChartIcon } from 'lucide-react';
export function Services() {
  const services = [{
    icon: CodeIcon,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices.'
  }, {
    icon: SmartphoneIcon,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions for iOS and Android.'
  }, {
    icon: CloudIcon,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.'
  }, {
    icon: DatabaseIcon,
    title: 'Data Engineering',
    description: 'Big data processing, analytics, and machine learning solutions.'
  }, {
    icon: ShieldIcon,
    title: 'Cybersecurity',
    description: 'Comprehensive security audits and protection strategies.'
  }, {
    icon: BarChartIcon,
    title: 'Digital Strategy',
    description: 'Strategic consulting to optimize your digital transformation.'
  }];
  return <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of technology services to help your
            business thrive in the digital age.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>;
        })}
        </div>
      </div>
    </section>;
}