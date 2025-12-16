import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ allowedRoles, children }) => {
  const { accessToken, role } = useSelector((state) => state.auth);

  if (!accessToken) return <Navigate to={"/login"} />;

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to={"/unauthorized"} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
