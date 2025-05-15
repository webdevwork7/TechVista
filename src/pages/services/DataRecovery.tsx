
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/services/ServiceDetail';

const DataRecovery = () => {
  const serviceData = {
    title: "Data Backup & Recovery",
    description: "Don't lose your precious files and memories. Our data recovery specialists can retrieve data from crashed hard drives, corrupted storage, and damaged devices, plus set up reliable backup solutions to prevent future loss.",
    image: "https://images.unsplash.com/photo-1563770557719-b3db9c69147e",
    features: [
      "Advanced recovery from physically damaged media",
      "Retrieval from formatted or corrupted drives",
      "Cloud backup solution implementation",
      "Regular automated backup configuration",
      "Cross-platform recovery capabilities",
      "Secure data handling protocols"
    ],
    includedServices: [
      "Hard drive data recovery",
      "SSD data recovery",
      "USB drive and memory card recovery",
      "Laptop and desktop crash recovery",
      "Smartphone and tablet data retrieval",
      "RAID system recovery",
      "Deleted file recovery",
      "Backup system implementation",
      "Cloud backup configuration",
      "Network attached storage (NAS) setup",
      "Data migration to new devices"
    ],
    faqs: [
      {
        question: "Can you recover data from a dead computer?",
        answer: "In many cases, yes. Even when a computer won't boot, the storage drive can often be removed and accessed separately to recover your files."
      },
      {
        question: "What types of storage devices can you recover data from?",
        answer: "We can recover data from hard drives, SSDs, USB drives, memory cards, smartphones, tablets, and RAID arrays from all major manufacturers."
      },
      {
        question: "How much does data recovery cost?",
        answer: "Pricing depends on the severity of damage and type of device. We provide a free evaluation and quote before beginning any recovery work."
      },
      {
        question: "How long does data recovery take?",
        answer: "Simple logical recoveries can be completed in 1-2 days. Complex physical recovery may take 5-7 days. We offer expedited services for emergency situations."
      },
      {
        question: "What's the best backup solution for home users?",
        answer: "We typically recommend a combination of local backup (external drive) and cloud backup for the most comprehensive protection. We can help set up both systems."
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

export default DataRecovery;
