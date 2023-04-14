import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import AuthServiceImpl from './services/AuthServiceImpl';
import { TodoProvider } from './contexts/TodoContext';
import TokenRepository from './services/TokenRepository';
import HttpClientImpl from './services/HttpClientImpl';
import { TodoServiceImpl } from './services/TodoServiceImpl';
import { ACCESS_TOKEN_KEY, BASE_URL } from './utils/constants';
import { Provider } from 'react-redux';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import store from './reudx/store';
const GlobalStyles = createGlobalStyle`
    ${reset};
`;

const tokenRepository = new TokenRepository(localStorage, ACCESS_TOKEN_KEY);
const http = new HttpClientImpl(BASE_URL, tokenRepository);
const authService = new AuthServiceImpl(tokenRepository, http);
const todoService = new TodoServiceImpl(http);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <Provider store={store}>
        <AuthProvider authService={authService}>
          <TodoProvider todoService={todoService}>
            <App />
          </TodoProvider>
        </AuthProvider>
      </Provider>
    </>
  </React.StrictMode>
);
