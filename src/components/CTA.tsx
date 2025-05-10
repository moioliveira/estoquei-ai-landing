
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-estoquei-700 to-estoquei-500">
      <div className="max-w-5xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para transformar sua gestão de estoque?
        </h2>
        <p className="text-xl mb-10 text-estoquei-100 max-w-3xl mx-auto">
          Junte-se a centenas de empresas que já otimizaram sua operação logística com o eStoquei.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-estoquei-600 hover:bg-estoquei-50 px-8 py-6 text-lg font-medium">
            Comece seu período gratuito
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-estoquei-600/20 px-8 py-6 text-lg">
            Agende uma demonstração
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
