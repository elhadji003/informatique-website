import React, { useState } from "react";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "../../../backend/features/user/userApi";
import Modules from "../../../components/bureautique/Modules";

export default function Bureautique() {
  const { data: user } = useGetUserProfileQuery();
  const [level, setLevel] = useState(user?.level || "");

  const [updateLevelUser, { isLoading, isSuccess, isError }] =
    useUpdateUserProfileMutation();

  const handleSelectLevel = async (selectedLevel) => {
    setLevel(selectedLevel);
    await updateLevelUser({ level_bureautique: selectedLevel });
  };

  return (
    <div className="space-y-6">
      {/* Salutation */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          👋 Bienvenue en Bureautique
        </h1>
        {level === "beginner" ? (
          <p className="text-gray-600 mt-1">
            Tu es en train de suivre le parcours Débutant.
          </p>
        ) : (
          <p className="text-gray-600 mt-1">
            Avant de commencer, dis-nous ton niveau pour te proposer le bon
            parcours.
          </p>
        )}
      </div>

      {/* Choix du niveau */}
      {!level && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => handleSelectLevel("beginner")}
            disabled={isLoading}
            className="border rounded-xl p-5 text-left hover:shadow transition disabled:opacity-50"
          >
            <h2 className="font-semibold mb-1">🟢 Débutant</h2>
            <p className="text-sm text-gray-500">
              Je commence de zéro, je veux apprendre pas à pas.
            </p>
          </button>

          <button
            onClick={() => handleSelectLevel("advanced")}
            disabled={isLoading}
            className="border rounded-xl p-5 text-left hover:shadow transition disabled:opacity-50"
          >
            <h2 className="font-semibold mb-1">🔵 Avancé</h2>
            <p className="text-sm text-gray-500">
              J’ai déjà des bases, je veux aller plus vite.
            </p>
          </button>
        </div>
      )}

      {/* Feedback */}
      {isSuccess && (
        <p className="text-sm text-green-600">
          ✅ Niveau enregistré avec succès
        </p>
      )}

      {isError && (
        <p className="text-sm text-red-600">
          ❌ Erreur lors de l’enregistrement du niveau
        </p>
      )}

      {/* Contenu Débutant */}
      {level === "beginner" && (
        <div>
          <Modules />
        </div>
      )}

      {/* Contenu Avancé */}
      {level === "advanced" && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
          <h2 className="font-semibold text-blue-800 mb-2">
            🚀 Parcours Avancé
          </h2>
          <ul className="list-disc ml-5 text-sm text-blue-700 space-y-1">
            <li>Word professionnel (styles, modèles)</li>
            <li>Excel : formules et tableaux</li>
            <li>PowerPoint avancé</li>
            <li>Bonnes pratiques bureautiques</li>
          </ul>
        </div>
      )}
    </div>
  );
}
