
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { number: "50k+", label: "Satisfied Customers" },
    { number: "95%", label: "Resolution Rate" },
    { number: "30min", label: "Average Response Time" },
    { number: "200+", label: "Certified Technicians" }
  ];

  const values = [
    {
      icon: "🔍",
      title: "Expert Knowledge",
      description: "Our technicians undergo rigorous training and certification to provide the highest level of technical expertise."
    },
    {
      icon: "⏱️",
      title: "Reliability",
      description: "We arrive on time and get the job done right the first time, respecting your schedule and needs."
    },
    {
      icon: "💬",
      title: "Clear Communication",
      description: "We explain technical issues in plain language and keep you informed throughout the process."
    },
    {
      icon: "🔒",
      title: "Trust & Security",
      description: "All our technicians are background-checked and trained to handle your devices and data with care."
    },
    {
      icon: "🔄",
      title: "Continuous Innovation",
      description: "We stay ahead of the technology curve to provide solutions for the latest devices and systems."
    },
    {
      icon: "❤️",
      title: "Customer-First Approach",
      description: "Your satisfaction is our top priority, and we're not happy until you're happy with our service."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About TechAssist</h1>
              <p className="text-xl text-gray-700 mb-8">
                We're on a mission to make technology work for everyone through reliable, expert tech support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Our Services</Button>
                <Button size="lg" variant="outline">Meet Our Team</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  TechAssist was founded in 2015 with a simple idea: make tech support accessible, reliable, and stress-free for everyone. We noticed that while technology was becoming increasingly central to daily life, quality support remained hard to find, expensive, and often confusing.
                </p>
                <p className="text-gray-700 mb-4">
                  Our founders, a group of tech industry veterans, set out to build a service that would connect people with skilled technicians who could solve their tech problems promptly and effectively, whether it's a crashed computer, a malfunctioning smart home device, or setting up a new network.
                </p>
                <p className="text-gray-700">
                  Today, TechAssist has grown to serve customers nationwide with a network of over 200 certified technicians. We've helped more than 50,000 customers overcome their tech challenges, and we're just getting started.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="TechAssist team meeting" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                  <blockquote className="italic text-gray-600">
                    "We believe everyone deserves tech that works for them, not against them."
                  </blockquote>
                  <p className="font-medium mt-2">— Michael Chen, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary text-white py-16">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-gray-600">
                These core principles guide everything we do and define how we approach tech support.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
              <p className="text-lg text-gray-600">
                Meet the people who are working to make tech support better for everyone.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="h-60">
                    <img 
                      src={`https://images.unsplash.com/photo-156024012${i}656-adf6933081d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`}
                      alt="Team member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                    <p className="text-primary mb-3">Chief Executive Officer</p>
                    <p className="text-gray-600 mb-4">
                      With over 15 years of experience in the tech industry, Sarah leads our company with a focus on customer satisfaction and innovative solutions.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-50">
          <div className="container text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Our Growing Team</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for talented technicians and customer support specialists to help us deliver exceptional service.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">View Careers</Button>
              <Link to="/support/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
