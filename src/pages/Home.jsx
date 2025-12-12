import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ModuleCard from "../components/ModuleCard";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import MasterSection from "../components/MasterSection";
import {
  FaFileExcel,
  FaFilePowerpoint,
  FaFileWord,
  FaKeyboard,
} from "react-icons/fa";
import WelcomeAnimation from "../components/WelcomeAnimation";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
      <WelcomeAnimation />
      <Hero />
      <MasterSection />

      {/* Modules Section */}
      <section className="py-10 px-6 md:px-16 bg-white" id="modules">
        <h2
          className="lg:text-3xl text-nowrap md:text-2xl font-bold border-l-8 border-indigo-600 px-4 py-2 mb-10"
          data-aos="fade-up"
        >
          Découvrez nos modules bureautiques
        </h2>

        <div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2"
          data-aos="fade-up"
        >
          <ModuleCard
            title="Word"
            className={`group-hover:text-blue-600`}
            icon={<FaFileWord />}
            description="Apprends à créer, formater et structurer des documents professionnels."
          />
          <ModuleCard
            title="Excel"
            className={`group-hover:text-green-600`}
            icon={<FaFileExcel />}
            description="Découvre les formules, les tableaux et les graphiques dynamiques."
          />
          <ModuleCard
            title="PowerPoint"
            className={`group-hover:text-red-600`}
            icon={<FaFilePowerpoint />}
            description="Maîtrise l’art des présentations percutantes et professionnelles."
          />
          <ModuleCard
            title="Apprendre à saisir"
            className={`group-hover:text-sky-600`}
            icon={<FaKeyboard />}
            description="Maîtrise l’art des présentations percutantes et professionnelles."
          />
        </div>
      </section>

      <Features />
      <Footer />
    </div>
  );
};

export default Home;
