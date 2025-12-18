import React from "react";
import Title from "../../components/Title";
import Card from "../../components/dashboard/Card";
import PaymentStatusCard from "../../components/dashboard/PaymentStatusCard";

export default function DashboardUser() {
  const data = [
    {
      title: "Cours en cours",
      description: "3 cours actuellement actifs",
      progress: 45,
    },
    {
      title: "Projets complétés",
      description: "8 projets validés",
      progress: 80,
    },
    {
      title: "Tâches en attente",
      description: "5 tâches à terminer",
      progress: 60,
    },
  ];

  return (
    <div>
      <Title text={"Bienvenue sur votre Tableau de Bord"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            progress={item.progress}
          />
        ))}
      </div>
      <div className="mt-8 mb-4 flex gap-4">
        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Continuer le dernier cours
        </button>
        <button className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
          Voir toutes mes tâches
        </button>
      </div>
      <PaymentStatusCard />
    </div>
  );
}
