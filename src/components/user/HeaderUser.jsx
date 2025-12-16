import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import profile from "../../assets/img/vector.png";
import { useGetUserProfileQuery } from "../../backend/features/user/userApi";
import { Mail, User2 } from "lucide-react";

export default function HeaderUser() {
  const user = useSelector((state) => state.auth.user);
  const { data: profileUser } = useGetUserProfileQuery();

  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-6 m-2 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__backInDown">
      <div className="flex items-center justify-between">
        {/* Infos utilisateur */}
        <div className="flex-1 pr-6">
          <h2 className="text-2xl font-bold mb-1">
            Salut <span className="capitalize">{user?.first_name}</span> 👋
          </h2>
          <p className="text-blue-100 mb-4">{profileUser?.email}</p>

          {/* Liens profil et mail */}
          <div className="flex gap-3 bg-white bg-opacity-20 px-4 py-2 rounded-lg backdrop-blur-sm">
            <Link
              to="/profile/user"
              className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
            >
              <User2 size={18} />
              <span className="text-sm">Profil</span>
            </Link>
            <Link
              to="/profile/user"
              className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">Messagerie</span>
            </Link>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex-shrink-0">
          {profileUser?.avatar ? (
            <img
              src={profileUser.avatar}
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
            />
          ) : (
            <img
              src={profile}
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
