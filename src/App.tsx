import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ToDo from './pages/ToDo';
import AuthRoute from './routers/AuthRoute';
import NonAuthRoute from './routers/NonAuthRoute';
import { Header } from './components/Header';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 1rem;
`;

export default App;
