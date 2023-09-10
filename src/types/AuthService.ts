import HttpClient from './HttpClient';
import TokenRepository from '../services/TokenRepository';

interface AuthService {
  httpClient: HttpClient;
  tokenRepo: TokenRepository;

  signIn(email: string, password: string): Promise<void>;
  signUp(email: string, password: string): Promise<void>;
  signOff(): Promise<void>;
}

export default AuthService;
