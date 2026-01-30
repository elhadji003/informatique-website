import React from "react";

const plans = [
  {
    id: "free",
    name: "Gratuit",
    price: "0",
    period: "FCFA",
    features: ["Cours de base", "Accès forum"],
    buttonText: "Continuer ainsi",
    color: "gray",
  },
  {
    id: "monthly",
    name: "Mensuel",
    price: "2 000",
    period: "FCFA / mois",
    features: ["Tous les cours", "Certificats", "Support prioritaire"],
    buttonText: "S'abonner",
    color: "blue",
    popular: true,
  },
  {
    id: "yearly",
    name: "Annuel",
    price: "25 000",
    period: "FCFA / an",
    features: ["Tout illimité", "2 mois offerts", "Mentorat"],
    buttonText: "Économiser 10k",
    color: "indigo",
  },
];

export default function SubscriptionModal({ isOpen, onClose, onSelectPlan }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      {/* Container du Modal */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden relative animate-in fade-in zoom-in duration-300">
        {/* Bouton Fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Passez au niveau supérieur 🚀
            </h2>
            <p className="text-gray-500 mt-2">
              Débloquez tout le contenu de Lear Informatique
            </p>
          </div>

          {/* Grille des plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`border-2 rounded-2xl p-6 flex flex-col transition-all transform hover:scale-105 ${
                  plan.popular
                    ? "border-blue-500 shadow-lg scale-105"
                    : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <span className="bg-blue-500 text-white text-[10px] font-bold uppercase py-1 px-3 rounded-full self-start mb-4">
                    Le plus choisi
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-700">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-black text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-1 text-sm">
                    {plan.period}
                  </span>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-3 rounded-xl font-bold transition-all ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
