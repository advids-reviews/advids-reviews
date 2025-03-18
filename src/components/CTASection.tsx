
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-teal text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Video Review Process?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands of creative teams who have streamlined their workflow with Advids Reviews Studio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-brand-blue hover:bg-white/90 px-8 py-6 h-auto text-lg flex items-center">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-lg">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            No credit card required. 14-day free trial with full access to all features.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
