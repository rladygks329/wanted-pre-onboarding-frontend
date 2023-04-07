import HttpClient from './HttpClient';
import TokenRepository from '../TokenRepository';

interface LoginService {
  httpClient: HttpClient;
  tokenRepo: TokenRepository;
  login(email: string, password: string): Promise<void>;
  signup(email: string, password: string): Promise<void>;
}

export default LoginService;
