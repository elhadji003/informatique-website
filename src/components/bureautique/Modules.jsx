import { Check, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetListeCoursQuery } from "../../backend/features/bureautique/coursApi";

export default function Modules() {
  const { data, isLoading } = useGetListeCoursQuery();

  if (isLoading) return <div>Chargement...</div>;

  const modules = data?.results || [];

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
      <h2 className="font-semibold text-blue-800 mb-4">🎓 Parcours Débutant</h2>

      <ul className="space-y-2 text-sm">
        {modules.map((module, index) => {
          const prevModule = modules[index - 1];

          const isLocked = index > 0 && !prevModule?.progress_user?.is_finished;

          const isCompleted = module.progress_user?.is_finished;
          const isStarted = module.progress_user?.is_started;

          return (
            <li
              key={module.id}
              className={`rounded-md shadow-sm transition ${
                isLocked
                  ? "bg-gray-100 opacity-60 cursor-not-allowed"
                  : "bg-white hover:shadow-md"
              }`}
            >
              {isLocked ? (
                <div className="flex items-center justify-between p-3">
                  <span>{module.titre}</span>
                  <Lock className="text-gray-400" size={16} />
                </div>
              ) : (
                <Link
                  to={`/cours/bureautique/${module.id}`}
                  className="flex items-center justify-between p-3"
                >
                  <span>{module.titre}</span>

                  {isCompleted ? (
                    <Check className="text-green-600" />
                  ) : isStarted ? (
                    <span className="text-blue-500">▶️</span>
                  ) : (
                    <span className="text-gray-400">⏳</span>
                  )}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
