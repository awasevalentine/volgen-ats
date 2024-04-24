import { useNavigate } from "react-router-dom";
import useAuthHelper from "./auth/authHelper";

const AdminAuthGuard = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthHelper();

  if (!isAuthenticated()) {
    navigate("/");
    return null; // Return null or another component if needed
  }

  return <>{children}</>;
};

export default AdminAuthGuard;
