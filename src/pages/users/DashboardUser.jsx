import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetDashboardQuery } from "../../backend/features/user/userApi";
import { useInitPaymentMutation } from "../../backend/features/payment/paymentApi";
import Title from "../../components/Title";
import Card from "../../components/dashboard/Card";
import SubscriptionModal from "../SubscriptionModal";

export default function DashboardUser() {
  const navigate = useNavigate();

  // 1. Récupération des statistiques du dashboard
  const { data: level, isLoading } = useGetDashboardQuery();

  // 2. Hook pour l'initialisation du paiement PayDunya
  const [initPayment, { isLoading: isPaying }] = useInitPaymentMutation();

  // 3. État local pour le Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Chargement
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl animate-pulse">
          Chargement de votre progression...
        </p>
      </div>
    );

  const finish = level?.stats?.completion_rate || 0;

  // Configuration des cartes de statistiques
  const cards = [
    {
      title: "Cours en cours",
      description: `${level?.stats?.total_started || 0} cours actifs`,
      progress: level?.stats?.total_started || 0,
      completionRate: finish,
    },
    {
      title: "Cours complétés",
      description: `${level?.stats?.total_finished || 0} cours terminés`,
      progress: level?.stats?.total_finished || 0,
      completionRate: finish,
    },
    {
      title: "Progression globale",
      description: `${finish}% complété`,
      progress: finish,
      completionRate: finish,
    },
  ];

  // Fonction de gestion du choix de plan dans le Modal
  const handlePlanSelection = async (plan) => {
    if (plan.id === "free") {
      setIsModalOpen(false);
      return;
    }

    try {
      // Nettoyage du prix : "2 000" -> 2000
      const numericAmount = parseInt(plan.price.replace(/\s/g, ""), 10);

      // Appel API Django
      const result = await initPayment({
        amount: numericAmount,
        plan_type: plan.id,
      }).unwrap();

      // Redirection vers l'interface de paiement PayDunya
      if (result.payment_url) {
        window.location.href = result.payment_url;
      }
    } catch (err) {
      console.error("Erreur de paiement:", err);
      alert(
        "Erreur lors de la création du lien de paiement. Veuillez réessayer.",
      );
    }
  };

  return (
    <div className="p-4 md:p-8 relative">
      {/* Overlay de chargement pendant la création du lien PayDunya */}
      {isPaying && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mb-4"></div>
            <p className="font-bold text-gray-700">
              Redirection vers PayDunya...
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <Title text="Bienvenue sur votre Tableau de Bord" />

        {/* Affichage du bouton Premium seulement si l'utilisateur n'est pas encore premium */}
        {!level?.is_premium && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-black rounded-full shadow-lg transform hover:scale-105 transition-all animate-pulse"
          >
            <span>⭐</span> DEVENIR PREMIUM
          </button>
        )}
      </div>

      {/* Bannière de promotion pour les non-premium */}
      {!level?.is_premium && (
        <div className="mb-8 p-6 bg-blue-600 rounded-2xl text-white flex flex-col md:flex-row justify-between items-center shadow-xl">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">
              Libérez votre potentiel informatique !
            </h3>
            <p className="opacity-90">
              Accédez à l'intégralité des cours, projets et certifications
              officielles.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Voir les offres
          </button>
        </div>
      )}

      {/* Grille des Cartes Statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>

      {/* Section "Continuer l'apprentissage" */}
      {level?.last_course && (
        <div className="mt-10 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-100 rounded-2xl text-blue-600">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-gray-500 text-sm font-medium">
                DERNIER COURS CONSULTÉ
              </h4>
              <p className="text-xl font-bold text-gray-800">
                {level?.last_course.titre}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate(`/cours/${level?.last_course.id}`)}
            className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 flex items-center justify-center gap-2"
          >
            Reprendre le cours
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Le Modal d'abonnement */}
      <SubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectPlan={handlePlanSelection}
      />
    </div>
  );
}
