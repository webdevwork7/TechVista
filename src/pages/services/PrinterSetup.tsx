
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/services/ServiceDetail';

const PrinterSetup = () => {
  const serviceData = {
    title: "Printer & Scanner Setup",
    description: "Get your printing and scanning equipment working flawlessly with our professional setup services. We install, configure, and troubleshoot printers and scanners for homes and businesses.",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6",
    features: [
      "Wireless printer configuration",
      "Network printer setup for multiple users",
      "Scanner and all-in-one device installation",
      "Driver installation and updates",
      "Mobile and cloud printing setup",
      "Print server configuration for businesses"
    ],
    includedServices: [
      "Printer hardware assembly and setup",
      "Wireless connection configuration",
      "Driver installation on all devices",
      "Scanner setup and calibration",
      "Mobile printing configuration",
      "Cloud printing services setup",
      "Print sharing across network",
      "Print server configuration",
      "Print quality optimization",
      "Ink/toner management system setup",
      "User training for complex features"
    ],
    faqs: [
      {
        question: "Can you set up my printer to work with all my devices?",
        answer: "Yes, we can configure your printer to work with all your computers, tablets, and smartphones, regardless of operating system."
      },
      {
        question: "My printer keeps going offline. Can you fix this?",
        answer: "This is a common issue we resolve by addressing network connectivity problems, updating firmware, and configuring settings for more stable connections."
      },
      {
        question: "Can you set up scanning to email or cloud services?",
        answer: "Absolutely! We can configure your scanner to send documents directly to email addresses, cloud storage services, or network folders."
      },
      {
        question: "Do you support business-grade printing solutions?",
        answer: "Yes, we support everything from home printers to enterprise-level printing environments, including print servers and managed print services."
      },
      {
        question: "Can you help with printer troubleshooting if I have issues later?",
        answer: "Yes, we offer ongoing support for printer issues. Many problems can be resolved remotely, or we can schedule a technician visit if necessary."
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

export default PrinterSetup;
