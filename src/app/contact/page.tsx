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
          We'd love to hear from you! Whether you have a question about our
          services, want to partner with us, or just want to say hello, don't
          hesitate to reach out.
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">General Inquiries</h2>
          <p>Email: info@foodtruckfinder.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Support</h2>
          <p>Email: support@foodtruckfinder.com</p>
          <p>Phone: (555) 987-6543</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Business Hours</h2>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
      </div>
    </main>
  );
}
