
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand-dark">
                <span className="text-brand-blue">Advids</span> Reviews Studio
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-brand-blue transition-colors">Features</a>
            <a href="#workflow" className="text-gray-600 hover:text-brand-blue transition-colors">Workflow</a>
            <a href="#testimonials" className="text-gray-600 hover:text-brand-blue transition-colors">Testimonials</a>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">Sign In</Button>
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-600 hover:text-brand-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#workflow" 
                className="text-gray-600 hover:text-brand-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Workflow
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-600 hover:text-brand-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 w-full">
                Sign In
              </Button>
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
