import React from "react";

export default function Programmation() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-gray-800">💻 Programmation</h1>

      <p className="text-gray-600">
        Apprenez les bases de la programmation pas à pas : logique, langages et
        bonnes pratiques.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-700">
        🚧 Les cours de programmation seront bientôt disponibles.
      </div>

      <div className="text-sm text-gray-500">
        En attendant, vous pourrez bientôt commencer par :
        <ul className="list-disc ml-5 mt-2">
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
  );
}
