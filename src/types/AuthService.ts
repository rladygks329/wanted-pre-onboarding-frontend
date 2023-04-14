import HttpClient from './HttpClient';
import TokenRepository from '../services/TokenRepository';

interface AuthService {
  httpClient: HttpClient;
  tokenRepo: TokenRepository;

  signin(email: string, password: string): Promise<void>;
  signup(email: string, password: string): Promise<void>;
}

export default AuthService;
