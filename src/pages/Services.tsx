

const services = [
  {
    name: "Criação de Sites e Landing Pages",
    description:
      "Convoco estruturas leves e responsivas, com design encantador e performance de outro plano. Ideal para quem quer presença online com impacto.",
    price: "R$ 1.500,00",
  },
  {
    name: "Desenvolvimento de Sistemas Web",
    description:
      "Sistemas completos, com back-end sólido e front-end mágico. Gestão, automação ou portais — seu império, seu domínio.",
    price: "R$ 4.000,00",
  },
  {
    name: "Aplicativos Mobile",
    description:
      "Magias híbridas para Android e iOS. React Native no grimório e experiência de sobra em batalhas mobile.",
    price: "R$ 3.500,00",
  },
  {
    name: "Manutenção e Evolução de Projetos",
    description:
      "Refatoração, melhorias de performance, novas features... Às vezes, até feitiços precisam ser renovados.",
    price: "R$ 120/hora",
  },
  {
    name: "Consultoria Técnica",
    description:
      "Tem uma ideia mas não sabe por onde começar? Traga seu mapa e juntos traçaremos a rota.",
    price: "R$ 200/sessão",
  },
  {
    name: "Criação de Identidade Visual",
    description:
      "Logos, banners, paletas — a estética que reflete sua essência. Combinação de magia e design.",
    price: "R$ 800,00",
  },
  {
    name: "Freelas Rápidos (1 a 3 dias)",
    description:
      "Precisando de uma solução relâmpago? Entre em contato e veja se consigo encaixar uma magia de resposta rápida.",
    price: "Sob consulta",
  },
];

export default function ServicesPage() {
  return (
    <div className="rpgui-content p-6 max-w-5xl mx-auto">
      <div className="rpgui-container framed-golden p-4">
        <h1 className="text-3xl font-bold text-center mb-6">💼 Grimório de Invocação Digital</h1>
        <p className="mb-8 text-center text-lg">
          Bem-vindo ao meu santuário de encantamentos tecnológicos. Aqui, ideias ganham
          forma, interfaces se tornam épicas e sistemas nascem sob a luz de commits sagrados.
        </p>

        <table className="table-auto w-full rpgui-container framed mb-10">
          <thead>
            <tr>
              <th className="p-2 text-left">Serviço</th>
              <th className="p-2 text-left">Descrição</th>
              <th className="p-2 text-left">Preço Inicial</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, idx) => (
              <tr key={idx} className="odd:bg-[#f0e6d2] even:bg-[#e5dcc2]">
                <td className="p-3 font-semibold">{service.name}</td>
                <td className="p-3">{service.description}</td>
                <td className="p-3">{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="rpgui-container framed-golden p-4 text-center">
          <h2 className="text-2xl font-bold mb-2">📩 Invocar um Serviço</h2>
          <p>
            Entre em contato para agendar uma conversa. Vamos conjurar a solução ideal para
            o seu projeto — com café, código e criatividade.
          </p>
        </div>
      </div>
    </div>
  );
}
