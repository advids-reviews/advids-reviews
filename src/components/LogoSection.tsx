
import React from 'react';

const LogoSection = () => {
  const logos = [
    "Adobe", "HBO", "Netflix", "Spotify", "National Geographic"
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-gray-500 font-medium">TRUSTED BY TOP CREATIVE TEAMS</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <div key={index} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="text-xl md:text-2xl font-bold text-gray-400">
                {logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
