import { useEffect, useState } from "react";
import { X } from "lucide-react";

const QUESTION_TIME = 15; // secondes
const MIN_SCORE = 70;

export default function QuizzModal({ quizz, onSuccess, onClose }) {
  const questions = quizz[0]?.questions || [];

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [showResult, setShowResult] = useState(false);

  // ⏱ Timer
  useEffect(() => {
    if (showResult) return;

    if (timeLeft === 0) {
      handleNext(false);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, showResult]);

  const handleNext = (isCorrect) => {
    if (isCorrect) setScore((s) => s + 1);

    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setTimeLeft(QUESTION_TIME);
    } else {
      setShowResult(true);
    }
  };

  const restartQuizz = () => {
    setCurrentQ(0);
    setScore(0);
    setTimeLeft(QUESTION_TIME);
    setShowResult(false);
  };

  const total = questions.length;
  const percentage = Math.round((score / total) * 100);
  const success = percentage >= MIN_SCORE;

  if (!questions.length) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">📝 Quizz du cours</h2>
          {showResult && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X />
            </button>
          )}
        </div>

        {/* Timer */}
        {!showResult && (
          <div className="mb-4 flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Question {currentQ + 1} / {total}
            </span>
            <span
              className={`font-bold ${
                timeLeft <= 5 ? "text-red-600 animate-pulse" : "text-blue-600"
              }`}
            >
              ⏱ {timeLeft}s
            </span>
          </div>
        )}

        {/* Question */}
        {!showResult ? (
          <>
            <h3 className="text-lg font-semibold mb-4">
              Question {currentQ + 1}
            </h3>

            <p className="bg-blue-500 hover:bg-blue-200 rounded text-white px-4 py-2 text-center font-bold transition mb-6">
              {questions[currentQ].texte}
            </p>

            <div className="flex flex-col gap-3">
              {questions[currentQ].options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleNext(opt.is_correct)}
                  className="bg-blue-100 hover:bg-blue-500 hover:text-white rounded px-4 py-2 text-left transition"
                >
                  {opt.texte}
                </button>
              ))}
            </div>
          </>
        ) : (
          /* Résultat */
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Résultat</h2>

            <p className="text-lg">
              Score : <strong>{score}</strong> / {total} —{" "}
              <strong>{percentage}%</strong>
            </p>

            {success ? (
              <>
                <p className="text-emerald-600 font-semibold">
                  ✅ Quizz réussi !
                </p>
                <button
                  onClick={onSuccess}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
                >
                  Terminer le cours 🎓
                </button>
              </>
            ) : (
              <>
                <p className="text-red-600 font-semibold">
                  ❌ Score insuffisant (70% requis)
                </p>
                <button
                  onClick={restartQuizz}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Recommencer le quizz 🔄
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
