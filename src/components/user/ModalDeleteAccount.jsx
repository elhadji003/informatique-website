import React from "react";
import { useForm } from "react-hook-form";
import { useDeleteUserAccountMutation } from "../../backend/features/user/userApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ModalDeleteAccount({ onClose, isOpen }) {
  if (!isOpen) return null;

  const navigate = useNavigate();
  const [showInput, setShowInput] = React.useState(false);

  const { register, handleSubmit } = useForm();
  const [deleteAccount, { isLoading }] = useDeleteUserAccountMutation();

  const onSubmit = async ({ password }) => {
    try {
      await deleteAccount(password).unwrap();
      toast.success("Compte supprimé définitivement");

      localStorage.clear(); // ou remove token précis
      navigate("/login");
    } catch (error) {
      toast.error(
        error?.data?.error || "Mot de passe incorrect"
      );
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md animate__animated animate__zoomIn">
        <h1 className="text-xl font-semibold mb-2 text-red-600">
          Supprimer le compte
        </h1>

        <p className="mb-4 text-sm text-gray-600">
          ⚠️ Cette action est irréversible. Toutes vos données seront supprimées.
        </p>

        {!showInput ? (
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
            >
              Annuler
            </button>
            <button
              onClick={() => setShowInput(true)}
              className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
            >
              Oui, supprimer
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 mt-4">
            <label className="text-sm font-medium">
              Confirmez avec votre mot de passe
            </label>

            <input
              type="password"
              {...register("password", { required: true })}
              className="px-4 py-2 rounded-md border focus:ring-2 focus:ring-red-500"
            />

            <button
              disabled={isLoading}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50"
            >
              {isLoading ? "Suppression..." : "Supprimer définitivement"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
