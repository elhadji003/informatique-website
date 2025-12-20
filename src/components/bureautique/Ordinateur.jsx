import React, { useEffect, useState } from "react";
import Title from "../Title";
import OrdiPortable from "./OrdiPortable";
import OrdiFixe from "./OrdiFixe";
import {
  useGetAllCoursQuery,
  useLikeCoursMutation,
  useStartCoursMutation,
} from "../../backend/features/bureautique/coursApi";

export default function Ordinateur() {
  // --- RTK Query
  const { data: cours, isLoading } = useGetAllCoursQuery();
  const [likeCours] = useLikeCoursMutation();
  const [startCours] = useStartCoursMutation();

  // --- States
  const [ModalOrdiPortableOpen, setModalOrdiPortableOpen] = useState(false);
  const [ModalOrdiFixeOpen, setModalOrdiFixeOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // --- Premier cours et étape
  const courItem = cours?.[0];

  const etapeItem = courItem?.etapes[currentStep];
  const ordiItems = etapeItem?.types_objets;

  // --- Commencer le cours
  useEffect(() => {
    if (courItem?.progress_user?.is_started !== undefined) {
      setStarted(courItem.progress_user.is_started);
    }
  }, [courItem?.progress_user?.is_started]);

  // --- Initialiser liked/start au chargement
  useEffect(() => {
    setLiked(courItem?.liked_by_user || false);
  }, [courItem]);

  // --- Handlers
  const handleLike = async () => {
    await likeCours(courItem.id);
    setLiked(!liked);
  };

  const handleStart = async () => {
    await startCours(courItem.id);
    setStarted(true);
  };

  const handleNextStep = () => {
    if (currentStep < courItem.etapes.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("Vous avez terminé le cours !");
    }
  };

  if (isLoading) return <div>Chargement ...</div>;
  if (!courItem) return <div>Aucun cours trouvé.</div>;

  if (courItem?.progress_user?.is_started === false)
    return (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center space-y-4 max-w-xs w-full">
          <h2 className="text-lg font-semibold text-gray-800 text-center">
            Prêt à commencer le cours ?
          </h2>
          <button
            className={`px-6 py-3 rounded-lg text-white font-semibold transition-all duration-200
          ${
            started
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 animate-pulse"
          }`}
            onClick={handleStart}
            disabled={started}
          >
            {started ? "Cours commencé" : "Commencer le cours"}
          </button>
          <p className="text-sm text-gray-500 text-center">
            Vous pourrez suivre votre progression étape par étape.
          </p>
        </div>
      </div>
    );

  // --- Render
  return (
    <div className="space-y-6">
      <Title text={courItem.titre} />

      {/* Actions Like / Start */}

      {/* Introduction */}
      <h2 className="text-xl font-semibold mb-2">👋 {etapeItem.intro_titre}</h2>
      <section className="bg-white p-5 rounded-xl shadow">
        <span className="text-md text-gray-500 font-bold underline">
          C'est quoi un Ordinateur
        </span>
        <p className="text-gray-600">{etapeItem.intro_texte}</p>
      </section>

      {/* Définition */}
      <section className="bg-white p-5 rounded-xl shadow space-y-6">
        <h1 className="text-md font-semibold bg-blue-500 w-fit px-4 py-2 rounded-md text-white">
          Etape {etapeItem.ordre}
        </h1>

        <div>
          <h3 className="font-semibold mb-2">{etapeItem.def_titre}</h3>
          <p className="text-gray-600 text-sm">{etapeItem.def_texte}</p>
        </div>

        {/* Types d’ordinateurs */}
        <div className="flex flex-col sm:flex-row gap-4">
          {ordiItems?.map((ordi) => (
            <div key={ordi.nom} className="flex-1 border rounded-lg p-4">
              <h4 className="font-semibold mb-1">
                {ordi.emoji} - {ordi.nom}
              </h4>
              <p className="text-sm text-gray-600">{ordi.description}</p>
              <button
                onClick={() =>
                  ordi.nom.includes("portable")
                    ? setModalOrdiPortableOpen(true)
                    : setModalOrdiFixeOpen(true)
                }
              >
                <span className="text-blue-600 text-sm underline">
                  En savoir plus
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="flex gap-4 items-center">
        <button
          className={`px-4 py-2 rounded-lg ${
            liked ? "bg-red-500 text-white" : "bg-gray-300"
          }`}
          onClick={handleLike}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>

      {/* Action continuer */}
      <section className="flex justify-end">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          onClick={handleNextStep}
        >
          J’ai compris, continuer →
        </button>
      </section>

      {/* Modals */}
      <OrdiPortable
        onOpen={ModalOrdiPortableOpen}
        onClose={() => setModalOrdiPortableOpen(false)}
      />
      <OrdiFixe
        onOpen={ModalOrdiFixeOpen}
        onClose={() => setModalOrdiFixeOpen(false)}
      />
    </div>
  );
}
