
import React from 'react';
import { Card } from '@/components/ui/card';

interface TechnicianProps {
  name: string;
  title: string;
  image: string;
  rating: number;
  specialties: string[];
}

const TechnicianCard: React.FC<TechnicianProps> = ({ name, title, image, rating, specialties }) => {
  return (
    <Card className="overflow-hidden bg-white transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full py-1 px-3 flex items-center shadow-md">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="font-medium">{rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-600">{title}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-2">Specialties:</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, i) => (
              <span 
                key={i} 
                className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

const Technicians = () => {
  const technicians = [
    {
      name: "David Chen",
      title: "Senior IT Specialist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      rating: 4.9,
      specialties: ["Computer Repair", "Network Setup", "Data Recovery"]
    },
    {
      name: "Sarah Johnson",
      title: "Smart Home Expert",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      rating: 4.8,
      specialties: ["Smart Home", "TV Setup", "Home Automation"]
    },
    {
      name: "Michael Rodriguez",
      title: "Mobile Device Specialist",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c",
      rating: 4.7,
      specialties: ["Phone Repair", "Tablet Repair", "Screen Replacement"]
    },
    {
      name: "Jamie Wilson",
      title: "Network & Security Expert",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
      rating: 4.9,
      specialties: ["Network Security", "WiFi Optimization", "Firewalls"]
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading text-3xl md:text-4xl mb-4">Meet Our Expert Technicians</h2>
          <p className="text-gray-600 text-lg">
            Our highly skilled technicians are certified, background-checked, and ready to solve your tech problems.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {technicians.map((tech, index) => (
            <TechnicianCard
              key={index}
              name={tech.name}
              title={tech.title}
              image={tech.image}
              rating={tech.rating}
              specialties={tech.specialties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technicians;
