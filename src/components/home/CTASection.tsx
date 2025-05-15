import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -right-20 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to solve your tech problems?
            </h2>
            <p className="text-blue-100 text-lg max-w-xl">
              Our certified technicians are just a click away. Book a service
              today and experience hassle-free tech support.
            </p>
          </div>

          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-blue-50"
            >
              Book a Technician
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white hover:text-primary"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
