import useLogin from '../hooks/useLogin';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isLogin = useLogin();
  if (isLogin) {
    return <Navigate replace to="/phonebook" />;
  }
  return <Outlet />;
};
export default PrivateRoute;
