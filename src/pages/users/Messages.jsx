import React from "react";
import Title from "../../components/Title";

export default function Messages() {
  return (
    <div>
      <Title text="Messages" />
      <div className="max-w-4xl bg-white rounded-md shadow-md p-6 mt-4">
        <p className="text-gray-500">
          La fonctionnalité de messagerie est en cours de développement.
        </p>
      </div>
    </div>
  );
}
