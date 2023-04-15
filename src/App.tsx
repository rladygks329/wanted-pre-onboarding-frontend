import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import TodoPage from './pages/TodoPage';
import AuthRoute from './routers/AuthRoute';
import NonAuthRoute from './routers/NonAuthRoute';
import styled from 'styled-components';
import bg from './assets/background.jpg';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <BackGround />
      <Wrapper>
        <Navbar />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <Routes>
            <Route path='/*' element={<Navigate to='/todo' />} />

            <Route element={<AuthRoute />}>
              <Route path='/todo' element={<TodoPage />} />
            </Route>
            <Route element={<NonAuthRoute />}>
              <Route path='/signup' element={<SignUpPage />} />
              <Route path='/signin' element={<SignInPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </>
  );
}

const BackGround = styled.div`
  ::after {
  }
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  opacity: 0.5;
  background-image: url(${bg});
  z-index: -1;
`;

const Wrapper = styled.div`
  height: 100vh;
  z-index: 1;
  width: 80%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
`;

export default App;
