
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Simplify Video <span className="text-gradient">Review & Approvals</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Streamline your feedback process with frame-accurate comments, instant version comparisons, and responsive reviews across all devices.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 h-auto text-lg flex items-center">
                Get a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-8 py-6 h-auto text-lg flex items-center">
                Start Free Trial
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-video bg-gray-900 rounded-lg shadow-2xl overflow-hidden animate-float">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-teal/20"></div>
                  
                  {/* Video thumbnail image would go here - using a placeholder gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900"></div>
                  
                  <Button 
                    variant="outline" 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/40 rounded-full w-16 h-16 flex items-center justify-center"
                  >
                    <Play className="h-6 w-6 text-white" fill="white" />
                  </Button>
                  
                  {/* Video timeline indicator */}
                  <div className="absolute bottom-4 left-4 right-4 h-1.5 bg-white/20 rounded-full">
                    <div className="h-full w-3/5 bg-brand-blue rounded-full"></div>
                  </div>
                  
                  {/* Frame comment markers */}
                  <div className="absolute bottom-4 left-[20%] w-1 h-3 bg-brand-orange rounded-full"></div>
                  <div className="absolute bottom-4 left-[45%] w-1 h-3 bg-brand-orange rounded-full"></div>
                  <div className="absolute bottom-4 left-[70%] w-1 h-3 bg-brand-orange rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
