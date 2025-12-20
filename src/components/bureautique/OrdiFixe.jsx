import React from "react";

export default function OrdiFixe({ onOpen, onClose }) {
  if (!onOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-7xl p-6 relative animate__animated animate__zoomIn">
        <h1 className=" text-2xl">Ordinateur Fixe</h1>
        <p className="">
          C’est un ordinateur posé sur un bureau. Il est plus puissant et
          composé de plusieurs éléments : écran, unité centrale, clavier et
          souris.
        </p>
        <div>
          <div>
            <h2 className="text-white text-xl mt-4">Caractéristiques :</h2>
            <ul className="text-white list-disc list-inside">
              <li>Portable et léger</li>
              <li>Alimentation par batterie</li>
              <li>Écran intégré</li>
              <li>Utilisé en déplacement</li>
            </ul>
          </div>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
