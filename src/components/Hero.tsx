
import { Button } from '@/components/ui/button';
import InventoryImage from '../assets/inventory-dashboard.svg';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Gestão de Estoque <span className="text-gradient">Inteligente</span> para seus centros de distribuição
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Otimize seu estoque com IA, equalize entre centros de distribuição e nunca mais perca vendas por falta de produtos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-estoquei-600 hover:bg-estoquei-700 text-white px-8 py-6 text-lg">
              Comece Agora
            </Button>
            <Button variant="outline" className="border-estoquei-600 text-estoquei-600 hover:bg-estoquei-50 px-8 py-6 text-lg">
              Agende Uma Demo
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-estoquei-600 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <img 
            src={InventoryImage} 
            alt="eStoquei Dashboard" 
            className="relative z-10 w-full max-w-lg mx-auto animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
