// src/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { configRoutes } from "./configRoutes";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => (
  <Routes>
    {configRoutes.map(({ role, layout: Layout, routes }, i) => {
      // === Routes publiques ===
      if (role === "public") {
        return routes.map(({ path, index, element }, j) => (
          <Route
            key={`${i}-${j}`}
            path={path}
            index={index}
            element={element}
          />
        ));
      }

      // === Routes protégées ===
      return (
        <Route element={<ProtectedRoutes allowedRoles={[role]} />}>
          <Route element={<Layout />}>
            {routes.map(({ path, element }, j) => (
              <Route key={`${i}-${j}`} path={path} element={element} />
            ))}
          </Route>
        </Route>
      );
    })}

    {/* Page 404 si besoin */}
    {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
);

export default AppRoutes;
