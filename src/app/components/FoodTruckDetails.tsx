export default function FoodTruckDetails({ truck }: Readonly<{ truck: any }>) {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{truck.name}</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-xl mb-2">
          <strong>Cuisine:</strong> {truck.cuisine}
        </p>
        <p className="text-xl mb-2">
          <strong>Hours:</strong> {truck.openingHours}
        </p>
        <p className="text-xl mb-4">{truck.description}</p>
        <h2 className="text-2xl font-bold mb-2">Menu</h2>
        <ul className="list-disc list-inside">
          {truck.menu.map((item: any, index: any) => (
            <li key={index} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
