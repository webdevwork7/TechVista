
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/services/ServiceDetail';

const ComputerRepair = () => {
  const serviceData = {
    title: "Computer Repair Services",
    description: "Our professional technicians can diagnose and repair all types of computer issues, from hardware failures to software problems. We service all major brands including Apple, Dell, HP, and Lenovo.",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b",
    features: [
      "Same-day service available",
      "Certified technicians with years of experience",
      "All major brands and operating systems supported",
      "Transparent pricing with no hidden fees",
      "90-day warranty on all repairs",
      "Data backup and recovery solutions"
    ],
    includedServices: [
      "Hardware diagnostics and repair",
      "Software troubleshooting",
      "Virus and malware removal",
      "System performance optimization",
      "Operating system installation and updates",
      "Data migration and backup",
      "Driver installation and updates",
      "Hardware upgrades (RAM, SSD, etc.)",
      "Screen replacement"
    ],
    faqs: [
      {
        question: "How long does a typical computer repair take?",
        answer: "Most software-related issues can be resolved within 1-2 hours. Hardware repairs typically take 24-48 hours depending on part availability."
      },
      {
        question: "Do you offer data recovery services?",
        answer: "Yes, we can recover data from failed hard drives, corrupted systems, and other storage devices. Success rates vary based on the type and extent of damage."
      },
      {
        question: "Can you fix my Mac/Apple computer?",
        answer: "Absolutely! Our technicians are certified to work on both Mac and Windows computers, as well as Linux systems."
      },
      {
        question: "What if my computer can't be fixed?",
        answer: "If your computer is beyond repair, we'll let you know upfront and can help with data recovery and transferring your files to a new device."
      },
      {
        question: "Do you offer warranties on repairs?",
        answer: "Yes, all our repairs come with a 90-day warranty covering both parts and labor for the specific repair performed."
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

export default ComputerRepair;
