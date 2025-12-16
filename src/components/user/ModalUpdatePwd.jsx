import React, { useState } from "react";
import { useChangePasswordMutation } from "../../backend/features/auth/authApi";
import { useForm } from "react-hook-form";

export default function ModalUpdatePwd({ onClose, isOpen }) {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const [updatePwd, { isLoading }] = useChangePasswordMutation();

  const onSubmit = async (data) => {
    try {
      await updatePwd(data).unwrap();
      onClose();
    } catch (error) {
      console.error("Erreur lors de la mise à jour du mot de passe:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 min-h-screen flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md animate__animated animate__zoomIn">
        <h2 className="text-xl font-semibold mb-4">Modifier le mot de passe</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="currentPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Mot de passe actuel
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="currentPassword"
              {...register("old_password", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Nouveau mot de passe
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="new_Password"
              {...register("new_password", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmNewPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirmer le nouveau mot de passe
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmNewPassword"
              {...register("new_Password", { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4 space-x-3">
            <input type="checkbox" id="saw" value={showPassword} onChange={() => setShowPassword(!showPassword)} />
            <label htmlFor="saw" className="cursor-pointer">Afficher les mot de passe</label>
          </div>

          <button
            onClick={onClose}
            className="bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-600"
          >
            annuler
          </button>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600 ml-2"
          >
            {isLoading ? "Mise à jour..." : "Mettre à jour le mot de passe"}
          </button>
        </form>
      </div>
    </div>
  );
}
