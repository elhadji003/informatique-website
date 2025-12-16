import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/user/Navbar";
import HeaderUser from "../components/user/HeaderUser";

export default function LayoutUser() {
  const [showHeader, setShowHeader] = React.useState(true);

  return (
    <>
      <header>
        <Navbar showHader={() => setShowHeader((prev) => !prev)} />
      </header>

      {showHeader && (
        <div className={`mx-auto w-full mt-2`}>
          <HeaderUser />
        </div>
      )}

      <main className="px-4 md:px-8 lg:px-16 mb-8 mt-4">
        <Outlet />
      </main>
    </>
  );
}
