import { publicRoutes } from "./publicRoutes";

export const configRoutes = [
  {
    role: "public",
    layout: null,
    routes: publicRoutes, // 👈 bien "routes" au pluriel
  },
];
