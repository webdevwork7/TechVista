
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Membership = () => {
  const plans = [
    {
      name: "Basic",
      price: "9.99",
      period: "month",
      description: "Essential tech support for individuals",
      features: [
        "1 tech support call per month",
        "Remote troubleshooting",
        "Priority scheduling",
        "10% discount on repairs",
        "Basic device checkup"
      ],
      isFeatured: false
    },
    {
      name: "Standard",
      price: "19.99",
      period: "month",
      description: "Complete coverage for homes",
      features: [
        "3 tech support calls per month",
        "Remote and in-home service",
        "Next-day scheduling",
        "20% discount on repairs",
        "Quarterly device health checkups",
        "WiFi network optimization",
        "Smart home device assistance"
      ],
      isFeatured: true
    },
    {
      name: "Premium",
      price: "39.99",
      period: "month",
      description: "Ultimate protection for tech-heavy households",
      features: [
        "Unlimited tech support calls",
        "Priority same-day service",
        "30% discount on all services",
        "Monthly preventative maintenance",
        "Data backup solutions",
        "Dedicated tech advisor",
        "Annual network security audit",
        "All smart home services included"
      ],
      isFeatured: false
    }
  ];

  const benefits = [
    {
      title: "Priority Service",
      description: "Skip the line with same-day or next-day service for members."
    },
    {
      title: "Save Money",
      description: "Members enjoy exclusive discounts on all repairs and services."
    },
    {
      title: "Preventative Care",
      description: "Regular checkups help prevent problems before they start."
    },
    {
      title: "Peace of Mind",
      description: "Know that expert help is always just a call away."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">TechAssist Membership Plans</h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Join our membership program for priority service, exclusive discounts, and peace of mind knowing your technology is always taken care of.
            </p>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Membership Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 border border-gray-100 rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl overflow-hidden shadow-lg border ${plan.isFeatured ? 'border-primary' : 'border-gray-100'} relative`}
                >
                  {plan.isFeatured && (
                    <div className="bg-primary text-white py-1 px-3 text-sm font-medium absolute top-0 right-0 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-6 ${plan.isFeatured ? 'bg-primary/5' : ''}`}>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.isFeatured ? "default" : "outline"}>
                      Choose Plan
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">Can I cancel my membership at any time?</h3>
                <p className="text-gray-600">Yes, you can cancel your membership at any time. There are no long-term contracts or cancellation fees.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">How quickly can I get help as a member?</h3>
                <p className="text-gray-600">Members receive priority scheduling. Standard members get next-day service, while Premium members can get same-day service when available.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">Is there a limit to the devices covered?</h3>
                <p className="text-gray-600">Our membership plans cover all devices in your household. There's no limit to the number of devices, but service calls are counted per visit, not per device.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">What happens if I use all my service calls for the month?</h3>
                <p className="text-gray-600">If you use all your included service calls, additional calls are available at a reduced member rate based on your membership tier.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to join?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Get started with a TechAssist membership today and never worry about tech problems again.</p>
            <Button size="lg" variant="secondary">Sign Up Now</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Membership;
