import React from "react";

export default function CardFinished({ title, description }) {
  return (
    <div className="bg-blue-100 border-2 border-blue-400 px-4 py-4 rounded-md shadow">
      <h2 className="text-lg font-semibold text-blue-700 mb-2">{title}</h2>
      <p className="text-sm text-blue-600">{description}</p>
    </div>
  );
}
