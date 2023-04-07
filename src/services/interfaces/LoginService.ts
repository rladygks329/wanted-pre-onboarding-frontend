import HttpClient from './HttpClient';
import TokenRepository from '../TokenRepository';

interface LoginService {
  httpClient: HttpClient;
  tokenRepo: TokenRepository;
  login(): Promise<void>;
  signup(): Promise<void>;
}

export default LoginService;
