export const metadata = {
  title: "Sobre nós - CondoTrucks",
  description: "Aprenda mais sobre nossa missão.",
};

export default function AboutPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Sobre o CondoTrucks
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-lg mb-4">
          Food Truck Finder is your go-to platform for discovering amazing
          street food in your area. Our mission is to connect food lovers with
          talented mobile chefs, bringing communities together one delicious
          meal at a time.
        </p>
        <p className="text-lg mb-4">
          Founded in 2024, we've grown from a small local project to a
          nationwide network of food trucks. We're passionate about supporting
          small businesses and helping food entrepreneurs reach new customers.
        </p>
        <p className="text-lg mb-4">
          Whether you're craving tacos, burgers, sushi, or something completely
          unique, Food Truck Finder helps you locate the perfect meal on wheels.
          Join us in celebrating the diversity and creativity of street food
          culture!
        </p>
      </div>
    </main>
  );
}
