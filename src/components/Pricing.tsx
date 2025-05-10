
import { Button } from '@/components/ui/button';
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "R$ 499",
      description: "Ideal para pequenas empresas com até 2 centros de distribuição",
      features: [
        "1 usuário administrador",
        "Até 2 centros de distribuição",
        "Balanceamento básico de estoque",
        "Previsão de demanda",
        "Suporte por e-mail"
      ],
      popular: false,
      buttonText: "Comece agora"
    },
    {
      name: "Business",
      price: "R$ 999",
      description: "Perfeito para empresas em crescimento com múltiplos CDs",
      features: [
        "5 usuários administradores",
        "Até 5 centros de distribuição",
        "Balanceamento avançado de estoque",
        "Previsão de demanda com IA",
        "Sugestões de reposição",
        "Suporte prioritário"
      ],
      popular: true,
      buttonText: "Experimente grátis"
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      description: "Para grandes operações com necessidades específicas",
      features: [
        "Usuários ilimitados",
        "Centros de distribuição ilimitados",
        "Balanceamento premium de estoque",
        "IA avançada para previsão de demanda",
        "API completa para integração",
        "Suporte dedicado 24/7",
        "Personalização completa"
      ],
      popular: false,
      buttonText: "Fale com vendas"
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos que se adaptam ao seu negócio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano perfeito para otimizar a gestão do seu estoque e melhorar seu fluxo logístico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg p-8 h-full transition-all duration-300 border ${
                plan.popular 
                  ? 'border-estoquei-600 shadow-xl shadow-estoquei-100 relative' 
                  : 'border-gray-100 hover:border-estoquei-200 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-estoquei-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Personalizado" && <span className="text-gray-500">/mês</span>}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              <div className="mb-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-estoquei-600 mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-estoquei-600 hover:bg-estoquei-700 text-white' 
                      : 'bg-white border-estoquei-600 text-estoquei-600 hover:bg-estoquei-50'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-500">
          <p>Todos os planos incluem 30 dias de teste grátis. Não é necessário cartão de crédito.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
