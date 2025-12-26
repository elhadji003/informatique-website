import React from "react";
import { X, Mouse } from "lucide-react";
import sourisImg from "../../../assets/img/Souris.png"; // ton image de souris
import AccordionUsage from "../../AccordionUsage";

export default function Souris({ onOpen, onClose }) {
  if (!onOpen) return null;

  const accordionData = [
    {
      title: "🖱️ Les fonctions principales",
      content: (
        <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
          <li>Pointer et déplacer le curseur</li>
          <li>Clic gauche et clic droit</li>
          <li>Molette de défilement</li>
        </ul>
      ),
    },
    {
      title: "⚙️ Fonctions avancées",
      content: (
        <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
          <li>Touches programmables</li>
          <li>Changement de DPI pour la sensibilité</li>
          <li>Connectivité filaire ou sans fil</li>
        </ul>
      ),
    },
    {
      title: "✅ Bonnes pratiques",
      content: (
        <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
          <li>Utiliser un tapis de souris</li>
          <li>Nettoyer régulièrement la souris</li>
          <li>Ne pas appuyer trop fort sur les boutons</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-6 md:p-8 relative animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-yellow-100 text-yellow-600 p-3 rounded-xl">
            <Mouse />
          </div>
          <h1 className="text-2xl font-semibold">Souris</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <p className="text-gray-600">
              La souris permet de pointer, cliquer et interagir avec
              l’ordinateur. Elle est indispensable pour naviguer facilement sur
              l’écran.
            </p>

            <div>
              <h2 className="font-semibold mb-2">
                📌 Caractéristiques principales
              </h2>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Clic gauche et clic droit</li>
                <li>Molette de défilement</li>
                <li>Connexion filaire ou sans fil</li>
                <li>Ergonomique pour confort</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={sourisImg}
              alt="Souris"
              className="w-56 md:w-64 hover:scale-105 transition-transform"
            />
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm space-y-2">
          <p className="font-semibold">
            🖱️ La souris possède généralement 3 boutons principaux :
          </p>

          <ul className="list-disc ml-5 space-y-1 text-gray-700">
            <li>
              <strong>Bouton gauche</strong> : sélectionner, cliquer, ouvrir un
              fichier ou valider une action
            </li>
            <li>
              <strong>Molette (Scroll)</strong> : faire défiler une page vers le
              haut ou le bas
            </li>
            <li>
              <strong>Bouton droit</strong> : afficher le menu des options
              (copier, coller, renommer…)
            </li>
          </ul>

          <p className="text-xs text-gray-600">
            👉 Le bouton gauche est le plus utilisé au quotidien.
          </p>
        </div>

        <AccordionUsage contenue={accordionData} />

        <div className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
          >
            J’ai compris 👍
          </button>
        </div>
      </div>

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
