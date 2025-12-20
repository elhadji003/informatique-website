import React, { useState } from "react";
import Programmation from "../../pages/cours/programmation/Programmation";
import Bureautique from "../../pages/cours/bureautique/Bureautique";


function Reseaux() {
  return <div>Réseaux content</div>;
}

const tabs = [
  {
    id: "bureautique",
    label: "Bureautique",
    component: <Bureautique />,
  },
  {
    id: "programmation",
    label: "Programmation",
    component: <Programmation />,
  },
  {
    id: "reseaux",
    label: "Réseaux",
    component: <Reseaux />,
  },
];

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("bureautique");

  const activeContent = tabs.find(
    (tab) => tab.id === activeTab
  )?.component;

  return (
    <div>
      {/* Tabs header */}
      <div className="flex justify-center gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition
              ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow"
                  : "bg-blue-100 text-blue-600 hover:bg-blue-200"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs content */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        {activeContent}
      </div>
    </div>
  );
}
