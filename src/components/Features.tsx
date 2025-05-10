
import { BarChart3, Database, Layout, CogIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Balanceamento Inteligente",
      description: "Redistribua automaticamente o estoque entre seus centros de distribuição para atender à demanda com eficiência.",
      icon: <Database className="h-12 w-12 text-estoquei-600" />,
    },
    {
      title: "Previsão de Demanda com IA",
      description: "Antecipe as necessidades de estoque com modelos de IA que analisam históricos de vendas e tendências de mercado.",
      icon: <BarChart3 className="h-12 w-12 text-estoquei-600" />,
    },
    {
      title: "Dashboard Intuitivo",
      description: "Acompanhe todos os indicadores importantes em um único painel personalizado para sua necessidade.",
      icon: <Layout className="h-12 w-12 text-estoquei-600" />,
    },
    {
      title: "Sugestão de Reposição",
      description: "Receba recomendações inteligentes sobre quando e quanto repor em cada centro de distribuição.",
      icon: <CogIcon className="h-12 w-12 text-estoquei-600" />,
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos que transformam sua gestão de estoque</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as ferramentas que vão revolucionar a forma como você gerencia seu estoque e distribui seus produtos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow duration-300 hover:border-estoquei-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
