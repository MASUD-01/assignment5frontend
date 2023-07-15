import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

interface IProps {
  children: React.ReactNode;
}
export default function PrivatesRoutes({ children }: IProps) {
  const { pathname } = useLocation();
  console.log(pathname, "pathname");
  const { user, isLoading } = useAppSelector((state) => state.user);
  if (isLoading) {
    return <p>loading...</p>;
  }

  if (!user.email && !isLoading) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }
  return children;
}
