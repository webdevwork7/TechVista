
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/services/ServiceDetail';

const TVRepair = () => {
  const serviceData = {
    title: "TV & Home Theater Services",
    description: "Expert installation and repair for all your home entertainment needs. We handle TV mounting, home theater setup, sound system installation, and smart TV configuration.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
    features: [
      "Professional TV mounting on any surface",
      "Concealed cable management for clean installations",
      "Surround sound system setup and calibration",
      "Smart TV configuration and streaming setup",
      "Universal remote programming",
      "Home theater design consultation"
    ],
    includedServices: [
      "TV mounting and installation",
      "Cable concealment and management",
      "Sound bar and speaker installation",
      "Surround sound system setup",
      "Home theater receiver configuration",
      "Smart TV setup and app installation",
      "Streaming device connection (Roku, Apple TV, etc.)",
      "Universal remote programming",
      "TV calibration for optimal picture quality",
      "HDMI and audio cable installation"
    ],
    faqs: [
      {
        question: "What type of walls can you mount TVs on?",
        answer: "We can mount TVs on drywall, plaster, concrete, brick, and stone. Our technicians bring specialized hardware for each wall type."
      },
      {
        question: "Can you hide the cables in the wall?",
        answer: "Yes, we offer in-wall cable concealment for a clean look. This service includes running cables through the wall and installing outlets if needed."
      },
      {
        question: "What size TVs can you mount?",
        answer: "We can mount TVs of all sizes. Our technicians will ensure the proper bracket is used for your specific TV size and weight."
      },
      {
        question: "Do you set up streaming services?",
        answer: "Yes, we can set up and configure all popular streaming services on your smart TV or streaming device, and ensure they're working properly."
      },
      {
        question: "How long does a typical TV mounting take?",
        answer: "A standard TV mounting takes about 1-2 hours. More complex installations with cable concealment or multiple components may take 2-4 hours."
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

export default TVRepair;
