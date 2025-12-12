import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function EcritureAuto() {
  return (
    <div className="text-3xl font-bold text-blue-600">
      <Typewriter
        words={[
          "Bienvenue sur notre plateforme",
          "Apprenez l'informatique tout easy.",
          "Boostez vos compétences !",
        ]}
        loop={0} // 0 = infini
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
}
