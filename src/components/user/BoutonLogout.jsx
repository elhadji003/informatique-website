import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../backend/features/auth/authSlice";
import { FiLogOut } from "react-icons/fi";

export default function BoutonLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm(
      "Êtes-vous sûr de vouloir vous déconnecter ?"
    );

    if (!confirmed) return;

    dispatch(logout());
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="
        w-full flex items-center gap-2
        px-4 py-2
        text-red-600
        bg-white
        rounded-md
        hover:bg-red-50
        hover:scale-[1.02]
        active:scale-95
        transition-all duration-200
      "
    >
      <FiLogOut />
      <span className="text-sm font-medium">Déconnexion</span>
    </button>
  );
}
