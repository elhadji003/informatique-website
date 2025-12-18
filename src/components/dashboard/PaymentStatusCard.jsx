export default function PaymentStatusCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <h2 className="text-lg font-semibold mb-2">
        💳 Abonnement
      </h2>

      <p className="text-sm text-gray-600 mb-3">
        Statut : <span className="text-green-600 font-medium">Actif</span>
      </p>

      <p className="text-sm text-gray-500 mb-4">
        Valable jusqu’au : 30 juin 2025
      </p>

      <button className="w-1/4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Renouveler l’abonnement
      </button>
    </div>
  );
}
