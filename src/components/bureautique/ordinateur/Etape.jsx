import React from "react";
import Title from "../../Title";

export default function Etape({
  etapeItem,
  ordiItems,
  setModalOrdiPortableOpen,
  setModalOrdiFixeOpen,
  setModalClavierOpen,
  setModalSourisOpen,
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow space-y-6">
      <h1 className="text-md font-semibold bg-blue-500 w-fit px-4 py-2 rounded-md text-white">
        Etape {etapeItem?.ordre}
      </h1>

      <div>
        <h3 className="font-semibold mb-2">{etapeItem?.def_titre}</h3>
        <p className="text-gray-600 text-sm">{etapeItem?.def_texte}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {ordiItems?.map((ordi) => (
          <div key={ordi.nom} className="flex-1 border rounded-lg p-4">
            <Title text={ordi.nom} />
            <p className="text-sm text-gray-600">{ordi.description}</p>
            <button
              onClick={() => {
                if (ordi.nom.toLowerCase().includes("portable")) {
                  setModalOrdiPortableOpen(true);
                } else if (ordi.nom.toLowerCase().includes("fixe")) {
                  setModalOrdiFixeOpen(true);
                } else if (ordi.nom.toLowerCase().includes("clavier")) {
                  setModalClavierOpen(true);
                } else if (ordi.nom.toLowerCase().includes("souris")) {
                  setModalSourisOpen(true);
                }
              }}
            >
              <span className="text-blue-600 text-sm underline">
                En savoir plus
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
