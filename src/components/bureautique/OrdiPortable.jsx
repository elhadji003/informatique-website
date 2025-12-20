import React from "react";
import { X, Laptop, Heart } from "lucide-react";
import ordi from "../../assets/img/odinateur.png";
import AccordionUsage from "../AccordionUsage";

export default function OrdiPortable({ onOpen, onClose }) {
  if (!onOpen) return null;

  const accordionData = [
    {
      title: "📐 Les tailles d’ordinateurs portables",
      content: (
        <div className="space-y-3 text-sm">
          <p>
            Les ordinateurs portables existent en plusieurs tailles. La taille
            est mesurée en <strong>pouces</strong> et correspond à la dimension
            de l’écran.
          </p>

          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>13 – 14 pouces</strong> : léger et facile à transporter.
              <br />
              👉 Idéal pour les étudiants et les déplacements.
            </li>

            <li>
              <strong>15 pouces</strong> : taille la plus courante.
              <br />
              👉 Bon équilibre entre confort et mobilité.
            </li>

            <li>
              <strong>17 pouces</strong> : grand écran.
              <br />
              👉 Confortable pour le travail prolongé, mais plus lourd.
            </li>
          </ul>

          <p className="text-gray-600">
            💡 Plus l’écran est grand, plus l’ordinateur est lourd et consomme
            de batterie.
          </p>
        </div>
      ),
    },
    {
      title: "🧩 Les éléments visibles",
      content: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Écran : affiche les informations</li>
          <li>Clavier : permet d’écrire</li>
          <li>Pavé tactile (touchpad)</li>
          <li>Ports USB pour brancher des appareils</li>
        </ul>
      ),
    },
    {
      title: "⚙️ Les éléments internes",
      content: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Batterie : alimente l’ordinateur</li>
          <li>Processeur : le cerveau</li>
          <li>Mémoire (RAM) : rapidité</li>
          <li>Disque dur : stockage</li>
        </ul>
      ),
    },
    {
      title: "✅ Bonnes pratiques",
      content: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Ne pas manger au-dessus</li>
          <li>Le charger correctement</li>
          <li>Le transporter dans un sac adapté</li>
          <li>Éviter l’eau et la poussière</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-6 md:p-8 relative animate-scaleIn">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
            <Laptop />
          </div>
          <h1 className="text-2xl font-semibold">Ordinateur Portable</h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Texte */}
          <div className="space-y-4">
            <p className="text-gray-600">
              Un ordinateur portable est un ordinateur que l’on peut transporter
              facilement. Il fonctionne avec une batterie et peut être utilisé
              partout.
            </p>

            <div>
              <h2 className="font-semibold mb-2">
                📌 Caractéristiques principales
              </h2>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Facile à transporter</li>
                <li>Fonctionne sur batterie</li>
                <li>Écran, clavier et souris intégrés</li>
                <li>Idéal pour l’école et le travail</li>
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="flex-col justify-center">
            <img
              src={ordi}
              alt="Ordinateur portable"
              className="w-56 md:w-64 hover:scale-125 transition-transform mx-auto"
            />
          </div>
        </div>

        <AccordionUsage contenue={accordionData} />

        {/* Footer */}
        <div className="flex justify-end mt-8">
        
          <div>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              J’ai compris 👍
            </button>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          .animate-scaleIn {
            animation: scaleIn 0.25s ease-out;
          }
          @keyframes scaleIn {
            from {
              transform: scale(0.9);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}
