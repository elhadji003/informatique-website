import React, { useState } from "react";
import { useGetUserProfileQuery } from "../../../backend/features/user/userApi";
import profile from "../../../assets/img/defaultUser.png";
import { BiEditAlt } from "react-icons/bi";
import ModalUpdateProfile from "../../../components/user/profile/ModalUpdateProfile";

export default function InformationUser({ className = "" }) {
  const { data: user, isLoading } = useGetUserProfileQuery();
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) {
    return <div className="text-center py-6">Chargement...</div>;
  }

  return (
    <div className={className}>
      <div className="max-w-md bg-gray-50 rounded-xl shadow-md p-5 mt-4 border-t-4 border-blue-500">
        {/* Avatar + Nom */}
        <div className="flex flex-col items-center mb-4">
          <img
            src={user?.avatar || profile}
            alt="profile-user"
            className="w-20 h-20 rounded-full border-2 border-blue-500 object-cover"
          />

          <div className="flex items-center gap-3 mt-3">
            <h2 className="text-2xl font-bold">
              {user?.first_name} {user?.last_name}
            </h2>
            <button onClick={() => setIsOpen(true)}>
              <BiEditAlt
                size={20}
                className="text-blue-500 hover:text-blue-700 transition"
              />
            </button>
          </div>
        </div>

        {/* Infos */}
        <div className="space-y-2 text-sm">
          <p>
            Email : <span className="font-semibold">{user?.email}</span>
          </p>
          <p>
            Genre :{" "}
            <span className="font-semibold uppercase">
              {user?.gender || "Non défini"}
            </span>
          </p>
          <p>
            Téléphone :{" "}
            <span className="font-semibold">
              {user?.phone || "Non défini"}
            </span>
          </p>
          <p>
            Adresse :{" "}
            <span className="font-semibold">
              {user?.address || "Non définie"}
            </span>
          </p>
          <p>
            Ville :{" "}
            <span className="font-semibold">
              {user?.city || "Non définie"}
            </span>
          </p>
        </div>

        {/* Date */}
        <p className="mt-4 text-xs text-gray-500 text-end">
          Inscrit le :{" "}
          {user?.created_at
            ? new Date(user.created_at).toLocaleDateString("fr-FR")
            : "—"}
        </p>

        {/* Modal */}
        <ModalUpdateProfile
          user={user}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
}
