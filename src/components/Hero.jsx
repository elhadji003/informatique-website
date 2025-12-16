import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[40vh] text-center bg-gradient-to-br from-indigo-600 to-indigo-700 text-white px-6 overflow-hidden">
      {/* Titre principal */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
      >
        Apprends l’informatique{" "}
        <span className="text-yellow-400">Facilement</span> 💻
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl mb-8 max-w-2xl"
      >
        Maîtrise ton ordinateur et deviens à l’aise avec Word, Excel et
        PowerPoint grâce à des cours interactifs et ludiques !{" "}
      </motion.p>

      {/* Bouton animé simple */}
      {/* <motion.a
        href="#modules"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-yellow-400 text-indigo-800 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition"
      >
        Commencer maintenant
      </motion.a> */}

      {/* Bulles animées derrière le Hero */}
      {Array.from({ length: 10 }).map((_, idx) => (
        <motion.div
          key={idx}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            width: 20 + Math.random() * 40,
            height: 20 + Math.random() * 40,
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: ["0%", "100%", "0%"],
            x: [0, 20, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      ))}
      <p className="bg-white px-4 py-2 rounded-md text-blue-500 font-semibold">Aucun prérequis • À ton rythme • 100% pratique</p>
    </section>
  );
};

export default Hero;
