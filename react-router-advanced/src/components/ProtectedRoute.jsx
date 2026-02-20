import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {

  const isAuth = localStorage.getItem("isAuth");

  return isAuth ? <Outlet /> : <Navigate to="/login" />;

}

export default ProtectedRoute;