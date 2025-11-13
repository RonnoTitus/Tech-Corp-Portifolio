import React from 'react';
import { StarIcon } from 'lucide-react';
export function Testimonials() {
  const testimonials = [{
    name: 'John Smith',
    company: 'Tech Startup Inc.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    text: 'TechCorp transformed our business with their innovative solutions. Their team is professional, responsive, and truly understands our needs.'
  }, {
    name: 'Lisa Anderson',
    company: 'Global Retail Co.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    text: 'Working with TechCorp was a game-changer. They delivered our project on time and exceeded our expectations in every way.'
  }, {
    name: 'Robert Taylor',
    company: 'Finance Solutions Ltd.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    text: 'The expertise and dedication of the TechCorp team is unmatched. They are our go-to partner for all technology initiatives.'
  }];
  return <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied
            clients.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="text-yellow-400 fill-current" size={20} />)}
              </div>
              <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}