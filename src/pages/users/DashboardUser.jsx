import { useNavigate } from "react-router-dom";
import { useGetDashboardQuery } from "../../backend/features/user/userApi";
import Title from "../../components/Title";
import Card from "../../components/dashboard/Card";
import CardFinished from "../../components/dashboard/CardFinished";

export default function DashboardUser() {
  const { data: level, isLoading } = useGetDashboardQuery();
  const navigate = useNavigate();

  const finish = level?.stats?.completion_rate;

  if (isLoading) return <p>Chargement...</p>;

  const cards = [
    {
      title: "Cours en cours",
      description: `${level?.stats?.total_started} cours actifs`,
      progress: level?.stats?.total_started,
      completionRate: finish,
    },
    {
      title: "Cours complétés",
      description: `${level?.stats?.total_finished} cours terminés`,
      progress: level?.stats?.completion_rate,
      completionRate: finish,
    },
    {
      title: "Progression globale",
      description: `${level?.stats?.completion_rate}% complété`,
      progress: level?.stats?.completion_rate,
      completionRate: finish,
    },
  ];

  return (
    <div>
      <Title text="Bienvenue sur votre Tableau de Bord" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>

      {level?.last_course && (
        <div className="mt-6">
          <button
            onClick={() => navigate("/cours/user")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Continuer : {level?.last_course.titre}
          </button>
        </div>
      )}
    </div>
  );
}
