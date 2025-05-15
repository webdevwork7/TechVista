
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  imageUrl?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  link,
  imageUrl 
}) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col card-hover">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-5 rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Link to={link}>
          <Button variant="link" className="p-0 h-auto flex items-center text-primary">
            Learn more <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ServiceCard;
