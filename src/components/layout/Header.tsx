
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Phone, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchInputRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const serviceMenuItems = [
    { name: 'Computer Repair', path: '/services/computer-repair' },
    { name: 'Phone & Tablet Repair', path: '/services/phone-repair' },
    { name: 'TV & Home Theater', path: '/services/tv-repair' },
    { name: 'Network Setup', path: '/services/network-setup' },
    { name: 'Smart Home Installation', path: '/services/smart-home' },
    { name: 'Data Recovery', path: '/services/data-recovery' },
    { name: 'Printer & Scanner Setup', path: '/services/printer-setup' },
    { name: 'Gaming Setup', path: '/services/gaming-setup' },
  ];

  const supportMenuItems = [
    { name: 'FAQs', path: '/support/faqs' },
    { name: 'Contact Us', path: '/support/contact' },
    { name: 'Knowledge Base', path: '/support/knowledge-base' },
  ];

  const menuItems = [
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: serviceMenuItems
    },
    { 
      name: 'Support', 
      path: '/support',
      hasDropdown: true,
      dropdownItems: supportMenuItems
    },
    { name: 'About Us', path: '/about' },
    { name: 'Membership', path: '/membership' },
  ];

  const handleCallTech = () => {
    window.location.href = "tel:+18005551234";
  };

  // Filter services based on search query
  const filteredServices = serviceMenuItems.filter(service => 
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
    setSearchOpen(false);
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
    <header className="sticky top-0 z-50 bg-white shadow-sm w-full">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Tech<span className="text-secondary">Assist</span></span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative">
              {item.hasDropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-primary transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48 p-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.name} asChild>
                        <Link
                          to={dropdownItem.path}
                          className="w-full"
                        >
                          {dropdownItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link 
                  to={item.path} 
                  className="font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="btn-hover flex items-center gap-2"
            onClick={handleCallTech}
          >
            <Phone className="h-4 w-4" />
            Call a Tech
          </Button>
          <Button 
            size="sm" 
            variant="ghost" 
            className="p-2"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
        
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-md z-40 animate-fade-in">
          <div className="py-4 px-6 space-y-4">
            {menuItems.map((item) => (
              <div key={item.name} className="py-2">
                {item.hasDropdown ? (
                  <>
                    <button 
                      onClick={() => toggleDropdown(item.name)}
                      className="flex justify-between items-center w-full py-2 font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block py-2 text-gray-600 hover:text-primary"
                            onClick={toggleMenu}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-2 font-medium hover:text-primary"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2"
                onClick={handleCallTech}
              >
                <Phone className="h-4 w-4" />
                Call a Tech
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => {
                  setSearchOpen(true);
                  setIsOpen(false);
                }}
              >
                <Search className="h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="mb-4">Search Services</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div ref={searchInputRef} className="relative">
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <Input 
                  type="text" 
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="What do you need help with?" 
                  className="flex-1 bg-transparent border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
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
            
            <div className="grid grid-cols-2 gap-3">
              {serviceMenuItems.slice(0, 4).map((service, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  size="sm" 
                  className="text-xs md:text-sm justify-start"
                  type="button"
                  onClick={() => handleServiceClick(service.path)}
                >
                  {service.name}
                </Button>
              ))}
            </div>
            <Button 
              className="w-full" 
              onClick={() => {
                navigate('/services');
                setSearchOpen(false);
              }}
            >
              View All Services
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
