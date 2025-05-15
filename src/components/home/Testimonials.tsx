
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  quote: string;
  service: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Los Angeles, CA',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      quote: 'The technician was extremely knowledgeable and fixed my computer quickly. I was impressed with the level of professionalism and care shown during the repair process.',
      service: 'Computer Repair',
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'New York, NY',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      quote: 'Setting up my home network has always been a nightmare until I used TechAssist. The technician set up everything perfectly and explained how to maintain it.',
      service: 'Network Setup',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      location: 'Chicago, IL',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 4,
      quote: 'My smart home installation was completed in just a few hours. The technician was very patient in showing me how to use all the new devices and integrate them with my phone.',
      service: 'Smart Home Setup',
    },
    {
      id: 4,
      name: 'David Williams',
      location: 'Austin, TX',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      rating: 5,
      quote: 'I thought my data was gone forever after my hard drive crashed, but the technician was able to recover everything! Worth every penny for the peace of mind.',
      service: 'Data Recovery',
    },
    {
      id: 5,
      name: 'Sophia Patel',
      location: 'Seattle, WA',
      image: 'https://randomuser.me/api/portraits/women/90.jpg',
      rating: 5,
      quote: 'After struggling with setting up my new TV and sound system, I called TechAssist. They did an amazing job mounting the TV and configuring everything perfectly.',
      service: 'TV & Home Theater',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Calculate which testimonials to show (responsive)
  const displayCount = 3; // Maximum to display on larger screens
  const currentTestimonials = Array.from({ length: displayCount }, (_, i) => {
    const index = (currentIndex + i) % testimonials.length;
    return testimonials[index];
  });

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading text-3xl md:text-4xl mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Here's what our satisfied customers have to say about our service.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:flex justify-between absolute -left-4 -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-white shadow-md"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-white shadow-md"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <Card key={`${testimonial.id}-${index}`} className="p-6 flex flex-col h-full card-hover">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-500">{testimonial.rating}.0</span>
                </div>
                
                <p className="text-gray-600 mb-4 flex-grow">"{testimonial.quote}"</p>
                
                <div className="text-xs font-medium text-gray-500 bg-gray-100 self-start px-3 py-1 rounded-full">
                  {testimonial.service}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-6' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
