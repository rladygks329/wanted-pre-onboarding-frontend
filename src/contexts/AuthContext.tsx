import { createContext, useContext } from 'react';
import AuthService from '../types/AuthService';

const AuthContext = createContext({
  signIn: async (email: string, password: string) => {
    return;
  },

  signUp: async (email: string, password: string) => {
    return;
  },
});
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({
  children,
  authService,
}: {
  children: React.ReactNode;
  authService: AuthService;
}) {
  const signIn = authService.signIn.bind(authService);
  const signUp = authService.signUp.bind(authService);

  return (
    <AuthContext.Provider value={{ signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
