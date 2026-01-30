import React from "react";
import { useForm } from "react-hook-form";
import vector from "../../assets/img/vector.png";
import EcritureAuto from "../../components/EcritureAuto";
import { FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../backend/features/auth/authApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../backend/features/auth/authSlice";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [loginUser, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async (credentials) => {
    try {
      const res = await loginUser(credentials).unwrap();
      dispatch(setCredentials(res));

      const role = res?.user?.role;

      // console.log("ROLE 👉", res.user.role);

      if (role === "admin") navigate("/dashboardAdmin");
      else if (role === "user") navigate("/dashboardUser");
      else navigate("/unauthorized");

      toast.success("Connexion réussie !");
    } catch (error) {
      console.error(error);
      toast.error("Email ou mot de passe incorrect");
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
                className="w-full px-4 py-3 border rounded-full outline-none focus:ring-2 focus:ring-blue-400 mb-2"
              />
            </div>

            <Link
              to={"/forgot/pwd"}
              className="mt-4 px-2 text-sm text-gray-500 cursor-pointer hover:underline"
            >
              Forgot Password?
            </Link>

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
                "Se connecter"
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
