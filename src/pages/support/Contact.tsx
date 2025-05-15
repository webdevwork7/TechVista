
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-8">
              Have questions or need assistance? We're here to help you with all your tech support needs.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="service-inquiry">Service Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full">Submit Message</Button>
                </form>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <p className="text-gray-600">(800) 555-1234</p>
                        <p className="text-gray-500 text-sm mt-1">Monday-Friday, 8am-8pm</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-gray-600">support@techassist.com</p>
                        <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">Headquarters</h3>
                        <p className="text-gray-600">123 Tech Street</p>
                        <p className="text-gray-600">San Francisco, CA 94107</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">Business Hours</h3>
                        <p className="text-gray-600">Mon-Fri: 8:00 AM - 8:00 PM</p>
                        <p className="text-gray-600">Sat-Sun: 9:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Live Chat Support</h3>
                  <p className="text-gray-600 mb-4">
                    Get instant support from our tech experts via live chat.
                  </p>
                  <Button className="w-full flex items-center justify-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Start Live Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
