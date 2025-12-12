import React from "react";
import { useForm } from "react-hook-form";
import vector from "../../assets/img/vector.png";
import EcritureAuto from "../../components/EcritureAuto";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Email:", data.email);
    console.log("Password:", data.password);
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
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
          <h1 className="text-2xl font-bold mb-1">Hello 👋</h1>
          <p className="text-gray-600 mb-6">Log in to continue</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <p className="mt-4 text-sm text-gray-500 cursor-pointer hover:underline">
              Forgot Password?
            </p>

            {/* Bouton Login */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 text-white py-3 rounded-full font-medium transition
                ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-blue-700"
                }
              `}
            >
              {isSubmitting ? (
                <FaSpinner className="animate-spin mx-auto" />
              ) : (
                "Login"
              )}
            </button>
          </form>

          <p className="group:hover mt-4 text-sm text-gray-500 cursor-pointer hover:underline">
            Don't have Account?
            <Link to={"/register"} className="underline font-bold">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
