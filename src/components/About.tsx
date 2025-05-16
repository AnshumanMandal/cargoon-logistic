
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cargoon-blue">About Cargoon Logistics</h2>
            <p className="text-gray-600 mb-4">
              Since 2010, Cargoon Logistics has been providing exceptional logistics and supply chain solutions to businesses across the globe. We've built our reputation on reliability, innovation, and customer-centric service.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experienced professionals understands the complexities of global trade and is dedicated to making shipping and logistics as seamless as possible for our clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-cargoon-blue">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver innovative logistics solutions that empower businesses to thrive in global markets.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-cargoon-blue">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted partner in global logistics, known for excellence and sustainability.
                </p>
              </div>
            </div>
            <Button className="bg-cargoon-orange hover:bg-cargoon-orange/90 text-white">
              Learn More About Us
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-cargoon-blue/80 to-cargoon-blue/10 mix-blend-multiply z-10"></div>
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-cargoon-orange p-6 rounded-lg shadow-lg w-40 h-40 md:w-48 md:h-48 flex flex-col items-center justify-center text-white">
              <p className="text-2xl md:text-3xl font-bold">13+</p>
              <p className="text-sm md:text-base text-center">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
