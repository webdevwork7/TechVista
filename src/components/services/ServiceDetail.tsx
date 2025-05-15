
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceDetailProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  includedServices: string[];
  faqs: { question: string; answer: string }[];
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  description,
  image,
  features,
  includedServices,
  faqs
}) => {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{title}</h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">{description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Book a Service</Button>
              <Button size="lg" variant="outline">Call a Technician</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our {title} Service</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What's Included</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="grid md:grid-cols-2 gap-6">
                {includedServices.map((service, i) => (
                  <div key={i} className="flex items-start p-4 border border-gray-100 rounded-lg">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-800">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps - Completely redesigned to fix overlapping issues */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-10 md:space-y-12">
              {[
                {title: "Book Your Service", desc: "Schedule online or call us to book a time that works for you."},
                {title: "Expert Technician Arrives", desc: "Our certified tech arrives at your location with all necessary equipment."},
                {title: "Problem Diagnosed & Fixed", desc: "The technician identifies and resolves your tech issue on the spot."},
                {title: "Satisfaction Guaranteed", desc: "We make sure everything is working perfectly before we leave."}
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="flex flex-col md:grid md:grid-cols-12 items-start">
                    {/* Number circle */}
                    <div className="flex-shrink-0 z-10 w-12 h-12 md:col-span-2 rounded-full bg-primary text-white shadow-md flex items-center justify-center font-bold text-lg mb-4 md:mb-0 md:mx-auto">
                      {i + 1}
                    </div>
                    
                    {/* Content */}
                    <div className="md:col-span-10 bg-gray-50 p-6 rounded-lg shadow-sm w-full">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Our technicians are ready to help with your {title.toLowerCase()} needs. Book a service today or call for immediate assistance.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary">Book a Service</Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">Call a Technician</Button>
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/services" className="flex items-center text-white hover:underline">
              <ArrowRight className="mr-2 h-5 w-5" /> View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
