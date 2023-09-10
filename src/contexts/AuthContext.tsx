import { createContext, useContext, useState } from 'react';
import AuthService from '../types/AuthService';

const AuthContext = createContext({
  signIn: async (email: string, password: string) => {
    return;
  },

  signUp: async (email: string, password: string) => {
    return;
  },

  signOff: async () => {
    return;
  },
  isLoggedIn: false,
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({
  children,
  authService,
}: {
  children: React.ReactNode;
  authService: AuthService;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = async (email: string, password: string) => {
    await authService.signIn(email, password);
    setIsLoggedIn(authService.tokenRepo.get() !== '');
    return;
  };
  const signUp = authService.signUp.bind(authService);

  const signOff = async () => {
    await authService.signOff();
    setIsLoggedIn(authService.tokenRepo.get() !== '');
  };

  return (
    <AuthContext.Provider value={{ signIn, signUp, signOff, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
