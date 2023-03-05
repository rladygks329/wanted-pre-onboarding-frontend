import { Navigate, Outlet } from 'react-router-dom';

const NonAuthRoute = () => {
  return localStorage.getItem('access_token') ? (
    <Navigate to='/todo' />
  ) : (
    <Outlet />
  );
};

export default NonAuthRoute;
