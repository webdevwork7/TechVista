
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/services/ServiceDetail';

const NetworkSetup = () => {
  const serviceData = {
    title: "Network Setup & WiFi Solutions",
    description: "Enhance your home or office connectivity with our professional networking services. We install, optimize, and secure networks of all sizes to ensure reliable, fast internet throughout your space.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    features: [
      "Whole-home WiFi coverage with mesh systems",
      "Network security implementation",
      "Business and enterprise networking solutions",
      "WiFi speed optimization",
      "Secure guest network configuration",
      "Network troubleshooting and repair"
    ],
    includedServices: [
      "Router installation and configuration",
      "Mesh WiFi system setup",
      "Network security assessment",
      "Firewall configuration",
      "WiFi signal optimization",
      "Dead spot elimination",
      "Guest network setup",
      "Device connection and testing",
      "Network speed optimization",
      "Ethernet cable installation",
      "Network expansion solutions"
    ],
    faqs: [
      {
        question: "What's the difference between a regular router and a mesh WiFi system?",
        answer: "A traditional router broadcasts WiFi from a single point, while mesh systems use multiple access points to create seamless coverage throughout larger spaces, eliminating dead zones."
      },
      {
        question: "How many mesh units do I need for my home?",
        answer: "This depends on your home's size and construction. Typically, a three-bedroom home requires 2-3 mesh units, but factors like wall materials and floor levels affect this recommendation."
      },
      {
        question: "Can you help secure my network?",
        answer: "Yes, we implement strong encryption, secure passwords, guest networks, and other security measures to protect your network from unauthorized access."
      },
      {
        question: "Will you help connect all my devices?",
        answer: "Absolutely! We'll connect your computers, phones, tablets, smart TVs, and other WiFi-dependent devices to ensure everything is working properly."
      },
      {
        question: "Can you help with business networking needs?",
        answer: "Yes, we design and implement business networks with considerations for security, reliability, bandwidth management, and scalability based on your business needs."
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ServiceDetail {...serviceData} />
      <Footer />
    </div>
  );
};

export default NetworkSetup;
