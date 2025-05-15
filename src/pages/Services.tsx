
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ui/service-card';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Computer Repair',
      description: 'PC and Mac repair services including hardware replacement, virus removal, and performance optimization.',
      link: '/services/computer-repair',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    },
    {
      icon: '📱',
      title: 'Phone & Tablet Repair',
      description: 'Screen replacements, battery upgrades, water damage restoration, and more for all devices.',
      link: '/services/phone-repair',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    },
    {
      icon: '🔌',
      title: 'TV & Home Theater',
      description: 'TV mounting, home theater setup, streaming device installation, and smart TV configuration.',
      link: '/services/tv-repair',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    },
    {
      icon: '📶',
      title: 'Network Setup',
      description: 'WiFi installation, router configuration, network security, and mesh network setup.',
      link: '/services/network-setup',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    },
    {
      icon: '🏠',
      title: 'Smart Home Setup',
      description: 'Smart speaker installation, smart lighting, security cameras, and whole-home automation.',
      link: '/services/smart-home',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    },
    {
      icon: '🛡️',
      title: 'Data Backup & Recovery',
      description: 'Data recovery from crashed devices, backup solutions, and cloud storage configuration.',
      link: '/services/data-recovery',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    },
    {
      icon: '🖨️',
      title: 'Printer & Scanner Setup',
      description: 'Printer installation, wireless printing setup, and troubleshooting for all major brands.',
      link: '/services/printer-setup',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    },
    {
      icon: '🎮',
      title: 'Gaming Setup',
      description: 'Gaming console setup, PC gaming optimization, streaming setup, and VR installation.',
      link: '/services/gaming-setup',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert tech support for all your devices and systems.
                Our certified technicians bring the solutions to you.
              </p>
              <Button size="lg" asChild>
                <Link to="/support/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  imageUrl={service.image}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="section bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
                <p className="text-gray-600 mb-8">
                  We understand that not all tech problems fit into neat categories. 
                  Our team of experts can create custom solutions for your unique needs.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Business IT solutions',
                    'Custom home automation',
                    'Enterprise network setup',
                    'Multi-device integration',
                    'Remote work environment setup'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button>Contact Us for Custom Solutions</Button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Request a Service Quote</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                    <select 
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service, i) => (
                        <option key={i} value={service.title}>{service.title}</option>
                      ))}
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      rows={3} 
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Describe what you need help with..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full">Get Quote</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
