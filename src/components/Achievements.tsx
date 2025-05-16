
import React from 'react';
import { Map, Package, Truck, Users } from 'lucide-react';

const stats = [
  {
    icon: <Map className="h-10 w-10 text-cargoon-orange" />,
    value: "120+",
    label: "Countries Served",
  },
  {
    icon: <Package className="h-10 w-10 text-cargoon-orange" />,
    value: "1M+",
    label: "Packages Delivered",
  },
  {
    icon: <Truck className="h-10 w-10 text-cargoon-orange" />,
    value: "5,000+",
    label: "Vehicles in Fleet",
  },
  {
    icon: <Users className="h-10 w-10 text-cargoon-orange" />,
    value: "10,000+",
    label: "Happy Clients",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-cargoon-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E\")" }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Impact</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            We're proud of the global reach and impact we've achieved through dedication to excellence in logistics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center hover:bg-white/15 transition-colors">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
