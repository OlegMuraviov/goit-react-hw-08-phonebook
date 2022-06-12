import useLogin from '../hooks/useLogin';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isLogin = useLogin();
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export default PrivateRoute;
