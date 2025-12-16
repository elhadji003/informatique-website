import React from "react";
import { Outlet } from "react-router-dom";

export default function LayoutAdmin() {
  return (
    <div>
      <h1>Layout Admin</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
