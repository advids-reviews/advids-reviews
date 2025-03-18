
import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, company }) => {
  return (
    <Card className="p-8 h-full border-0 shadow-lg">
      <div className="text-brand-blue mb-6">
        <Quote className="h-10 w-10 opacity-30" />
      </div>
      <blockquote className="text-lg mb-6 italic text-gray-700">"{quote}"</blockquote>
      <div>
        <div className="font-bold">{name}</div>
        <div className="text-gray-500">{title}, {company}</div>
      </div>
    </Card>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Advids Reviews Studio has completely transformed our approval process. What used to take weeks now takes days, with much clearer communication.",
      name: "Sarah Johnson",
      title: "Creative Director",
      company: "Horizon Media"
    },
    {
      quote: "The frame-specific commenting feature alone has saved us countless hours of back-and-forth emails trying to explain which part of the video needs changes.",
      name: "Michael Chen",
      title: "Video Producer",
      company: "Spectrum Films"
    },
    {
      quote: "Our clients love how easy it is to provide feedback, and we love how organized everything stays throughout multiple revision rounds.",
      name: "Emma Rodriguez",
      title: "Agency Owner",
      company: "Bright Spark Creative"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Creative teams of all sizes trust Advids Reviews Studio to streamline their video review process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-8 py-6 h-auto text-lg">
            Read All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
