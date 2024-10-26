export const metadata = {
  title: "Contatos - CondoTrucks",
  description: "Fale conosco.",
};

export default function ContactPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Contato</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-lg mb-4">
          Adoraríamos ouvir você! Se você tem alguma dúvida sobre nossos serviços, quer estabelecer
          uma parceria conosco ou simplesmente quer dar um olá, não hesite em entrar em contato.
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Assuntos Gerais</h2>
          <p>Email: info@condotrucks.com.br</p>
          <p>WhatsApp: (+55) 19 99123-4567</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Business Hours</h2>
          <p>Segunda a sexta: 9:00 às 17:00</p>
        </div>
      </div>
    </main>
  );
}
