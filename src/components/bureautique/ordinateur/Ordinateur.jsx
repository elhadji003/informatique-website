// src/components/bureautique/CoursDetail.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Title from "../../Title";
import OrdiPortable from "./OrdiPortable";
import OrdiFixe from "./OrdiFixe";
import Clavier from "./Clavier";
import Souris from "./Souris";
import {
  useGetCoursByIdQuery,
  useLikeCoursMutation,
  useStartCoursMutation,
  useFinishCoursMutation,
} from "../../../backend/features/bureautique/coursApi";
import toast from "react-hot-toast";
import { ArrowRight, Check, Heart } from "lucide-react";
import Loader from "../../global/Loader";
import Etape from "./Etape";
import QuizzModal from "./QuizzModal";

export default function Ordinateur() {
  const { id } = useParams();
  const navigate = useNavigate();

  // --- RTK Query
  const { data: cours, isLoading } = useGetCoursByIdQuery(id);
  const [likeCours, { isLoading: liking }] = useLikeCoursMutation();
  const [startCours] = useStartCoursMutation();
  const [finishCours] = useFinishCoursMutation();

  // --- States
  const [liked, setLiked] = useState(false);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [ModalOrdiPortableOpen, setModalOrdiPortableOpen] = useState(false);
  const [ModalOrdiFixeOpen, setModalOrdiFixeOpen] = useState(false);
  const [ModalClavierOpen, setModalClavierOpen] = useState(false);
  const [ModalSourisOpen, setModalSourisOpen] = useState(false);
  const [readyForQuizz, setReadyForQuizz] = useState(false);
  const [showQuizz, setShowQuizz] = useState(false);

  const courItem = cours;
  const etapeItem = courItem?.etapes[currentStep];

  // --- Initialiser liked/start/finish
  useEffect(() => {
    setLiked(courItem?.liked_by_user || false);
    setStarted(courItem?.progress_user?.is_started || false);
    setFinished(courItem?.progress_user?.is_finished || false);
  }, [courItem]);

  // --- Handlers
  const handleLike = async () => {
    try {
      const res = await likeCours(courItem.id).unwrap();
      setLiked(res.liked);
      toast.success(res.liked ? "❤️ Merci pour le like !" : "💔 Like retiré");
    } catch (err) {
      toast.error("Une erreur est survenue 😕");
    }
  };

  const handleStart = async () => {
    await startCours(courItem.id);
    setStarted(true);
  };

  const handleFinish = async () => {
    await finishCours(courItem.id);
    setFinished(true);
    setShowQuizz(false);
  };

  const handleNextStep = () => {
    if (currentStep < courItem.etapes.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setReadyForQuizz(true); // Dernière étape atteinte → bouton Terminer visible
    }
  };

  // --- Vérifier chargement
  if (isLoading) return <Loader />;
  if (!cours) return <div>Aucun cours trouvé</div>;

  // --- Overlay si le cours n’est pas encore commencé
  if (!started)
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

  // --- Render du cours
  return (
    <div className="space-y-6">
      <Title text={courItem.titre} />

      <p className="text-md text-gray-500 mt-2 flex items-center gap-2">
        Rejoint par {courItem?.users_started_count} personnes • Noté par{" "}
        {courItem?.likes_count} apprenants <Heart color="red" />
      </p>

      {/* Actions Like / Finish */}
      <div className="flex gap-4 items-center">
        <button
          disabled={liking}
          className={`px-4 py-2 rounded-lg ${
            liked ? "bg-red-500 text-white" : "bg-gray-300"
          }`}
          onClick={handleLike}
        >
          {liked ? "❤️ Aimer" : "🤍 Like"}
        </button>

        {finished && (
          <button
            className="px-4 py-2 bg-emerald-700 text-white rounded-lg flex items-center gap-2"
            disabled
          >
            Bravo vous avez terminé ce cours <Check />
          </button>
        )}
      </div>

      {/* Introduction */}
      <h2 className="text-xl font-semibold mb-2">
        👋 {etapeItem?.intro_titre}
      </h2>

      {/* <section className="bg-white p-5 rounded-xl shadow">
        <span className="text-md text-gray-500 font-bold underline">
          {etapeItem?.def_titre}
        </span>
        <p className="text-gray-600">{etapeItem?.intro_texte}</p>
      </section> */}

      {/* Étapes */}
      <section>
        {courItem.etapes.map((etape) => (
          <Etape
            key={etape.id}
            etapeItem={etape}
            ordiItems={etape.types_objets}
            setModalOrdiFixeOpen={setModalOrdiFixeOpen}
            setModalOrdiPortableOpen={setModalOrdiPortableOpen}
            setModalClavierOpen={setModalClavierOpen}
            setModalSourisOpen={setModalSourisOpen}
          />
        ))}
      </section>

      {/* Bouton continuer / Terminer / Quizz */}
      {/* --- FIN DU COURS --- */}
      {finished ? (
        <section className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-emerald-700">
          <p className="font-semibold text-lg">🎉 Félicitations !</p>
          <p className="text-sm mt-1 mb-2">
            Vous avez terminé ce cours avec succès.
          </p>
          <div className="flex justify-end">
            <button
              onClick={() => navigate(-1)}
              className="text-sm flex items-center gap-4 animate-pulse text-end"
            >
              Cours suivant <ArrowRight />
            </button>
          </div>
        </section>
      ) : !showQuizz ? (
        readyForQuizz ? (
          /* --- PRÊT POUR LE QUIZZ --- */
          <section className="flex flex-col items-end mt-4 gap-2">
            <p className="text-gray-600 text-right">
              Vous êtes prêt à tester vos connaissances 📝
            </p>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              onClick={() => setShowQuizz(true)}
            >
              Terminer et passer au Quizz →
            </button>
          </section>
        ) : (
          /* --- CONTINUER LE COURS --- */
          <section className="flex justify-end mt-4">
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              onClick={handleNextStep}
            >
              J’ai compris, continuer →
            </button>
          </section>
        )
      ) : (
        /* --- QUIZZ MODAL --- */
        <section className="mt-6">
          <QuizzModal
            quizz={courItem.quizz}
            onSuccess={handleFinish} // appelé seulement si score >= 70%
            onClose={() => setShowQuizz(false)}
          />
        </section>
      )}

      {/* Modals */}
      <OrdiPortable
        onOpen={ModalOrdiPortableOpen}
        onClose={() => setModalOrdiPortableOpen(false)}
      />
      <OrdiFixe
        onOpen={ModalOrdiFixeOpen}
        onClose={() => setModalOrdiFixeOpen(false)}
      />
      <Clavier
        onOpen={ModalClavierOpen}
        onClose={() => setModalClavierOpen(false)}
      />
      <Souris
        onOpen={ModalSourisOpen}
        onClose={() => setModalSourisOpen(false)}
      />
    </div>
  );
}
