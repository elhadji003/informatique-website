import BureautiqueRouter from "../components/bureautique/BureautiqueRouter";
import Cours from "../pages/users/cours/Cours";
import DashboardUser from "../pages/users/DashboardUser";
import Messages from "../pages/users/Messages";
import ProfileUser from "../pages/users/profile/ProfileUser";
import Progression from "../pages/users/Progression";

export const userRoutes = [
  { path: "dashboardUser", element: <DashboardUser /> },
  { path: "profile/user/", element: <ProfileUser /> },
  { path: "progression/user/", element: <Progression /> },
  { path: "cours/user/", element: <Cours /> },
  { path: "messages/user/", element: <Messages /> },
  { path: "cours/bureautique/:id", element: <BureautiqueRouter /> },
];
