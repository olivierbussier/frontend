import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  // const dispatch = useDispatch()
  const auth = useSelector(state => state.auth.authState);

  if (auth !== "logged") {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};
