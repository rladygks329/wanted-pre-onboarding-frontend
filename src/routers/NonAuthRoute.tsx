import { Navigate, Outlet } from 'react-router-dom';
import { ACCESS_TOKEN_KEY } from '../utils/constants';

const NonAuthRoute = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY) ? (
    <Navigate to='/todo' />
  ) : (
    <Outlet />
  );
};

export default NonAuthRoute;
