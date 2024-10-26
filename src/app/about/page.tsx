export const metadata = {
  title: "Sobre nós - CondoTrucks",
  description: "Aprenda mais sobre nossa missão.",
};

export default function AboutPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Sobre o CondoTrucks</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-lg mb-4">
          CondoTrucks é sua plataforma essencial para descobrir incríveis comidas de rua no seu
          condomínio. Nossa missão é conectar amantes da gastronomia com talentosos chefs
          ambulantes, unindo comunidades uma refeição deliciosa por vez.
        </p>
        <p className="text-lg mb-4">
          Fundada em 2024, crescemos de um pequeno projeto universitário. Somos apaixonados por
          apoiar pequenos negócios e ajudar empreendedores gastronômicos a alcançar novos clientes.
        </p>
        <p className="text-lg mb-4">
          Se você está com desejo de tacos, hambúrgueres, sushis ou algo parecido, o CondoTrucks
          ajuda você a encontrar a refeição perfeita. Sinta-se à vontade para conhecer nosso site!
        </p>
      </div>
    </main>
  );
}
