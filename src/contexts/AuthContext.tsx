import { createContext, useContext } from 'react';
import AuthService from '../types/AuthService';

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({
  children,
  authService,
}: {
  children: React.ReactNode;
  authService: AuthService;
}) {
  const signin = authService.signin.bind(authService);
  const signup = authService.signup.bind(authService);

  return (
    <AuthContext.Provider value={{ signin, signup }}>
      {children}
    </AuthContext.Provider>
  );
}
