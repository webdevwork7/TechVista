
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/services/ServiceDetail';

const SmartHome = () => {
  const serviceData = {
    title: "Smart Home Installation",
    description: "Transform your home into an intelligent living space with our professional smart home setup services. We install and integrate various smart devices to create a seamless, automated home experience.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827",
    features: [
      "Customized smart home plans for any budget",
      "Multi-platform integration (Google Home, Alexa, HomeKit)",
      "Voice-controlled automation setup",
      "Energy efficiency optimization",
      "Smart security system installation",
      "Personalized training and support"
    ],
    includedServices: [
      "Smart speaker and voice assistant setup",
      "Smart lighting installation and automation",
      "Smart thermostat installation and programming",
      "Video doorbell and camera installation",
      "Smart lock installation and configuration",
      "Smart appliance integration",
      "Automated routines and scenes setup",
      "Hub configuration and device connection",
      "Multi-room audio system installation",
      "Smart blinds and curtain automation",
      "Personal training on using your smart home"
    ],
    faqs: [
      {
        question: "Which smart home platform should I choose?",
        answer: "The best platform depends on your existing devices and preferences. We can help you choose between Google Home, Amazon Alexa, Apple HomeKit, or a platform-agnostic solution based on your needs."
      },
      {
        question: "Can smart devices work with my existing home setup?",
        answer: "In most cases, yes. Smart devices can integrate with existing fixtures like lights, thermostats, and door locks. We'll assess compatibility before installation."
      },
      {
        question: "Do I need special wiring for smart home devices?",
        answer: "Many smart devices are wireless and battery-powered. Some, like smart switches or thermostats, may require wiring. We'll handle all necessary installations."
      },
      {
        question: "Will my smart home still work if the internet goes down?",
        answer: "Most smart devices will maintain basic functionality without internet, though advanced features may be limited. We can implement systems that remain functional during outages."
      },
      {
        question: "How secure are smart home devices?",
        answer: "We implement security best practices including separate networks for IoT devices, strong passwords, regular updates, and encrypted connections to keep your smart home secure."
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

export default SmartHome;
