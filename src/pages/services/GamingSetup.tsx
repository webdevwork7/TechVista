
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/services/ServiceDetail';

const GamingSetup = () => {
  const serviceData = {
    title: "Gaming Setup Services",
    description: "Level up your gaming experience with our professional gaming setup services. From console installation to PC gaming optimization, we create the ultimate gaming environment.",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
    features: [
      "Gaming console installation and optimization",
      "Gaming PC setup and performance tuning",
      "VR system installation and calibration",
      "Network optimization for online gaming",
      "Gaming peripheral configuration",
      "Streaming setup for content creators"
    ],
    includedServices: [
      "Gaming console setup and connection",
      "Gaming PC assembly and optimization",
      "VR headset installation and room setup",
      "Gaming network optimization",
      "Controller and peripheral configuration",
      "Game library installation and updates",
      "Gaming monitor calibration",
      "Surround sound setup for immersive audio",
      "RGB lighting installation and programming",
      "Streaming equipment setup (capture cards, mics)",
      "Cable management for gaming setups"
    ],
    faqs: [
      {
        question: "Can you build a custom gaming PC for me?",
        answer: "Yes, we can build custom gaming PCs to your specifications, or recommend and assemble components based on your budget and gaming needs."
      },
      {
        question: "How can I reduce lag when gaming online?",
        answer: "We optimize your network settings, prioritize gaming traffic on your router, use wired connections when possible, and implement other techniques to minimize lag."
      },
      {
        question: "Can you set up a VR gaming space in my home?",
        answer: "Absolutely! We'll install your VR system, calibrate the sensors/cameras, define your play area, and ensure everything is optimized for the best VR experience."
      },
      {
        question: "Can you help me set up for game streaming?",
        answer: "Yes, we can configure your streaming software (OBS, Streamlabs, etc.), connect capture devices, set up microphones and cameras, and optimize your system for simultaneous gaming and streaming."
      },
      {
        question: "My gaming console has performance issues. Can you fix it?",
        answer: "We can diagnose and resolve most console performance issues, including overheating, slow loading, connection problems, and storage management."
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

export default GamingSetup;
