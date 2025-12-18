import React from "react";

export default function Card({ title, description, progress }) {
  return (
    <div className="w-full bg-white shadow hover:shadow-md transition rounded-xl p-5 border-l-4 border-blue-500">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <span className="text-sm font-medium text-blue-600">{progress}%</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-4">{description}</p>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="h-2 bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
