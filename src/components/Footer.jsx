import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-indigo-700 text-white text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Piod — Rendre l’informatique accessible à
        tous 💻
      </p>
    </footer>
  );
};

export default Footer;
