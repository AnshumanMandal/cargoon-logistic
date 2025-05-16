
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ship, Truck, Warehouse, Route, MapPin, Package } from 'lucide-react';

const services = [
  {
    icon: <Ship className="h-10 w-10 text-cargoon-orange" />,
    title: 'Ocean Freight',
    description: 'International shipping services with tracking capabilities for both FCL and LCL shipments.',
  },
  {
    icon: <Truck className="h-10 w-10 text-cargoon-orange" />,
    title: 'Land Transport',
    description: 'Efficient road freight services covering local and long-distance transportation needs.',
  },
  {
    icon: <Warehouse className="h-10 w-10 text-cargoon-orange" />,
    title: 'Warehousing',
    description: 'State-of-the-art warehousing facilities with inventory management systems.',
  },
  {
    icon: <Route className="h-10 w-10 text-cargoon-orange" />,
    title: 'Supply Chain',
    description: 'End-to-end supply chain solutions customized to optimize your logistics operations.',
  },
  {
    icon: <MapPin className="h-10 w-10 text-cargoon-orange" />,
    title: 'Last Mile Delivery',
    description: 'Reliable and fast last mile delivery services to ensure your products reach end customers.',
  },
  {
    icon: <Package className="h-10 w-10 text-cargoon-orange" />,
    title: 'Cargo Insurance',
    description: 'Comprehensive cargo insurance options to protect your valuable shipments worldwide.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-cargoon-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cargoon-blue">Our Services</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Comprehensive logistics and shipping solutions tailored to meet your business needs across the globe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-cargoon-blue">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 text-cargoon-blue hover:text-cargoon-orange">
                  Learn More →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
