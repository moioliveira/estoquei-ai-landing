
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Com o eStoquei, reduzimos o tempo de reposição em 43% e a ruptura de estoque em mais de 60%. A capacidade de balancear automaticamente entre nossos CDs nos deu uma vantagem competitiva enorme.",
      name: "Carlos Silva",
      position: "Diretor de Logística, TechStore",
    },
    {
      quote: "As previsões de demanda feitas pela IA são incrivelmente precisas. Conseguimos antecipar picos de venda e nos preparar adequadamente. O ROI foi alcançado em menos de 3 meses.",
      name: "Mariana Alves",
      position: "COO, Fashionistas",
    },
    {
      quote: "A integração foi muito mais fácil do que imaginávamos. Em uma semana já estávamos operando com todos os recursos e observando melhorias significativas no nosso fluxo logístico.",
      name: "Pedro Mendes",
      position: "Gerente de TI, Supermercados Real",
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas de diversos segmentos já transformaram sua gestão de estoque com o eStoquei.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="mb-6 text-estoquei-600">
                  <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 36L0 24V12L13.5 24V36ZM45 36L31.5 24V12L45 24V36Z" fill="currentColor" fillOpacity="0.2"/>
                    <path d="M0 0H13.5L0 18V0ZM31.5 0H45L31.5 18V0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-gray-600 mb-8 italic">{item.quote}</p>
                <div className="mt-auto">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
