import React from "react";
import ModalUpdatePwd from "../../../components/user/ModalUpdatePwd";
import ModalDeleteAccount from "../../../components/user/ModalDeleteAccount";
import { toast } from "react-toastify";

export default function Parametres({ className }) {
  const [isPwdModalOpen, setIsPwdModalOpen] = React.useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = React.useState(false);

  const handleDeconnectAllDevices = () => {
    // Logique pour déconnecter tous les appareils
    toast.warning("Cette fonctionnalité n'est pas encore implémentée.");
    console.log("Déconnexion de tous les appareils");
  };

  return (
    <div
      className={`${className} bg-gray-50 rounded-md shadow-md p-4 mt-4 border-t-4 border-blue-500`}
    >
      <h2 className="text-xl font-semibold mb-4">Paramètres du profil</h2>
      <div>
        <p className="mb-2 text-gray-400">
          Ici, vous pouvez modifier les paramètres de votre compte.
        </p>

        <div className="space-y-6">
          {/* Sécurité */}
          <section>
            <h3 className="font-semibold text-lg mb-2">Sécurité</h3>
            <button
              onClick={() => setIsPwdModalOpen(true)}
              className="bg-blue-500 px-4 py-2 mr-3 rounded-md text-white hover:bg-blue-600"
            >
              Changer le mot de passe
            </button>
            <button
              onClick={handleDeconnectAllDevices}
              className="bg-gray-500 px-4 py-2 rounded-md text-white hover:bg-gray-600 mt-2"
            >
              Déconnecter tous les appareils
            </button>
          </section>

          {/* Préférences */}
          <section>
            <h3 className="font-semibold text-lg mb-2">Préférences</h3>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Recevoir des notifications par email
            </label>
          </section>

          {/* Danger */}
          <section className="border-t pt-4">
            <h3 className="font-semibold text-red-600 mb-2">Zone dangereuse</h3>
            <button
              onClick={() => setIsOpenDeleteModal(true)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Supprimer mon compte
            </button>
          </section>
        </div>
      </div>
      <ModalUpdatePwd
        isOpen={isPwdModalOpen}
        onClose={() => setIsPwdModalOpen(false)}
      />
      <ModalDeleteAccount
        isOpen={isOpenDeleteModal}
        onClose={() => setIsOpenDeleteModal(false)}
      />
    </div>
  );
}
