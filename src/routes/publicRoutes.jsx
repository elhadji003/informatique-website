import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPwd from "../pages/auth/ForgotPwd";
import ResetPwd from "../pages/auth/ResetPwd";

export const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "forgot/pwd", element: <ForgotPwd /> },
  { path: "reset/password/:uid/:token", element: <ResetPwd /> },
];
