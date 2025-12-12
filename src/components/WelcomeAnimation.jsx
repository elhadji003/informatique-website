import React from "react";

const letters = ["W", "E", "L", "C", "O", "M", "E", "."];

const WelcomeAnimation = () => {
  return (
    <div className="welcome-wrapper">
      {/* Définition des gradients */}
      <svg height={0} width={0} className="absolute">
        <defs>
          <linearGradient id="b" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#973BED" />
            <stop stopColor="#007CFF" offset={1} />
          </linearGradient>
          <linearGradient id="c" x1="0" y1="64" x2="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFC800" />
            <stop stopColor="#F0F" offset={1} />
          </linearGradient>
          <linearGradient id="d" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00E0ED" />
            <stop stopColor="#00DA72" offset={1} />
          </linearGradient>
        </defs>
      </svg>

      {/* Lettres animées */}
      <div className="flex items-center justify-center gap-2">
        {letters.map((letter, idx) => (
          <svg
            key={idx}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 64 64"
            height={64}
            width={64}
            className="inline-block dash"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="48"
              fontWeight="bold"
              stroke={idx % 3 === 0 ? "url(#b)" : idx % 3 === 1 ? "url(#c)" : "url(#d)"}
              strokeWidth={4}
              fill="none"
            >
              {letter}
            </text>
          </svg>
        ))}
      </div>
    </div>
  );
};

export default WelcomeAnimation;
