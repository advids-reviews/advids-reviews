
import React from 'react';
import { ArrowRight } from 'lucide-react';

const WorkflowSection = () => {
  const steps = [
    {
      number: "01",
      title: "Upload",
      description: "Upload your video content to the secure cloud platform in seconds."
    },
    {
      number: "02",
      title: "Share",
      description: "Invite team members and clients to review with secure, customizable access."
    },
    {
      number: "03",
      title: "Review",
      description: "Provide frame-specific feedback with timestamps and visual annotations."
    },
    {
      number: "04",
      title: "Revise",
      description: "Apply changes and upload new versions, automatically organized side-by-side."
    },
    {
      number: "05",
      title: "Approve",
      description: "Finalize projects with clear approvals tracked in your dashboard."
    }
  ];

  return (
    <section id="workflow" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seamless Workflow Integration
          </h2>
          <p className="text-xl text-gray-600">
            Advids Reviews Studio fits perfectly into your existing video production process, enhancing collaboration without disrupting your creative flow.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-10 left-1/2 w-0.5 h-[calc(100%-5rem)] bg-gradient-to-b from-brand-blue to-brand-teal hidden lg:block"></div>

          {/* Workflow steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
              >
                <div className={`lg:w-1/2 text-center ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="mb-2">
                    <span className="text-gradient text-xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Center dot for timeline */}
                <div className="relative hidden lg:block">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-brand-blue z-10"></div>
                </div>

                {/* Visual placeholder - would be replaced with actual illustrations */}
                <div className="lg:w-1/2 bg-white rounded-lg p-6 shadow-md">
                  <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-gray-400 font-medium">{step.title} Illustration</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
