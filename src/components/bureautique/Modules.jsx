import { Check } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialModules = [
  {
    id: 1,
    title: "Découvrir l’ordinateur",
    completed: false,
    href: "/cours/bureautique/ordinateur",
  },
  {
    id: 2,
    title: "Utiliser le clavier et la souris",
    completed: false,
    href: "/cours/bureautique/clavier-souris",
  },
  {
    id: 3,
    title: "Créer un document Word",
    completed: false,
    href: "/cours/bureautique/word",
  },
  {
    id: 4,
    title: "Notions de base Excel",
    completed: false,
    href: "/cours/bureautique/excel",
  },
  {
    id: 5,
    title: "Notions de base PowerPoint",
    completed: false,
    href: "/cours/bureautique/powerpoint",
  },
];

export default function Modules() {
  const [modules, setModules] = useState(initialModules);

  const toggleModule = (id, e) => {
    e.stopPropagation(); // empêche la navigation
    e.preventDefault();

    setModules((prev) =>
      prev.map((module) =>
        module.id === id
          ? { ...module, completed: !module.completed }
          : module
      )
    );
  };

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
      <h2 className="font-semibold text-blue-800 mb-4">
        🎓 Parcours Débutant
      </h2>

      <ul className="space-y-2 text-sm">
        {modules.map((module) => (
          <li
            key={module.id}
            className="bg-white rounded-md shadow-sm hover:shadow-md transition"
          >
            <Link
              to={module.href}
              className="flex items-center justify-between p-3"
            >
              <span>{module.title}</span>

              <button
                onClick={(e) => toggleModule(module.id, e)}
                className="ml-4"
              >
                {module.completed ? (
                  <Check className="text-green-600" />
                ) : (
                  <span className="text-gray-400">⏳</span>
                )}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
