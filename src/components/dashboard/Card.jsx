import React from "react";

export default function Card({ title, description, progress, completionRate }) {
  const finished = completionRate === 100;

  return (
    <div>
      {finished ? (
        <div className="bg-blue-100 border-2 border-blue-400 px-4 py-4 rounded-md shadow text-center">
          <h2 className="text-lg font-semibold text-blue-700 mb-2">🎉 Bravo !</h2>
          <p className="text-sm text-blue-600">
            Vous avez terminé tous vos cours, continuez à progresser !
          </p>
        </div>
      ) : (
        <div className="w-full bg-white shadow hover:shadow-md transition rounded-xl p-5 border-l-4 border-blue-500">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <span className="text-sm font-medium text-blue-600">{progress}%</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">{description}</p>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                progress === 100
                  ? "bg-emerald-600"
                  : progress >= 50
                  ? "bg-emerald-400 animate-pulse"
                  : "bg-blue-600"
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
