
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/services/ServiceDetail';

const PhoneRepair = () => {
  const serviceData = {
    title: "Phone & Tablet Repair",
    description: "From cracked screens to battery problems, our expert technicians can fix your smartphones and tablets. We service all major brands including Apple iPhone, Samsung Galaxy, Google Pixel, and more.",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435",
    features: [
      "Same-day repair for most common issues",
      "Genuine or high-quality compatible parts",
      "All major phone and tablet brands serviced",
      "Certified technicians with specialized training",
      "Competitive pricing and transparent quotes",
      "Data backup and transfer assistance"
    ],
    includedServices: [
      "Screen replacement",
      "Battery replacement",
      "Charging port repair",
      "Water damage restoration",
      "Camera module replacement",
      "Speaker and microphone repair",
      "Software troubleshooting",
      "Data recovery",
      "Button and switch repair",
      "Motherboard diagnosis and repair"
    ],
    faqs: [
      {
        question: "How long does it take to replace a phone screen?",
        answer: "Most screen replacements can be completed in 1-2 hours depending on the device model and our current workload."
      },
      {
        question: "Do you use original parts?",
        answer: "We offer both original manufacturer parts and high-quality compatible parts. Original parts typically cost more but we'll discuss all options with you."
      },
      {
        question: "Can you recover data from my broken phone?",
        answer: "In many cases, yes. Our success rate depends on the extent of damage, but we have specialized tools to recover data from most devices."
      },
      {
        question: "Is my data safe during repairs?",
        answer: "Yes. We respect your privacy and do not access personal data. We recommend backing up your device before any repair when possible."
      },
      {
        question: "Do you offer a warranty on phone repairs?",
        answer: "Yes, all our phone repairs include a 90-day warranty covering parts and labor for the specific repair performed."
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

export default PhoneRepair;
