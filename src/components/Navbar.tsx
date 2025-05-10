
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-estoquei-600">e<span className="text-estoquei-800">Stoquei</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-estoquei-600 transition-colors">Recursos</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-estoquei-600 transition-colors">Como Funciona</a>
          <a href="#testimonials" className="text-gray-600 hover:text-estoquei-600 transition-colors">Depoimentos</a>
          <a href="#pricing" className="text-gray-600 hover:text-estoquei-600 transition-colors">Preços</a>
        </div>

        <div className="hidden md:block">
          <Button className="bg-estoquei-600 text-white hover:bg-estoquei-700">
            Experimente Grátis
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white py-4 px-6 shadow-md absolute left-0 right-0">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-estoquei-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Recursos
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-600 hover:text-estoquei-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-600 hover:text-estoquei-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#pricing" 
              className="text-gray-600 hover:text-estoquei-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </a>
            <Button className="bg-estoquei-600 text-white hover:bg-estoquei-700 w-full mt-2">
              Experimente Grátis
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
