import React from "react";
import { FaBolt, FaGraduationCap, FaAward } from "react-icons/fa";
import ButtonAnimation from "./ButtonAnimation";

const Features = () => {
  const features = [
    {
      icon: <FaGraduationCap className="text-blue-600 text-3xl mb-3" />,
      title: "Apprentissage progressif",
      text: "Chaque module est conçu pour t’aider à progresser pas à pas.",
    },
    {
      icon: <FaBolt className="text-yellow-500 text-3xl mb-3" />,
      title: "Cours courts et efficaces",
      text: "Apprends vite, retiens bien. Pas de blabla inutile.",
    },
    {
      icon: <FaAward className="text-green-600 text-3xl mb-3" />,
      title: "Badges & progression",
      text: "Gagne des récompenses à chaque étape franchie.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-16">
      <h2
        className="text-3xl md:text-4xl font-bold mb-10 border-l-8 border-indigo-600 px-4 py-2"
        data-aos="fade-up"
      >
        Pourquoi apprendre avec nous ?
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            data-aos="fade-up"
          >
            <div className="flex flex-col items-center">{f.icon}</div>
            <h3 className="text-lg font-semibold mt-2 mb-1">{f.title}</h3>
            <p className="text-gray-600">{f.text}</p>
          </div>
        ))}
      </div>
      <ButtonAnimation />
    </section>
  );
};

export default Features;
