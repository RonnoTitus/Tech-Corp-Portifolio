import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Team',
    href: '#team'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TechCorp
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                {link.name}
              </a>)}
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Get Started
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600">
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map(link => <a key={link.name} href={link.href} className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>)}
            <a href="#contact" className="block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700" onClick={() => setIsOpen(false)}>
              Get Started
            </a>
          </div>
        </div>}
    </nav>;
}