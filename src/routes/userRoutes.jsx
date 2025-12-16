import Cours from "../pages/users/cours/Cours";
import DashboardUser from "../pages/users/DashboardUser";
import ProfileUser from "../pages/users/profile/ProfileUser";
import Progression from "../pages/users/Progression";

export const userRoutes = [
  { path: "dashboardUser", element: <DashboardUser /> },
  { path: "profile/user/", element: <ProfileUser /> },
  { path: "progression/user/", element: <Progression /> },
  { path: "cours/user/", element: <Cours /> },
];
