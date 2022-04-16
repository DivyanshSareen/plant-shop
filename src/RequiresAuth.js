import { Navigate } from "react-router-dom";
import { useAuth } from "./context/auth-context";

const RequiresAuth = ({ children }) => {
  const { authState } = useAuth();
  return authState.isLoggedIn ? children : <Navigate to='/login' replace />;
};

export default RequiresAuth;
