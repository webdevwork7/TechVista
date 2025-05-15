
import React from 'react';
import { Card } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Book an Appointment',
      description: 'Tell us what you need help with and select a convenient time for a technician to visit.',
      icon: '📆',
    },
    {
      number: '02',
      title: 'Meet Your Tech Expert',
      description: 'A certified, background-checked technician will arrive at your home or office ready to help.',
      icon: '👨‍💻',
    },
    {
      number: '03',
      title: 'Problem Solved',
      description: 'Your technician will diagnose and fix the issue on the spot or provide a clear plan forward.',
      icon: '✅',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading text-3xl md:text-4xl mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">
            Getting technical help has never been easier. Our simple process ensures you get the help you need quickly and efficiently.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`relative ${index % 2 === 1 ? 'md:mt-16' : ''}`}>
              <Card className="p-8 text-center h-full flex flex-col items-center card-hover">
                <div className="mb-6 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                  {step.icon}
                </div>
                <div className="bg-primary text-white text-xs font-semibold py-1 px-3 rounded-full mb-4">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
