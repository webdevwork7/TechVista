
import React from 'react';
import { ChevronDown } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

const FAQs = () => {
  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "How does TechAssist work?",
          answer: "TechAssist connects you with certified technicians in your area who can help with a variety of tech issues. Simply search for the service you need, book an appointment, and a tech expert will come to your location to solve your problem."
        },
        {
          question: "How much do services cost?",
          answer: "Service costs vary depending on the type of service and complexity. You can see the estimated price when you book a service. We offer transparent pricing with no hidden fees."
        },
        {
          question: "Do you offer any warranties?",
          answer: "Yes, all of our services come with a 30-day satisfaction guarantee. If the issue recurs within 30 days of the original service, we'll fix it at no additional cost."
        },
        {
          question: "How are your technicians vetted?",
          answer: "All of our technicians undergo thorough background checks, skills assessments, and are certified in their areas of expertise. We only work with the best to ensure quality service."
        }
      ]
    },
    {
      title: "Booking & Scheduling",
      faqs: [
        {
          question: "How quickly can a technician arrive?",
          answer: "In many cases, we can dispatch a technician within the same day, often within a few hours. For non-urgent issues, you can schedule an appointment at your convenience."
        },
        {
          question: "Can I request a specific technician?",
          answer: "Yes, if you've worked with a technician before and would like to request them again, you can specify this during the booking process, subject to their availability."
        },
        {
          question: "What if I need to cancel or reschedule?",
          answer: "You can cancel or reschedule your appointment through your account up to 2 hours before the scheduled service time without any fee."
        }
      ]
    },
    {
      title: "Services & Support",
      faqs: [
        {
          question: "What types of devices do you service?",
          answer: "We service a wide range of devices including computers, laptops, smartphones, tablets, TVs, printers, smart home devices, and gaming consoles from all major brands."
        },
        {
          question: "Do you offer remote support?",
          answer: "Yes, for certain issues, we offer remote support options where a technician can troubleshoot and resolve your problem online without having to visit your location."
        },
        {
          question: "What if my problem can't be fixed?",
          answer: "If our technician cannot resolve your issue, you won't be charged for the service call. We're committed to your satisfaction and finding solutions to your tech problems."
        }
      ]
    },
    {
      title: "Membership & Billing",
      faqs: [
        {
          question: "What are the benefits of membership?",
          answer: "Members receive priority scheduling, discounted service rates, free remote support sessions, preventative maintenance, and exclusive tech tips and resources."
        },
        {
          question: "How am I billed for services?",
          answer: "You'll be charged after the service is completed. We accept all major credit cards, and payment is processed securely through our platform."
        },
        {
          question: "Is there a satisfaction guarantee?",
          answer: "Yes, we offer a 100% satisfaction guarantee. If you're not completely satisfied with the service, contact us within 7 days and we'll make it right."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 mb-8">
              Find answers to the most common questions about our services, technicians, and policies.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl mx-auto">
            {faqCategories.map((category, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="bg-blue-50 rounded-xl p-8 mt-10">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Still have questions?
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Our support team is ready to help you with any other questions you may have.
              </p>
              <div className="flex justify-center">
                <Button className="mr-4">Contact Support</Button>
                <Button variant="outline">Live Chat</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
