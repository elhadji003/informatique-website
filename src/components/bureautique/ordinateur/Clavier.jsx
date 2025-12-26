import React from "react";
import { X, Keyboard } from "lucide-react";
import clavierImg from "../../../assets/img/clavier.png";
import AccordionUsage from "../../AccordionUsage";

export default function Clavier({ onOpen, onClose }) {
  if (!onOpen) return null;

  const accordionData = [
    {
      title: "⌨️ Les touches principales",
      content: (
        <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
          <li>Lettres et chiffres pour écrire</li>
          <li>Touches de fonction (F1 à F12)</li>
          <li>Entrée, Espace, Maj (Shift), Ctrl, Alt</li>
        </ul>
      ),
    },
    {
      title: "🌍 AZERTY vs QWERTY",
      content: (
        <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
          <li>
            <strong>AZERTY</strong> : utilisé dans les pays francophones
          </li>
          <li>
            <strong>QWERTY</strong> : utilisé dans les pays anglophones
          </li>
          <li>Les lettres sont placées différemment</li>
          <li>Les raccourcis clavier restent identiques</li>
        </ul>
      ),
    },
    {
      title: "✅ Bonnes pratiques",
      content: (
        <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
          <li>Ne pas appuyer trop fort sur les touches</li>
          <li>Nettoyer régulièrement le clavier</li>
          <li>Éviter les liquides à proximité</li>
          <li>Bien positionner ses mains</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl scale-90 md:p-8 relative animate-scaleIn">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-purple-100 text-purple-600 p-3 rounded-xl">
            <Keyboard />
          </div>
          <h1 className="text-2xl font-semibold">Le Clavier</h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Text */}
          <div className="space-y-4">
            <p className="text-gray-600">
              Le clavier permet de saisir du texte et d’envoyer des commandes à
              l’ordinateur. C’est l’outil principal pour écrire, chercher sur
              Internet et utiliser des logiciels.
            </p>

            {/* AZERTY / QWERTY */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
              <h3 className="font-semibold mb-2">
                ⌨️ Types de claviers les plus utilisés
              </h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  <strong>AZERTY</strong> : clavier francophone
                </li>
                <li>
                  <strong>QWERTY</strong> : clavier international
                </li>
              </ul>
              <p className="mt-2 text-gray-600">
                ⚠️ La disposition change, mais le fonctionnement reste le même.
              </p>
            </div>

            {/* Raccourcis */}
            <div>
              <h2 className="font-semibold mb-2">
                ⚡ Raccourcis clavier essentiels
              </h2>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>
                  <strong>Ctrl + C</strong> : Copier
                </li>
                <li>
                  <strong>Ctrl + V</strong> : Coller
                </li>
                <li>
                  <strong>Ctrl + X</strong> : Couper
                </li>
                <li>
                  <strong>Ctrl + Z</strong> : Annuler
                </li>
                <li>
                  <strong>Ctrl + A</strong> : Tout sélectionner
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">
                👉 Ces raccourcis fonctionnent dans presque tous les logiciels.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={clavierImg}
              alt="Clavier"
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
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
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
