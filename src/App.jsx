import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ToDo from './pages/ToDo';
import AuthRoute from './routers/AuthRoute';
import NonAuthRoute from './routers/NonAuthRoute';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/*' element={<Navigate to='/todo' />} />

        <Route element={<AuthRoute />}>
          <Route path='/todo' element={<ToDo />} />
        </Route>
        <Route element={<NonAuthRoute />}>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
