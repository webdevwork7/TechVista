
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <Card className="p-6 h-full flex flex-col card-hover">
      <div className="mb-5 rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center text-primary text-xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link to={link}>
        <Button variant="link" className="p-0 h-auto flex items-center text-primary">
          Learn more <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </Link>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Computer Repair',
      description: 'PC and Mac repair services including hardware replacement, virus removal, and performance optimization.',
      link: '/services/computer-repair',
    },
    {
      icon: '📱',
      title: 'Phone & Tablet Repair',
      description: 'Screen replacements, battery upgrades, water damage restoration, and more for all devices.',
      link: '/services/phone-repair',
    },
    {
      icon: '🔌',
      title: 'TV & Home Theater',
      description: 'TV mounting, home theater setup, streaming device installation, and smart TV configuration.',
      link: '/services/tv-repair',
    },
    {
      icon: '📶',
      title: 'Network Setup',
      description: 'WiFi installation, router configuration, network security, and mesh network setup.',
      link: '/services/network-setup',
    },
    {
      icon: '🏠',
      title: 'Smart Home Setup',
      description: 'Smart speaker installation, smart lighting, security cameras, and whole-home automation.',
      link: '/services/smart-home',
    },
    {
      icon: '🛡️',
      title: 'Data Backup & Recovery',
      description: 'Data recovery from crashed devices, backup solutions, and cloud storage configuration.',
      link: '/services/data-recovery',
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading text-3xl md:text-4xl mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            We provide a wide range of tech support services to help you with all your technology needs. 
            Our certified technicians are experts in their fields.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button size="lg" className="btn-hover">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
