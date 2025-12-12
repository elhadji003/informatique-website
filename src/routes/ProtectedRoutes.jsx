import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ allowedRole, children }) => {
  const { accessToken, role } = useSelector((state) => state.auth.user);

  if (!accessToken) return <Navigate to={"/login"} />;

  if (allowedRole && !allowedRole.include(role)) {
    return <Navigate to={"/unauthorized"} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
