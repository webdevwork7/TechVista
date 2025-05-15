
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container max-w-2xl text-center">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold mt-6 mb-4">Page Not Found</h2>
          <p className="text-gray-600 text-lg mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg">
                Back to Home
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                Browse Services
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 p-8 bg-gray-50 rounded-xl">
            <h3 className="font-semibold text-lg mb-4">Looking for tech support?</h3>
            <p className="text-gray-600 mb-4">
              Our technicians are available to help with any tech issue you might have.
            </p>
            <Link to="/services">
              <Button>
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
