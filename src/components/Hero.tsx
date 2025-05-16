import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="bg-cargoon-blue text-white py-20 md:py-32 relative overflow-hidden">
      {/* Diagonal Pattern Background */}
      <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
    }}>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Global Logistics Solutions for Your Business
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Reliable shipping, warehousing, and supply chain management to help your business reach new horizons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-cargoon-orange hover:bg-cargoon-orange/90 text-white">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-base text-slate-50 bg-white/[0.13]">
              Learn More <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white opacity-10" style={{
      maskImage: "url(\"data:image/svg+xml;utf8,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z'/%3E%3C/svg%3E\")",
      maskSize: 'cover'
    }}></div>
    </section>;
};
export default Hero;