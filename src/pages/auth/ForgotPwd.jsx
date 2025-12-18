import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useForgotPasswordMutation } from "../../backend/features/auth/authApi";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

export default function ForgotPwd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const onSubmit = async (data) => {
    try {
      await forgotPassword(data).unwrap();
      toast.success("Lien de réinitialisation du mot de passe envoyé !");
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de l'envoi du lien de réinitialisation");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-500">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold mb-1">Salut 👋</h1>
        <p className="text-gray-600 mb-6">
          Vous voulez réinitialiser votre mot de passe ?
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="text-gray-600">
              Veuillez entrer votre email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email Address"
              className="w-full px-4 py-3 mt-3 border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Bouton Login */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-blue-600 text-white py-3 rounded-full font-medium transition
                ${
                  isLoading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-blue-700"
                }
              `}
          >
            {isLoading ? (
              <FaSpinner className="animate-spin mx-auto" />
            ) : (
              "Envoyer le lien de réinitialisation"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
