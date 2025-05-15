
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchInputRef = useRef<HTMLDivElement>(null);

  const services = [
    { name: 'Computer Repair', path: '/services/computer-repair' },
    { name: 'Phone Repair', path: '/services/phone-repair' },
    { name: 'TV Repair', path: '/services/tv-repair' },
    { name: 'Network Setup', path: '/services/network-setup' },
    { name: 'Smart Home Installation', path: '/services/smart-home' },
    { name: 'Data Recovery', path: '/services/data-recovery' },
    { name: 'Printer Setup', path: '/services/printer-setup' },
    { name: 'Gaming Setup', path: '/services/gaming-setup' },
  ];

  const filteredServices = services.filter(service => 
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowSuggestions(query.length > 0);
  };

  const handleServiceClick = (path: string) => {
    navigate(path);
    setShowSuggestions(false);
    setSearchQuery('');
  };

  const handleSubmitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredServices.length > 0) {
      navigate(filteredServices[0].path);
    } else {
      navigate('/services');
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchInputRef]);

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -right-10 top-20 w-72 h-72 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -left-10 top-40 w-80 h-80 bg-teal-100 rounded-full opacity-50 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-lg animate-fade-up">
            <h1 className="heading text-4xl lg:text-5xl xl:text-6xl">
              Tech Support <br />
              <span className="text-primary">When You Need It</span>
            </h1>
            <p className="text-lg text-gray-700">
              On-demand tech support at your doorstep. Our certified technicians provide fast and reliable service for all your tech needs.
            </p>
            
            <form onSubmit={handleSubmitSearch} className="bg-white shadow-lg rounded-lg p-4 relative">
              <div ref={searchInputRef} className="relative">
                <div className="flex items-center">
                  <Search className="h-5 w-5 text-gray-400 mr-2" />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="What do you need help with?" 
                    className="flex-1 bg-transparent outline-none text-sm md:text-base" 
                  />
                </div>
                
                {showSuggestions && filteredServices.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg mt-1 z-20">
                    <ul>
                      {filteredServices.map((service, index) => (
                        <li 
                          key={index} 
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                          onClick={() => handleServiceClick(service.path)}
                        >
                          {service.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs md:text-sm justify-start"
                  type="button"
                  onClick={() => handleServiceClick('/services/computer-repair')}
                >
                  Computer Repair
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs md:text-sm justify-start"
                  type="button" 
                  onClick={() => handleServiceClick('/services/phone-repair')}
                >
                  Phone Repair
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs md:text-sm justify-start"
                  type="button" 
                  onClick={() => handleServiceClick('/services/network-setup')}
                >
                  WiFi Setup
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs md:text-sm justify-start"
                  type="button" 
                  onClick={() => handleServiceClick('/services/data-recovery')}
                >
                  Data Recovery
                </Button>
              </div>
              <Button type="submit" className="w-full mt-4" onClick={() => navigate('/services')}>View All Services</Button>
            </form>
            
            <div className="flex items-center text-sm text-gray-600">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">
                    {i}
                  </div>
                ))}
              </div>
              <span>
                <strong className="text-black">4.9/5</strong> from over 10,000+ reviews
              </span>
            </div>
          </div>
          
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-full max-w-md animate-fade-in">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform rotate-1">
                <img 
                  src="https://images.unsplash.com/photo-1580795479225-c50ab8c3348d"
                  alt="Tech support specialist helping customer" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-48 transform -rotate-3 animate-pulse-slow">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-2">
                    T
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Tech arriving</p>
                    <p className="text-xs text-gray-500">In 35 minutes</p>
                  </div>
                </div>
                <div className="h-1 w-full bg-gray-100 rounded">
                  <div className="h-1 bg-green-500 rounded w-3/4"></div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-3 transform rotate-3 animate-pulse-slow">
                <div className="flex items-center">
                  <div className="flex flex-col mr-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs font-medium">5.0 (28 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
