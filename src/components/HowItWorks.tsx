
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Integração Simplificada",
      description: "Conecte seus sistemas existentes em poucos minutos com nossa API robusta e flexível.",
    },
    {
      number: "02",
      title: "Análise de Dados",
      description: "Nossa IA analisa seu histórico de vendas, sazonalidade e tendências de mercado.",
    },
    {
      number: "03",
      title: "Recomendações Personalizadas",
      description: "Receba sugestões de balanceamento de estoque entre seus centros de distribuição.",
    },
    {
      number: "04",
      title: "Otimização Contínua",
      description: "O sistema aprende constantemente e melhora suas previsões e recomendações.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como o eStoquei Funciona</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Da integração à otimização contínua, nosso processo é projetado para maximizar sua eficiência logística.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg shadow-md p-8 h-full border-t-4 border-estoquei-600 hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl font-bold text-estoquei-200 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-estoquei-600 hover:bg-estoquei-700 text-white px-8 py-6 text-lg">
            Comece a Otimizar Seu Estoque
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
