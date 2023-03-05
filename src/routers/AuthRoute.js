import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
  return localStorage.getItem('access_token') ? (
    <Outlet />
  ) : (
    <Navigate to='/signin' />
  );
};

export default AuthRoute;
