import { Navigate, Outlet } from 'react-router-dom';
import { ACCESS_TOKEN_KEY } from '../utils/constants';
const AuthRoute = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY) ? (
    <Outlet />
  ) : (
    <Navigate to='/signin' />
  );
};

export default AuthRoute;
