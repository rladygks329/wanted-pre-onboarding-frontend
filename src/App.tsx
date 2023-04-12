import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ToDo from './pages/ToDo';
import AuthRoute from './routers/AuthRoute';
import NonAuthRoute from './routers/NonAuthRoute';
import styled from 'styled-components';
import a from './assets/background.jpg';

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
  height: 100vh;
  background-image: url(${a});
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
`;

export default App;
