import React, { useState } from "react";
import { useForm } from "react-hook-form";
import vector from "../../assets/img/vector.png";
import EcritureAuto from "../../components/EcritureAuto";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../../backend/features/auth/authApi";
import { toast } from "react-toastify";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showPwd, setShowPwd] = useState(false);

  const [registerUser, { isLoading }] = useRegisterMutation();

  const onSubmit = async (formData) => {
    try {
      const res = await registerUser(formData).unwrap();
      reset();
      console.log("Data :", res);
      toast.success("Inscription Réussie !");
    } catch (error) {
      toast.error("Une erreur s'est produite lors de l'inscription: ", error);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* SECTION GAUCHE */}
      <div className="hidden md:flex flex-col items-center justify-center bg-white">
        <img src={vector} className="w-2/4 mb-6" />
        <EcritureAuto />
      </div>

      {/* SECTION DROITE */}
      <div className="flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-700 p-6">
        <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-xl">
          <h1 className="text-2xl font-bold mb-1">Create Account 👋</h1>
          <p className="text-gray-600 mb-6">Register to continue</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* First name */}
            <div>
              <input
                type="text"
                {...register("first_name", {
                  required: "First name is required",
                })}
                placeholder="First Name"
                className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.first_name.message}
                </p>
              )}
            </div>

            {/* Last name */}
            <div>
              <input
                type="text"
                {...register("last_name", {
                  required: "Last name is required",
                })}
                placeholder="Last Name"
                className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.last_name.message}
                </p>
              )}
            </div>

            <div>
              <select
                name="gender"
                className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Séléctionner ton genre</option>
                <option value="masculin">Homme</option>
                <option value="feminin">Femme</option>
              </select>
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.last_name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex max-sm:flex-col gap-3 justify-between w-full">
              <div className="w-full">
                <input
                  type={showPwd ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="Password"
                  className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="w-full">
                <input
                  type={showPwd ? "text" : "password"}
                  {...register("password2", {
                    required: "Password2 is required",
                  })}
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password2.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id="show-password"
                checked={showPwd}
                onChange={() => setShowPwd((prev) => !prev)}
                className="cursor-pointer"
              />
              <label htmlFor="show-password" className="text-sm cursor-pointer">
                Afficher le mot de passe
              </label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-blue-600 text-white py-3 rounded-full font-medium transition
    ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"}
  `}
            >
              {isLoading ? (
                <FaSpinner className="animate-spin mx-auto" />
              ) : (
                "Register"
              )}
            </button>
          </form>

          {/* Footer login link */}
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account ?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
