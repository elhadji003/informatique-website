import React from "react";
import InformationUser from "./InformationUser";
import Parametres from "./Parametres";
import Title from "../../../components/Title";

export default function ProfileUser() {
  return (
    <div className="px-4">
      <Title text="Mon Profil" />

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Infos utilisateur */}
        <InformationUser className="w-full lg:w-4/12" />

        {/* Paramètres */}
        <Parametres className="w-full lg:w-8/12" />
      </div>
    </div>
  );
}
