import React from "react";
import { motion } from "framer-motion";

const MasterSection = () => {
  return (
    <section className="py-10 bg-white px-6 md:px-16">
      {/* Texte à gauche */}
      <h2 className="lg:text-3xl text-nowrap md:text-2xl font-bold border-l-8 border-indigo-600 px-4 py-2">
        Maîtrise ton ordinateur comme un pro 💪
      </h2>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div
          className="md:w-1/2 text-center md:text-left"
          data-aos="fade-right"
        >
          <p className="text-gray-600 text-lg mb-6">
            Découvre comment utiliser efficacement ton PC, gérer tes fichiers,
            naviguer sur Internet et devenir totalement à l’aise avec les outils
            du quotidien.
          </p>
          <button className="bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-600 transition">
            Commencer l’aventure 🧠
          </button>
        </div>

        {/* Animation SVG à droite */}
        <motion.div
          className="md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width="280"
            height="280"
            className="text-indigo-600"
          >
            {/* Écran */}
            <motion.rect
              x="20"
              y="40"
              width="160"
              height="100"
              rx="10"
              ry="10"
              fill="#E0E7FF"
              stroke="#4F46E5"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Clavier */}
            <motion.rect
              x="40"
              y="150"
              width="120"
              height="20"
              rx="5"
              ry="5"
              fill="#C7D2FE"
              stroke="#4F46E5"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />

            {/* Curseur animé */}
            <motion.circle
              cx="100"
              cy="90"
              r="6"
              fill="#4F46E5"
              animate={{
                x: [0, 20, -10, 0],
                y: [0, 10, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
};

export default MasterSection;
