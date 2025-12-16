import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import BoutonLogout from "./BoutonLogout";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar({ showHader }) {
  const user = useSelector((state) => state.auth.user);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = [
    { name: "Cours", path: "/cours/user" },
    { name: "Progression", path: "/progression/user" },
  ];

  return (
    <header className="bg-blue-500 text-white relative">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/dashboardUser"
          className="font-bold text-lg tracking-wide bg-white text-blue-500 px-3 py-1 rounded"
        >
          Learn Informatique
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {user &&
            navigate.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `border px-4 py-2 rounded-md font-semibold transition ${
                      isActive
                        ? "bg-white text-blue-500 border-white"
                        : "border-white hover:bg-white hover:text-blue-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

          {user && (
            <>
              <li>
                <Link to="/profile/user" className="group cursor-pointer">
                  <div className="flex items-center bg-white border border-white rounded-full overflow-hidden">
                    <span className="w-9 h-9 flex items-center justify-center bg-blue-500 text-white font-bold">
                      {user.first_name.charAt(0).toUpperCase()}
                    </span>
                    <span className="px-3 text-blue-500 max-w-0 opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                      {user.first_name}
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <button onClick={showHader}>
                  <ChevronDown />
                </button>
              </li>
              <li>
                <BoutonLogout />
              </li>
            </>
          )}

          {!user && (
            <>
              <li>
                <Link to="/login" className="hover:underline">
                  Connexion
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="bg-white text-blue-500 px-4 py-2 rounded-md font-semibold"
                >
                  Inscription
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-blue-600 px-6 py-4 flex flex-col gap-3">
          {user &&
            navigate.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md font-semibold transition ${
                      isActive
                        ? "bg-white text-blue-500"
                        : "hover:bg-white hover:text-blue-500"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

          {user && (
            <>
              <li>
                <button
                  onClick={showHader}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-blue-500 rounded-md font-semibold"
                >
                  {user.first_name} <ChevronDown />
                </button>
              </li>
              <li>
                <BoutonLogout />
              </li>
            </>
          )}

          {!user && (
            <>
              <li>
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:bg-white hover:text-blue-500 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Connexion
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="block px-4 py-2 bg-white text-blue-500 rounded-md font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inscription
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </header>
  );
}
