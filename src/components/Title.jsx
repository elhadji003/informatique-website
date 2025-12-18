import React from "react";

export default function Title({ text }) {
  return (
    <div className="mb-6">
      <h1 className="border-l-4 border-blue-500 px-2 py-1 text-xl font-semibold">
        {text}
      </h1>
    </div>
  );
}
