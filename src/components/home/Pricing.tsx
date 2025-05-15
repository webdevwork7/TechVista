
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

const PricingPlan: React.FC<PlanProps> = ({ 
  name, 
  price, 
  description, 
  features, 
  buttonText, 
  popular 
}) => {
  return (
    <Card className={`p-6 flex flex-col h-full border-2 ${
      popular ? 'border-primary shadow-lg relative' : 'border-gray-200'
    } card-hover`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold py-1 px-3 translate-y-[-50%] rounded-full">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Varies' && <span className="text-gray-500">/visit</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="mr-3 mt-1 text-primary">
              <Check className="h-4 w-4" />
            </div>
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      
      <Button 
        variant={popular ? "default" : "outline"} 
        className="w-full"
      >
        {buttonText}
      </Button>
    </Card>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      name: "Single Service",
      price: "$89",
      description: "One-time support for a specific tech problem",
      features: [
        "Expert on-site technician",
        "Diagnosis and troubleshooting",
        "Same-day appointments available",
        "30-day service guarantee",
        "No subscription required"
      ],
      buttonText: "Book Now",
      popular: false,
    },
    {
      name: "Tech Membership",
      price: isAnnual ? "$149" : "$19",
      description: "Ongoing tech support with priority service",
      features: [
        "Unlimited remote support",
        "Priority scheduling",
        "2 included on-site visits per year",
        "20% discount on additional services",
        "Dedicated tech advisor"
      ],
      buttonText: "Get Started",
      popular: true,
    },
    {
      name: "Business Solutions",
      price: "Varies",
      description: "Customized IT support for small businesses",
      features: [
        "Customized support plans",
        "Network & IT infrastructure",
        "Employee tech training",
        "Data backup & security",
        "Ongoing maintenance"
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading text-3xl md:text-4xl mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-lg">
            Choose the plan that works for you. No hidden fees or surprises.
          </p>
          
          <div className="mt-8 inline-flex items-center bg-gray-100 p-1 rounded-full">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                !isAnnual ? 'bg-white shadow-sm' : 'text-gray-700'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                isAnnual ? 'bg-white shadow-sm' : 'text-gray-700'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual <span className="text-xs text-primary font-bold">Save 35%</span>
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              buttonText={plan.buttonText}
              popular={plan.popular}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            All plans include our satisfaction guarantee. If you're not completely satisfied with our service, 
            we'll make it right or refund your money.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
