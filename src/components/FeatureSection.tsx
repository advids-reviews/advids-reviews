
import React from 'react';
import { MessageSquare, Layers, Monitor, Shield, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-full border-transparent hover:border-brand-blue/20">
      <div className="mb-4 text-brand-blue bg-brand-blue/10 w-12 h-12 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Frame-Accurate Feedback",
      description: "Leave comments on exact video frames to eliminate guesswork and clarify feedback."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Version Comparison",
      description: "Compare different versions side-by-side to track changes and improvements."
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Responsive Design",
      description: "Review videos on any device - desktop, tablet, or mobile - for maximum flexibility."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Storage",
      description: "Centralized, secure storage for all your video assets with controlled access."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real-time Notifications",
      description: "Get instant alerts when teammates leave comments or approve content."
    },
    {
      icon: <ArrowRight className="h-6 w-6" />,
      title: "Workflow Integration",
      description: "Seamlessly integrates with Adobe Creative Cloud, Final Cut Pro, and more."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Video Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline your video production workflow from review to final approval.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 h-auto text-lg">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
