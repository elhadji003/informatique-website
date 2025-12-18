import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { useResetPasswordMutation } from "../../backend/features/auth/authApi";

export default function ResetPwd() {
  const { uid, token } = useParams();
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const onSubmit = async (data) => {
    const payload = {
      uid,
      token,
      new_password: data.password,
      re_new_password: data.confirmPassword,
    };

    try {
      await resetPassword(payload).unwrap();
      alert("Mot de passe modifié avec succès ✅");
      reset();
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la modification ❌");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-500">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold mb-1">Nouveau mot de passe 🔐</h1>
        <p className="text-gray-600 mb-6">
          Entrez et confirmez votre nouveau mot de passe
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-gray-600">Mot de passe</label>
            <input
              type={showPwd ? "text" : "password"}
              {...register("password", { required: "Champ obligatoire" })}
              className="w-full px-4 py-3 mt-2 border rounded-full"
            />
          </div>

          <div>
            <label className="text-gray-600">Confirmer le mot de passe</label>
            <input
              type={showPwd ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Champ obligatoire",
                validate: (value) =>
                  value === watch("password") ||
                  "Les mots de passe ne correspondent pas",
              })}
              className="w-full px-4 py-3 mt-2 border rounded-full"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="showPwd"
              onChange={() => setShowPwd(!showPwd)}
            />
            <label htmlFor="showPwd" className="ml-2 text-gray-600">
              Afficher le mot de passe
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-blue-600 text-white py-3 rounded-full font-medium transition ${
              isLoading ? "opacity-70" : "hover:bg-blue-700"
            }`}
          >
            {isLoading ? (
              <FaSpinner className="animate-spin mx-auto" />
            ) : (
              "Modifier"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
