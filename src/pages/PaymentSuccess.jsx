import React, { useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useVerifyPaymentQuery } from "../backend/features/payment/paymentApi";
import { useGetDashboardQuery } from "../backend/features/user/userApi";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token"); // Récupère le token chk_... de l'URL

  // 1. On appelle l'API pour vérifier le statut côté Django
  const { data, isLoading, isError, isSuccess } = useVerifyPaymentQuery(token, {
    skip: !token, // On ne lance pas la requête s'il n'y a pas de token
  });

  // 2. On rafraîchit les données du dashboard pour mettre à jour le statut "is_premium"
  const { refetch } = useGetDashboardQuery();

  useEffect(() => {
    if (isSuccess) {
      refetch(); // Force le dashboard à se mettre à jour
    }
  }, [isSuccess, refetch]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center">
        {isLoading ? (
          <div className="space-y-4">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
            <h2 className="text-xl font-bold text-gray-800">
              Vérification du paiement...
            </h2>
            <p className="text-gray-500">
              Un instant, nous validons votre accès.
            </p>
          </div>
        ) : isSuccess ? (
          <div className="animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-2">
              Félicitations ! 🎉
            </h2>
            <p className="text-gray-600 mb-8">
              Votre abonnement est désormais actif. Vous avez accès à
              l'intégralité des cours.
            </p>
            <button
              onClick={() => navigate("/dashboardUser")}
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Aller sur mon tableau de bord
            </button>
          </div>
        ) : (
          <div>
            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Oups ! Une erreur est survenue
            </h2>
            <p className="text-gray-500 mb-8">
              Le paiement n'a pas pu être confirmé. Si vous avez été débité,
              contactez le support.
            </p>
            <Link
              to="/dashboard"
              className="text-blue-600 font-bold hover:underline"
            >
              Retourner à l'accueil
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
