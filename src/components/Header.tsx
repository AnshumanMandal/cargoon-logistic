import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Package } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Package size={32} className="text-cargoon-orange mr-2" />
          <span className="text-xl font-bold text-cargoon-blue">Cargoon Logistic</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-cargoon-orange font-medium">Home</a>
          <a href="#services" className="text-gray-700 hover:text-cargoon-orange font-medium">Services</a>
          <a href="#about" className="text-gray-700 hover:text-cargoon-orange font-medium">About</a>
          <a href="#achievements" className="text-gray-700 hover:text-cargoon-orange font-medium">Achievements</a>
          <a href="#contact" className="text-gray-700 hover:text-cargoon-orange font-medium">Contact</a>
        </nav>

        <Button className="hidden md:inline-flex bg-cargoon-orange hover:bg-cargoon-orange/90 text-white">
          Get a Quote
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white py-4 px-4 absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-cargoon-orange font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-cargoon-orange font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-cargoon-orange font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#achievements" className="text-gray-700 hover:text-cargoon-orange font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Achievements
            </a>
            <a href="#contact" className="text-gray-700 hover:text-cargoon-orange font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <Button className="bg-cargoon-orange hover:bg-cargoon-orange/90 text-white w-full" onClick={() => setIsMenuOpen(false)}>
              Get a Quote
            </Button>
          </nav>
        </div>}
    </header>;
};
export default Header;