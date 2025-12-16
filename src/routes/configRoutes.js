import LayoutAdmin from "../Layouts/LayoutAdmin";
import LayoutUser from "../Layouts/LayoutUser";
import { adminRoutes } from "./adminRoutes";
import { publicRoutes } from "./publicRoutes";
import { userRoutes } from "./userRoutes";

export const configRoutes = [
  {
    role: "public",
    layout: null,
    routes: publicRoutes, // 👈 bien "routes" au pluriel
  },

  {
    role: "admin",
    layout: LayoutAdmin,
    routes: adminRoutes
  },

  {
    role: "user",
    layout: LayoutUser,
    routes: userRoutes
  }

];
