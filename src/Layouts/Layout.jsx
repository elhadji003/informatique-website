import React from "react";
import LayoutAdmin from "./LayoutAdmin";
import LayoutUser from "./LayoutUser";
import { useSelector } from "react-redux";

const Layout = () => {
  const { user } = useSelector((state) => state.auth);

  if (user?.role === "admin") return <LayoutAdmin />;
  if (user?.role === "users") return <LayoutUser />;

  return null;
};

export default Layout;
