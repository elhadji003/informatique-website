import React from "react";
import { X, Monitor } from "lucide-react";
import ordiFixeImg from "../../../assets/img/ordiFixe2.png"; // tu peux mettre ton image

import AccordionUsage from "../../AccordionUsage";

export default function OrdiFixe({ onOpen, onClose }) {
  if (!onOpen) return null;

  const accordionData = [
    {
      title: "🖥️ Les composants principaux",
      content: (
        <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
          <li>Écran : affiche les informations</li>
          <li>Unité centrale : le cerveau de l’ordinateur</li>
          <li>Clavier : permet de saisir des informations</li>
          <li>Souris : permet de pointer et cliquer</li>
        </ul>
      ),
    },
    {
      title: "⚙️ Les éléments internes",
      content: (
        <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
          <li>Processeur : rapidité et calculs</li>
          <li>Mémoire (RAM) : fluidité</li>
          <li>Disque dur : stockage des données</li>
          <li>Carte graphique : affichage et vidéos</li>
        </ul>
      ),
    },
    {
      title: "✅ Bonnes pratiques",
      content: (
        <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
          <li>Ne pas exposer à l’eau ou à la poussière</li>
          <li>Éviter de bloquer les ventilateurs</li>
          <li>Nettoyer régulièrement l’écran et le clavier</li>
          <li>Positionner correctement l’écran pour le confort</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
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
          <div className="bg-green-100 text-green-600 p-3 rounded-xl">
            <Monitor />
          </div>
          <h1 className="text-2xl font-semibold">Ordinateur Fixe</h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Texte */}
          <div className="space-y-4">
            <p className="text-gray-600">
              Un ordinateur fixe est posé sur un bureau. Il est généralement plus puissant que
              le portable et composé de plusieurs éléments : écran, unité centrale, clavier et souris.
            </p>

            <div>
              <h2 className="font-semibold mb-2">📌 Caractéristiques principales</h2>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Plus puissant qu’un portable</li>
                <li>Composé de plusieurs éléments séparés</li>
                <li>Écran, clavier et souris à part</li>
                <li>Idéal pour le travail prolongé ou gaming</li>
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={ordiFixeImg}
              alt="Ordinateur fixe"
              className="w-56 md:w-64 hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Accordion */}
        <AccordionUsage contenue={accordionData} />

        {/* Footer */}
        <div className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            J’ai compris 👍
          </button>
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
